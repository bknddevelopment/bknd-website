import type { MetadataRoute } from "next";
import { getAllPosts, type BlogCategory } from "@/lib/blog";
import { getAllContent } from "@/lib/content";
import type { ContentCategory } from "@/lib/content-types";
import { cities } from "@/data/cities";
import { glossaryTerms } from "@/data/glossary-terms";

export const dynamic = "force-static";

const BASE_URL = "https://bknddevelopment.com";

// Blog category → URL hub segment
const blogCategoryToRoute: Record<BlogCategory, string> = {
  ai: "ai",
  marketing: "marketing",
  seo: "seo-insights",
  news: "industry-news",
};

// New content category → URL segment
const contentCategoryToRoute: Record<ContentCategory, string> = {
  comparison: "compare",
  "cost-guide": "cost",
  "best-of": "best",
  "industry-guide": "best", // industry guides live under /best for now
  alternatives: "alternatives",
  glossary: "glossary",
  tool: "tools",
  location: "locations",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // ── Static pages ────────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    // Legacy blog category hubs
    { url: `${BASE_URL}/ai`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/marketing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/seo-insights`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/industry-news`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    // Build pages
    { url: `${BASE_URL}/build/websites`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/build/marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/build/platforms`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Services
    { url: `${BASE_URL}/services/ai`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/ai/geo`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/services/ai/chatbots`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/services/ai/custom`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/services/ai/automation`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/services/seo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/seo/new-jersey`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/content`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/paid-advertising`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/analytics`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/cro`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/creative`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Methodology
    { url: `${BASE_URL}/methodology/ai`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Industries
    { url: `${BASE_URL}/industries`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/industries/hvac-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/industries/dental-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/industries/roofing-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/industries/plumbing-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/industries/restaurant-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Hardcoded location page
    { url: `${BASE_URL}/locations/elizabeth-nj`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // New content pillar hubs
    { url: `${BASE_URL}/compare`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/cost`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/best`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/alternatives`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/glossary`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Legal
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/accessibility`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // ── Legacy blog posts ────────────────────────────────────────────────────────
  const blogPosts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/${blogCategoryToRoute[post.category]}/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // ── New content system posts (comparisons, cost guides, best-of, etc.) ──────
  const contentPosts = getAllContent();
  const contentPages: MetadataRoute.Sitemap = contentPosts.map((post) => ({
    url: `${BASE_URL}/${contentCategoryToRoute[post.category]}/${post.slug}`,
    lastModified: post.modifiedDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // ── Location pages from cities array ────────────────────────────────────────
  const locationPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/locations/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Glossary term pages from glossary-terms data ─────────────────────────────
  const glossaryPages: MetadataRoute.Sitemap = glossaryTerms.map((term) => ({
    url: `${BASE_URL}/glossary/${term.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...blogPages,
    ...contentPages,
    ...locationPages,
    ...glossaryPages,
  ];
}
