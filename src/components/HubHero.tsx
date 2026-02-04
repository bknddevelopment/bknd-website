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
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-white">
      <div className="container-sg">
        <AnimateOnScroll>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Title and Description */}
            <div>
              <h1 className="text-[40px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] mb-4">
                {title}
              </h1>
              <p className="text-[#86868B] text-lg lg:text-xl max-w-xl">
                {description}
              </p>
            </div>

            {/* Right: Featured Article */}
            {featuredPost && (
              <div className="lg:pl-8">
                <span className="text-[#00D4FF] text-sm font-medium uppercase tracking-wider mb-4 block">
                  Featured
                </span>
                <Link
                  href={`/${hubSlug}/${featuredPost.slug}`}
                  className="group block"
                >
                  <h2 className="text-2xl lg:text-3xl font-semibold text-[#1D1D1F] mb-3 group-hover:text-[#00D4FF] transition-colors duration-200">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#86868B] leading-relaxed mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
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
