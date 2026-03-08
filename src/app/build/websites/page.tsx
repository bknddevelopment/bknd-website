"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const differentiators = [
  {
    template: "Built from themes and templates",
    software: "Built from scratch in code",
  },
  {
    template: "Same structure as thousands of other sites",
    software: "Custom architecture for your business",
  },
  {
    template: "Slow — loaded with unused code",
    software: "Fast — only the code you need",
  },
  {
    template: "Locked into one platform's limitations",
    software: "Built on open standards, fully portable",
  },
  {
    template: "Generic SEO out of the box",
    software: "SEO engineered into every page",
  },
  {
    template: "Breaks when you try to customize",
    software: "Designed to grow and change with you",
  },
];

const techApproach = [
  {
    title: "Performance First",
    description:
      "Every site scores 90+ on Google PageSpeed. We optimize images, minimize JavaScript, and use edge caching so your pages load instantly.",
  },
  {
    title: "SEO Built In",
    description:
      "Schema markup, semantic HTML, perfect heading hierarchy, and optimized metadata baked into every page from day one.",
  },
  {
    title: "AI-Ready Architecture",
    description:
      "Your site is structured so AI search engines (ChatGPT, Gemini, Perplexity) can understand and cite your content.",
  },
];

const industries = [
  "Home Services",
  "Healthcare",
  "Professional Services",
  "Construction",
  "Automotive",
  "Retail & E-commerce",
  "Real Estate",
  "Restaurants",
];

export default function WebsitesPage() {
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
                  Websites
                </p>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.1] mb-6">
                  Websites built like{" "}
                  <span className="text-[#00D4FF]">software.</span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-8 max-w-[720px]">
                  Not templates. Not page builders. Your website is written in
                  code, optimized for performance, and engineered to rank on
                  Google from day one.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-8 py-4 rounded-lg hover:bg-[#00D4FF] transition-all duration-300 font-medium text-[17px]"
                >
                  Let&apos;s build your site
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Differentiator Table */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Template vs. Software-Built
              </h2>
              <p className="text-[#86868B] text-lg text-center mb-12 max-w-2xl mx-auto">
                Most websites are assembled. Ours are engineered.
              </p>
            </AnimateOnScroll>

            <div className="max-w-4xl mx-auto">
              <div className="hidden md:grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <span className="text-[#86868B] text-sm font-medium uppercase tracking-wide">
                    Template Sites
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-[#1D1D1F] text-sm font-medium uppercase tracking-wide">
                    Software-Built (BKND)
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {differentiators.map((item, i) => (
                  <AnimateOnScroll key={i} delay={0.1 + i * 0.05}>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="bg-[#F5F5F7] rounded-2xl p-6 flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-[#86868B] text-xs">✕</span>
                        </div>
                        <span className="text-[#86868B] text-base leading-relaxed">
                          {item.template}
                        </span>
                      </div>
                      <div className="bg-white rounded-2xl p-6 border border-gray-200/80 flex items-start gap-4 hover:border-[#00D4FF]/50 transition-colors duration-300">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00D4FF]/10 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-[#00D4FF]" strokeWidth={3} />
                        </div>
                        <span className="text-[#1D1D1F] text-base leading-relaxed font-medium">
                          {item.software}
                        </span>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Approach — Dark */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                How We Build
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-12 tracking-tight">
                Engineering, Not Assembly
              </h2>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
              {techApproach.map((item, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.1}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-12 tracking-tight">
                Industries We Build For
              </h2>
            </AnimateOnScroll>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[900px] mx-auto">
              {industries.map((industry, i) => (
                <AnimateOnScroll key={i} delay={0.05 + i * 0.03}>
                  <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200/80">
                    <Check className="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                    <span className="text-[15px] text-[#1D1D1F] font-medium">
                      {industry}
                    </span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1D1D1F] py-24 lg:py-32">
          <div className="container-sg">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll>
                <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
                  Ready for a website that
                  <br />
                  <span className="text-[#00D4FF]">actually performs?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
                  Tell us about your project. We&apos;ll show you what a
                  software-built website can do.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Let&apos;s Build
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
