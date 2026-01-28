'use client';

import { AnimateOnScroll } from './AnimateOnScroll';

interface Step {
  id: number;
  phase: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight: string;
}

// Custom SVG icons for each phase - Apple-style minimal with cyan accents
const AuditIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 21l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 14h8" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 10v8" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ArchitectIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="18" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="4" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="18" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 9h4M14 23h4M9 14v4M23 14v4" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const AutomateIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 8v8l6 4" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 4l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" stroke="#00D4FF" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const OptimizeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 24l6-8 6 4 8-12 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="16" r="2" fill="#00D4FF"/>
    <circle cx="16" cy="20" r="2" fill="#00D4FF"/>
    <circle cx="24" cy="8" r="2" fill="#00D4FF"/>
    <path d="M24 12v12M20 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
  </svg>
);

const CompoundIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 28V16c0-6.627 5.373-12 12-12s12 5.373 12 12v12" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 28V18c0-4.418 3.582-8 8-8s8 3.582 8 8v10" stroke="#00D4FF" strokeWidth="2"/>
    <path d="M12 28V20c0-2.209 1.791-4 4-4s4 1.791 4 4v8" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16" cy="16" r="2" fill="#00D4FF"/>
  </svg>
);

const steps: Step[] = [
  {
    id: 1,
    phase: 'Week 1-2',
    title: 'Audit & Analyze',
    description: 'AI-powered deep dive into your marketing stack, competitors, and opportunities. We find the gaps others miss.',
    icon: <AuditIcon />,
    highlight: 'AI-Powered Analysis',
  },
  {
    id: 2,
    phase: 'Week 2-3',
    title: 'Architect',
    description: 'Developer-built strategy with measurable KPIs. Every campaign designed as a system, not a one-off.',
    icon: <ArchitectIcon />,
    highlight: 'Developer-Built Systems',
  },
  {
    id: 3,
    phase: 'Week 3-6',
    title: 'Automate & Accelerate',
    description: 'Launch with AI-enhanced execution at scale. Automated bidding, dynamic creative, programmatic optimization.',
    icon: <AutomateIcon />,
    highlight: 'AI-Enhanced Execution',
  },
  {
    id: 4,
    phase: 'Ongoing',
    title: 'Optimize',
    description: 'Continuous AI optimization based on real-time data. We adjust faster than your competitors can react.',
    icon: <OptimizeIcon />,
    highlight: 'Data-Driven Iteration',
  },
  {
    id: 5,
    phase: 'Always',
    title: 'Compound',
    description: 'Results that build on themselves. Each win creates the foundation for the next. Growth that accelerates.',
    icon: <CompoundIcon />,
    highlight: 'Compounding Returns',
  },
];

export default function Methodology() {
  return (
    <section
      id="methodology"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a1628 0%, #0f1d32 100%)',
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient orbs for depth */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)' }}
      />

      <div className="container-sg relative z-10">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16 lg:mb-20">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: '#00D4FF' }}
            >
              Our Methodology
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 tracking-tight"
            >
              Marketing Systems, Not Campaigns
            </h2>
            <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              We engineer growth the way developers build software—with architecture,
              automation, and measurable outcomes at every step.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          {/* Timeline Line */}
          <AnimateOnScroll delay={0.1}>
            <div className="relative mb-12">
              <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute left-[10%] right-[10%] top-1/2 h-[2px]" style={{ background: 'linear-gradient(90deg, rgba(0,212,255,0.1) 0%, rgba(0,212,255,0.4) 50%, rgba(0,212,255,0.1) 100%)' }} />
            </div>
          </AnimateOnScroll>

          {/* Steps Grid */}
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <AnimateOnScroll key={step.id} delay={0.1 + index * 0.1}>
                <div className="group relative">
                  {/* Connector dot */}
                  <div className="absolute -top-[52px] left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-[#0a1628] border-2 border-white/30 group-hover:border-[#00D4FF] transition-colors duration-300">
                      <div className="absolute inset-1 rounded-full bg-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.06] hover:border-[#00D4FF]/30 hover:-translate-y-1 group-hover:shadow-[0_0_40px_rgba(0,212,255,0.1)]"
                  >
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs font-bold tracking-wider uppercase"
                        style={{ color: '#00D4FF' }}
                      >
                        {step.phase}
                      </span>
                      <span className="text-white/30 text-sm font-medium">
                        0{step.id}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mb-4 text-white/80 group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-lg font-semibold mb-2 tracking-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Highlight Tag */}
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: 'rgba(0, 212, 255, 0.1)',
                        color: '#00D4FF',
                        border: '1px solid rgba(0, 212, 255, 0.2)'
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                      {step.highlight}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00D4FF]/40 via-[#00D4FF]/20 to-transparent" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <AnimateOnScroll key={step.id} delay={index * 0.1}>
                  <div className="relative flex gap-6">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#0a1628] border-2 border-[#00D4FF]/40 flex items-center justify-center">
                        <span className="text-[#00D4FF] font-bold text-sm">{step.id}</span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                      {/* Phase */}
                      <span
                        className="text-xs font-bold tracking-wider uppercase"
                        style={{ color: '#00D4FF' }}
                      >
                        {step.phase}
                      </span>

                      {/* Title */}
                      <h3 className="text-white text-lg font-semibold mt-2 mb-2 tracking-tight">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/50 text-sm leading-relaxed mb-3">
                        {step.description}
                      </p>

                      {/* Highlight Tag */}
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: 'rgba(0, 212, 255, 0.1)',
                          color: '#00D4FF',
                          border: '1px solid rgba(0, 212, 255, 0.2)'
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                        {step.highlight}
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <AnimateOnScroll delay={0.6}>
          <div className="mt-16 lg:mt-20 pt-10 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl lg:text-4xl font-semibold text-white mb-1">6</p>
                <p className="text-white/50 text-sm">Weeks to First Results</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-semibold text-white mb-1">24/7</p>
                <p className="text-white/50 text-sm">AI-Powered Optimization</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-semibold text-white mb-1">100%</p>
                <p className="text-white/50 text-sm">Data-Driven Decisions</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-semibold text-[#00D4FF] mb-1">3.2x</p>
                <p className="text-white/50 text-sm">Average Client ROI</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* CTA */}
        <AnimateOnScroll delay={0.7}>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] text-white font-medium rounded-full hover:bg-[#00B8E0] transition-all duration-300 shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)]"
            >
              Start Your Growth Engine
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-white/40 text-sm mt-4">
              Free 30-minute strategy call. No commitment required.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
