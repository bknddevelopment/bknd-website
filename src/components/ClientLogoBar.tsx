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
    <section className="py-12 lg:py-16 bg-[#2F333B] relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2F333B] via-[#2F343A]/20 to-[#2F333B]" />

      <div className="container-sg relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-[#E9EFF4]/50 text-sm font-medium tracking-wide">
            We work with ambitious teams in
          </p>
        </div>

        {/* Text Marquee Container */}
        <div
          className={`relative transition-all duration-700 delay-200 ${mounted ? "opacity-100" : "opacity-0"}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-[#2F333B] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-[#2F333B] to-transparent z-10 pointer-events-none" />

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
                    <span className="text-[#E9EFF4]/40 text-base lg:text-lg font-medium whitespace-nowrap px-4 lg:px-6 hover:text-[#E9EFF4]/70 transition-colors cursor-default">
                      {industry}
                    </span>
                    <span className="text-[#F27038]/40 text-sm">•</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className={`mt-6 flex justify-center transition-all duration-700 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#F27038]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
