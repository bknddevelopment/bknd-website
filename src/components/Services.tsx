"use client";

import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

// Code bracket icon — Websites
const WebsitesIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white transition-all duration-500 group-hover:scale-110 group-hover:text-[#00D4FF] group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
  >
    <path d="M16 12L6 24l10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 12l10 12-10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 8L20 40" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Brain/AI icon — Marketing
const MarketingIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white transition-all duration-500 group-hover:scale-110 group-hover:text-[#00D4FF] group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
  >
    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
    <path d="M24 8c4 4 4 12 0 16s-4 12 0 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 24h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="4" stroke="#06B6D4" strokeWidth="2" />
    <circle cx="24" cy="24" r="1.5" fill="#06B6D4" />
    <path d="M36 8l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" stroke="#06B6D4" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

// Layers icon — Platforms
const PlatformsIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white transition-all duration-500 group-hover:scale-110 group-hover:text-[#00D4FF] group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
  >
    <path d="M24 6L6 16l18 10 18-10L24 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M6 24l18 10 18-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 32l18 10 18-10" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const pillars: Pillar[] = [
  {
    id: "websites",
    title: "Websites",
    subtitle: "Software-Built, Not Template-Assembled",
    description:
      "Custom websites written in code. Performance-first architecture, SEO engineered in from day one, and pages that load instantly. No page builders. No compromises.",
    link: "/build/websites",
    icon: <WebsitesIcon />,
  },
  {
    id: "marketing",
    title: "Marketing",
    subtitle: "AI-Powered, Full-Stack Execution",
    description:
      "SEO, content, ads, analytics, and CRO — all run by one person with AI and custom software. No account managers. No handoffs. Just results that compound.",
    link: "/build/marketing",
    icon: <MarketingIcon />,
  },
  {
    id: "platforms",
    title: "Platforms",
    subtitle: "Custom Software & SaaS Products",
    description:
      "From internal tools to SaaS products, we design and build custom software that solves real business problems. If you can describe it, we can build it.",
    link: "/build/platforms",
    icon: <PlatformsIcon />,
  },
];

function PillarCard({
  pillar,
  index,
}: {
  pillar: Pillar;
  index: number;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] bg-[#0A0F1A]/80 p-7 backdrop-blur-3xl transition-all duration-700 hover:-translate-y-2 sm:p-8 lg:p-10 ${
        index === pillars.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* 1px Default Border */}
      <div className="absolute inset-0 border border-white/[0.08] rounded-[24px] pointer-events-none" />

      {/* Animated Glowing Border Mask on Hover */}
      <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none p-[1px] overflow-hidden">
        <div className="absolute inset-[-50%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#00D4FF_100%)] opacity-30" />
        <div className="absolute inset-[1px] bg-[#0A0F1A]/90 rounded-[23px]" />
      </div>

      {/* Ambient hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/0 via-transparent to-[#8A2BE2]/0 group-hover:from-[#00D4FF]/10 group-hover:to-[#8A2BE2]/5 transition-all duration-700 delay-100" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-7">{pillar.icon}</div>

        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#00D4FF] transition-colors duration-500">
          {pillar.title}
        </h3>
        <p className="text-[#00D4FF]/70 text-[13px] uppercase tracking-widest font-semibold mb-6 group-hover:text-[#00D4FF] transition-colors duration-500">
          {pillar.subtitle}
        </p>

        <p className="mb-8 flex-grow text-[15px] font-light leading-[1.7] text-[#86868B] transition-colors duration-500 group-hover:text-white/70 lg:mb-10">
          {pillar.description}
        </p>

        <div className="mt-auto">
          <a
            href={pillar.link}
            className="inline-flex items-center gap-3 text-white/50 text-sm font-semibold uppercase tracking-wider transition-all duration-500 group-hover:text-white"
          >
            <span className="relative overflow-hidden">
              <span className="block transition-transform duration-500 group-hover:-translate-y-full">Learn More</span>
              <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-[#00D4FF]">Learn More</span>
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:text-[#00D4FF]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="pillars"
      className="relative overflow-hidden bg-[#050A14] py-16 md:py-24"
    >
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-[48vw] w-[48vw] max-h-[360px] max-w-[360px] rounded-full bg-[#00D4FF]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[-5%] h-[42vw] w-[42vw] max-h-[420px] max-w-[420px] rounded-full bg-[#8A2BE2]/5 blur-[150px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimateOnScroll>
          <div className="flex justify-center mb-12">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-60" />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-5xl group">
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0088CC]">
                Build
              </span>
            </h2>
            <p className="text-base leading-relaxed text-[#86868B] md:text-xl">
              Three pillars. One builder. Everything made in code, powered by
              AI, and designed to grow your business.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <PillarCard key={pillar.id} pillar={pillar} index={index} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
