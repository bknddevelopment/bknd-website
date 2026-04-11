"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { GlossaryTermData } from "@/data/glossary-terms";

interface GlossaryIndexProps {
  terms: GlossaryTermData[];
}

type Category = GlossaryTermData["category"] | "all";

const categoryLabels: Record<Category, string> = {
  all: "All",
  seo: "SEO",
  "web-dev": "Web Dev",
  marketing: "Marketing",
  ai: "AI",
  business: "Business",
  design: "Design",
  analytics: "Analytics",
};

const categories: Category[] = ["all", "seo", "web-dev", "marketing", "ai", "business"];

export function GlossaryIndex({ terms }: GlossaryIndexProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return terms.filter((term) => {
      const matchesCategory =
        activeCategory === "all" || term.category === activeCategory;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        term.term.toLowerCase().includes(q) ||
        term.shortDefinition.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [terms, activeCategory, search]);

  // Group by first letter
  const grouped = useMemo(() => {
    const map: Record<string, GlossaryTermData[]> = {};
    for (const term of filtered) {
      const letter = term.term[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(term);
    }
    return map;
  }, [filtered]);

  const letters = Object.keys(grouped).sort();

  return (
    <div>
      {/* Search */}
      <div className="relative mb-6">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868B]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>
        <input
          type="search"
          placeholder="Search terms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm pl-10 pr-4 py-2.5 border border-[#F5F5F7] rounded-[4px] text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:border-[#00D4FF] transition-colors text-sm"
        />
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-[20px] text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-[#1D1D1F] text-white"
                : "bg-[#F5F5F7] text-[#86868B] hover:bg-[#1D1D1F]/10 hover:text-[#1D1D1F]"
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* A-Z index */}
      {letters.length === 0 ? (
        <p className="text-[#86868B] py-8">
          No terms found matching &ldquo;{search}&rdquo;.
        </p>
      ) : (
        <div className="space-y-12">
          {letters.map((letter) => (
            <div key={letter}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-[#1D1D1F]">
                  {letter}
                </span>
                <div className="flex-1 h-px bg-[#F5F5F7]" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {grouped[letter].map((term) => (
                  <Link
                    key={term.slug}
                    href={`/glossary/${term.slug}`}
                    className="group block bg-white border border-[#F5F5F7] hover:border-[#00D4FF] rounded-[4px] p-4 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h2 className="text-base font-semibold text-[#1D1D1F] group-hover:text-[#00D4FF] transition-colors">
                        {term.term}
                      </h2>
                      <span className="flex-shrink-0 text-xs text-[#86868B] bg-[#F5F5F7] px-2 py-0.5 rounded-[20px] uppercase tracking-wide mt-0.5">
                        {categoryLabels[term.category]}
                      </span>
                    </div>
                    <p className="text-sm text-[#86868B] line-clamp-2 leading-relaxed">
                      {term.shortDefinition.slice(0, 110)}
                      {term.shortDefinition.length > 110 ? "…" : ""}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Count */}
      {filtered.length > 0 && (
        <p className="text-sm text-[#86868B] mt-10 text-center">
          Showing {filtered.length} of {terms.length} terms
        </p>
      )}
    </div>
  );
}
