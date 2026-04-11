export interface City {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  population: number;
  region: "northeast" | "southeast" | "midwest" | "southwest" | "west";
  tier: 1 | 2 | 3;
  description: string;
  industries: string[];
  nearbyCity?: string;
}

export const cities: City[] = [
  // ── Tier 1: Major metros ──────────────────────────────────────────────────
  {
    slug: "new-york",
    name: "New York",
    state: "New York",
    stateAbbr: "NY",
    population: 8336817,
    region: "northeast",
    tier: 1,
    description:
      "New York City is the most competitive digital market on the planet, where mid-size businesses routinely go head-to-head with Fortune 500 ad budgets. Standing out requires precision — tightly scoped campaigns, technical SEO that earns real authority, and conversion infrastructure built to handle serious traffic volume. The businesses that win here do so through execution quality, not budget alone.",
    industries: [
      "Finance & Banking",
      "Media & Entertainment",
      "Fashion & Retail",
      "Healthcare",
      "Real Estate",
    ],
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "California",
    stateAbbr: "CA",
    population: 3898747,
    region: "west",
    tier: 1,
    description:
      "Los Angeles businesses operate in a sprawling, highly visual market where brand identity and digital presence carry outsized weight. From entertainment and creative agencies to wellness brands and e-commerce ventures, LA companies need websites and marketing systems that match the aesthetic standards customers expect — while still driving measurable revenue. The city's culture of discovery means organic and social channels reward quality content at scale.",
    industries: [
      "Entertainment & Media",
      "Fashion & Apparel",
      "Health & Wellness",
      "Technology",
      "Real Estate",
    ],
  },
  {
    slug: "chicago",
    name: "Chicago",
    state: "Illinois",
    stateAbbr: "IL",
    population: 2696555,
    region: "midwest",
    tier: 1,
    description:
      "Chicago's economy is built on deep B2B relationships in finance, manufacturing, and logistics — sectors where trust-building content and technical credibility move deals far more than flashy creative. Companies in the metro also serve a dense local consumer base spanning dozens of distinct neighborhoods, each with its own purchasing patterns. A well-executed local SEO and lead-gen strategy can unlock significant pipeline for service businesses throughout Cook and DuPage counties.",
    industries: [
      "Financial Services",
      "Manufacturing",
      "Logistics & Transportation",
      "Healthcare",
      "Food & Hospitality",
    ],
  },
  {
    slug: "houston",
    name: "Houston",
    state: "Texas",
    stateAbbr: "TX",
    population: 2304580,
    region: "southwest",
    tier: 1,
    description:
      "Houston's economy is anchored in energy — upstream oil and gas, downstream petrochemicals, and a growing cleantech sector — while its Texas Medical Center makes it one of the largest healthcare markets in the country. This industrial-professional mix means buyers conduct rigorous online research before engaging vendors, placing a premium on authoritative content, strong LinkedIn presence, and conversion-optimized service pages that build credibility before the first call.",
    industries: [
      "Oil & Gas",
      "Healthcare & Life Sciences",
      "Aerospace & Defense",
      "Construction",
      "Port & Logistics",
    ],
  },
  {
    slug: "miami",
    name: "Miami",
    state: "Florida",
    stateAbbr: "FL",
    population: 442241,
    region: "southeast",
    tier: 1,
    description:
      "Miami functions as both a gateway city for Latin American commerce and a domestic hotspot for luxury real estate, hospitality, and financial services. Bilingual and bicultural marketing is not optional here — it is table stakes for reaching a consumer base that moves fluidly between English and Spanish digital environments. The rapid influx of tech startups and family offices since 2021 has also created a sophisticated B2B market that responds well to data-driven, founder-credibility positioning.",
    industries: [
      "Tourism & Hospitality",
      "Real Estate",
      "Financial Services",
      "Healthcare",
      "International Trade",
    ],
  },
  {
    slug: "dallas",
    name: "Dallas",
    state: "Texas",
    stateAbbr: "TX",
    population: 1304379,
    region: "southwest",
    tier: 1,
    description:
      "Dallas has become one of the fastest-growing corporate relocation destinations in the country, drawing headquarters from financial services, telecom, and insurance alongside a thriving SMB ecosystem in retail and professional services. The market rewards businesses that present themselves professionally online — Dallasites comparison-shop heavily before spending — and the suburban sprawl of the Metroplex means local search optimization across multiple ZIP codes is a genuine competitive lever.",
    industries: [
      "Financial Services",
      "Telecommunications",
      "Retail & E-commerce",
      "Real Estate",
      "Healthcare",
    ],
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    state: "California",
    stateAbbr: "CA",
    population: 873965,
    region: "west",
    tier: 1,
    description:
      "San Francisco's business climate is defined by an audience of sophisticated, tech-literate buyers who have seen every growth hack and can spot inauthenticity instantly. The companies that earn trust here do so through transparent positioning, technically excellent products, and content that demonstrates genuine expertise rather than marketing fluff. Venture-backed startups and established tech firms alike need agencies that understand the nuances of product-led growth and developer-audience marketing.",
    industries: [
      "Technology & SaaS",
      "Venture Capital & Finance",
      "Biotech",
      "Professional Services",
      "Retail & Dining",
    ],
  },
  {
    slug: "seattle",
    name: "Seattle",
    state: "Washington",
    stateAbbr: "WA",
    population: 749256,
    region: "west",
    tier: 1,
    description:
      "Seattle's economy sits at the intersection of big tech, aerospace, and an unusually active independent business scene. Amazon and Boeing set the competitive bar on digital experience, raising customer expectations for every company in the region — from specialty retailers to professional services firms. The city's highly educated, research-oriented consumer base responds to content-first marketing strategies, and organic search drives meaningful revenue for businesses that invest in it seriously.",
    industries: [
      "Technology",
      "Aerospace & Defense",
      "E-commerce & Retail",
      "Healthcare",
      "Coffee & Food Service",
    ],
  },
  {
    slug: "boston",
    name: "Boston",
    state: "Massachusetts",
    stateAbbr: "MA",
    population: 675647,
    region: "northeast",
    tier: 1,
    description:
      "Boston's economy is powered by a dense concentration of universities, hospitals, and biotech firms that generate constant demand for digital marketing in research, recruitment, and patient acquisition. The city's knowledge-economy workers are discerning consumers who read long-form content and expect credibility signals before engaging a vendor. Healthcare providers, law firms, and life-sciences companies that invest in authoritative digital infrastructure consistently outperform competitors still relying on referrals alone.",
    industries: [
      "Biotech & Life Sciences",
      "Higher Education",
      "Healthcare",
      "Financial Services",
      "Technology",
    ],
  },
  {
    slug: "atlanta",
    name: "Atlanta",
    state: "Georgia",
    stateAbbr: "GA",
    population: 498715,
    region: "southeast",
    tier: 1,
    description:
      "Atlanta has evolved into a major technology and media hub, with a thriving fintech corridor, a rapidly growing film and TV production industry, and one of the largest logistics ecosystems in the Southeast anchored by Hartsfield-Jackson. The city's diverse neighborhoods generate strong local search demand across retail, food, and service sectors, while the corporate corridor along Peachtree rewards B2B companies with polished digital presences that reflect Atlanta's increasingly sophisticated business culture.",
    industries: [
      "Film & Entertainment",
      "Fintech & Banking",
      "Logistics & Distribution",
      "Healthcare",
      "Real Estate",
    ],
  },

  // ── Tier 2: Mid-size markets ───────────────────────────────────────────────
  {
    slug: "austin",
    name: "Austin",
    state: "Texas",
    stateAbbr: "TX",
    population: 978908,
    region: "southwest",
    tier: 2,
    description:
      "Austin has transitioned from quirky college town to a genuine tech hub, with an influx of startups, remote-first companies, and corporate outposts that have intensified competition across every digital channel. The city's growth also means the local service economy — contractors, healthcare, restaurants, fitness — is in constant expansion mode, creating steady demand for businesses that can show up in search before competitors claim the new neighborhoods. Austin buyers skew young, digital-first, and highly skeptical of traditional advertising.",
    industries: [
      "Technology & Startups",
      "Music & Entertainment",
      "Real Estate",
      "Food & Beverage",
      "Healthcare",
    ],
    nearbyCity: "San Antonio",
  },
  {
    slug: "denver",
    name: "Denver",
    state: "Colorado",
    stateAbbr: "CO",
    population: 715522,
    region: "west",
    tier: 2,
    description:
      "Denver's economy blends outdoor recreation and lifestyle brands with a growing enterprise tech sector and one of the more active energy-transition investment climates in the country. Consumers here are active, values-driven, and quick to research companies online before engaging. The city's altitude metaphor extends to marketing: businesses that reach the top positions in local search enjoy outsized visibility in a market where organic credibility often matters more than paid reach.",
    industries: [
      "Technology",
      "Outdoor Recreation & Retail",
      "Energy & Cleantech",
      "Healthcare",
      "Real Estate",
    ],
    nearbyCity: "Colorado Springs",
  },
  {
    slug: "nashville",
    name: "Nashville",
    state: "Tennessee",
    stateAbbr: "TN",
    population: 689447,
    region: "southeast",
    tier: 2,
    description:
      "Nashville has grown far beyond its music identity — the healthcare sector (anchored by HCA Healthcare and dozens of health-system headquarters) now dominates the economy alongside a hospitality industry that draws 16+ million visitors annually. This dual economy creates two distinct marketing challenges: healthcare organizations that need compliance-aware, patient-acquisition content strategies, and hospitality businesses that compete in an extremely crowded search landscape for both tourists and locals. Both sectors reward high-quality digital execution.",
    industries: [
      "Healthcare & Health Tech",
      "Music & Entertainment",
      "Hospitality & Tourism",
      "Real Estate",
      "Finance",
    ],
    nearbyCity: "Memphis",
  },
  {
    slug: "portland",
    name: "Portland",
    state: "Oregon",
    stateAbbr: "OR",
    population: 641162,
    region: "west",
    tier: 2,
    description:
      "Portland's independent business culture creates a market that actively rewards authenticity and punishes corporate-feeling marketing. The city has a dense cluster of outdoor apparel brands, craft food and beverage producers, and design-forward agencies that set a high aesthetic bar. At the same time, Portland's sustainability-conscious consumer base responds exceptionally well to brands that demonstrate transparent values and share detailed origin stories — content-led marketing is not optional here, it is the primary customer acquisition lever.",
    industries: [
      "Outdoor Apparel & Gear",
      "Food & Beverage",
      "Technology",
      "Creative & Design",
      "Healthcare",
    ],
    nearbyCity: "Seattle",
  },
  {
    slug: "charlotte",
    name: "Charlotte",
    state: "North Carolina",
    stateAbbr: "NC",
    population: 874579,
    region: "southeast",
    tier: 2,
    description:
      "Charlotte is the second-largest banking center in the United States, home to the headquarters of Bank of America and major regional operations for dozens of financial institutions. That financial services concentration creates strong B2B demand for compliance-aware, professional digital marketing. Beyond finance, Charlotte's rapid population growth has ignited a construction, real estate, and home-services boom where local SEO determines which contractors get the call and which ones get scrolled past.",
    industries: [
      "Financial Services & Banking",
      "Real Estate",
      "Healthcare",
      "Manufacturing",
      "Professional Services",
    ],
    nearbyCity: "Raleigh",
  },

  // ── Tier 3: NJ local markets ───────────────────────────────────────────────
  {
    slug: "newark",
    name: "Newark",
    state: "New Jersey",
    stateAbbr: "NJ",
    population: 311549,
    region: "northeast",
    tier: 3,
    description:
      "Newark is in the middle of a significant economic revitalization, with a growing arts district in the Ironbound neighborhood, major logistics infrastructure at Port Newark, and sustained investment in downtown office space. Small businesses here compete in a market that is simultaneously local and hyper-connected to New York City — meaning customers hold NYC-caliber expectations for digital experience while searching with Newark-specific intent. Smart local SEO can capture this demand before larger Manhattan agencies notice the opportunity.",
    industries: [
      "Port & Logistics",
      "Healthcare",
      "Education",
      "Retail & Food Service",
      "Construction",
    ],
    nearbyCity: "New York",
  },
  {
    slug: "jersey-city",
    name: "Jersey City",
    state: "New Jersey",
    stateAbbr: "NJ",
    population: 292449,
    region: "northeast",
    tier: 3,
    description:
      "Jersey City's waterfront has been transformed by financial services relocations and a tech-industry influx, making it one of the most affluent and digitally active markets in the tri-state area despite its relatively compact size. The city's residents are high-income, high-expectation, and accustomed to Manhattan-quality digital experiences — which means service businesses, restaurants, and professional firms that cut corners on their digital presence lose business daily to competitors who do not. The local real estate market is particularly intense, with agents competing fiercely for every organic search impression.",
    industries: [
      "Financial Services",
      "Technology",
      "Real Estate",
      "Hospitality & Dining",
      "Professional Services",
    ],
    nearbyCity: "New York",
  },
  {
    slug: "hoboken",
    name: "Hoboken",
    state: "New Jersey",
    stateAbbr: "NJ",
    population: 60800,
    region: "northeast",
    tier: 3,
    description:
      "Hoboken packs more purchasing power per square mile than almost any city its size in the country — a concentration of young professionals, transplanted NYC workers, and growing families who rely heavily on Google to discover local services. With its one-square-mile footprint, every local search impression carries real weight, and businesses that earn a top spot in Google's local pack see it translate directly into foot traffic. The city's high walkability and active social media presence mean organic local visibility compounds over time in ways that paid ads alone cannot replicate.",
    industries: [
      "Restaurants & Bars",
      "Real Estate",
      "Professional Services",
      "Fitness & Wellness",
      "Retail",
    ],
    nearbyCity: "New York",
  },
  {
    slug: "princeton",
    name: "Princeton",
    state: "New Jersey",
    stateAbbr: "NJ",
    population: 30,
    region: "northeast",
    tier: 3,
    description:
      "Princeton's economy orbits Princeton University while also supporting a dense corridor of pharmaceutical research campuses, biotech startups, and professional service firms that serve both the academic community and the broader Central Jersey market. The town's highly educated resident base makes content quality non-negotiable — vague marketing language gets ignored, while detailed, authoritative positioning earns trust and referrals. Healthcare providers and legal firms in particular benefit from technically precise SEO strategies that speak to an audience accustomed to rigorous, evidence-based communication.",
    industries: [
      "Biotech & Pharmaceuticals",
      "Higher Education",
      "Healthcare",
      "Professional Services",
      "Real Estate",
    ],
    nearbyCity: "Trenton",
  },
  {
    slug: "morristown",
    name: "Morristown",
    state: "New Jersey",
    stateAbbr: "NJ",
    population: 20000,
    region: "northeast",
    tier: 3,
    description:
      "Morristown is the commercial hub of Morris County, a wealthy suburban corridor that attracts corporate headquarters, healthcare networks, and financial advisory firms seeking proximity to New York with a more affordable operating footprint. The town's historic downtown is experiencing a dining and retail renaissance that draws consumers from across the county, creating strong local search demand that local businesses — especially restaurants, boutiques, and personal service providers — can capture with well-executed local SEO and targeted digital advertising.",
    industries: [
      "Financial & Wealth Management",
      "Healthcare",
      "Legal Services",
      "Hospitality & Dining",
      "Real Estate",
    ],
    nearbyCity: "Newark",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByRegion(
  region: City["region"]
): City[] {
  return cities.filter((c) => c.region === region);
}

export function getNearbyInRegion(city: City, limit = 4): City[] {
  return cities
    .filter((c) => c.region === city.region && c.slug !== city.slug)
    .slice(0, limit);
}
