'use client';

import { ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

// Apple-style line-art SVG icons - black with cyan accent option
const PaidAdvertisingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1D1D1F]">
    <path d="M6 12h36M6 24h36M6 36h36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="14" cy="12" r="3" stroke="#06B6D4" strokeWidth="2"/>
    <circle cx="34" cy="24" r="3" stroke="#06B6D4" strokeWidth="2"/>
    <circle cx="20" cy="36" r="3" stroke="#06B6D4" strokeWidth="2"/>
    <path d="M14 15v9M34 27v9M20 33v-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
  </svg>
);

const PerformanceCreativeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1D1D1F]">
    <rect x="6" y="6" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 14h36" stroke="currentColor" strokeWidth="2"/>
    <circle cx="10" cy="10" r="1" fill="#06B6D4"/>
    <circle cx="14" cy="10" r="1" fill="#06B6D4"/>
    <circle cx="18" cy="10" r="1" fill="#06B6D4"/>
    <path d="M14 24l6 8 4-4 8 6" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 42h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 34v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const SEOIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1D1D1F]">
    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2"/>
    <path d="M29 29l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 20h12M20 14v12" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
    <path d="M38 8l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" stroke="#06B6D4" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const CROIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1D1D1F]">
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 6v4M24 38v4M6 24h4M38 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="6" stroke="#06B6D4" strokeWidth="2"/>
    <circle cx="24" cy="24" r="2" fill="#06B6D4"/>
  </svg>
);

const DataAnalyticsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1D1D1F]">
    <path d="M6 42V18l10 8 8-14 8 10 10-16v36H6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="16" cy="26" r="2" stroke="#06B6D4" strokeWidth="2"/>
    <circle cx="24" cy="12" r="2" stroke="#06B6D4" strokeWidth="2"/>
    <circle cx="32" cy="22" r="2" stroke="#06B6D4" strokeWidth="2"/>
    <circle cx="42" cy="6" r="2" stroke="#06B6D4" strokeWidth="2"/>
  </svg>
);

const ContentMarketingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1D1D1F]">
    <rect x="8" y="6" width="32" height="36" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 14h20M14 22h20M14 30h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 28l6 6-6 6" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Minimal divider - Apple style thin line with subtle accent
const LogoDivider = () => (
  <div className="flex justify-center mb-12">
    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-60" />
  </div>
);

const services: Service[] = [
  {
    id: 'paid-advertising',
    title: 'Paid Advertising',
    subtitle: 'Multi-Channel Campaign Management',
    description: 'Strategic paid media across Google, Meta, LinkedIn, and programmatic channels. We build acquisition systems that scale profitably with proper attribution and continuous optimization.',
    link: '/services/paid-advertising',
    icon: <PaidAdvertisingIcon />,
  },
  {
    id: 'performance-creative',
    title: 'Performance Creative',
    subtitle: 'Data-Driven Creative Development',
    description: 'Creative that converts, not just impresses. Rapid iteration on hooks, formats, and concepts backed by data. UGC, founder-led content, and landing page optimization.',
    link: '/services/creative',
    icon: <PerformanceCreativeIcon />,
  },
  {
    id: 'seo',
    title: 'SEO',
    subtitle: 'Technical SEO & Content Strategy',
    description: 'Technical SEO that developers respect. Content strategies that actually rank. We fix the foundation before chasing keywords, covering everything from Core Web Vitals to programmatic content at scale.',
    link: '/services/seo',
    icon: <SEOIcon />,
  },
  {
    id: 'cro',
    title: 'CRO',
    subtitle: 'Conversion Rate Optimization',
    description: 'Turn traffic into revenue with data-driven optimization. A/B testing with proper sample sizes, funnel analysis, and continuous improvement.',
    link: '/services/cro',
    icon: <CROIcon />,
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    subtitle: 'Measurement & Attribution',
    description: 'Proper tracking infrastructure most agencies skip. Server-side implementation, real attribution, and custom dashboards in your tools.',
    link: '/services/analytics',
    icon: <DataAnalyticsIcon />,
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    subtitle: 'Strategic Content Development',
    description: 'Content that builds authority and drives organic growth. From thought leadership to SEO-optimized articles, we create content that resonates and ranks.',
    link: '/services/content',
    icon: <ContentMarketingIcon />,
  },
];

// Apple-style card shadow
const appleCardStyle = "bg-white rounded-[18px] shadow-[0_4px_6px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.08)]";

// Service card component - Apple aesthetic
function ServiceCard({ service, className = '' }: { service: Service; className?: string }) {
  return (
    <div
      className={`${appleCardStyle} p-8 transition-all duration-500 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08),0_4px_10px_rgba(0,0,0,0.06)] hover:-translate-y-1 ${className}`}
    >
      {/* Icon */}
      <div className="mb-6">
        {service.icon}
      </div>

      {/* Title & Subtitle */}
      <h3 className="text-xl font-semibold text-[#1D1D1F] mb-1 tracking-tight">
        {service.title}
      </h3>
      <p className="text-cyan-500 text-sm font-medium mb-4">
        {service.subtitle}
      </p>

      {/* Description */}
      <p className="text-[#86868B] text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Black button with arrow - Apple style */}
      <a
        href={service.link}
        className="inline-flex items-center gap-2 bg-[#1D1D1F] text-white px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#000000] group"
      >
        Learn More
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-[#F5F5F7] py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Logo Divider */}
        <AnimateOnScroll>
          <LogoDivider />
        </AnimateOnScroll>

        {/* Header - Apple style centered */}
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] tracking-tight mb-6">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-[#86868B] leading-relaxed">
              Full-stack digital marketing built for growth. From paid acquisition to organic content,
              we provide the complete toolkit to scale your business systematically.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Mixed Grid Layout */}
        <div className="space-y-6">
          {/* Row 1: 2 cards (50% each) - Paid Advertising, Performance Creative */}
          <AnimateOnScroll delay={0.1}>
            <div className="grid md:grid-cols-2 gap-6">
              <ServiceCard service={services[0]} />
              <ServiceCard service={services[1]} />
            </div>
          </AnimateOnScroll>

          {/* Row 2: 1 full-width card - SEO */}
          <AnimateOnScroll delay={0.2}>
            <div className="grid grid-cols-1">
              <ServiceCard service={services[2]} className="md:flex md:items-start md:gap-8" />
            </div>
          </AnimateOnScroll>

          {/* Row 3: 3 cards (33% each) - CRO, Data & Analytics, Content Marketing */}
          <AnimateOnScroll delay={0.3}>
            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard service={services[3]} />
              <ServiceCard service={services[4]} />
              <ServiceCard service={services[5]} />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
