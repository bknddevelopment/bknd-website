'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimateOnScroll } from './AnimateOnScroll';

const categories = ['All', 'SEO', 'Local SEO'];

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
    image: '/bknd-website/images/case-studies/randys-sealcoating.jpg',
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
    image: '/bknd-website/images/case-studies/rohnert-park-transmission.jpg',
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
    image: '/bknd-website/images/case-studies/the-library-nj.jpg',
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
    image: '/bknd-website/images/case-studies/weathershield-roofers.jpg',
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
    image: '/bknd-website/images/case-studies/linta-roofing.jpg',
  },
];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.category === activeCategory);

  return (
    <section className="bg-[#F5F5F7] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-[#6E6E73] mb-4">
              Case Studies
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1D1D1F] tracking-tight mb-6">
              Real Results for{' '}
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#0071E3] bg-clip-text text-transparent">
                Real Businesses
              </span>
            </h2>
            <p className="text-xl text-[#86868B] max-w-2xl mx-auto">
              See how we&apos;ve helped companies like yours achieve breakthrough growth.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Category Filters - Apple-style toggle */}
        <AnimateOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#1D1D1F] text-white'
                    : 'bg-white text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white border border-[#D2D2D7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((study, i) => (
            <AnimateOnScroll key={i} delay={0.1 + i * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden group cursor-pointer h-full shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
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
                      {study.client} <span className="text-white/60">•</span> <span className="text-white/70">{study.industry}</span>
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
                        <div className="text-[#86868B] text-xs mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#1D1D1F] leading-snug group-hover:text-[#0071E3] transition-colors duration-300">
                    {study.title}
                  </h3>

                  {/* Read More Link */}
                  <div className="mt-5 flex items-center gap-2 text-[#0071E3] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read Case Study
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* View All CTA */}
        <AnimateOnScroll delay={0.4}>
          <div className="text-center mt-12">
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D1D1F] text-white rounded-full text-base font-medium hover:bg-[#000000] transition-all duration-300 hover:scale-105"
            >
              View All Case Studies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
