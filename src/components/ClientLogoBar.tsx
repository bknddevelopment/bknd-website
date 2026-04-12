"use client";

import { useState } from "react";

// Industries we serve - honest representation without fake company names
const industries = [
  "Home Services",
  "Automotive",
  "Healthcare",
  "Construction",
  "Restaurants",
  "Professional Services",
  "Real Estate",
  "Retail",
];

export default function ClientLogoBar() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 lg:py-24 bg-[#050A14] relative overflow-hidden border-t border-b border-white/5">
      <div className="container-sg relative z-10">
        {/* Header */}
        <div className="mb-10 flex items-center justify-center gap-3 sm:gap-4 md:mb-12">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#00D4FF]/50 sm:w-12" />
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 sm:text-[11px]">
            Building software for
          </p>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#00D4FF]/50 sm:w-12" />
        </div>

        {/* Text Marquee Container */}
        <div
          className="relative group cursor-default"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* True black gradient fade edges matching the new background */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-14 bg-gradient-to-r from-[#050A14] to-transparent sm:w-24 lg:w-48" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-14 bg-gradient-to-l from-[#050A14] to-transparent sm:w-24 lg:w-48" />

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
                    <span className="inline-block whitespace-nowrap px-6 text-lg font-bold tracking-tight text-white/30 transition-colors duration-500 hover:text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] sm:px-8 sm:text-xl lg:px-12 lg:text-3xl">
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
