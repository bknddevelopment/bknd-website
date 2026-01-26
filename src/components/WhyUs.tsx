'use client';

import { Flame, ChevronRight } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

const comparisons = [
  { them: 'Focus on vanity metrics', us: 'Laser-focused on revenue-driving KPIs' },
  { them: 'Incremental improvements', us: 'Transformative growth strategies' },
  { them: 'Cookie-cutter approaches', us: 'Custom, innovative solutions for each client' },
  { them: 'Reactive to market trends', us: 'Proactive in creating new marketing angles' },
  { them: 'Limited cross-channel integration', us: 'Seamless multi-platform strategies' },
  { them: 'Manual, time-consuming processes', us: 'AI-driven, scalable solutions' },
];

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container-sg">
        {/* Section Label */}
        <AnimateOnScroll>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Flame className="w-5 h-5 text-[#F27038]" />
            <span className="text-[#F27038] font-semibold text-sm uppercase tracking-wide">
              Why BKND
            </span>
          </div>
        </AnimateOnScroll>

        {/* Headline */}
        <AnimateOnScroll delay={0.1}>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 text-center mb-16 max-w-4xl mx-auto">
            What Sets BKND Apart from Other Digital Marketing Agencies?
          </h2>
        </AnimateOnScroll>

        {/* Comparison Table */}
        <AnimateOnScroll delay={0.2}>
          <div className="max-w-5xl mx-auto">
            {/* Table Headers */}
            <div className="flex items-stretch mb-1">
              <div className="flex-1 bg-[#2F333B] rounded-tl-xl py-4 px-6">
                <span className="text-white font-semibold text-lg">Traditional Agencies</span>
              </div>
              <div className="w-16 lg:w-20 flex items-center justify-center bg-gray-200">
                <span className="text-gray-500 font-bold text-sm">vs</span>
              </div>
              <div className="flex-1 bg-[#F27038] rounded-tr-xl py-4 px-6">
                <span className="text-white font-semibold text-lg">BKND</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="border border-gray-200 rounded-b-xl overflow-hidden">
              {comparisons.map((item, i) => (
                <div
                  key={i}
                  className="flex items-stretch border-b border-gray-200 last:border-b-0 group transition-colors hover:bg-white"
                >
                  {/* Left column - Traditional Agencies */}
                  <div className="flex-1 py-5 px-6 flex items-center bg-white/50">
                    <span className="text-gray-700 text-base">{item.them}</span>
                  </div>

                  {/* Arrow divider */}
                  <div className="w-16 lg:w-20 flex items-center justify-center bg-gray-100 border-l border-r border-gray-200">
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#F27038] transition-colors" />
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#F27038] transition-colors -ml-3" />
                  </div>

                  {/* Right column - BKND */}
                  <div className="flex-1 py-5 px-6 flex items-center bg-white">
                    <span className="text-gray-900 font-semibold text-base group-hover:text-[#F27038] transition-colors">
                      {item.us}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* CTA Button */}
        <AnimateOnScroll delay={0.4}>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#F27038] text-[#F27038] font-semibold rounded-lg hover:bg-[#F27038] hover:text-white transition-all duration-300"
            >
              Get Your Custom Growth Strategy
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
