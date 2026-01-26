'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimateOnScroll } from './AnimateOnScroll';

const categories = ['All', 'SEO', 'Paid Media', 'Creative', 'Email'];

const caseStudies = [
  {
    category: 'Paid Media',
    stats: [
      { value: '+312%', label: 'Demo Signups' },
      { value: '$47', label: 'CAC (from $180)' },
    ],
    title: 'Launched Paid Acquisition in 2 Weeks, Profitable in 6',
    client: 'Velocity Labs',
    industry: 'B2B SaaS',
    image: '/bknd-website/images/case-studies/velocity-labs.jpg',
  },
  {
    category: 'SEO',
    stats: [
      { value: '+189%', label: 'Organic Traffic' },
      { value: '#1', label: 'Core Keyword (from #12)' },
    ],
    title: 'Technical SEO Overhaul for Developer Tools Company',
    client: 'DataStack Pro',
    industry: 'Developer Tools',
    image: '/bknd-website/images/case-studies/datastack-pro.jpg',
  },
  {
    category: 'Paid Media',
    stats: [
      { value: '4.2x', label: 'ROAS' },
      { value: '+$1.2M', label: 'Revenue (Q4)' },
    ],
    title: 'Scaled DTC Brand from $10K to $150K/mo Spend Profitably',
    client: 'Meridian Goods',
    industry: 'E-commerce',
    image: '/bknd-website/images/case-studies/meridian-goods.jpg',
  },
  {
    category: 'Creative',
    stats: [
      { value: '+78%', label: 'Conversion Rate' },
      { value: '2.8x', label: 'Pipeline Growth' },
    ],
    title: 'Rebuilt Landing Pages & Ad Creative for Fintech Launch',
    client: 'ClearPath Finance',
    industry: 'Fintech',
    image: '/bknd-website/images/case-studies/clearpath-finance.jpg',
  },
  {
    category: 'SEO',
    stats: [
      { value: '847', label: 'Keywords Ranking' },
      { value: '+215%', label: 'MQLs' },
    ],
    title: 'Built Programmatic Content Engine: 200+ Pages in 8 Weeks',
    client: 'Nimbus Cloud',
    industry: 'Cloud Infrastructure',
    image: '/bknd-website/images/case-studies/nimbus-cloud.jpg',
  },
  {
    category: 'Email',
    stats: [
      { value: '+34%', label: 'Retention Rate' },
      { value: '$890K', label: 'Recovered Revenue' },
    ],
    title: 'Automated Lifecycle Flows to Reduce Churn',
    client: 'Forge Fitness',
    industry: 'Subscription App',
    image: '/bknd-website/images/case-studies/forge-fitness.jpg',
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
