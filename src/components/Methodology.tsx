"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { OpusiteFormTrigger } from "@/components/OpusiteFormPopup";

interface Step {
  id: number;
  phase: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight: string;
}

// Custom SVG icons for each phase - Apple-style minimal with cyan accents
const AuditIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M21 21l7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M10 14h8" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 10v8" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ArchitectIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="4"
      width="10"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="18"
      y="4"
      width="10"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="4"
      y="18"
      width="10"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="18"
      y="18"
      width="10"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M14 9h4M14 23h4M9 14v4M23 14v4"
      stroke="#00D4FF"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const OptimizeIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 24l6-8 6 4 8-12 4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="16" r="2" fill="#00D4FF" />
    <circle cx="16" cy="20" r="2" fill="#00D4FF" />
    <circle cx="24" cy="8" r="2" fill="#00D4FF" />
    <path
      d="M24 12v12M20 20h8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
  </svg>
);

const steps: Step[] = [
  {
    id: 1,
    phase: "Week 1",
    title: "Learn",
    description:
      "Deep dive into your business, competitors, and market. AI-powered research surfaces opportunities humans miss. We understand before we build.",
    icon: <AuditIcon />,
    highlight: "AI-Powered Research",
  },
  {
    id: 2,
    phase: "Weeks 2-4",
    title: "Build",
    description:
      "Website, marketing system, or platform — built in code with SEO and performance engineered in from day one. No templates. No shortcuts.",
    icon: <ArchitectIcon />,
    highlight: "Built in Code",
  },
  {
    id: 3,
    phase: "Ongoing",
    title: "Optimize",
    description:
      "Continuous improvement powered by real data. AI handles monitoring and analysis. Every week the system gets smarter and your results compound.",
    icon: <OptimizeIcon />,
    highlight: "Compounding Results",
  },
];

function AnimatedCounter({
  value,
  suffix = "",
  isSpecial = false,
}: {
  value: string;
  suffix?: string;
  isSpecial?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Try to parse numeric values
    const match = value.match(/^(\d+\.?\d*)(.*)/);
    if (!match) {
      const frame = requestAnimationFrame(() => {
        setDisplayed(value);
      });

      return () => cancelAnimationFrame(frame);
    }

    const resetFrame = requestAnimationFrame(() => {
      setDisplayed(`0${match[2]}`);
    });

    const target = parseFloat(match[1]);
    const valueSuffix = match[2];
    const duration = 1400;
    const startTime = performance.now();

    let animationFrame = 0;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (target % 1 !== 0) {
        setDisplayed(`${current.toFixed(1)}${valueSuffix}`);
      } else {
        setDisplayed(`${Math.round(current)}${valueSuffix}`);
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayed(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(resetFrame);
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, value]);

  return (
    <div ref={ref}>
      <p
        className={`text-3xl lg:text-4xl font-semibold mb-1 ${
          isSpecial ? "text-[#00D4FF]" : "text-white"
        }`}
        style={
          isSpecial
            ? {
                textShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
                animation: "cyanPulse 3s ease-in-out infinite",
              }
            : undefined
        }
      >
        {displayed}
        {suffix}
      </p>
    </div>
  );
}

function TimelineDot({ }: { index: number; totalSteps: number }) {
  return (
    <div className="absolute -top-[52px] left-1/2 transform -translate-x-1/2">
      <div
        className="w-4 h-4 rounded-full border-2 relative"
        style={{
          borderColor: "#00D4FF",
          backgroundColor: "#0a1628",
        }}
      >
        <div className="absolute inset-1 rounded-full bg-[#00D4FF]" />
      </div>
    </div>
  );
}

function AnimatedTimelineLine() {
  return (
    <div className="relative mb-12">
      <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div
        className="absolute left-[10%] right-[10%] top-1/2 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,212,255,0.1) 0%, rgba(0,212,255,0.4) 50%, rgba(0,212,255,0.1) 100%)",
        }}
      />
    </div>
  );
}

export default function Methodology() {
  return (
    <section
      id="methodology"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "linear-gradient(180deg, #0a1628 0%, #0f1d32 100%)",
      }}
    >
      {/* Keyframe animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes cyanPulse {
          0%, 100% { text-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
          50% { text-shadow: 0 0 40px rgba(0, 212, 255, 0.6), 0 0 60px rgba(0, 212, 255, 0.2); }
        }
        @keyframes orbDrift1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -20px); }
          66% { transform: translate(-20px, 15px); }
        }
        @keyframes orbDrift2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-25px, 20px); }
          66% { transform: translate(15px, -25px); }
        }
      `,
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient orbs with drift animation */}
      <div
        className="absolute left-1/4 top-0 h-[58vw] w-[58vw] max-h-[600px] max-w-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
          animation: "orbDrift1 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 h-[42vw] w-[42vw] max-h-[400px] max-w-[400px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)",
          animation: "orbDrift2 25s ease-in-out infinite",
        }}
      />

      <div className="container-sg relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#00D4FF" }}
          >
            Our Methodology
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
            How We Build
          </h2>
          <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Three phases. No handoffs. Learn your business, build the system,
            then optimize it forever.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          {/* Animated Timeline Line */}
          <AnimatedTimelineLine />

          {/* Steps Grid */}
          <div className="grid grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={step.id}>
                <div className="group relative">
                  {/* Animated connector dot */}
                  <TimelineDot index={index} totalSteps={steps.length} />

                  {/* Card with glassmorphism glow on hover */}
                  <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.08] hover:border-[#00D4FF]/40 hover:-translate-y-1 group-hover:shadow-[0_0_60px_rgba(0,212,255,0.15),0_4px_0_0_rgba(0,212,255,0.4)]">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs font-bold tracking-wider uppercase"
                        style={{ color: "#00D4FF" }}
                      >
                        {step.phase}
                      </span>
                      <span className="text-white/30 text-sm font-medium">
                        0{step.id}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mb-4 text-white/80 group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-lg font-semibold mb-2 tracking-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Highlight Tag */}
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "rgba(0, 212, 255, 0.1)",
                        color: "#00D4FF",
                        border: "1px solid rgba(0, 212, 255, 0.2)",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                      {step.highlight}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-5 top-0 w-[2px] bg-gradient-to-b from-[#00D4FF]/40 via-[#00D4FF]/20 to-transparent sm:left-6" />

            <div className="space-y-5 sm:space-y-6">
              {steps.map((step) => (
                <div key={step.id}>
                  <div className="relative flex gap-4 sm:gap-6">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#00D4FF]/40 bg-[#0a1628] sm:h-12 sm:w-12">
                        <span className="text-[#00D4FF] font-bold text-sm">
                          {step.id}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm sm:p-5">
                      {/* Phase */}
                      <span
                        className="text-xs font-bold tracking-wider uppercase"
                        style={{ color: "#00D4FF" }}
                      >
                        {step.phase}
                      </span>

                      {/* Title */}
                      <h3 className="text-white text-lg font-semibold mt-2 mb-2 tracking-tight">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/50 text-sm leading-relaxed mb-3">
                        {step.description}
                      </p>

                      {/* Highlight Tag */}
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: "rgba(0, 212, 255, 0.1)",
                          color: "#00D4FF",
                          border: "1px solid rgba(0, 212, 255, 0.2)",
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                        {step.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar with animated counters */}
        <div className="mt-16 lg:mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8">
            <div>
              <AnimatedCounter value="6" />
              <p className="text-white/50 text-sm">Weeks to First Results</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-semibold text-white mb-1">
                24/7
              </p>
              <p className="text-white/50 text-sm">AI-Powered Optimization</p>
            </div>
            <div>
              <AnimatedCounter value="100%" />
              <p className="text-white/50 text-sm">Data-Driven Decisions</p>
            </div>
            <div>
              <AnimatedCounter value="3.2x" isSpecial />
              <p className="text-white/50 text-sm">Average Client ROI</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <OpusiteFormTrigger
            className="group inline-flex items-center gap-3 rounded-full bg-[#00D4FF] px-6 py-3.5 font-medium text-white shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300 hover:bg-[#00B8E0] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] sm:px-8 sm:py-4 cursor-pointer"
          >
            Let&apos;s Build
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </OpusiteFormTrigger>
          <p className="text-white/40 text-sm mt-4">
            Free 30-minute strategy call. No commitment required.
          </p>
        </div>
      </div>
    </section>
  );
}
