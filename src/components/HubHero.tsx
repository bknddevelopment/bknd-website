"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

interface HubHeroProps {
  title: string;
  description: string;
  featuredPost?: BlogPost;
  hubSlug: string;
}

export function HubHero({
  title,
  description,
  featuredPost,
  hubSlug,
}: HubHeroProps) {
  return (
    <section className="page-hero bg-white">
      <div className="container-sg">
        <AnimateOnScroll>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
            {/* Left: Title and Description */}
            <div>
              <h1 className="page-title mb-4 font-semibold text-[#1D1D1F]">
                {title}
              </h1>
              <p className="page-lead max-w-xl text-[#86868B]">
                {description}
              </p>
            </div>

            {/* Right: Featured Article */}
            {featuredPost && (
              <div className="rounded-[28px] border border-gray-200/80 bg-[#F5F5F7] p-6 sm:p-8 lg:ml-auto lg:max-w-[32rem]">
                <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-[#00D4FF]">
                  Featured
                </span>
                <Link
                  href={`/${hubSlug}/${featuredPost.slug}`}
                  className="group block"
                >
                  <h2 className="mb-3 text-2xl font-semibold text-[#1D1D1F] transition-colors duration-200 group-hover:text-[#00D4FF] lg:text-3xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mb-4 leading-relaxed text-[#86868B]">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="text-[#86868B] text-sm">
                      {formatDate(featuredPost.date)}
                    </span>
                    <span className="text-[#86868B] text-sm">
                      {featuredPost.readTime}
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
