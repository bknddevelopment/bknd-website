# Road to 37K+ Keywords — Domination Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Take bknddevelopment.com from 6 ranked keywords to 37,000+ — surpassing Thrive Agency as the highest-ranking digital marketing agency in organic search.

**Architecture:** Massive content production (750+ pages) across 9 content pillars, built on a scalable Next.js content system with programmatic page generation, dynamic sitemaps, structured data, and aggressive indexing infrastructure. Phases: (1) Build the content engine, (2) Publish at scale, (3) Optimize and compound.

**Tech Stack:** Next.js 16 (App Router, static export), TypeScript, Tailwind CSS 4, pnpm, Vercel deployment

---

## The Numbers

| Metric | BKND Today | Thrive Agency | Our Target |
|--------|-----------|---------------|------------|
| Total keywords | 6 | 37,226 | 40,000+ |
| Page 1 rankings | 0 | 13,910 | 15,000+ |
| #1 positions | 0 | 1,827 | 2,000+ |
| ETV ($/month) | $4.64 | $813,193 | $900,000+ |
| Total pages | ~40 | ~500+ | 750+ |

## Content Pillars — 750+ Pages

| # | Pillar | Pages | Est. Keywords per Page | Est. Total Keywords |
|---|--------|-------|----------------------|-------------------|
| 1 | Platform Comparisons ("X vs Y") | 75 | 80-150 | 6,000-11,250 |
| 2 | Cost & Pricing Guides | 40 | 100-200 | 4,000-8,000 |
| 3 | Location Pages (Programmatic) | 300 | 20-50 | 6,000-15,000 |
| 4 | "Best X for Y" Roundups | 60 | 80-150 | 4,800-9,000 |
| 5 | Industry Marketing Guides | 30 | 60-120 | 1,800-3,600 |
| 6 | Tool Alternatives Posts | 40 | 80-150 | 3,200-6,000 |
| 7 | Glossary / Definition Pages (Programmatic) | 150 | 10-30 | 1,500-4,500 |
| 8 | Service x Industry Landing Pages (Programmatic) | 50 | 30-60 | 1,500-3,000 |
| 9 | Interactive Tools & Calculators | 10 | 200-500 | 2,000-5,000 |
| | **TOTAL** | **755** | | **30,800-65,350** |

## Timeline

| Phase | Weeks | Focus | Keyword Target |
|-------|-------|-------|----------------|
| **Phase 1: Engine** | Weeks 1-2 | Build content system, templates, programmatic generators, SEO infrastructure | 0 (building) |
| **Phase 2: First Wave** | Weeks 3-6 | Publish 250 pages (comparisons, cost guides, first 100 locations, glossary) | 2,000-5,000 |
| **Phase 3: Scale Wave** | Weeks 7-12 | Publish 300 more pages (roundups, alternatives, remaining locations, industry pages) | 8,000-15,000 |
| **Phase 4: Authority Wave** | Weeks 13-20 | Publish remaining pages, interactive tools, backlink campaign, optimization | 20,000-30,000 |
| **Phase 5: Domination** | Weeks 21-30 | Content refresh, gap analysis, double down on winners, surpass 37K | 37,000+ |

---

## Phase 1: Build the Content Engine (Weeks 1-2)

### Task 1: Scalable Content Directory Structure

**Files:**
- Create: `src/content/comparisons/` (directory)
- Create: `src/content/cost-guides/` (directory)
- Create: `src/content/best-of/` (directory)
- Create: `src/content/industry-guides/` (directory)
- Create: `src/content/alternatives/` (directory)
- Create: `src/content/glossary/` (directory)
- Create: `src/content/tools/` (directory)
- Create: `src/lib/content.ts` (content loader)
- Modify: `src/lib/blog.ts` (integrate with new system)

The current content system has a monolithic `blog.ts` (~8K lines) and individual post files in `src/lib/posts/`. This does not scale to 750+ pages. We need a content directory with a universal loader.

- [ ] **Step 1: Create content directory structure**

```
src/content/
├── comparisons/          # "X vs Y" articles
│   ├── _template.ts      # Shared template/schema for comparisons
│   └── wix-vs-squarespace.ts
├── cost-guides/          # "How much does X cost" articles
│   ├── _template.ts
│   └── google-ads-cost.ts
├── best-of/              # "Best X for Y" roundups
│   ├── _template.ts
│   └── best-crm-small-business.ts
├── industry-guides/      # "[Industry] marketing ideas"
│   ├── _template.ts
│   └── law-firm-marketing.ts
├── alternatives/         # "Alternatives to X"
│   ├── _template.ts
│   └── canva-alternatives.ts
├── glossary/             # Definition pages
│   ├── _template.ts
│   └── terms.ts          # All glossary terms as data
└── tools/                # Interactive calculators
    └── website-cost-calculator/
```

- [ ] **Step 2: Create universal content type system**

Create `src/lib/content-types.ts` with shared TypeScript interfaces:

```typescript
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
  // SEO
  metaTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  schema: SchemaType[];
  // Internal linking
  relatedSlugs: string[];
  pillar: ContentPillar;
}

export type ContentCategory =
  | 'comparison'
  | 'cost-guide'
  | 'best-of'
  | 'industry-guide'
  | 'alternatives'
  | 'glossary'
  | 'tool'
  | 'service-location'
  | 'blog';

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

export interface ComparisonPost extends ContentMeta {
  category: 'comparison';
  platformA: { name: string; logo: string; url: string };
  platformB: { name: string; logo: string; url: string };
  verdict: string;
  comparisonTable: ComparisonRow[];
  faq: FAQItem[];
}

export interface CostGuidePost extends ContentMeta {
  category: 'cost-guide';
  priceRange: { low: number; mid: number; high: number };
  factors: string[];
  faq: FAQItem[];
}

export interface BestOfPost extends ContentMeta {
  category: 'best-of';
  tools: ToolEntry[];
  faq: FAQItem[];
}

export interface AlternativesPost extends ContentMeta {
  category: 'alternatives';
  originalTool: { name: string; logo: string; url: string };
  alternatives: ToolEntry[];
  faq: FAQItem[];
}

export interface GlossaryTerm extends ContentMeta {
  category: 'glossary';
  term: string;
  shortDefinition: string;
  relatedTerms: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ComparisonRow {
  feature: string;
  platformA: string;
  platformB: string;
}

export interface ToolEntry {
  name: string;
  description: string;
  url: string;
  pricing: string;
  pros: string[];
  cons: string[];
  bestFor: string;
}
```

- [ ] **Step 3: Create content loader**

Create `src/lib/content.ts` — a universal content loader that reads from all content directories:

```typescript
import type { ContentMeta, ContentCategory } from './content-types';

// Import all content modules dynamically
export async function getAllContent(): Promise<ContentMeta[]> { ... }
export async function getContentByCategory(category: ContentCategory): Promise<ContentMeta[]> { ... }
export async function getContentBySlug(category: ContentCategory, slug: string): Promise<ContentMeta | null> { ... }
export async function getRelatedContent(post: ContentMeta, limit?: number): Promise<ContentMeta[]> { ... }
export function getAllSlugs(): { category: ContentCategory; slug: string }[] { ... }
```

Since this is a static export, all content is imported at build time. The loader aggregates content from all directories and provides filtering/lookup functions.

- [ ] **Step 4: Verify content loader works with existing blog posts**

Ensure backward compatibility — existing blog posts at `/blog/[slug]` and marketing posts at `/marketing/[slug]` continue working. The new content system adds new routes without breaking existing ones.

- [ ] **Step 5: Commit**

```bash
git add src/content/ src/lib/content-types.ts src/lib/content.ts
git commit -m "feat: add scalable content directory structure and type system"
```

---

### Task 2: Dynamic Route Generation for All Content Types

**Files:**
- Create: `src/app/compare/[slug]/page.tsx` (comparison articles)
- Create: `src/app/compare/page.tsx` (comparison hub)
- Create: `src/app/cost/[slug]/page.tsx` (cost guides)
- Create: `src/app/cost/page.tsx` (cost hub)
- Create: `src/app/best/[slug]/page.tsx` (best-of roundups)
- Create: `src/app/best/page.tsx` (best-of hub)
- Create: `src/app/alternatives/[slug]/page.tsx` (alternatives posts)
- Create: `src/app/alternatives/page.tsx` (alternatives hub)
- Create: `src/app/glossary/[slug]/page.tsx` (glossary terms)
- Create: `src/app/glossary/page.tsx` (glossary index)
- Create: `src/app/tools/[slug]/page.tsx` (interactive tools)
- Create: `src/app/tools/page.tsx` (tools hub)
- Modify: `src/app/industries/[slug]/page.tsx` (add new industries)
- Modify: `src/app/locations/[slug]/page.tsx` (expand location pages)

Each content type gets its own URL structure for clean topical signals:

| Content Type | URL Pattern | Example |
|-------------|-------------|---------|
| Comparisons | `/compare/[slug]` | `/compare/wix-vs-squarespace` |
| Cost Guides | `/cost/[slug]` | `/cost/google-ads` |
| Best-Of | `/best/[slug]` | `/best/crm-small-business` |
| Alternatives | `/alternatives/[slug]` | `/alternatives/canva` |
| Glossary | `/glossary/[slug]` | `/glossary/seo` |
| Tools | `/tools/[slug]` | `/tools/website-cost-calculator` |
| Industry Guides | `/industries/[slug]` | `/industries/law-firm-marketing` |
| Location Pages | `/locations/[slug]` | `/locations/miami` |

- [ ] **Step 1: Create comparison article route with `generateStaticParams`**

```typescript
// src/app/compare/[slug]/page.tsx
import { getContentByCategory } from '@/lib/content';
import { ComparisonTemplate } from '@/components/templates/ComparisonTemplate';

export async function generateStaticParams() {
  const posts = await getContentByCategory('comparison');
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function ComparisonPage({ params }: { params: { slug: string } }) {
  const post = await getContentBySlug('comparison', params.slug);
  if (!post) return notFound();
  return <ComparisonTemplate post={post} />;
}
```

- [ ] **Step 2: Repeat for all 7 other content types** (cost, best-of, alternatives, glossary, tools, industries, locations)

Each follows the same pattern: `generateStaticParams` + template component.

- [ ] **Step 3: Create hub pages for each content type**

Each hub page (e.g., `/compare`) lists all articles in that pillar with:
- H1 targeting the pillar's head keyword
- Card grid of all articles with title, excerpt, featured image
- Internal links to every article in the pillar
- Schema markup (ItemList)

- [ ] **Step 4: Build and verify all routes generate correctly**

```bash
pnpm build
```

Verify the build output shows all expected static pages.

- [ ] **Step 5: Commit**

```bash
git add src/app/compare/ src/app/cost/ src/app/best/ src/app/alternatives/ src/app/glossary/ src/app/tools/
git commit -m "feat: add dynamic routes for all 8 content types"
```

---

### Task 3: Content Templates (Reusable Components)

**Files:**
- Create: `src/components/templates/ComparisonTemplate.tsx`
- Create: `src/components/templates/CostGuideTemplate.tsx`
- Create: `src/components/templates/BestOfTemplate.tsx`
- Create: `src/components/templates/AlternativesTemplate.tsx`
- Create: `src/components/templates/GlossaryTemplate.tsx`
- Create: `src/components/templates/LocationTemplate.tsx`
- Create: `src/components/templates/IndustryTemplate.tsx`
- Create: `src/components/shared/ComparisonTable.tsx`
- Create: `src/components/shared/PricingTable.tsx`
- Create: `src/components/shared/ToolCard.tsx`
- Create: `src/components/shared/FAQSection.tsx`
- Create: `src/components/shared/RelatedArticles.tsx`
- Create: `src/components/shared/TableOfContents.tsx`
- Create: `src/components/shared/AuthorBio.tsx`
- Create: `src/components/shared/Breadcrumbs.tsx`

Each template is a full page layout for its content type. Templates use shared components to stay DRY.

- [ ] **Step 1: Build shared components first**

`ComparisonTable` — responsive table with feature-by-feature comparison, green/red indicators
`PricingTable` — price ranges with low/mid/high tiers
`ToolCard` — card with tool name, description, pricing, pros/cons, CTA
`FAQSection` — accordion FAQ with JSON-LD FAQ schema injection
`RelatedArticles` — grid of 3-6 related articles from the same or adjacent pillar
`TableOfContents` — auto-generated from H2/H3 headings, sticky sidebar on desktop
`AuthorBio` — E-E-A-T signal: author name, photo, credentials, links
`Breadcrumbs` — with schema markup: Home > Pillar > Article

- [ ] **Step 2: Build ComparisonTemplate**

Layout:
1. Breadcrumbs
2. H1: "[Platform A] vs [Platform B]: Which Should You Choose in 2026?"
3. Author bio + publish date
4. Quick verdict box (winner callout)
5. Table of contents (sticky sidebar)
6. Feature comparison table
7. Section: "[Platform A] Overview"
8. Section: "[Platform B] Overview"
9. Section: "Key Differences"
10. Section: "Pricing Comparison"
11. Section: "Who Should Choose [A]?" / "Who Should Choose [B]?"
12. FAQ section (with FAQ schema)
13. Related Articles
14. CTA: "Need help choosing? Contact BKND"

- [ ] **Step 3: Build CostGuideTemplate**

Layout:
1. Breadcrumbs
2. H1: "How Much Does [Service] Cost in 2026? Real Numbers Explained"
3. Author bio + publish date
4. Quick answer box (price range summary)
5. Table of contents
6. Pricing table (low/mid/high tiers)
7. Section: "Factors That Affect Cost"
8. Section: "Detailed Breakdown"
9. Section: "How to Save Money on [Service]"
10. Section: "Is It Worth the Investment?"
11. FAQ section
12. Related Articles
13. CTA: "Get a Free Quote from BKND"

- [ ] **Step 4: Build remaining templates** (BestOf, Alternatives, Glossary, Location, Industry)

Each follows its content type's optimal structure for SEO. All use the shared components.

- [ ] **Step 5: Commit**

```bash
git add src/components/templates/ src/components/shared/
git commit -m "feat: add content templates and shared components for all pillar types"
```

---

### Task 4: Programmatic Location Page Generator

**Files:**
- Create: `src/data/cities.ts` (city database — 300 cities)
- Create: `src/data/city-stats.ts` (population, business count, industry data per city)
- Create: `src/app/locations/[city]/page.tsx`
- Create: `src/app/locations/[city]/[service]/page.tsx` (service × location combos)

This is the biggest programmatic play. 300 cities × 1-2 services = 300-600 pages.

- [ ] **Step 1: Create city database**

`src/data/cities.ts`:
```typescript
export interface City {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  population: number;
  businessCount: number;
  region: 'northeast' | 'southeast' | 'midwest' | 'southwest' | 'west';
  tier: 1 | 2 | 3; // 1 = major metro, 2 = mid-size, 3 = small
  nearbyCity?: string; // for "near [major city]" targeting
}

export const cities: City[] = [
  // Tier 1: Top 50 US metros
  { slug: 'new-york', name: 'New York', state: 'New York', stateAbbr: 'NY', population: 8336817, businessCount: 250000, region: 'northeast', tier: 1 },
  { slug: 'los-angeles', name: 'Los Angeles', state: 'California', stateAbbr: 'CA', population: 3979576, businessCount: 150000, region: 'west', tier: 1 },
  // ... 48 more tier 1 cities

  // Tier 2: Next 100 mid-size cities
  // ... 100 tier 2 cities

  // Tier 3: 150 NJ/tri-state area towns (local focus)
  { slug: 'elizabeth-nj', name: 'Elizabeth', state: 'New Jersey', stateAbbr: 'NJ', population: 137298, businessCount: 5000, region: 'northeast', tier: 3 },
  // ... 149 more NJ/tri-state towns
];
```

- [ ] **Step 2: Create location page template with unique per-city content**

Each location page MUST have unique content beyond city-name swapping:
- City-specific introduction (2-3 paragraphs about the local business landscape)
- Local industry statistics (from Census/BLS data embedded in `city-stats.ts`)
- "Why businesses in [City] need [Service]" section with city-specific reasoning
- Testimonials rotated from available case studies
- City-specific FAQ (3-5 questions unique to the metro area)
- Nearby cities section (internal links to adjacent location pages)
- Google Maps embed or reference to the area
- LocalBusiness + Service schema markup

- [ ] **Step 3: Create service × location combo pages**

For tier 1 cities, generate additional pages:
- `/locations/miami/web-design`
- `/locations/miami/seo`
- `/locations/miami/digital-marketing`

This creates service-specific landing pages per city for tier 1 metros (50 cities × 3 services = 150 additional pages).

- [ ] **Step 4: Build and verify location page output**

```bash
pnpm build
# Verify 300+ location pages in build output
```

- [ ] **Step 5: Commit**

```bash
git add src/data/ src/app/locations/
git commit -m "feat: add programmatic location page generator for 300 cities"
```

---

### Task 5: Glossary / Definition Page Generator

**Files:**
- Create: `src/data/glossary-terms.ts` (150 marketing/tech terms)
- Create: `src/app/glossary/[slug]/page.tsx`
- Create: `src/app/glossary/page.tsx` (A-Z index)

Glossary pages target "what is [term]" queries (e.g., "what is SEO" = 33,100 vol). While KD is high for head terms, long-tail variations like "what is schema markup" or "what is a canonical URL" are low-KD and generate steady impressions.

- [ ] **Step 1: Create glossary terms database**

150 terms across digital marketing, web development, SEO, AI, and business:

```typescript
export interface GlossaryTermData {
  slug: string;
  term: string;
  shortDefinition: string; // 1-2 sentences
  fullDefinition: string; // 2-3 paragraphs
  examples: string[];
  relatedTerms: string[]; // slugs of other glossary terms
  category: 'seo' | 'web-dev' | 'marketing' | 'ai' | 'business' | 'design' | 'analytics';
  faq: { question: string; answer: string }[];
}
```

Categories and example terms:
- **SEO (30 terms):** SEO, backlinks, keyword research, meta tags, schema markup, canonical URL, 301 redirect, robots.txt, sitemap, Core Web Vitals, E-E-A-T, domain authority, anchor text, crawl budget, indexing, SERP, featured snippet, local SEO, technical SEO, link building...
- **Web Dev (25 terms):** responsive design, CMS, API, SSL, DNS, hosting, CDN, static site, progressive web app, headless CMS, JavaScript framework, CSS, HTML, web accessibility, page speed...
- **Marketing (25 terms):** conversion rate, CTR, bounce rate, landing page, A/B testing, funnel, lead generation, content marketing, inbound marketing, outbound marketing, brand identity, customer journey, remarketing, email marketing, social proof...
- **AI (20 terms):** AI, machine learning, ChatGPT, prompt engineering, LLM, generative AI, AI chatbot, computer vision, natural language processing, AI automation...
- **Business (25 terms):** ROI, KPI, SaaS, B2B, B2C, CRM, MRR, churn rate, CAC, LTV, freemium, market fit, MVP, scalability...
- **Design (15 terms):** UX, UI, wireframe, prototype, design system, typography, color theory, Figma, responsive design, mobile-first...
- **Analytics (10 terms):** Google Analytics, GA4, heatmap, session recording, attribution model, UTM parameters, bounce rate, conversion tracking...

- [ ] **Step 2: Create glossary page template**

Each glossary page:
- H1: "What is [Term]? Definition & Guide"
- Quick definition box (featured snippet optimized — 40-60 words)
- Full explanation (2-3 paragraphs)
- Examples section
- "Why [Term] Matters for Your Business" section
- Related terms grid (internal links to other glossary pages)
- FAQ section
- CTA: "Need help with [Term]? Talk to BKND"
- DefinedTerm schema markup

- [ ] **Step 3: Create glossary index page (A-Z)**

Alphabetical index of all 150 terms with quick definitions. Massive internal linking page.

- [ ] **Step 4: Commit**

```bash
git add src/data/glossary-terms.ts src/app/glossary/
git commit -m "feat: add glossary generator with 150 marketing/tech terms"
```

---

### Task 6: SEO Infrastructure

**Files:**
- Create: `src/app/sitemap.ts` (dynamic XML sitemap)
- Create: `src/lib/schema.ts` (JSON-LD schema generators)
- Create: `src/components/shared/SchemaMarkup.tsx`
- Modify: `src/app/layout.tsx` (add global schema, IndexNow meta)
- Create: `src/app/robots.ts` (dynamic robots.txt)
- Create: `public/indexnow-key.txt` (IndexNow verification)
- Modify: `src/components/shared/Breadcrumbs.tsx` (add BreadcrumbList schema)

- [ ] **Step 1: Create dynamic XML sitemap**

```typescript
// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import { getAllContent } from '@/lib/content';
import { cities } from '@/data/cities';
import { glossaryTerms } from '@/data/glossary-terms';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://bknddevelopment.com';
  const content = await getAllContent();

  const contentPages = content.map((post) => ({
    url: `${baseUrl}/${post.category === 'comparison' ? 'compare' : post.category}/${post.slug}`,
    lastModified: new Date(post.modifiedDate),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const locationPages = cities.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const glossaryPages = glossaryTerms.map((term) => ({
    url: `${baseUrl}/glossary/${term.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Static pages
  const staticPages = ['', '/about', '/contact', '/services/seo', '/services/ai', ...].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1.0 : 0.9,
  }));

  return [...staticPages, ...contentPages, ...locationPages, ...glossaryPages];
}
```

- [ ] **Step 2: Create JSON-LD schema generators**

`src/lib/schema.ts`:
```typescript
export function generateArticleSchema(post: ContentMeta): object { ... }
export function generateFAQSchema(faq: FAQItem[]): object { ... }
export function generateLocalBusinessSchema(city: City): object { ... }
export function generateBreadcrumbSchema(breadcrumbs: {name: string, url: string}[]): object { ... }
export function generateItemListSchema(items: {name: string, url: string}[]): object { ... }
export function generateDefinedTermSchema(term: GlossaryTermData): object { ... }
export function generateHowToSchema(steps: {name: string, text: string}[]): object { ... }
```

Each content template injects the appropriate schema(s) into the page head.

- [ ] **Step 3: Create robots.ts**

```typescript
// src/app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://bknddevelopment.com/sitemap.xml',
  };
}
```

- [ ] **Step 4: Update root layout with global schema**

Add Organization + WebSite schema to every page via `src/app/layout.tsx`.

- [ ] **Step 5: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts src/lib/schema.ts src/components/shared/SchemaMarkup.tsx
git commit -m "feat: add SEO infrastructure — dynamic sitemap, JSON-LD schemas, robots.txt"
```

---

### Task 7: Internal Linking Architecture

**Files:**
- Create: `src/lib/internal-links.ts` (link graph builder)
- Modify: All template components (add RelatedArticles)
- Create: `src/components/shared/PillarNav.tsx` (pillar hub navigation)
- Modify: `src/app/page.tsx` (add links to all pillar hubs from homepage)

- [ ] **Step 1: Build internal link graph**

`src/lib/internal-links.ts`:
```typescript
// Given a post, find the best related posts across and within pillars
// Uses tag overlap, category proximity, and explicit relatedSlugs
export function getRelatedPosts(post: ContentMeta, allPosts: ContentMeta[], limit: number = 6): ContentMeta[] { ... }

// Generate "You might also like" suggestions across pillars
export function getCrossPillarSuggestions(post: ContentMeta, allPosts: ContentMeta[], limit: number = 3): ContentMeta[] { ... }
```

- [ ] **Step 2: Add RelatedArticles to every template**

Every content page shows 6 related articles at the bottom:
- 3 from the same pillar
- 3 from adjacent pillars (cross-linking)

- [ ] **Step 3: Add pillar hub navigation**

`PillarNav` component appears on every content page — shows all 8 pillar hubs as a horizontal nav bar:
Compare | Cost Guides | Best Of | Alternatives | Industries | Glossary | Tools | Locations

- [ ] **Step 4: Update homepage with pillar links**

Add a "Resources" or "Knowledge Hub" section to the homepage linking to all pillar hubs. This ensures Google can crawl from homepage → hub → individual articles (max 3 clicks deep).

- [ ] **Step 5: Commit**

```bash
git add src/lib/internal-links.ts src/components/shared/PillarNav.tsx src/components/shared/RelatedArticles.tsx
git commit -m "feat: add internal linking architecture — related posts, pillar nav, cross-linking"
```

---

## Phase 2: First Wave — 250 Pages (Weeks 3-6)

### Task 8: Publish 75 Comparison Articles

Write and publish all 75 comparison articles. Priority order:

**Week 3 — Tier 1 (20 articles, highest volume):**
1. Wix vs Squarespace (6,600 vol, KD 1)
2. WordPress vs Wix (6,600 vol, KD 5)
3. Shopify vs WooCommerce (6,600 vol, KD 9)
4. WordPress vs Squarespace (6,600 vol, KD 1)
5. Wix vs Shopify (3,600 vol, KD 15)
6. Shopify vs Squarespace (3,600 vol, KD 15)
7. Slack vs Microsoft Teams (5,400 vol, KD 20)
8. Zoom vs Google Meet (3,600 vol, KD 15)
9. HubSpot vs Salesforce (2,400 vol, KD 15)
10. Canva vs Adobe Express (1,600 vol, KD 10)
11. Monday.com vs Asana (1,300 vol, KD 12)
12. Stripe vs PayPal (2,400 vol, KD 20)
13. QuickBooks vs FreshBooks (1,600 vol, KD 10)
14. Notion vs ClickUp (1,900 vol, KD 15)
15. Mailchimp vs Constant Contact (880 vol, KD 4)
16. GoDaddy vs Squarespace (1,600 vol, KD 15)
17. Weebly vs Wix (1,300 vol, KD 10)
18. Bluehost vs SiteGround (1,600 vol, KD 15)
19. Figma vs Canva (1,300 vol, KD 10)
20. Shopify vs BigCommerce (880 vol, KD 10)

**Week 4 — Tier 2 (25 articles, marketing/CRM/email tools)**
**Week 5 — Tier 3 (30 articles, AI tools, analytics, project management, ecommerce, hosting)**

Each article: 2,500-3,500 words, comparison table, pricing section, verdict, 5+ FAQ items, schema markup, 5 internal links.

- [ ] **Step 1: Write first 5 comparison articles**
- [ ] **Step 2: Build and deploy, submit URLs to GSC**
- [ ] **Step 3: Write next 15 comparison articles (complete Week 3)**
- [ ] **Step 4: Deploy batch, submit to GSC, share on social**
- [ ] **Step 5: Continue through Weeks 4-5 (remaining 55 articles)**
- [ ] **Step 6: Commit each batch**

---

### Task 9: Publish 40 Cost & Pricing Guides

Priority order by search volume:

1. Google Ads cost (8,100 vol)
2. Facebook Ads cost (4,400 vol)
3. How much does a website cost (2,400 vol)
4. Mobile app development cost (2,400 vol)
5. Web hosting cost (2,400 vol)
6. Email marketing cost (1,600 vol)
7. Video production cost (1,600 vol)
8. CRM software cost (1,600 vol)
9. WordPress website cost (1,600 vol)
10. Graphic design cost (1,300 vol)
11-40: Remaining cost guides covering Shopify store cost, landing page design cost, custom software cost, IT support cost, branding cost, copywriting cost, content marketing cost, podcast production cost, influencer marketing cost, app maintenance cost, etc.

Each article: 3,000-4,000 words, price ranges table, factors affecting cost, "our pricing" CTA, FAQ schema.

- [ ] **Step 1-6: Write and publish in weekly batches of 10**

---

### Task 10: Generate First 100 Location Pages

Deploy the first 100 programmatic location pages:
- 50 tier-1 major US metros (New York, LA, Chicago, Houston, Phoenix, etc.)
- 50 tier-3 NJ/tri-state towns (Elizabeth, Newark, Jersey City, Hoboken, etc.)

Each page must have genuinely unique content — verify before deploying.

- [ ] **Step 1: Populate city data for first 100 cities**
- [ ] **Step 2: Write unique intro paragraphs for each tier-1 city** (can be AI-assisted but must be reviewed)
- [ ] **Step 3: Build, verify uniqueness, deploy**
- [ ] **Step 4: Submit all 100 URLs to GSC**
- [ ] **Step 5: Commit**

---

### Task 11: Generate 150 Glossary Pages

Deploy all 150 glossary term pages.

- [ ] **Step 1: Populate all 150 terms with definitions, examples, and FAQs**
- [ ] **Step 2: Build and verify all pages render correctly**
- [ ] **Step 3: Deploy and submit to GSC**
- [ ] **Step 4: Commit**

---

## Phase 3: Scale Wave — 300 More Pages (Weeks 7-12)

### Task 12: Publish 60 "Best X for Y" Roundup Posts

Priority articles:
1. Best accounting software small business (33,100 vol, KD 29)
2. Best free website builder (5,400 vol, KD 40)
3. Best CRM for small business (3,600 vol, KD 24)
4. Best AI website builder (3,600 vol, KD 40)
5. Best project management tools (2,400 vol, KD 35)
6. Best SEO tools (2,400 vol, KD 35)
7. Best social media management tools (1,600 vol, KD 30)
8. Best invoicing software (1,600 vol, KD 25)
9. Best landing page builder (1,600 vol, KD 35)
10-60: Continue across email marketing tools, chatbots, design tools, analytics, HR software, scheduling tools, ecommerce platforms, payment processors, VPN for business, video conferencing, etc.

- [ ] **Step 1-6: Write and publish in batches of 10 per week**

---

### Task 13: Publish 40 Tool Alternatives Posts

Priority articles:
1. Canva alternatives (5,400 vol)
2. Mailchimp alternatives (4,400 vol)
3. HubSpot alternatives (3,600 vol)
4. Photoshop alternatives (3,600 vol)
5. Slack alternatives (2,900 vol)
6. Shopify alternatives (2,400 vol)
7. Trello alternatives (2,400 vol)
8. WordPress alternatives (1,900 vol)
9. Zoom alternatives (1,900 vol)
10-40: Google Analytics alternatives, Hootsuite alternatives, Ahrefs alternatives, SEMrush alternatives, Asana alternatives, Notion alternatives, Figma alternatives, Calendly alternatives, etc.

- [ ] **Step 1-6: Write and publish in batches of 10**

---

### Task 14: Publish 30 Industry Marketing Guides

Expand from 5 existing industries to 30:

Already published: Dental, Restaurant, HVAC, Plumbing, Roofing

New (25):
1. Law firm marketing
2. Real estate marketing
3. Gym/fitness marketing
4. Salon/spa marketing
5. Auto repair marketing
6. Landscaping marketing
7. Cleaning business marketing
8. Electrician marketing
9. Medical practice marketing
10. Construction company marketing
11. Pet grooming marketing
12. Accounting firm marketing
13. Insurance agent marketing
14. Moving company marketing
15. Photography business marketing
16. Veterinary marketing
17. Chiropractic marketing
18. Daycare/childcare marketing
19. Home remodeling marketing
20. Pest control marketing
21. Property management marketing
22. Tutoring business marketing
23. Wedding venue marketing
24. Yoga studio marketing
25. Brewery/winery marketing

- [ ] **Step 1-6: Write and publish in batches of 5-8**

---

### Task 15: Generate Remaining 200 Location Pages

Deploy remaining 200 location pages:
- 50 more tier-2 mid-size US cities
- 100 more tier-3 NJ/tri-state towns
- 50 service × location combo pages (tier-1 cities × 3 services)

- [ ] **Step 1-4: Populate data, write unique content, build, deploy**

---

### Task 16: Create 50 Service × Industry Landing Pages

Programmatic pages combining BKND's services with industries:

Pattern: `/services/[service]/[industry]`
Examples:
- `/services/web-design/restaurants`
- `/services/seo/law-firms`
- `/services/digital-marketing/dentists`

5 services × 10 industries = 50 pages

- [ ] **Step 1: Create service × industry data matrix**
- [ ] **Step 2: Build template with industry-specific content blocks**
- [ ] **Step 3: Deploy and submit to GSC**

---

## Phase 4: Authority Wave (Weeks 13-20)

### Task 17: Build 10 Interactive Tools & Calculators

These are the backlink magnets. Each tool can rank for hundreds of long-tail keywords.

1. **Website Cost Calculator** — "How much does a website cost?" interactive quiz
2. **SEO ROI Calculator** — "Calculate your SEO return on investment"
3. **Google Ads Budget Calculator** — "How much should I spend on Google Ads?"
4. **Social Media ROI Calculator** — "Is social media worth it for your business?"
5. **Marketing Budget Planner** — "How to allocate your marketing budget"
6. **Website Speed Checker** (lightweight) — "Check your website speed score"
7. **Business Name Generator** — "Generate business name ideas"
8. **Email Subject Line Tester** — "Test your email subject line"
9. **Headline Analyzer** — "Score your blog headline"
10. **SEO Audit Checklist** — Interactive checklist users can work through

Each tool: unique page, interactive UI, sharable results, leads to BKND CTA.

- [ ] **Step 1-10: Build one tool per week**

---

### Task 18: Backlink Acquisition Campaign

Content alone won't beat Thrive's domain authority. We need backlinks.

**Strategies:**
1. **Digital PR:** Create original research/surveys (e.g., "2026 Small Business Website Cost Survey" with 500+ respondents). Pitch to industry publications.
2. **Tool-based link building:** The interactive calculators from Task 17 naturally attract links when people reference them.
3. **Guest posting:** Write for marketing blogs, SaaS blogs, business publications. Link back to relevant BKND content.
4. **HARO/Connectively:** Respond to journalist queries as a digital marketing expert. Gets quoted with backlinks.
5. **Broken link building:** Find broken links on marketing resource pages, offer BKND's content as replacement.
6. **Resource page outreach:** Get BKND listed on "best marketing resources" pages.

**Target:** 50+ quality backlinks in Phase 4 (DA 30+)

- [ ] **Step 1-6: Execute one strategy per 1-2 weeks**

---

### Task 19: Content Optimization Pass

After 3+ months of content being live, mine GSC data:

1. **High impressions, low clicks:** Rewrite titles and meta descriptions for better CTR
2. **Position 11-20 keywords:** These are the "almost page 1" wins. Add content depth, internal links, and schema to push them up.
3. **Keyword cannibalization:** Identify pages competing for the same keywords. Consolidate or differentiate.
4. **Content gaps:** Keywords competitors rank for that BKND doesn't. Write new content.
5. **Top performers:** Double down — add more depth, update, add FAQ, add schema, build more internal links.

- [ ] **Step 1: Export GSC data and analyze**
- [ ] **Step 2: Identify top 50 optimization opportunities**
- [ ] **Step 3: Execute optimizations in batches of 10**

---

## Phase 5: Domination — Surpass 37K (Weeks 21-30)

### Task 20: Gap Analysis vs. Thrive Agency

Use DataForSEO to pull Thrive's top-ranking keywords. Identify every keyword they rank for that BKND doesn't. Create content to fill every gap.

- [ ] **Step 1: Pull Thrive's top 1,000 keywords**
- [ ] **Step 2: Cross-reference against BKND's rankings**
- [ ] **Step 3: Identify gaps and create content plan for each**
- [ ] **Step 4: Write and publish gap-filling content**

---

### Task 21: Content Refresh & Expansion

Update every article published in Phase 2-3:
- Add new data/stats for current year
- Expand FAQ sections (more questions = more keywords)
- Add new internal links to content published since original publication
- Update pricing/feature info in comparisons
- Improve articles that underperformed

- [ ] **Step 1-4: Refresh in batches by pillar**

---

### Task 22: Secondary Content Expansion

If we haven't hit 37K by Week 25, add more content:
- More comparison articles (long-tail 3-way and 4-way comparisons)
- More glossary terms (expand to 300)
- More location pages (expand to 500)
- "How to" tutorial articles (new pillar)
- "Statistics" pages (e.g., "50 Digital Marketing Statistics for 2026")
- "Checklist" pages (e.g., "Website Launch Checklist")

---

## Monitoring & KPIs

Track weekly:
| Metric | Tool | Target Trajectory |
|--------|------|-------------------|
| Total indexed pages | GSC | 100 → 300 → 500 → 750 |
| Total ranked keywords | DataForSEO | 100 → 2K → 10K → 25K → 37K+ |
| Page 1 rankings | DataForSEO | 10 → 200 → 2K → 8K → 15K+ |
| GSC Impressions (30d) | GSC | 50K → 500K → 2M → 5M+ |
| Organic clicks (30d) | GSC | 500 → 5K → 25K → 100K+ |
| Backlinks | DataForSEO | 10 → 30 → 80 → 200+ |
| Domain authority estimate | DataForSEO | 0 → 15 → 30 → 45+ |

---

## Risk Register

| Risk | Mitigation |
|------|-----------|
| Content quality at scale | Template system + editorial review + AI-assisted but human-edited |
| Thin content penalty (locations/glossary) | Genuinely unique content per page, monitor GSC coverage report |
| Google Helpful Content Update | Focus on genuine value, expert perspective, original data |
| Keyword cannibalization | Clear keyword mapping document, one primary keyword per page |
| Backlink gap vs. Thrive | Aggressive link building in Phase 4, interactive tools as link magnets |
| Burnout / content fatigue | Batch production, template system reduces per-article effort |
| Budget constraints | Prioritize highest-ROI content first (comparisons, cost guides) |
