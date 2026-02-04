"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  ArrowRight,
  Palette,
  Layout,
  Video,
  Share2,
  BarChart2,
  Zap,
  RefreshCw,
  Target,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    icon: Palette,
    title: "Ad Creative",
    description:
      "Static and animated ads designed for clicks, not just likes. Every visual is built to convert.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "High-converting landing pages that turn traffic into leads. Fast-loading, mobile-first, and A/B tested.",
  },
  {
    icon: Video,
    title: "Video Ads",
    description:
      "Short-form video content optimized for social platforms. Thumb-stopping creative that drives action.",
  },
  {
    icon: Share2,
    title: "Social Creative",
    description:
      "Platform-native content for Meta, LinkedIn, TikTok, and more. Tailored formats that perform.",
  },
  {
    icon: BarChart2,
    title: "A/B Testing",
    description:
      "Systematic creative testing to find your winning combinations. Data reveals what actually works.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Data Analysis",
    description:
      "We analyze your existing performance data, competitor creative, and audience insights to identify opportunities.",
  },
  {
    step: "02",
    title: "Creative Brief",
    description:
      "A clear brief that defines objectives, messaging hierarchy, and success metrics before design begins.",
  },
  {
    step: "03",
    title: "Design & Build",
    description:
      "Our team creates multiple variations across formats, optimized for each platform's specifications.",
  },
  {
    step: "04",
    title: "Test & Learn",
    description:
      "We launch structured tests to identify top performers. Statistical significance, not gut feelings.",
  },
  {
    step: "05",
    title: "Iterate & Scale",
    description:
      "Winners get scaled. Learnings inform the next round. Your creative library compounds over time.",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Performance-Tested",
    description:
      "Every piece of creative is designed with testing in mind. We build variations from day one.",
  },
  {
    icon: Zap,
    title: "Fast Iteration",
    description:
      "Weekly creative refreshes to combat ad fatigue. Your campaigns stay fresh and performing.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-Focused",
    description:
      "We optimize for your bottom line, not vanity metrics. Creative that drives revenue.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description:
      "Every test adds to your creative playbook. Insights compound across campaigns.",
  },
];

const faqs = [
  {
    question:
      "How is performance creative different from traditional creative agencies?",
    answer:
      "Traditional agencies focus on brand aesthetics and subjective approval. We focus on measurable outcomes. Every design decision is informed by data, and every piece of creative is built to be tested. We care less about awards and more about ROAS.",
  },
  {
    question: "How quickly can you produce new creative?",
    answer:
      "Our standard turnaround is 5-7 business days for a full creative package (3-5 static variations + 1-2 video concepts). For active campaigns, we can deliver weekly creative refreshes to maintain performance and fight ad fatigue.",
  },
  {
    question: "Do you handle video production or just static ads?",
    answer:
      "Both. We produce short-form video content optimized for social platforms (15-60 second spots), motion graphics, and UGC-style content. For larger productions, we partner with specialized video teams while maintaining creative direction.",
  },
  {
    question: "How do you measure creative performance?",
    answer:
      "We track the metrics that matter: click-through rate, cost per acquisition, conversion rate, and ROAS. We use statistical significance testing to ensure results are real, not random. You get weekly reports showing exactly what's working.",
  },
];

export default function CreativePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-3xl">
              <AnimateOnScroll>
                <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-4">
                  Performance Creative
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  Creative that{" "}
                  <span className="text-[#00D4FF]">performs.</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
                  Data-driven design, not just pretty pictures. We build ad
                  creative, landing pages, and video content engineered for
                  conversions. Every pixel has a purpose.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1D1D1F] text-white font-medium rounded-full hover:bg-[#000000] transition-all duration-300"
                >
                  Get a Creative Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                What We Do
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Full-funnel creative services
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From first impression to final conversion, we design every
                touchpoint for performance.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-[#F5F5F7] rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                    <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-gray-400 text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Approach
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-4 tracking-tight">
                A process built for performance
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-gray-400 text-lg lg:text-xl text-center mb-16 max-w-2xl mx-auto">
                Creative without strategy is just decoration. Here&apos;s how we
                ensure every design drives results.
              </p>
            </AnimateOnScroll>

            <div className="max-w-4xl mx-auto">
              {processSteps.map((step, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="flex gap-6 lg:gap-10 mb-10 last:mb-0">
                    <div className="flex-shrink-0">
                      <span className="text-[#00D4FF] text-2xl lg:text-3xl font-semibold">
                        {step.step}
                      </span>
                    </div>
                    <div className="border-l border-white/10 pl-6 lg:pl-10 pb-10 last:pb-0">
                      <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Why It Works
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Creative that compounds
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Our approach builds a library of proven winners, not one-off
                designs.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-[#F5F5F7] rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-[#00D4FF]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-[#86868B] leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Teaser Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <AnimateOnScroll>
                  <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase mb-4">
                    Case Study
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.1}>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">
                    How we increased CTR by 340% for an e-commerce brand
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.2}>
                  <p className="text-[#86868B] text-lg leading-relaxed mb-6">
                    Through systematic creative testing and data-driven
                    iteration, we transformed underperforming ads into
                    top-performing assets that drove a 3x improvement in ROAS.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.3}>
                  <ul className="space-y-3 mb-8">
                    {[
                      "340% increase in click-through rate",
                      "3.2x improvement in ROAS",
                      "45% reduction in cost per acquisition",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-[#1D1D1F]"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="9"
                            cy="9"
                            r="9"
                            fill="#00D4FF"
                            fillOpacity="0.1"
                          />
                          <path
                            d="M13 6L7.5 11.5L5 9"
                            stroke="#00D4FF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.4}>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-[#00D4FF] font-medium hover:gap-3 transition-all duration-300"
                  >
                    See more results
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </AnimateOnScroll>
              </div>

              <AnimateOnScroll direction="right">
                <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200/80">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-[#F5F5F7] rounded-xl">
                      <p className="text-4xl lg:text-5xl font-semibold text-[#00D4FF] mb-2">
                        340%
                      </p>
                      <p className="text-[#86868B] text-sm">CTR Increase</p>
                    </div>
                    <div className="text-center p-6 bg-[#F5F5F7] rounded-xl">
                      <p className="text-4xl lg:text-5xl font-semibold text-[#00D4FF] mb-2">
                        3.2x
                      </p>
                      <p className="text-[#86868B] text-sm">ROAS Improvement</p>
                    </div>
                    <div className="text-center p-6 bg-[#F5F5F7] rounded-xl">
                      <p className="text-4xl lg:text-5xl font-semibold text-[#00D4FF] mb-2">
                        45%
                      </p>
                      <p className="text-[#86868B] text-sm">Lower CPA</p>
                    </div>
                    <div className="text-center p-6 bg-[#F5F5F7] rounded-xl">
                      <p className="text-4xl lg:text-5xl font-semibold text-[#00D4FF] mb-2">
                        12
                      </p>
                      <p className="text-[#86868B] text-sm">Weeks to Results</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                FAQ
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Common questions
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Everything you need to know about our creative services.
              </p>
            </AnimateOnScroll>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.05}>
                  <div className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between py-6 text-left"
                    >
                      <h3 className="text-lg font-semibold text-[#1D1D1F] pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#86868B] flex-shrink-0 transition-transform duration-300 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === i ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="text-[#86868B] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1D1D1F] py-24 lg:py-32">
          <div className="container-sg">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll>
                <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-6">
                  Ready to Start?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Let&apos;s build creative
                  <br />
                  <span className="text-[#00D4FF]">that converts.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Get a free creative audit and see how your ads stack up
                  against top performers.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
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
