import type { ContentCategory, ContentPillar, ContentPost } from '@/lib/content-types';

import { comparisons } from '@/content/comparisons';
import { costGuides } from '@/content/cost-guides';
import { bestOf } from '@/content/best-of';
import { industryGuides } from '@/content/industry-guides';
import { alternatives } from '@/content/alternatives';
import { glossaryTerms } from '@/content/glossary';
import { tools } from '@/content/tools';

// All content aggregated from every pillar directory
const allContent: ContentPost[] = [
  ...comparisons,
  ...costGuides,
  ...bestOf,
  ...industryGuides,
  ...alternatives,
  ...glossaryTerms,
  ...tools,
];

/**
 * Returns every content post across all pillars.
 */
export function getAllContent(): ContentPost[] {
  return allContent;
}

/**
 * Returns all posts that belong to a specific category.
 */
export function getContentByCategory(category: ContentCategory): ContentPost[] {
  return allContent.filter((post) => post.category === category);
}

/**
 * Returns a single post by category + slug, or undefined if not found.
 */
export function getContentBySlug(
  category: ContentCategory,
  slug: string,
): ContentPost | undefined {
  return allContent.find((post) => post.category === category && post.slug === slug);
}

/**
 * Returns posts related to the given post, limited to `limit` results (default 3).
 * Related posts share the same pillar or at least one tag, and are never the post itself.
 */
export function getRelatedContent(post: ContentPost, limit = 3): ContentPost[] {
  const postTags = new Set(post.tags);

  // Posts explicitly linked via relatedSlugs take priority
  // Supports "category/slug" format for cross-pillar refs, or plain slugs (same-pillar preferred)
  const explicit = post.relatedSlugs
    .map((ref) => {
      if (ref.includes('/')) {
        const [cat, s] = ref.split('/');
        return allContent.find((p) => p.category === cat && p.slug === s);
      }
      return (
        allContent.find((p) => p.pillar === post.pillar && p.slug === ref) ||
        allContent.find((p) => p.slug === ref)
      );
    })
    .filter((p): p is ContentPost => p !== undefined && p.slug !== post.slug);

  // Fill remaining slots with same-pillar or shared-tag posts
  const implicit = allContent.filter(
    (p) =>
      p.slug !== post.slug &&
      !post.relatedSlugs.includes(p.slug) &&
      (p.pillar === post.pillar || p.tags.some((t) => postTags.has(t))),
  );

  return [...explicit, ...implicit].slice(0, limit);
}

/**
 * Returns all posts that belong to a specific content pillar.
 */
export function getContentByPillar(pillar: ContentPillar): ContentPost[] {
  return allContent.filter((post) => post.pillar === pillar);
}
