# SEO Blockers - BKND Development

## Active Blockers

### BLK-001: GSC Direct Data Not Yet Pulled

- **Severity:** High (downgraded from Critical -- partial workaround via DataForSEO)
- **Since:** 2026-02-02
- **Status:** Partially resolved
- **Details:** DataForSEO baseline provides keyword rankings and traffic estimates as of 2026-02-05. However, direct GSC data (actual clicks, impressions, CTR, crawl stats, index coverage) still requires Chrome-based GSC access. GSC verification tag IS present in layout.tsx (c9auD4d1EqN--1_vKGCVADAt-HXid2ua0LFJYTd7O70).
- **Blocks:**
  - Actual click/impression data
  - Crawl error monitoring
  - Index coverage report
  - Core Web Vitals from field data
- **Resolution Path:** Use Claude-in-Chrome MCP to access GSC directly

### BLK-002: GA4 Data Not Yet Pulled

- **Severity:** High
- **Since:** 2026-02-02
- **Status:** Still pending
- **Details:** GA4 is confirmed active on the site (G-G6C4G1SQ44) and working per health check. No analytics data (traffic, users, sessions, bounce rate, engagement) has been pulled into the SEO tracking system.
- **Blocks:**
  - Real traffic baseline (DataForSEO estimates ~15 visits/mo but actual may differ)
  - User behavior metrics (engagement rate, session duration)
  - Top pages by actual traffic
  - Content optimization prioritization
- **Resolution Path:** Use Claude-in-Chrome MCP to access GA4 directly

### BLK-003: GSC Verification Method Unclear

- **Severity:** Low (downgraded from Medium)
- **Since:** 2026-02-05
- **Status:** Largely resolved
- **Details:** Technical audit confirmed google-site-verification meta tag IS present in layout.tsx via Next.js metadata.verification.google. Initial concern was based on searching for raw HTML tag, but Next.js generates it from the metadata export. Verification is intact.
- **Blocks:** Nothing actively blocked
- **Resolution Path:** Monitor -- if GSC access ever fails, check verification status

### BLK-004: DataForSEO Backlinks API Subscription Not Active (NEW)

- **Severity:** Medium
- **Since:** 2026-02-05
- **Status:** Pending activation
- **Details:** Attempted to pull backlink data via DataForSEO and received error 40204 (access denied). The Backlinks API requires a separate subscription activation at https://app.dataforseo.com/backlinks-subscription.
- **Blocks:**
  - Backlink profile baseline
  - Referring domains count
  - Competitor backlink gap analysis
  - Phase 4: Authority Building tasks
- **Resolution Path:** Charwin needs to activate the Backlinks API subscription in DataForSEO dashboard. Alternative: use free Ahrefs Webmaster Tools or Moz Link Explorer for initial data.

### BLK-005: Canonical URL Strategy Decision Needed (NEW)

- **Severity:** High
- **Since:** 2026-02-05
- **Status:** Decision pending
- **Details:** Technical audit found every blog post is accessible at 2 URLs (/blog/[slug] and /[hub]/[slug]) with NO canonical tags. Before implementing the fix, a canonical URL strategy must be decided. Audit recommends hub URLs (/[hub]/[slug]) as canonical because they have richer schema and provide topical context. But this is an architectural decision that affects internal linking, sitemap structure, and future content strategy.
- **Blocks:**
  - CRIT-001: Canonical tag implementation
  - CRIT-002: Sitemap deduplication
  - MED-001: Internal link consolidation
- **Resolution Path:** Recommend hub URLs as canonical. Charwin to approve. Then implement canonical tags on all 5 article templates and update sitemap.

## Pending Approvals

| Item                                 | Waiting For      | Since      | Priority |
| ------------------------------------ | ---------------- | ---------- | -------- |
| Canonical URL strategy (hub vs blog) | Charwin decision | 2026-02-05 | High     |
| DataForSEO Backlinks API activation  | Charwin action   | 2026-02-05 | Medium   |

## Resolved

### BLK-001 (Partial) - DataForSEO Baseline Pulled

- **Resolved:** 2026-02-05
- **Resolution:** Pulled keyword rankings, domain overview, competitor data, and keyword opportunities via DataForSEO API. This provides a partial baseline. Full GSC/GA4 direct data still pending.

### BLK-003 (Resolved) - GSC Verification Confirmed

- **Resolved:** 2026-02-05
- **Resolution:** Technical audit confirmed the google-site-verification tag IS present via Next.js metadata.verification.google in layout.tsx. Tag value: c9auD4d1EqN--1_vKGCVADAt-HXid2ua0LFJYTd7O70.
