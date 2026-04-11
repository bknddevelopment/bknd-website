import Link from 'next/link';
import type { ContentPost } from '@/lib/content-types';

interface RelatedArticlesProps {
  posts: ContentPost[];
  basePath?: string;
}

const pillarPaths: Record<string, string> = {
  comparisons: 'compare',
  'cost-guides': 'cost',
  'best-of': 'best',
  'industry-guides': 'industries',
  alternatives: 'alternatives',
  glossary: 'glossary',
  tools: 'tools',
  locations: 'locations',
};

export function RelatedArticles({ posts, basePath }: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold text-[#1D1D1F] mb-8">
        Related Articles
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => {
          const path = basePath ?? pillarPaths[post.pillar] ?? post.pillar;
          return (
            <Link
              key={post.slug}
              href={`/${path}/${post.slug}`}
              className="group block rounded-[4px] border border-[#F5F5F7] overflow-hidden hover:border-[#00D4FF] transition-colors duration-200"
            >
              {post.featuredImage && (
                <div className="aspect-video bg-[#F5F5F7] overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.featuredImageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-base font-semibold text-[#1D1D1F] mb-2 group-hover:text-[#00D4FF] transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[#86868B] leading-relaxed line-clamp-2 mb-3">
                  {post.description}
                </p>
                <span className="text-xs text-[#86868B]">
                  {post.readingTime} min read
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
