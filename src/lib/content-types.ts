// Content categories for the new pillar system
export type ContentCategory =
  | 'comparison'
  | 'cost-guide'
  | 'best-of'
  | 'industry-guide'
  | 'alternatives'
  | 'glossary'
  | 'tool'
  | 'location';

export type ContentPillar =
  | 'comparisons'
  | 'cost-guides'
  | 'best-of'
  | 'industry-guides'
  | 'alternatives'
  | 'glossary'
  | 'tools'
  | 'locations';

export type SchemaType =
  | 'Article'
  | 'FAQ'
  | 'HowTo'
  | 'ItemList'
  | 'LocalBusiness'
  | 'Service'
  | 'DefinedTerm';

// Base interface for all new content
export interface ContentMeta {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  modifiedDate: string;
  author: string;
  category: ContentCategory;
  tags: string[];
  featuredImage: string;
  featuredImageAlt: string;
  readingTime: number;
  content: string;
  // SEO
  metaTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  schema: SchemaType[];
  // Internal linking
  relatedSlugs: string[];
  pillar: ContentPillar;
}

// FAQ item used across multiple content types
export interface FAQItem {
  question: string;
  answer: string;
}

// Comparison-specific
export interface ComparisonRow {
  feature: string;
  platformA: string;
  platformB: string;
}

export interface PlatformInfo {
  name: string;
  logo: string;
  url: string;
}

export interface ComparisonPost extends ContentMeta {
  category: 'comparison';
  pillar: 'comparisons';
  platformA: PlatformInfo;
  platformB: PlatformInfo;
  verdict: string;
  comparisonTable: ComparisonRow[];
  faq: FAQItem[];
}

// Cost guide specific
export interface CostGuidePost extends ContentMeta {
  category: 'cost-guide';
  pillar: 'cost-guides';
  priceRange: { low: number; mid: number; high: number };
  factors: string[];
  faq: FAQItem[];
}

// Best-of roundup specific
export interface ToolEntry {
  name: string;
  description: string;
  url: string;
  pricing: string;
  pros: string[];
  cons: string[];
  bestFor: string;
}

export interface BestOfPost extends ContentMeta {
  category: 'best-of';
  pillar: 'best-of';
  tools: ToolEntry[];
  faq: FAQItem[];
}

// Industry guide specific
export interface IndustryGuidePost extends ContentMeta {
  category: 'industry-guide';
  pillar: 'industry-guides';
  industry: string;
  faq: FAQItem[];
}

// Alternatives specific
export interface AlternativesPost extends ContentMeta {
  category: 'alternatives';
  pillar: 'alternatives';
  originalTool: PlatformInfo;
  alternatives: ToolEntry[];
  faq: FAQItem[];
}

// Glossary specific
export interface GlossaryTerm extends ContentMeta {
  category: 'glossary';
  pillar: 'glossary';
  term: string;
  shortDefinition: string;
  relatedTerms: string[];
}

// Union type for any content post
export type ContentPost =
  | ComparisonPost
  | CostGuidePost
  | BestOfPost
  | IndustryGuidePost
  | AlternativesPost
  | GlossaryTerm;
