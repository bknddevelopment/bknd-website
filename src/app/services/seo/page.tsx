"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  ArrowRight,
  Search,
  Code,
  BarChart3,
  Zap,
  Globe,
  FileText,
  Shield,
  ChevronDown,
  Sparkles,
  Bot,
  Eye,
  Layers,
  Brain,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    icon: Code,
    title: "Technical SEO",
    description:
      "Site architecture, schema markup, crawlability, indexation, and Core Web Vitals optimization built with engineering precision.",
  },
  {
    icon: Search,
    title: "On-Page Optimization",
    description:
      "Content structure, meta tags, heading hierarchy, internal linking, and keyword targeting based on data, not guesswork.",
  },
  {
    icon: Globe,
    title: "Local SEO",
    description:
      "Google Business Profile optimization, local citations, review management, and geo-targeted content for local visibility.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description:
      "Keyword research, content gap analysis, topic clusters, and editorial calendars driven by search intent data.",
  },
  {
    icon: BarChart3,
    title: "Link Building",
    description:
      "White-hat outreach, digital PR, and authority building through genuine relationships and valuable content.",
  },
];

const aiServices = [
  {
    icon: Sparkles,
    title: "Generative Engine Optimization (GEO)",
    description:
      "Optimize your content for AI search platforms like ChatGPT, Gemini, and Perplexity. Get cited in AI-generated responses.",
    link: "/services/ai/geo",
  },
  {
    icon: Bot,
    title: "AI Content Optimization at Scale",
    description:
      "Leverage AI to analyze, optimize, and enhance content across thousands of pages while maintaining brand voice and quality.",
  },
  {
    icon: Eye,
    title: "LLM Visibility Tracking",
    description:
      "Monitor how often AI platforms cite your brand. Track your visibility in ChatGPT, Claude, Gemini, and other LLM responses.",
  },
  {
    icon: Layers,
    title: "Programmatic SEO",
    description:
      "Generate thousands of optimized pages automatically using data-driven templates and AI-powered content generation.",
  },
  {
    icon: Brain,
    title: "AI-Powered Keyword Research",
    description:
      "Use machine learning to discover keyword clusters, predict search trends, and identify high-opportunity topics before competitors.",
  },
];

const approach = [
  {
    step: "01",
    title: "Technical Audit",
    description:
      "We crawl your site like Google does. Identify crawl errors, broken links, duplicate content, schema issues, and performance bottlenecks.",
  },
  {
    step: "02",
    title: "Fix Foundations",
    description:
      "Before chasing rankings, we fix the technical debt. Site speed, mobile usability, structured data, and crawl efficiency.",
  },
  {
    step: "03",
    title: "Optimize Content",
    description:
      "Strategic on-page optimization targeting high-intent keywords. We align content with search intent and user expectations.",
  },
  {
    step: "04",
    title: "Create & Expand",
    description:
      "Build content that ranks. Topic clusters, pillar pages, and supporting content that demonstrates topical authority.",
  },
  {
    step: "05",
    title: "Build Authority",
    description:
      "Earn quality backlinks through digital PR, guest content, and creating link-worthy assets. No black hat tactics, ever.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "No Black Hat Tactics",
    description:
      "We build sustainable rankings. No link schemes, no keyword stuffing, no cloaking. Just solid SEO that lasts.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Monthly reports with clear metrics: rankings, traffic, conversions. You always know exactly what we're doing and why.",
  },
  {
    icon: Code,
    title: "Technical Expertise",
    description:
      "Developer-built SEO means we can implement changes directly. No waiting on dev teams or explaining technical concepts.",
  },
  {
    icon: Zap,
    title: "Performance-First",
    description:
      "Core Web Vitals aren't just an SEO factor—they're a user experience imperative. We optimize for both.",
  },
];

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a long-term investment. You'll typically see initial improvements in 3-4 months, with significant results in 6-12 months. Unlike paid ads, these results compound over time and don't disappear when you stop spending.",
  },
  {
    question: "What makes your approach different from other SEO agencies?",
    answer:
      "We're developers first. We don't just recommend changes—we implement them. Our technical foundation means we can optimize site speed, fix schema markup, and resolve crawl issues directly, without the back-and-forth with your dev team.",
  },
  {
    question: "Do you guarantee first page rankings?",
    answer:
      "No legitimate SEO agency can guarantee specific rankings—Google's algorithm is outside anyone's control. What we guarantee is transparent work, measurable progress, and adherence to best practices that build sustainable organic growth.",
  },
  {
    question: "How do you measure SEO success?",
    answer:
      'We track what matters to your business: organic traffic growth, keyword rankings, conversion rates, and revenue attribution. Vanity metrics like "impressions" are secondary to actual business impact.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200/80">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium text-[#1D1D1F]">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#86868B] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-[#86868B] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function SEOServicesPage() {
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
                  SEO Services
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  SEO Built on{" "}
                  <span className="text-[#00D4FF]">Technical Excellence</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
                  Most agencies guess at SEO. We engineer it. Developer-built
                  optimization that prioritizes Core Web Vitals, proper schema
                  markup, and search intent—not outdated tactics.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1D1D1F] text-white font-medium rounded-full hover:bg-[#000000] transition-all duration-300"
                  >
                    Get Your SEO Audit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
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
                Comprehensive SEO Services
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From technical foundations to content strategy, we cover every
                aspect of search optimization.
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

        {/* AI-Enhanced SEO Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                The Future of Search
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                AI-Enhanced SEO
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-6 max-w-2xl mx-auto">
                AI doesn&apos;t replace traditional SEO—it amplifies it. We
                combine proven optimization strategies with cutting-edge AI
                capabilities to future-proof your search presence.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <p className="text-[#6E6E73] text-base text-center mb-12 max-w-3xl mx-auto">
                With ChatGPT, Gemini, and Perplexity becoming primary search
                interfaces for millions, optimizing for AI-generated responses
                is no longer optional. Our AI-enhanced approach ensures
                you&apos;re visible wherever your customers search.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, i) => (
                <AnimateOnScroll key={i} delay={0.25 + i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#00D4FF]/5 flex items-center justify-center mb-6 group-hover:from-[#00D4FF]/30 group-hover:to-[#00D4FF]/10 transition-all duration-300">
                      <service.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed mb-4">
                      {service.description}
                    </p>
                    {service.link && (
                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-2 text-[#00D4FF] font-medium text-sm hover:gap-3 transition-all duration-300"
                      >
                        Learn more about GEO
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={0.6}>
              <div className="mt-12 text-center">
                <Link
                  href="/services/ai/geo"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1D1D1F] text-white font-medium rounded-full hover:bg-[#000000] transition-all duration-300"
                >
                  Explore Generative Engine Optimization
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Approach
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-4 tracking-tight">
                How We Build Sustainable Rankings
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-gray-400 text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                A systematic, data-driven process that prioritizes long-term
                growth over quick fixes.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {approach.map((item, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="relative">
                    <div className="text-[#00D4FF] text-4xl font-bold mb-4 opacity-50">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
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
                Why Choose Us
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                SEO Done Right
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                No gimmicks. No shortcuts. Just technical excellence and
                transparent results.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="flex gap-6 p-8 bg-[#F5F5F7] rounded-2xl border border-gray-200/80">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-[#00D4FF]" />
                      </div>
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
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Teaser */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-200/80">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-4">
                      Case Study
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-[#1D1D1F] mb-4">
                      Coming Soon: Real Results from Real Clients
                    </h3>
                    <p className="text-[#86868B] leading-relaxed mb-6">
                      We&apos;re currently working with clients on
                      transformative SEO campaigns. Soon, we&apos;ll share
                      detailed case studies showing ranking improvements,
                      traffic growth, and revenue impact.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[#00D4FF] font-medium hover:gap-3 transition-all duration-300"
                    >
                      Be our next success story
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="bg-[#F5F5F7] rounded-xl p-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[#86868B]">Organic Traffic</span>
                        <span className="text-[#1D1D1F] font-semibold">
                          +247%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#00D4FF] rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-[#86868B]">Keyword Rankings</span>
                        <span className="text-[#1D1D1F] font-semibold">
                          +156 positions
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#00D4FF] rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-[#86868B]">Core Web Vitals</span>
                        <span className="text-[#1D1D1F] font-semibold">
                          All Green
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#00D4FF] rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-xs text-[#86868B] mt-6 text-center">
                      * Placeholder metrics for illustration
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
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
                Common Questions
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Straight answers about SEO, no jargon or hand-waving.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="max-w-2xl mx-auto">
                {faqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1D1D1F] py-24 lg:py-32">
          <div className="container-sg">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll>
                <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-6">
                  Ready to Rank?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Let&apos;s build your
                  <br />
                  <span className="text-[#00D4FF]">organic growth engine.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Get a free technical SEO audit and discover opportunities
                  you&apos;re missing.
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
