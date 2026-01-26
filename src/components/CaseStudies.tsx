'use client';

import { useState } from 'react';
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
    gradient: 'from-blue-500/20 to-cyan-500/20',
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
    gradient: 'from-purple-500/20 to-indigo-500/20',
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
    gradient: 'from-pink-500/20 to-orange-500/20',
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
    gradient: 'from-green-500/20 to-teal-500/20',
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
    gradient: 'from-sky-500/20 to-blue-500/20',
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
    gradient: 'from-amber-500/20 to-red-500/20',
  },
];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.category === activeCategory);

  return (
    <section className="section-dark relative">
      <div className="container-sg">
        {/* Header */}
        <AnimateOnScroll>
          <div className="section-header">
            <p className="section-label">Case Studies</p>
            <h2 className="section-title text-white">
              Real Results for{' '}
              <span className="text-gradient">Real Businesses</span>
            </h2>
            <p className="section-subtitle">
              See how we&apos;ve helped companies like yours achieve breakthrough growth.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Category Filters */}
        <AnimateOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-sg-orange text-white shadow-lg'
                  : 'bg-white/5 text-sg-light/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        </AnimateOnScroll>

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((study, i) => (
            <AnimateOnScroll key={i} delay={0.1 + i * 0.1}>
              <div className="glass-card-hover overflow-hidden group cursor-pointer h-full">
              {/* Image/Gradient Area */}
              <div className={`h-48 bg-gradient-to-br ${study.gradient} relative`}>
                <div className="absolute inset-0 bg-sg-dark/40" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white">
                    {study.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/60 text-sm">{study.client} • {study.industry}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stats */}
                <div className="flex gap-6 mb-4">
                  {study.stats.map((stat, j) => (
                    <div key={j}>
                      <div className="text-2xl font-bold text-sg-orange">{stat.value}</div>
                      <div className="text-gray-300 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white group-hover:text-sg-orange transition-colors">
                  {study.title}
                </h3>

                {/* Read More Link */}
                <div className="mt-4 flex items-center gap-2 text-sg-orange text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Case Study <span>→</span>
                </div>
              </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* View All CTA */}
        <AnimateOnScroll delay={0.4}>
          <div className="text-center mt-12">
            <a href="/case-studies" className="btn-secondary">
              View All Case Studies
              <span>→</span>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
