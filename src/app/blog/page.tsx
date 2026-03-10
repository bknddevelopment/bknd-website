"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { getAllPosts, formatDate, type BlogCategory } from "@/lib/blog";

const categoryFilters: { label: string; value: BlogCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "AI", value: "ai" },
  { label: "Marketing", value: "marketing" },
  { label: "SEO", value: "seo" },
  { label: "News", value: "news" },
];

const categoryToHub: Record<BlogCategory, string> = {
  ai: "/ai",
  marketing: "/marketing",
  seo: "/seo-insights",
  news: "/industry-news",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">(
    "all",
  );
  const allPosts = getAllPosts();

  const filteredPosts =
    activeCategory === "all"
      ? allPosts
      : allPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="page-hero bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <h1 className="page-title mb-4 font-semibold text-[#1D1D1F]">
                Insights
              </h1>
              <p className="page-lead mb-8 max-w-xl text-[#86868B]">
                Practical thinking on marketing that works.
              </p>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-3">
                {categoryFilters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setActiveCategory(filter.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === filter.value
                        ? "bg-[#1D1D1F] text-white"
                        : "bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED]"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="bg-white pb-24 lg:pb-32">
          <div className="container-sg">
            {filteredPosts.length === 0 ? (
              <p className="text-[#86868B] text-lg text-center">
                No articles found in this category.
              </p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredPosts.map((post, index) => (
                  <AnimateOnScroll key={post.slug} delay={index * 0.1}>
                    <Link href={`${categoryToHub[post.category]}/${post.slug}`} className="group block h-full">
                      <article className="flex h-full flex-col rounded-[28px] border border-gray-200/80 bg-[#F5F5F7] p-6 transition-all duration-300 hover:border-[#00D4FF]/30 hover:shadow-[0_18px_48px_rgba(0,0,0,0.05)] sm:p-7">
                        {post.image && (
                          <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl">
                            <Image
                              src={post.image}
                              alt={post.imageAlt || post.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        )}
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
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
