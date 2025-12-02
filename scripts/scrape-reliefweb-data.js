// One-time script to scrape ReliefWeb data for Seychelles
// Run with: node scripts/scrape-reliefweb-data.js

const fs = require('fs');
const path = require('path');

const RELIEFWEB_API_BASE = 'https://api.reliefweb.int/v2';
const APP_NAME = 'rwint-user-0'; // Default test appname
const LIMIT_PER_TYPE = 10; // Fetch 10 documents per resource type

/**
 * Format file size from bytes to human-readable format
 */
function formatFileSize(bytes) {
  if (!bytes || bytes === 0) return 'N/A';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Format date to readable format
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

/**
 * Map ReliefWeb report to application resource item
 */
function mapReportToResourceItem(report, index) {
  const fields = report.fields;
  const file = fields.file?.[0];
  const format = fields.format?.[0]?.name || 'Document';
  const source = fields.source?.[0]?.name || 'Unknown';
  const country = fields.primary_country?.name || fields.country?.[0]?.name || '';
  
  // Extract description from body (first 200 chars)
  const description = fields.body 
    ? fields.body.substring(0, 200).replace(/\n/g, ' ').trim() + '...'
    : fields.body_html
    ? fields.body_html.replace(/<[^>]*>/g, '').substring(0, 200).trim() + '...'
    : 'No description available';

  // Determine category based on format and theme
  const theme = fields.theme?.[0]?.name || '';
  const category = theme || format;

  // Extract tags from themes and disaster types
  const tags = [
    ...(fields.theme?.map(t => t.name) || []),
    ...(fields.disaster_type?.map(dt => dt.name) || [])
  ].slice(0, 5); // Limit to 5 tags

  return {
    id: fields.id,
    title: fields.title,
    description,
    thumbnail: file?.preview?.url_small || file?.preview?.url || '/img/resources/default-thumbnail.jpg',
    url: fields.url,
    format,
    size: file ? formatFileSize(file.filesize) : 'N/A',
    date: formatDate(fields.date.created),
    category,
    tags,
    source,
    country
  };
}

/**
 * Fetch reports from ReliefWeb API
 */
async function fetchReliefWebReports(formatFilter, limit = LIMIT_PER_TYPE) {
  // Build filter - if formatFilter has conditions, use it directly, otherwise wrap it
  let filter;
  if (formatFilter.operator === 'OR') {
    // For OR conditions (multiple formats)
    filter = {
      operator: 'AND',
      conditions: [
        {
          field: 'country.iso3',
          value: 'SYC'
        },
        formatFilter
      ]
    };
  } else {
    // For single format
    filter = {
      operator: 'AND',
      conditions: [
        {
          field: 'country.iso3',
          value: 'SYC'
        },
        {
          field: formatFilter.field,
          value: formatFilter.value
        }
      ]
    };
  }

  const requestBody = {
    limit: limit,
    offset: 0,
    fields: {
      include: [
        'id',
        'url',
        'title',
        'body',
        'body-html',
        'date',
        'country',
        'primary_country',
        'source',
        'format',
        'theme',
        'disaster',
        'disaster_type',
        'language',
        'file'
      ]
    },
    sort: ['date.created:desc'],
    filter: filter
  };

  // Add appname as query parameter
  const url = `${RELIEFWEB_API_BASE}/reports?appname=${APP_NAME}`;

  try {
    const formatName = Array.isArray(formatFilter.value) ? formatFilter.value.join(', ') : formatFilter.value;
    console.log(`Fetching from ReliefWeb: ${formatName}...`);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`  API Response: ${errorText}`);
      throw new Error(`ReliefWeb API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`  ✓ Found ${data.count} items`);
    return data.data.map(mapReportToResourceItem);
  } catch (error) {
    console.error(`  ✗ Error:`, error.message);
    return [];
  }
}

/**
 * Main scraping function
 */
async function scrapeReliefWebData() {
  console.log('Starting ReliefWeb data scraping for Seychelles...\n');

  const resourceTypes = [
    { key: 'infographics', filter: { field: 'format.name', value: 'Infographic' } },
    { key: 'maps', filter: { field: 'format.name', value: 'Map' } },
    { key: 'documents', filter: { field: 'format.name', value: ['Situation Report', 'Assessment', 'News and Press Release'], operator: 'OR' } },
    { key: 'manuals', filter: { field: 'format.name', value: 'Manual and Guideline' } }
  ];

  const scrapedData = {};

  for (const resourceType of resourceTypes) {
    const items = await fetchReliefWebReports(resourceType.filter, LIMIT_PER_TYPE);
    scrapedData[resourceType.key] = items;

    // Add delay to respect API rate limits
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  return scrapedData;
}

/**
 * Save scraped data to TypeScript file
 */
function saveToTypeScriptFile(data) {
  const outputPath = path.join(__dirname, '..', 'lib', 'reliefweb-scraped-data.ts');

  let tsContent = `// Scraped ReliefWeb data for Seychelles
// Generated on: ${new Date().toISOString()}
// Source: ReliefWeb API (https://api.reliefweb.int/)

export interface ScrapedResourceItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  format: string;
  size: string;
  date: string;
  category: string;
  tags: string[];
  source?: string;
  country?: string;
}

export interface ScrapedReliefWebData {
  infographics: ScrapedResourceItem[];
  maps: ScrapedResourceItem[];
  documents: ScrapedResourceItem[];
  manuals: ScrapedResourceItem[];
}

export const reliefWebScrapedData: ScrapedReliefWebData = ${JSON.stringify(data, null, 2)};

export default reliefWebScrapedData;
`;

  fs.writeFileSync(outputPath, tsContent, 'utf8');
  console.log(`\n✓ Data saved to: ${outputPath}`);
}

/**
 * Run the scraper
 */
async function main() {
  try {
    const scrapedData = await scrapeReliefWebData();

    console.log('\n=== Scraping Summary ===');
    console.log(`Infographics: ${scrapedData.infographics.length} items`);
    console.log(`Maps: ${scrapedData.maps.length} items`);
    console.log(`Documents: ${scrapedData.documents.length} items`);
    console.log(`Manuals: ${scrapedData.manuals.length} items`);
    console.log(`Total: ${Object.values(scrapedData).flat().length} items`);

    saveToTypeScriptFile(scrapedData);

    console.log('\n✓ Scraping completed successfully!');
  } catch (error) {
    console.error('\n✗ Scraping failed:', error);
    process.exit(1);
  }
}

// Run the script
main();


