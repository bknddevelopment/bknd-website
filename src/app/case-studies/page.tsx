'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';

const caseStudies = [
  {
    category: 'SEO',
    stats: [
      { value: '+554%', label: 'Organic Traffic' },
      { value: '+393%', label: 'Keywords' },
    ],
    title: 'From Zero to $2,700/Month Traffic Value in 12 Months',
    client: "Randy's Sealcoating & Striping",
    industry: 'Construction / Paving',
    image: '/images/case-studies/randys-sealcoating.jpg',
  },
  {
    category: 'SEO',
    stats: [
      { value: '15.8K', label: 'Monthly Visitors' },
      { value: '11.3K', label: 'Keywords Ranking' },
    ],
    title: 'Built Dominant Local Authority with 302 AI Mentions',
    client: 'Rohnert Park Transmission',
    industry: 'Automotive',
    image: '/images/case-studies/rohnert-park-transmission.jpg',
  },
  {
    category: 'Local SEO',
    stats: [
      { value: '+173%', label: 'Traffic Growth' },
      { value: '8.1K', label: 'GBP Views/Month' },
    ],
    title: 'Local Discovery Strategy with 50 Citations & Review Management',
    client: 'The Library NJ',
    industry: 'Hospitality / Entertainment',
    image: '/images/case-studies/the-library-nj.jpg',
  },
  {
    category: 'SEO',
    stats: [
      { value: '+117%', label: 'Traffic Growth' },
      { value: '+113%', label: 'Keywords' },
    ],
    title: 'Doubled Organic Presence with Strong Backlink Growth',
    client: 'Weathershield Roofers',
    industry: 'Roofing',
    image: '/images/case-studies/weathershield-roofers.jpg',
  },
  {
    category: 'SEO',
    stats: [
      { value: '$16.4K', label: 'Traffic Value/Month' },
      { value: '3.5K', label: 'Keywords' },
    ],
    title: 'International SEO Reach Across US, Canada & Brazil',
    client: 'Linta Roofing',
    industry: 'Roofing',
    image: '/images/case-studies/linta-roofing.jpg',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F7] min-h-screen">
        {/* Header Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimateOnScroll>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1D1D1F] tracking-tight mb-6">
                Client Results
              </h1>
              <p className="text-xl md:text-2xl text-[#86868B] max-w-2xl mx-auto leading-relaxed">
                Real results for real businesses. Some clients prefer to remain confidential - reach out to learn more about our full portfolio.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.1}>
                  <div
                    className="bg-white rounded-2xl overflow-hidden group h-full shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
                  >
                    {/* Image Area */}
                    <div className="h-56 relative overflow-hidden">
                      <Image
                        src={study.image}
                        alt={`${study.client} case study - ${study.title}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                      {/* Category badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-[#1D1D1F]">
                          {study.category}
                        </span>
                      </div>

                      {/* Client info on image */}
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <p className="text-white/90 text-sm font-medium">
                          {study.client}{' '}
                          <span className="text-white/60">&#8226;</span>{' '}
                          <span className="text-white/70">{study.industry}</span>
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Stats */}
                      <div className="flex gap-8 mb-5">
                        {study.stats.map((stat, j) => (
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

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-[#1D1D1F] leading-snug">
                        {study.title}
                      </h3>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Confidential Note */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                <p className="text-lg md:text-xl text-[#86868B] mb-6">
                  Many of our clients prefer confidential partnerships. Contact us to discuss specific results in your industry.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D1D1F] text-white rounded-full text-base font-medium hover:bg-[#000000] transition-all duration-300 hover:scale-105"
                >
                  Get in Touch
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
