"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

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

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Parse the numeric portion from the stat value
    const match = value.match(/^([+-]?)(\d+\.?\d*)(.*)/);
    if (!match) {
      setDisplayed(value);
      return;
    }

    const prefix = match[1];
    const target = parseFloat(match[2]);
    const suffix = match[3];
    const duration = 1200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (target % 1 !== 0) {
        setDisplayed(`${prefix}${current.toFixed(1)}${suffix}`);
      } else {
        setDisplayed(`${prefix}${Math.round(current)}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayed(value);
      }
    };

    // Words like "Top 3", "Zero" -- just reveal them
    if (isNaN(parseFloat(match[2]))) {
      setDisplayed(value);
      return;
    }

    setDisplayed(`${prefix}0${suffix}`);
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref}>
      <div className="text-2xl md:text-3xl font-bold text-[#00D4FF] tracking-tight">
        {displayed}
      </div>
      <div className="text-[#86868B] text-xs mt-1 font-medium uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-56 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover scale-110 transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      {/* Gradient overlay that shifts on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-all duration-500 group-hover:from-black/60 group-hover:via-[#00D4FF]/5 group-hover:to-transparent" />
    </div>
  );
}

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
            Proven capabilities that drive measurable growth for businesses like
            yours.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#1D1D1F] text-white shadow-lg"
                  : "bg-white text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white border border-[#D2D2D7]"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-[#1D1D1F] rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Capabilities Grid with AnimatePresence */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={`${item.capability}-${item.category}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden group cursor-pointer h-full shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00D4FF]/30 border border-transparent">
                  {/* Parallax Image */}
                  <div className="relative">
                    <ParallaxImage
                      src={item.image}
                      alt={`${item.capability} - ${item.title}`}
                    />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-[#1D1D1F] shadow-sm">
                        {item.category}
                      </span>
                    </div>

                    {/* Industry info on image */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <p className="text-white/90 text-sm font-medium">
                        {item.capability}{" "}
                        <span className="text-white/60">&#8226;</span>{" "}
                        <span className="text-white/70">{item.industry}</span>
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Stats */}
                    <div className="flex gap-6 mb-5">
                      {item.stats.map((stat, j) => (
                        <AnimatedStat
                          key={j}
                          value={stat.value}
                          label={stat.label}
                        />
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-[#1D1D1F] leading-snug group-hover:text-[#0071E3] transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Learn More Link - always visible */}
                    <div className="mt-5 flex items-center gap-2 text-[#0071E3] text-sm font-medium transition-all duration-300 group-hover:gap-3">
                      Learn More
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D1D1F] text-white rounded-full text-base font-medium hover:bg-[#000000] transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-xl"
          >
            Explore Our Services
            <svg
              className="w-4 h-4 transition-transform duration-300 hover:translate-x-1"
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
      </div>
    </section>
  );
}
