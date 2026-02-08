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
    <section className="py-12 lg:py-16 bg-gradient-to-b from-[#0f1724] via-[#141e2e] to-[#1a2332] relative overflow-hidden">
      <div className="container-sg relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-[#E9EFF4]/50 text-sm font-medium tracking-wide">
            We work with ambitious teams in
          </p>
        </div>

        {/* Text Marquee Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-[#0f1724] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-[#1a2332] to-transparent z-10 pointer-events-none" />

          {/* Center glow effect */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-16 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />

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
                    <span className="text-[#E9EFF4]/40 text-base lg:text-lg font-medium whitespace-nowrap px-4 lg:px-6 hover:text-[#E9EFF4]/80 hover:scale-105 transition-all duration-300 cursor-default inline-block">
                      {industry}
                    </span>
                    <span className="text-[#00D4FF]/30 text-sm">&#x2022;</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-6 flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
