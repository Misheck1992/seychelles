// TypeScript interfaces for ReliefWeb API responses
// Based on ReliefWeb API v2 documentation: https://apidoc.reliefweb.int/

/**
 * Base response structure from ReliefWeb API
 */
export interface ReliefWebResponse<T> {
  time: number;
  href: string;
  links?: {
    self: { href: string };
    next?: { href: string };
    prev?: { href: string };
  };
  took: number;
  totalCount: number;
  count: number;
  data: T[];
}

/**
 * Report/Document from ReliefWeb
 */
export interface ReliefWebReport {
  id: string;
  score: number;
  href: string;
  fields: {
    id: number;
    url: string;
    url_alias?: string;
    title: string;
    body?: string;
    body_html?: string;
    date: {
      created: string;
      changed: string;
      original?: string;
    };
    country?: Array<{
      id: number;
      name: string;
      shortname?: string;
      iso3: string;
    }>;
    primary_country?: {
      id: number;
      name: string;
      shortname?: string;
      iso3: string;
    };
    source?: Array<{
      id: number;
      name: string;
      shortname?: string;
      longname?: string;
      homepage?: string;
      type?: {
        id: number;
        name: string;
      };
    }>;
    format?: Array<{
      id: number;
      name: string;
    }>;
    theme?: Array<{
      id: number;
      name: string;
    }>;
    disaster?: Array<{
      id: number;
      name: string;
      status?: string;
      glide?: string;
    }>;
    disaster_type?: Array<{
      id: number;
      name: string;
      code?: string;
    }>;
    language?: Array<{
      id: number;
      name: string;
      code: string;
    }>;
    file?: Array<{
      id: number;
      description?: string;
      filename: string;
      filesize: number;
      mimetype: string;
      url: string;
      preview?: {
        url: string;
        url_large?: string;
        url_small?: string;
      };
    }>;
  };
}

/**
 * Filter options for ReliefWeb API requests
 */
export interface ReliefWebFilter {
  field: string;
  value?: string | number | string[] | number[] | { from?: string | number; to?: string | number };
  operator?: 'AND' | 'OR';
  negate?: boolean;
  conditions?: ReliefWebFilter[];
}

/**
 * Query options for ReliefWeb API requests
 */
export interface ReliefWebQuery {
  value: string;
  fields?: string[];
  operator?: 'AND' | 'OR';
}

/**
 * Request parameters for ReliefWeb API
 */
export interface ReliefWebRequestParams {
  appname: string;
  limit?: number;
  offset?: number;
  preset?: string;
  profile?: string;
  fields?: {
    include?: string[];
    exclude?: string[];
  };
  filter?: ReliefWebFilter;
  query?: ReliefWebQuery;
  sort?: string[];
}

/**
 * Resource format types
 */
export type ResourceFormat = 'Map' | 'Infographic' | 'News and Press Release' | 'Situation Report' | 
  'Assessment' | 'Appeal' | 'Manual and Guideline' | 'Policy and Guidance' | 'Other';

/**
 * Mapped resource item for application use
 */
export interface MappedResourceItem {
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
  fileUrl?: string;
  previewUrl?: string;
}

