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
      <section className="bg-white pb-24 lg:pb-32">
        <div className="container-sg">
          <p className="text-[#86868B] text-lg text-center">
            No articles found in this category.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white pb-24 lg:pb-32">
      <div className="container-sg">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <AnimateOnScroll key={post.slug} delay={index * 0.1}>
              <Link href={`/${basePath}/${post.slug}`} className="group block h-full">
                <article className="flex h-full flex-col rounded-[28px] border border-gray-200/80 bg-[#F5F5F7] p-6 transition-all duration-300 hover:border-[#00D4FF]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] sm:p-7">
                  <div className="mb-4">
                    <span className="text-[#86868B] text-sm">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-[#86868B] text-sm mx-2">·</span>
                    <span className="text-[#86868B] text-sm">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mb-3 text-xl font-semibold text-[#1D1D1F] transition-colors duration-200 group-hover:text-[#00D4FF] lg:text-2xl">
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
