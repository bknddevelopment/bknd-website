"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const builds = [
  {
    tag: "Website + SEO Build",
    stats: [
      { value: "919", label: "Pages Built" },
      { value: "$3.1K", label: "Traffic Value/Mo" },
    ],
    title: "Built a 919-page local SEO engine covering 40+ NJ cities",
    client: "Randy's Sealcoating & Striping",
    industry: "Asphalt Paving",
    image: "/images/case-studies/randys-sealcoating.jpg",
    website: "https://randysealcoatingandstriping.com",
    story:
      "Randy needed to dominate local search across New Jersey. We engineered a programmatic SEO system that generated 919 optimized pages — each targeting a specific service in a specific city. The result: $3.1K/mo in organic traffic value and growing.",
  },
  {
    tag: "Full Marketing System",
    stats: [
      { value: "5.8K", label: "Keywords Ranking" },
      { value: "$87K", label: "Traffic Value/Mo" },
    ],
    title: "Built a marketing system worth $87K/mo in traffic value",
    client: "Rohnert Park Transmission",
    industry: "Automotive",
    image: "/images/case-studies/rohnert-park-transmission.jpg",
    website: "https://rohnertparktransmission.com",
    story:
      "A local auto shop needed to compete with national chains. We built a complete SEO and content system — technical foundation, content hubs, and local optimization. Now ranking for 5,800+ keywords with $87K/mo in equivalent ad spend value.",
  },
  {
    tag: "Local SEO Build",
    stats: [
      { value: "+181%", label: "Organic Traffic" },
      { value: "1.1K", label: "Monthly Visitors" },
    ],
    title: "Built a local dominance system with 181% organic growth",
    client: "The Library NJ",
    industry: "Cannabis Retail",
    image: "/images/case-studies/the-library-nj.jpg",
    website: "https://thelibrarynj.com",
    story:
      "In a highly regulated industry with advertising restrictions, organic search is everything. We built a local SEO and citation strategy that drove 181% organic traffic growth — becoming the go-to dispensary in search results.",
  },
  {
    tag: "SEO Architecture Build",
    stats: [
      { value: "+135%", label: "Traffic Growth" },
      { value: "1.3K", label: "Keywords Ranking" },
    ],
    title: "Built a 540-page SEO architecture with 135% traffic growth",
    client: "Weathershield Roofers",
    industry: "Roofing",
    image: "/images/case-studies/weathershield-roofers.jpg",
    website: "https://weathershieldroofers.com",
    story:
      "Weathershield needed to own roofing search in their market. We engineered a 540-page site architecture with proper silo structure, service-area targeting, and technical SEO. Traffic grew 135% and continues climbing.",
  },
  {
    tag: "Website Launch",
    stats: [
      { value: "208", label: "Pages Built" },
      { value: "53", label: "Towns Covered" },
    ],
    title: "Built and launched a full-service website covering 53 NJ towns",
    client: "Costa1 Cleaning",
    industry: "Cleaning Services",
    image: "/images/case-studies/costa1-cleaning.jpg",
    website: "https://costa1cleaning.com",
    story:
      "Costa1 needed a website that would generate leads across the NJ market. We built a 208-page site from scratch — covering every service in every target town with unique, optimized content. Launched and indexed within weeks.",
  },
];

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F7] min-h-screen">
        {/* Header Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimateOnScroll>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1D1D1F] tracking-tight mb-6">
                What We&apos;ve Built
              </h1>
              <p className="text-xl md:text-2xl text-[#86868B] max-w-2xl mx-auto leading-relaxed">
                Real businesses. Real systems. Real results. Here&apos;s what
                happens when you build through software.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Build Stories */}
        <section className="pb-16 md:pb-24">
          <div className="max-w-5xl mx-auto px-6 space-y-16">
            {builds.map((build, i) => (
              <AnimateOnScroll key={i} delay={0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="grid md:grid-cols-[1fr_1.2fr]">
                    {/* Image */}
                    <div className="h-64 md:h-auto relative overflow-hidden">
                      <Image
                        src={build.image}
                        alt={`${build.client} — ${build.title}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-[#1D1D1F]">
                          {build.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex gap-8 mb-5">
                        {build.stats.map((stat, j) => (
                          <div key={j}>
                            <div className="text-2xl md:text-3xl font-semibold text-[#00D4FF]">
                              {stat.value}
                            </div>
                            <div className="text-[#86868B] text-xs mt-1">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <h2 className="text-xl md:text-2xl font-semibold text-[#1D1D1F] leading-snug mb-3">
                        {build.title}
                      </h2>

                      <p className="text-[#86868B] leading-relaxed mb-4">
                        {build.story}
                      </p>

                      <div className="flex items-center gap-4">
                        <span className="text-sm text-[#86868B]">
                          {build.client} &bull; {build.industry}
                        </span>
                        <a
                          href={build.website}
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00D4FF] hover:text-[#00b8d9] transition-colors"
                        >
                          Visit Site
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimateOnScroll>
              <div className="bg-[#1D1D1F] rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
                  Ready to be next?
                </h2>
                <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto">
                  Every build starts with a conversation. Tell us what
                  you&apos;re working on.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white rounded-full text-base font-medium transition-all duration-300"
                >
                  Let&apos;s Build
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
