# SEO Roadmap - BKND Development

## Phase 1: Foundation (In Progress)

- [x] Initialize SEO tracking system
- [x] Pull baseline metrics from DataForSEO (2026-02-05)
- [x] Complete technical SEO audit (2026-02-05 -- Grade: D)
- [x] Identify quick wins (GEO KD-0 keywords, canonical fix, legacy domain fix)
- [ ] Pull baseline metrics from GSC (need Chrome-based access)
- [ ] Pull baseline metrics from GA4 (need Chrome-based access)
- [ ] Activate DataForSEO Backlinks API subscription

## Phase 2: Technical SEO (Partially Actionable Now)

### Critical Priority (from audit - do FIRST)

- [ ] **CRIT-001:** Add canonical tags to resolve /blog/[slug] vs /[hub]/[slug] duplicate content
  - Decision needed: hub URLs as canonical (recommended) or blog URLs
  - Files: 5 article page templates
  - Impact: ~70 duplicate pages resolved
- [ ] **CRIT-002:** Remove duplicate URLs from sitemap (keep only canonical versions)
  - Remove ~43 duplicate article entries from public/sitemap.xml
  - Reduce sitemap from ~97 to ~55 unique URLs

### High Priority (from audit)

- [ ] **HIGH-001:** Replace legacy GitHub Pages domain in 8 service page layouts
  - Find/replace `charwinvanryckdegroot.github.io/bknd-website` with `bknddevelopment.com`
  - Files: 8 layout.tsx files (seo, analytics, creative, cro, ai/custom, ai/automation, ai/geo, methodology/ai)
- [ ] **HIGH-002/003:** Add canonical tags to all blog and hub article pages
- [ ] **HIGH-004:** Add canonical tags to content hub landing pages and blog index
- [ ] **HIGH-005:** Add Article JSON-LD schema to /blog/[slug] template
- [ ] **MED-005:** Create layout.tsx with metadata/schema for /services/ai/ page
- [ ] **MED-006:** Create layout.tsx for /services/paid-advertising/ page

### Medium Priority (from audit)

- [ ] **MED-001:** Consolidate internal link signals (blog index links vs hub links)
- [ ] **MED-002:** Fix Industries dropdown (populate or remove)
- [ ] **MED-003:** Fix header anchor links (#services, #contact) for non-homepage pages
- [ ] **MED-004:** Add content hub links to Footer
- [ ] **MED-007:** Add LinkedIn URL to Organization schema sameAs array
- [ ] **MED-008:** Remove non-functional SearchAction schema

### Low Priority (from audit)

- [ ] **LOW-001:** Implement per-page lastmod dates in sitemap
- [ ] **LOW-002:** Add OG URL field to blog post metadata
- [ ] **LOW-003:** Add OG image field to blog post metadata
- [ ] **LOW-004:** Add OG image/URL to content hub landing pages
- [ ] **LOW-005:** Extract shared article rendering into reusable component
- [ ] **LOW-006:** Update hardcoded dateModified in root layout schema

### Original Phase 2 Tasks

- [ ] Core Web Vitals optimization
- [ ] Mobile usability check
- [ ] Internal linking optimization (expanded from audit findings)

## Phase 3: Content Optimization

### Priority Content (from keyword research)

- [ ] Optimize /services/ai/geo/ for "generative engine optimization geo services" (KD 0, 110 vol)
- [ ] Create GEO tools/resources page for "generative engine optimization geo tools" (KD 0, 70 vol)
- [ ] Create blog post: "What Is an AI Marketing Agency?" (KD 3, 40 vol)
- [ ] Create blog post: "What Is GEO Optimization?" (KD 30, 70 vol)
- [ ] Optimize homepage and services pages for "ai marketing agency" (KD 28, 1600 vol)
- [ ] Optimize existing NJ location pages to move from pos 30-80 to top 20

### Original Phase 3 Tasks

- [ ] Title/meta description audit
- [ ] Content gap analysis (partially done -- keyword gaps identified)
- [ ] Blog post optimization
- [ ] Service page enhancement

## Phase 4: Authority Building

- [ ] Backlink analysis (blocked -- need API subscription)
- [ ] Competitor backlink gaps
- [ ] Local SEO optimization (Elizabeth, NJ focus)
- [ ] Citation building
- [ ] Monitor 28 newly discovered keywords for upward movement

## Backlog

- Implement dynamic sitemap generation (replace static XML)
- Add structured data testing to CI/CD pipeline
- Create industry-specific landing pages (if Industries nav is populated)
- Social sharing optimization (OG images for all articles)
- Implement breadcrumb component visible to users (currently only in schema)

## Completed

### 2026-02-05

- [x] First baseline data pull via DataForSEO (domain overview, ranked keywords, competitors, keyword opportunities)
- [x] Comprehensive technical SEO audit (14 issues found across all severity levels)
- [x] Quick wins identified (GEO KD-0 keywords, canonical strategy, legacy domain fix)
- [x] Competitor landscape assessed (dubsbusinessadvisor.com identified as potential competitor)
- [x] Content calendar priorities set based on keyword research

### 2026-02-02

- [x] SEO Employee tracking system initialized
