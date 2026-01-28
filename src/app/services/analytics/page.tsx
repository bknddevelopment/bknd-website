'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  LineChart,
  Target,
  Eye,
  Zap,
  CheckCircle2,
  ChevronDown,
  Brain,
  TrendingUp,
  Sparkles,
  AlertTriangle,
  Route
} from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: BarChart3,
    title: 'GA4 Setup & Migration',
    description: 'Complete Google Analytics 4 implementation with custom events, conversions, and e-commerce tracking configured correctly from day one.',
  },
  {
    icon: Target,
    title: 'Tracking Implementation',
    description: 'Server-side tagging, cross-domain tracking, and custom event architectures that capture every meaningful user interaction.',
  },
  {
    icon: LineChart,
    title: 'Custom Dashboards',
    description: 'Real-time dashboards built in Looker Studio or your preferred platform. See the metrics that matter, updated automatically.',
  },
  {
    icon: Eye,
    title: 'Attribution Modeling',
    description: 'Multi-touch attribution that shows the true customer journey. Know exactly which channels drive conversions.',
  },
];

const approach = [
  {
    step: '01',
    title: 'Audit',
    description: 'We analyze your current tracking setup, identify data gaps, and document what you\'re missing.',
  },
  {
    step: '02',
    title: 'Implement',
    description: 'Clean, documented tracking code deployed through GTM with proper testing and validation.',
  },
  {
    step: '03',
    title: 'Visualize',
    description: 'Custom dashboards that translate raw data into actionable insights your team can actually use.',
  },
  {
    step: '04',
    title: 'Analyze',
    description: 'Ongoing analysis that connects user behavior to business outcomes and revenue.',
  },
  {
    step: '05',
    title: 'Recommend',
    description: 'Data-backed recommendations to optimize your marketing spend and improve conversion rates.',
  },
];

const aiCapabilities = [
  {
    icon: Brain,
    title: 'AI-Powered Attribution Modeling',
    description: 'Machine learning algorithms that analyze thousands of touchpoints to accurately credit each channel. No more guessing which campaigns actually drive conversions.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics & Forecasting',
    description: 'AI models that predict future performance based on historical patterns. Know what\'s coming before it happens and adjust strategy proactively.',
  },
  {
    icon: Sparkles,
    title: 'Automated Insight Generation',
    description: 'Stop digging through dashboards. Our AI surfaces the insights that matter—automatically flagging opportunities and issues you\'d otherwise miss.',
  },
  {
    icon: AlertTriangle,
    title: 'Real-Time Anomaly Detection',
    description: 'Instant alerts when metrics deviate from expected patterns. Catch tracking issues, traffic anomalies, or conversion drops the moment they happen.',
  },
  {
    icon: Route,
    title: 'Customer Journey Analysis',
    description: 'ML-powered path analysis that reveals how customers actually move through your funnel. Identify drop-off points and optimization opportunities automatically.',
  },
];

const benefits = [
  {
    title: 'Developer-Built Tracking',
    description: 'Your analytics are implemented by engineers who understand both code and marketing. No tag soup, no broken events.',
  },
  {
    title: 'No Data Gaps',
    description: 'Complete visibility into user journeys from first touch to conversion. Every interaction captured, nothing lost.',
  },
  {
    title: 'Real-Time Dashboards',
    description: 'Live data at your fingertips. No more waiting for weekly reports or digging through spreadsheets.',
  },
  {
    title: 'Privacy Compliant',
    description: 'GDPR and CCPA compliant implementations with proper consent management and data retention policies.',
  },
];

const faqs = [
  {
    question: 'How long does a GA4 implementation take?',
    answer: 'A standard GA4 setup takes 2-3 weeks. Complex implementations with custom events, e-commerce tracking, and multi-domain setups typically take 4-6 weeks. We\'ll provide a detailed timeline after our initial audit.',
  },
  {
    question: 'Can you work with our existing analytics setup?',
    answer: 'Absolutely. We often audit and improve existing implementations. We\'ll identify what\'s working, what\'s broken, and what\'s missing—then fix it without losing historical data.',
  },
  {
    question: 'What platforms do you integrate with?',
    answer: 'We work with GA4, Google Tag Manager, Looker Studio, BigQuery, Segment, Mixpanel, Amplitude, and most major marketing platforms. If you use it, we can track it.',
  },
  {
    question: 'How do you handle attribution across channels?',
    answer: 'We implement proper UTM structures, cross-domain tracking, and custom attribution models that account for the full customer journey—not just last-click. You\'ll finally know which channels actually drive revenue.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200/80 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-[#1D1D1F] group-hover:text-[#00D4FF] transition-colors pr-8">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#86868B] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-[#86868B] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function AnalyticsServicePage() {
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
                  Data & Analytics
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  Data You Can{' '}
                  <span className="text-[#00D4FF]">Actually Use.</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
                  Most analytics setups are broken. Events fire inconsistently, attribution is guesswork, and dashboards show vanity metrics. We build tracking systems that tell you exactly what&apos;s working—and what isn&apos;t.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                  >
                    Get an Analytics Audit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                What We Do
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Analytics that drives decisions
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From implementation to insights, we handle every layer of your analytics stack.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-[#F5F5F7] rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                    <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* AI Attribution & Insights Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                AI Attribution & Insights
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Turn data into action—automatically
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                While others manually analyze spreadsheets, our AI surfaces insights in seconds. Get the competitive edge of enterprise-level analytics intelligence.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiCapabilities.map((capability, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.08}>
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#00D4FF]/5 flex items-center justify-center mb-6">
                      <capability.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={0.6}>
              <div className="mt-12 bg-white rounded-2xl p-8 lg:p-10 border border-gray-200/80">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center">
                        <Brain className="w-5 h-5 text-[#00D4FF]" />
                      </div>
                      <span className="text-[#00D4FF] text-sm font-semibold uppercase tracking-wide">
                        The AI Advantage
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-3">
                      From weeks of analysis to instant insights
                    </h3>
                    <p className="text-[#86868B] leading-relaxed">
                      Traditional analytics requires analysts to manually query data, build reports, and interpret results. Our AI does this continuously—processing millions of data points to surface what matters most. You get actionable recommendations, not just dashboards.
                    </p>
                  </div>
                  <div className="flex-shrink-0 grid grid-cols-2 gap-4 lg:gap-6">
                    <div className="text-center p-4 bg-[#F5F5F7] rounded-xl">
                      <p className="text-2xl lg:text-3xl font-semibold text-[#00D4FF]">10x</p>
                      <p className="text-[#86868B] text-sm">Faster insights</p>
                    </div>
                    <div className="text-center p-4 bg-[#F5F5F7] rounded-xl">
                      <p className="text-2xl lg:text-3xl font-semibold text-[#00D4FF]">24/7</p>
                      <p className="text-[#86868B] text-sm">Monitoring</p>
                    </div>
                    <div className="text-center p-4 bg-[#F5F5F7] rounded-xl">
                      <p className="text-2xl lg:text-3xl font-semibold text-[#00D4FF]">95%</p>
                      <p className="text-[#86868B] text-sm">Attribution accuracy</p>
                    </div>
                    <div className="text-center p-4 bg-[#F5F5F7] rounded-xl">
                      <p className="text-2xl lg:text-3xl font-semibold text-[#00D4FF]">0</p>
                      <p className="text-[#86868B] text-sm">Manual reports</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Approach
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                From chaos to clarity
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                A systematic process that transforms raw data into actionable insights.
              </p>
            </AnimateOnScroll>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {approach.map((item, i) => (
                  <AnimateOnScroll key={i} delay={0.2 + i * 0.08}>
                    <div className="flex gap-6 items-start bg-white rounded-2xl p-6 lg:p-8 border border-gray-200/80">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1D1D1F] flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[#86868B] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Why Choose Us
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Analytics built by developers
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                This is BKND&apos;s core strength. We don&apos;t just configure tools—we engineer solutions.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-[#00D4FF]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-[#86868B] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Teaser */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <div className="max-w-4xl mx-auto">
              <AnimateOnScroll>
                <div className="bg-white/5 rounded-2xl p-8 lg:p-12 border border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-6 h-6 text-[#00D4FF]" />
                    <span className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase">
                      Case Study
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                    How proper tracking revealed $127K in hidden attribution
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    A B2B SaaS client thought their paid campaigns were underperforming. After implementing cross-domain tracking and proper conversion attribution, we discovered their paid search was actually driving 3x more revenue than previously measured.
                  </p>
                  <div className="flex flex-wrap gap-8 text-center">
                    <div>
                      <p className="text-3xl font-semibold text-[#00D4FF]">312%</p>
                      <p className="text-gray-400 text-sm">Attribution accuracy improvement</p>
                    </div>
                    <div>
                      <p className="text-3xl font-semibold text-[#00D4FF]">$127K</p>
                      <p className="text-gray-400 text-sm">Previously untracked revenue</p>
                    </div>
                    <div>
                      <p className="text-3xl font-semibold text-[#00D4FF]">2 weeks</p>
                      <p className="text-gray-400 text-sm">Implementation time</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                FAQ
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-12 tracking-tight">
                Common questions
              </h2>
            </AnimateOnScroll>

            <div className="max-w-3xl mx-auto">
              <AnimateOnScroll delay={0.2}>
                <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200/80">
                  {faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
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
                  Ready to See Your Data Clearly?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Let&apos;s build your
                  <br />
                  <span className="text-[#00D4FF]">analytics foundation.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Start with a free analytics audit. We&apos;ll show you exactly what&apos;s broken and how to fix it.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Get Your Free Audit
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
