"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";

const categories = ["All", "SEO", "Paid Media", "CRO"];

const capabilities = [
  {
    category: "SEO",
    stats: [
      { value: "+400%", label: "Traffic" },
      { value: "50+", label: "Citations" },
      { value: "Top 3", label: "Map Pack" },
    ],
    title: "From invisible to page 1 in 90 days",
    capability: "Local SEO Dominance",
    industry: "Service Businesses",
    image: "/images/case-studies/local-seo.jpg",
  },
  {
    category: "Paid Media",
    stats: [
      { value: "4.2x", label: "ROAS" },
      { value: "-40%", label: "CPA" },
      { value: "+180%", label: "Conversions" },
    ],
    title: "Profitable campaigns from day one",
    capability: "Paid Media Scaling",
    industry: "E-commerce & Lead Gen",
    image: "/images/case-studies/paid-media.jpg",
  },
  {
    category: "SEO",
    stats: [
      { value: "+300%", label: "Crawl Efficiency" },
      { value: "95+", label: "PageSpeed" },
      { value: "Zero", label: "Critical Errors" },
    ],
    title: "Fixing what other agencies missed",
    capability: "Technical SEO Overhaul",
    industry: "All Industries",
    image: "/images/case-studies/technical-seo.jpg",
  },
  {
    category: "SEO",
    stats: [
      { value: "50+", label: "Page 1 Rankings" },
      { value: "+250%", label: "Organic Traffic" },
      { value: "12x", label: "Engagement" },
    ],
    title: "Strategic content, not content mills",
    capability: "Content That Ranks",
    industry: "B2B & Professional Services",
    image: "/images/case-studies/content-marketing.jpg",
  },
  {
    category: "CRO",
    stats: [
      { value: "+85%", label: "Conversion Rate" },
      { value: "3x", label: "Lead Volume" },
      { value: "-25%", label: "Bounce Rate" },
    ],
    title: "Stop leaving money on the table",
    capability: "Conversion Optimization",
    industry: "Any Website",
    image: "/images/case-studies/cro.jpg",
  },
];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? capabilities
      : capabilities.filter((c) => c.category === activeCategory);

  return (
    <section className="bg-[#F5F5F7] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-[#6E6E73] mb-4">
              What We Deliver
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1D1D1F] tracking-tight mb-6">
              Results That{" "}
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#0071E3] bg-clip-text text-transparent">
                Speak for Themselves
              </span>
            </h2>
            <p className="text-xl text-[#86868B] max-w-2xl mx-auto">
              Proven capabilities that drive measurable growth for businesses
              like yours.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Category Filters - Apple-style toggle */}
        <AnimateOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#1D1D1F] text-white"
                    : "bg-white text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white border border-[#D2D2D7]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((item, i) => (
            <AnimateOnScroll key={i} delay={0.1 + i * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden group cursor-pointer h-full shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                {/* Image Area */}
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.capability} - ${item.title}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-[#1D1D1F]">
                      {item.category}
                    </span>
                  </div>

                  {/* Industry info on image */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <p className="text-white/90 text-sm font-medium">
                      {item.capability} <span className="text-white/60">•</span>{" "}
                      <span className="text-white/70">{item.industry}</span>
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Stats */}
                  <div className="flex gap-6 mb-5">
                    {item.stats.map((stat, j) => (
                      <div key={j}>
                        <div className="text-xl md:text-2xl font-semibold text-[#00D4FF]">
                          {stat.value}
                        </div>
                        <div className="text-[#86868B] text-xs mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#1D1D1F] leading-snug group-hover:text-[#0071E3] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Learn More Link */}
                  <div className="mt-5 flex items-center gap-2 text-[#0071E3] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* View All CTA */}
        <AnimateOnScroll delay={0.4}>
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D1D1F] text-white rounded-full text-base font-medium hover:bg-[#000000] transition-all duration-300 hover:scale-105"
            >
              Explore Our Services
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
