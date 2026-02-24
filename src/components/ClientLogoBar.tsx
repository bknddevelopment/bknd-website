"use client";

import { useEffect, useState } from "react";

// Industries we serve - honest representation without fake company names
const industries = [
  "SaaS Companies",
  "E-commerce Brands",
  "B2B Tech",
  "FinTech Startups",
  "Healthcare Tech",
  "Developer Tools",
  "AI & ML Companies",
  "Marketplace Platforms",
];

export default function ClientLogoBar() {
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-[#050A14] relative overflow-hidden border-t border-b border-white/5">
      <div className="container-sg relative z-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00D4FF]/50" />
          <p className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase">
            Engineering growth for
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00D4FF]/50" />
        </div>

        {/* Text Marquee Container */}
        <div
          className="relative group cursor-default"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* True black gradient fade edges matching the new background */}
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-r from-[#050A14] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-l from-[#050A14] to-transparent z-10 pointer-events-none" />

          {/* Sharp glowing track line behind text */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

          {/* Scrolling container */}
          <div className="overflow-hidden py-4">
            <div
              className={`flex items-center ${isPaused ? "" : "animate-marquee"}`}
              style={isPaused ? { animationPlayState: "paused" } : {}}
            >
              {/* Repeated industry labels with separators */}
              {[...industries, ...industries, ...industries, ...industries].map(
                (industry, i) => (
                  <div key={i} className="flex items-center flex-shrink-0">
                    <span className="text-white/30 text-xl lg:text-3xl font-bold tracking-tight whitespace-nowrap px-8 lg:px-12 hover:text-white transition-colors duration-500 inline-block drop-shadow-[0_0_15px_rgba(255,255,255,0)] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                      {industry}
                    </span>
                    <span className="text-[#00D4FF]/40 text-lg group-hover:text-[#00D4FF] transition-colors duration-500">&#x2022;</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
