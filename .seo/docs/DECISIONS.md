# SEO Decisions Log - BKND Development

## Decision Log

### 2026-02-05 - First Baseline Data Pull via DataForSEO

**Context:** Wednesday -- normally a light cadence day, but this is the first-ever data pull so ran FULL baseline.
**Decision:** Override Thursday FULL cadence and run complete baseline pull today (Wednesday) because no data existed yet.
**Rationale:** The SEO system was initialized on 2026-02-02 but no data had been pulled. Waiting for Thursday would mean another day without baseline metrics. Since this is the first run, a full pull regardless of day-of-week is appropriate.
**Outcome:** Successfully pulled domain overview, 32 ranked keywords, competitor landscape, keyword opportunities for 3 seed terms, and identified the domain is in Google's "discovery phase" with zero page 1 rankings.

---

### 2026-02-05 - Recommended Canonical URL Strategy: Hub URLs

**Context:** Technical audit found every blog post served at 2 URLs (/blog/[slug] and /[hub]/[slug]) with no canonical tags -- CRITICAL duplicate content issue.
**Decision (RECOMMENDED -- awaiting approval):** Use content hub URLs (/ai/[slug], /marketing/[slug], /seo-insights/[slug], /industry-news/[slug]) as the canonical URL for all articles.
**Rationale:**

1. Hub article pages already have Article JSON-LD schema; /blog/[slug] pages do NOT
2. Hub URLs provide topical context to Google (e.g., `/ai/article-name` signals AI content)
3. Supports the content hub / topical authority architecture that was intentionally built
4. Hub pages correctly filter by category (post.category check), preventing cross-category leakage
5. The hub landing pages already use CollectionPage schema with ItemList pointing to hub URLs

**Implementation plan:**

- Add `metadata.alternates.canonical` pointing to self on all 4 hub article templates
- Add `metadata.alternates.canonical` pointing to the hub version on /blog/[slug] template
- Remove all /blog/[slug] entries from sitemap.xml (keep only hub URLs)
- Update blog index page to link to hub URLs instead of /blog/ URLs

**Outcome:** Pending approval from Charwin.

---

### 2026-02-05 - Priority Keyword Strategy: GEO First, AI Marketing Second

**Context:** Keyword opportunity analysis from DataForSEO revealed two major opportunity clusters.
**Decision:** Prioritize GEO / Generative Engine Optimization keywords first, AI Marketing Agency keywords second.
**Rationale:**

1. **GEO keywords have KD 0:** "generative engine optimization geo services" (110 vol, KD 0) and "generative engine optimization geo tools" (70 vol, KD 0) are brand-new keywords with literally zero competition
2. **Explosive growth:** GEO cluster showing +1660% YoY growth, many keywords +500-4000% YoY
3. **First-mover advantage:** These keywords are so new that no one has optimized for them yet
4. **Existing page:** BKND already has /services/ai/geo/ -- just needs optimization
5. **AI marketing agency (KD 28, 1600 vol)** is achievable but has more competition and needs backlinks
   **Outcome:** Content calendar and roadmap updated to prioritize GEO content first.

---

### 2026-02-05 - DataForSEO as Primary Data Source (with GSC/GA4 Supplementary)

**Context:** GSC and GA4 require Chrome-based access which is not yet available. DataForSEO provides keyword and domain data via API.
**Decision:** Use DataForSEO as the primary ranking/keyword data source. GSC and GA4 will supplement with click data, traffic data, and crawl data when Chrome access is available.
**Rationale:** DataForSEO provides keyword rankings, search volumes, competitor data, and keyword difficulty scores -- which is sufficient for strategic planning and content optimization. GSC provides complementary data (actual clicks, impressions, crawl errors, index coverage). GA4 provides user behavior data. All three are needed for a complete picture, but DataForSEO alone unblocks Phase 1 baseline and Phase 3 content planning.
**Outcome:** Baseline established. Phase 1 partially unblocked. Content calendar populated.

---

### 2026-02-02 - System Initialization

**Context:** Monday - Weekly Planning Day
**Decision:** Initialize SEO Employee tracking system
**Rationale:** Need persistent tracking to monitor SEO progress over time
**Outcome:** System initialized, ready for first data pull
