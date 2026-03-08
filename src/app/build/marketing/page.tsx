"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { ArrowRight, Check, X } from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    title: "SEO & Technical Optimization",
    description:
      "Site audits, keyword strategy, content optimization, schema markup, and Core Web Vitals — executed directly in code, not handed off to a dev team.",
  },
  {
    title: "Content Creation",
    description:
      "Blog posts, landing pages, and service pages written with AI assistance and human editing. Optimized for search intent, not just keywords.",
  },
  {
    title: "Paid Advertising",
    description:
      "Google Ads and Meta campaigns built with proper attribution and automated bidding. Every dollar tracked to a lead or sale.",
  },
  {
    title: "Local SEO",
    description:
      "Google Business Profile, citations, review management, and geo-targeted content. Built for businesses that serve local customers.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "GA4, Search Console, and custom dashboards. You always know what changed, what improved, and what to do next.",
  },
  {
    title: "Conversion Optimization",
    description:
      "A/B testing, funnel analysis, and landing page optimization. Turn more of your existing traffic into leads and customers.",
  },
];

const comparisons = [
  { agency: "15-person team with handoffs at every step", bknd: "One person runs the entire system end-to-end" },
  { agency: "Monthly reports you can barely understand", bknd: "Real-time dashboards with clear, actionable data" },
  { agency: "Strategy from juniors, reviewed by seniors", bknd: "Strategy and execution by the same experienced person" },
  { agency: "Changes take weeks to implement", bknd: "Changes go live the same day" },
  { agency: "Manual processes repeated for each client", bknd: "Custom software automates the repetitive work" },
  { agency: "Cookie-cutter playbooks for every industry", bknd: "AI-powered strategy tailored to your specific market" },
];

export default function MarketingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — Light */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-[900px]">
              <AnimateOnScroll>
                <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-6">
                  Marketing
                </p>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.1] mb-6">
                  Marketing powered by{" "}
                  <span className="text-[#00D4FF]">AI and software.</span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-8 max-w-[720px]">
                  Everything a 15-person agency does — SEO, content, ads,
                  analytics, CRO — handled by one person with AI and custom
                  software. Faster execution. Lower overhead. Better results.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-8 py-4 rounded-lg hover:bg-[#00D4FF] transition-all duration-300 font-medium text-[17px]"
                  >
                    Let&apos;s build your system
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/build/marketing/new-jersey"
                    className="inline-flex items-center justify-center gap-2 border border-[#D2D2D7] text-[#1D1D1F] px-8 py-4 rounded-lg hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-300 font-medium text-[17px]"
                  >
                    NJ Businesses
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* What the System Handles — 6 Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Full-Stack Marketing
              </p>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                What the System Handles
              </h2>
              <p className="text-[#86868B] text-lg text-center mb-12 max-w-2xl mx-auto">
                One integrated system replaces the patchwork of tools and people
                at a traditional agency.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
              {capabilities.map((item, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.05}>
                  <div className="bg-[#F5F5F7] rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why Different — Dark Comparison */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-4 tracking-tight">
                Agency vs. Software-Powered
              </h2>
              <p className="text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto">
                Why one person with the right tools beats a team with the wrong process.
              </p>
            </AnimateOnScroll>

            <div className="max-w-4xl mx-auto space-y-4">
              <div className="hidden md:grid md:grid-cols-2 gap-6 mb-4">
                <div className="text-center">
                  <span className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                    Traditional Agency
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-[#00D4FF] text-sm font-medium uppercase tracking-wide">
                    BKND
                  </span>
                </div>
              </div>

              {comparisons.map((item, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.05}>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-white/5 rounded-2xl p-5 flex items-start gap-3">
                      <X className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-[15px] leading-relaxed">
                        {item.agency}
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-5 flex items-start gap-3 border border-[#00D4FF]/20">
                      <Check className="w-4 h-4 text-[#00D4FF] flex-shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-white text-[15px] leading-relaxed font-medium">
                        {item.bknd}
                      </span>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F5F5F7] py-24 lg:py-32">
          <div className="container-sg">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll>
                <h2 className="text-4xl lg:text-5xl font-semibold text-[#1D1D1F] tracking-tight mb-6">
                  Ready to replace your agency
                  <br />
                  <span className="text-[#00D4FF]">with a system?</span>
                </h2>
                <p className="text-xl text-[#86868B] mb-12 max-w-xl mx-auto">
                  Free audit. We&apos;ll show you exactly where you&apos;re
                  leaving money on the table.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1D1D1F] hover:bg-[#00D4FF] text-white font-medium rounded-full transition-all duration-300"
                >
                  Get Your Free Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
