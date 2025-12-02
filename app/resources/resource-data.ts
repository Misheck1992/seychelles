// Resource data with detailed information for each resource type
import { reliefWebScrapedData } from '@/lib/reliefweb-scraped-data';

const resourceData = {
  'infographics': {
    name: 'Infographics',
    title: 'Disaster Infographics',
    description: 'Visual guides and infographics to help understand disaster risks, preparedness measures, and response protocols. These easy-to-understand visual resources are designed to communicate complex information in a clear and accessible format.',
    count: '10',
    formats: 'Infographic',
    languages: 'English',
    accessLevel: 'Public',
    featuredImage: '/img/resources/infographics-banner.jpg',
    resourceItems: reliefWebScrapedData.infographics
  },
  'documents': {
    name: 'Documents',
    title: 'Disaster Management Documents',
    description: 'Official documents, reports, plans, and strategies related to disaster management in Seychelles. These resources include comprehensive disaster response plans, policy documents, research papers, and technical reports.',
    count: '10',
    formats: 'PDF',
    languages: 'English',
    accessLevel: 'Public',
    featuredImage: '/img/resources/documents-banner.jpg',
    resourceItems: reliefWebScrapedData.documents
  },
  'maps': {
    name: 'Maps',
    title: 'Disaster Risk Maps',
    description: 'Interactive and static maps showing disaster risk zones, evacuation routes, emergency facilities, and historical disaster data across Seychelles. These maps help visualize risk areas and plan appropriate mitigation measures.',
    count: '10',
    formats: 'Map',
    languages: 'English',
    accessLevel: 'Public',
    featuredImage: '/img/resources/maps-banner.jpg',
    resourceItems: reliefWebScrapedData.maps
  },
  'forms': {
    name: 'Forms',
    title: 'Disaster Management Forms',
    description: 'Official forms for disaster reporting, damage assessment, relief requests, and volunteer registration. These standardized forms help streamline the collection of critical information during and after disaster events.',
    count: '15',
    formats: 'PDF, DOCX, Online',
    languages: 'English, French',
    accessLevel: 'Public',
    featuredImage: '/img/resources/forms-banner.jpg',
    resourceItems: [
      {
        id: 1,
        title: 'Disaster Damage Assessment Form',
        description: 'Form for assessing and reporting property damage after disaster events.',
        thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop',
        url: '#',
        format: 'PDF',
        size: '1.2 MB',
        date: 'April 5, 2025',
        category: 'Assessment',
        tags: ['Damage Assessment', 'Reporting', 'Property']
      },
      {
        id: 2,
        title: 'Emergency Relief Request Form',
        description: 'Form for requesting emergency supplies, shelter, or assistance following a disaster.',
        thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop',
        url: '#',
        format: 'PDF',
        size: '0.9 MB',
        date: 'March 25, 2025',
        category: 'Relief',
        tags: ['Relief', 'Assistance', 'Request']
      },
      {
        id: 3,
        title: 'Volunteer Registration Form',
        description: 'Registration form for individuals interested in volunteering for disaster response efforts.',
        thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
        url: '#',
        format: 'DOCX',
        size: '1.1 MB',
        date: 'February 20, 2025',
        category: 'Volunteer',
        tags: ['Volunteer', 'Registration', 'Community']
      },
      {
        id: 4,
        title: 'Incident Reporting Form',
        description: 'Form for reporting disaster incidents, hazards, or emergency situations.',
        thumbnail: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
        url: '#',
        format: 'Online',
        size: 'N/A',
        date: 'January 15, 2025',
        category: 'Reporting',
        tags: ['Incident', 'Reporting', 'Emergency']
      }
    ]
  },
  'manuals': {
    name: 'Manuals',
    title: 'Disaster Management Manuals',
    description: 'Comprehensive manuals and guides for disaster preparedness, response, and recovery operations. These detailed resources provide step-by-step instructions for various disaster management activities.',
    count: '10',
    formats: 'Manual',
    languages: 'English',
    accessLevel: 'Public',
    featuredImage: '/img/resources/manuals-banner.jpg',
    resourceItems: reliefWebScrapedData.manuals
  }
};

// Define resource data type
export type ResourceKey = keyof typeof resourceData;
export type ResourceDataType = typeof resourceData[ResourceKey];

export default resourceData;
