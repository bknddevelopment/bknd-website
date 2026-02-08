"use client";

import { Check, X, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const comparisons = [
  {
    them: "Focus on vanity metrics",
    us: "Laser-focused on revenue-driving KPIs",
  },
  { them: "Incremental improvements", us: "Transformative growth strategies" },
  {
    them: "Cookie-cutter approaches",
    us: "Custom, innovative solutions for each client",
  },
  {
    them: "Reactive to market trends",
    us: "Proactive in creating new marketing angles",
  },
  {
    them: "Limited cross-channel integration",
    us: "Seamless multi-platform strategies",
  },
  {
    them: "Manual, time-consuming processes",
    us: "AI-driven, scalable solutions",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 lg:py-20 bg-[#F5F5F7]">
      <div className="container-sg">
        {/* Section Header */}
        <AnimateOnScroll>
          <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
            Why Choose Us
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h2 className="text-[#1D1D1F] text-3xl lg:text-5xl font-semibold text-center mb-4 max-w-3xl mx-auto tracking-tight">
            The BKND Difference
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <p className="text-[#86868B] text-lg lg:text-xl text-center mb-10 max-w-2xl mx-auto">
            See how we compare to traditional agencies
          </p>
        </AnimateOnScroll>

        {/* Comparison Cards */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Table Headers */}
          <AnimateOnScroll delay={0.2}>
            <div className="hidden md:grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <span className="text-[#86868B] text-sm font-medium uppercase tracking-wide">
                  Traditional Agencies
                </span>
              </div>
              <div className="text-center">
                <span className="text-[#1D1D1F] text-sm font-medium uppercase tracking-wide">
                  BKND
                </span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Comparison Rows - each row animates in with stagger */}
          <div className="space-y-4 relative">
            {/* Subtle connecting line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00D4FF]/20 to-transparent -translate-x-1/2 pointer-events-none" />

            {comparisons.map((item, i) => (
              <AnimateOnScroll key={i} delay={0.25 + i * 0.08}>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  {/* Traditional Agency Card */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200/80 flex items-start gap-4 transition-all duration-300 hover:border-red-300/50 hover:bg-red-50/30">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                      <X className="w-3.5 h-3.5 text-[#86868B]" />
                    </div>
                    <span className="text-[#86868B] text-base leading-relaxed">
                      {item.them}
                    </span>
                  </div>

                  {/* BKND Card */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200/80 flex items-start gap-4 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00D4FF]/10 flex items-center justify-center">
                      <Check
                        className="w-3.5 h-3.5 text-[#00D4FF]"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-[#1D1D1F] text-base leading-relaxed font-medium">
                      {item.us}
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <AnimateOnScroll delay={0.7}>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1D1D1F] text-white font-medium rounded-full transition-all duration-300 hover:bg-[#000000] hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] hover:scale-[1.03]"
            >
              Get Your Custom Growth Strategy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
