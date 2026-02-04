"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

interface ArticleGridProps {
  posts: BlogPost[];
  basePath: string;
}

export function ArticleGrid({ posts, basePath }: ArticleGridProps) {
  if (posts.length === 0) {
    return (
      <section className="pb-24 lg:pb-32 bg-white">
        <div className="container-sg">
          <p className="text-[#86868B] text-lg text-center">
            No articles found in this category.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-24 lg:pb-32 bg-white">
      <div className="container-sg">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <AnimateOnScroll key={post.slug} delay={index * 0.1}>
              <Link href={`/${basePath}/${post.slug}`} className="group block">
                <article className="h-full">
                  <div className="mb-4">
                    <span className="text-[#86868B] text-sm">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-[#86868B] text-sm mx-2">·</span>
                    <span className="text-[#86868B] text-sm">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-[#1D1D1F] mb-3 group-hover:text-[#00D4FF] transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-[#86868B] leading-relaxed">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
