"use client";

import { useState } from "react";
import Link from "next/link";
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
        <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <h1 className="text-[40px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] mb-4">
                Insights
              </h1>
              <p className="text-[#86868B] text-lg lg:text-xl max-w-xl mb-8">
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
        <section className="pb-24 lg:pb-32 bg-white">
          <div className="container-sg">
            {filteredPosts.length === 0 ? (
              <p className="text-[#86868B] text-lg text-center">
                No articles found in this category.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <AnimateOnScroll key={post.slug} delay={index * 0.1}>
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <article className="h-full">
                        {post.image && (
                          <div className="mb-4 overflow-hidden rounded">
                            <img
                              src={post.image}
                              alt={post.imageAlt || post.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
