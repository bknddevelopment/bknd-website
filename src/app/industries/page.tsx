"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  ArrowRight,
  Flame,
  Smile,
  Home,
  Wrench,
  UtensilsCrossed,
  TrendingUp,
  Target,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    icon: Flame,
    title: "HVAC Marketing",
    slug: "hvac-marketing",
    description:
      "Dominate local search for heating, cooling, and HVAC services. We help HVAC companies rank for high-intent keywords that turn searchers into service calls.",
    stats: "1,900+ monthly searches",
    highlight: "Average CPC $45+",
  },
  {
    icon: Smile,
    title: "Dental Marketing",
    slug: "dental-marketing",
    description:
      "Get more patients through the door with SEO built for dental practices. From general dentistry to cosmetic and orthodontic specialties.",
    stats: "4,000+ monthly searches",
    highlight: "Average CPC $25+",
  },
  {
    icon: Home,
    title: "Roofing Marketing",
    slug: "roofing-marketing",
    description:
      "Roofing companies compete for every lead. We build the SEO foundation that puts your roofing business at the top of Google when homeowners need you.",
    stats: "4,000+ monthly searches",
    highlight: "Average CPC $50+",
  },
  {
    icon: Wrench,
    title: "Plumbing Marketing",
    slug: "plumbing-marketing",
    description:
      "When a pipe bursts, homeowners search Google. Make sure your plumbing company is the first result they see with SEO designed for plumbers.",
    stats: "1,900+ monthly searches",
    highlight: "Average CPC $35+",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Marketing",
    slug: "restaurant-marketing",
    description:
      "Fill more seats with digital marketing that reaches diners where they search. Local SEO, Google Maps, and content that drives reservations.",
    stats: "2,900+ monthly searches",
    highlight: "Average CPC $8+",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
          <div className="container-sg">
            <div className="max-w-[900px] mx-auto text-center">
              <AnimateOnScroll>
                <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-6">
                  Industry Solutions
                </p>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.1] mb-6">
                  Marketing That Speaks{" "}
                  <span className="text-[#00D4FF]">Your Industry</span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-8 max-w-[720px] mx-auto">
                  Every industry has unique search patterns, customer behavior,
                  and competitive dynamics. We build marketing strategies
                  tailored to how your customers actually search -- not generic
                  templates that ignore your market.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-[#1D1D1F]">
          <div className="container-sg">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "49K+", label: "Monthly Search Volume", icon: TrendingUp },
                { number: "$200K+", label: "Monthly PPC Value", icon: BarChart3 },
                { number: "5", label: "Industry Specializations", icon: Target },
                { number: "KD 8", label: "Average Keyword Difficulty", icon: TrendingUp },
              ].map((stat, i) => (
                <AnimateOnScroll key={i} delay={i * 0.1}>
                  <div>
                    <div className="text-[32px] lg:text-[40px] font-bold text-[#00D4FF] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Cards Grid */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="max-w-[720px] mx-auto text-center mb-16">
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6">
                  Choose Your Industry
                </h2>
                <p className="text-[17px] text-[#86868B] leading-relaxed">
                  Each industry page includes a custom marketing strategy,
                  keyword research, competitive analysis, and a clear roadmap to
                  ranking on page one of Google.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
              {industries.map((industry, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.1}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group block bg-white rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6">
                      <industry.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3 group-hover:text-[#00D4FF] transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed mb-4">
                      {industry.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#1D1D1F] font-medium">
                        {industry.stats}
                      </span>
                      <span className="text-[#00D4FF] font-medium">
                        {industry.highlight}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-[#00D4FF] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why Industry-Specific Marketing */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <div className="max-w-[720px] mx-auto">
              <AnimateOnScroll>
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6 text-center">
                  Why Industry-Specific Marketing Matters
                </h2>
                <div className="text-[17px] text-[#86868B] leading-relaxed space-y-4">
                  <p>
                    A dentist and a roofer both need SEO, but the strategies
                    could not be more different. The keywords people search, the
                    way they evaluate businesses, and the decision timeline
                    varies dramatically by industry.
                  </p>
                  <p>
                    Generic marketing agencies apply the same playbook to every
                    client. We study each industry -- the search patterns, the
                    seasonal trends, the competitive landscape, and the customer
                    psychology -- to build strategies that actually work.
                  </p>
                  <p>
                    The result: faster rankings, more qualified leads, and
                    marketing spend that generates measurable ROI instead of
                    vanity metrics.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1D1D1F] py-24 lg:py-32">
          <div className="container-sg">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll>
                <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-6">
                  Ready to Grow?
                </p>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Get a marketing strategy built for
                  <br />
                  <span className="text-[#00D4FF]">your industry.</span>
                </h2>
                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Free audit and strategy session. We will show you exactly
                  where the opportunities are in your market.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Get Your Free Industry Audit
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
