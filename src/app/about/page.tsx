'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { ArrowRight, Code, BarChart3, Shield, Target, Users, Brain, Zap } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Code,
    title: 'Developer-First',
    description: 'We build marketing systems with the same rigor as software engineering. Clean, maintainable, scalable.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven',
    description: 'Every decision is backed by data. We measure what matters and optimize relentlessly.',
  },
  {
    icon: Shield,
    title: 'Transparent',
    description: 'No black boxes. You see exactly where your budget goes and what results it produces.',
  },
  {
    icon: Target,
    title: 'Results-Focused',
    description: 'Vanity metrics don\'t pay bills. We focus on revenue, conversions, and real business growth.',
  },
  {
    icon: Zap,
    title: 'AI-Powered',
    description: 'AI-powered optimization across every channel. Smarter targeting, faster iterations, better results.',
  },
];

export default function AboutPage() {
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
                  About Us
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  Marketing built by developers,{' '}
                  <span className="text-[#00D4FF]">for growth.</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl">
                  We started BKND Development because we were tired of marketing agencies that couldn&apos;t explain their results. As developers, we believe in systems that work, metrics that matter, and transparency at every step.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <AnimateOnScroll>
                  <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase mb-4">
                    Our Mission
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.1}>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">
                    Make marketing as measurable as code
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.2}>
                  <p className="text-[#86868B] text-lg leading-relaxed mb-6">
                    Every line of code can be tested. Every deployment can be measured. We believe marketing should work the same way.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.3}>
                  <p className="text-[#86868B] text-lg leading-relaxed">
                    Our vision is a world where businesses understand exactly how their marketing investment translates to revenue. No guessing. No hoping. Just clear, actionable data that drives growth.
                  </p>
                </AnimateOnScroll>
              </div>

              <div className="relative">
                <AnimateOnScroll direction="right">
                  <div className="bg-[#1D1D1F] rounded-2xl p-8 lg:p-10">
                    <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-4">
                      The BKND Promise
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
                      If we can&apos;t measure it, we don&apos;t do it.
                    </h3>
                    <ul className="space-y-4">
                      {['Clear attribution for every dollar spent', 'Weekly reporting with actionable insights', 'Direct access to your campaign data', 'No long-term contracts'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-[#86868B]">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="9" r="9" fill="#00D4FF" fillOpacity="0.2"/>
                            <path d="M13 6L7.5 11.5L5 9" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Leadership
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-12 tracking-tight">
                Meet the Founder
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 lg:p-12 border border-gray-200/80">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-br from-[#00D4FF]/10 to-[#00D4FF]/5 flex items-center justify-center">
                      <Users className="w-12 h-12 lg:w-16 lg:h-16 text-[#00D4FF]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-2">
                      Charwin Vanryck deGroot
                    </h3>
                    <p className="text-[#00D4FF] font-medium mb-4">
                      Founder & CEO
                    </p>
                    <p className="text-[#86868B] text-lg leading-relaxed mb-4">
                      With a background in software development and a passion for growth marketing, Charwin founded BKND Development to bridge the gap between technical excellence and marketing results.
                    </p>
                    <p className="text-[#86868B] text-lg leading-relaxed">
                      His developer-first approach to marketing has helped businesses of all sizes achieve measurable growth through data-driven strategies and transparent partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Values
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                What drives us
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                These aren&apos;t just words on a wall. They guide every decision we make.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-[#F5F5F7] rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                    <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6">
                      <value.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* AI Philosophy Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <AnimateOnScroll>
                  <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase mb-4">
                    Our AI Philosophy
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.1}>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">
                    AI as Amplifier,{' '}
                    <span className="text-[#00D4FF]">Not Autopilot</span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.2}>
                  <p className="text-[#86868B] text-lg leading-relaxed mb-6">
                    We believe AI&apos;s greatest power is augmenting human creativity and strategy—not replacing it. Our AI solutions combine machine speed and scale with human insight and judgment. The result is marketing that&apos;s smarter, faster, and more effective than either could achieve alone.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.3}>
                  <p className="text-[#86868B] text-lg leading-relaxed">
                    We&apos;re not AI consultants who hand you a strategy and walk away. We&apos;re a full-service marketing + AI partner that builds, implements, and optimizes AI solutions as part of your complete marketing system.
                  </p>
                </AnimateOnScroll>
              </div>

              <div className="relative">
                <AnimateOnScroll direction="right">
                  <div className="bg-[#1D1D1F] rounded-2xl p-8 lg:p-10">
                    <div className="w-16 h-16 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center mb-6">
                      <Brain className="w-8 h-8 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
                      Human + Machine
                    </h3>
                    <ul className="space-y-4">
                      {['AI-powered optimization across every channel', 'Human strategy and creative direction', 'Machine learning for real-time adjustments', 'Full implementation—not just recommendations'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-[#86868B]">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="9" r="9" fill="#00D4FF" fillOpacity="0.2"/>
                            <path d="M13 6L7.5 11.5L5 9" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section (Placeholder) */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Team
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Growing together
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                We&apos;re building a team of exceptional marketers and developers. Interested in joining us?
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1D1D1F] text-white font-medium rounded-full hover:bg-[#000000] transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
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
                  Ready to Grow?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Let&apos;s build something
                  <br />
                  <span className="text-[#00D4FF]">extraordinary.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Ready to see what data-driven marketing can do for your business?
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Start the Conversation
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
