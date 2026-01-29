import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { ArrowRight, Target, TrendingUp, Eye, Zap, ChevronDown, BarChart3, Code, DollarSign, LineChart, Brain, Gauge, Sparkles, Layers, Activity } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paid Advertising Services | ROI-Driven PPC Management | BKND Development',
  description: 'Data-driven paid advertising that delivers measurable ROI. Google Ads, Meta Ads, LinkedIn Ads & programmatic campaigns managed by developers who understand tracking.',
  keywords: 'paid advertising, PPC management, Google Ads, Meta Ads, Facebook Ads, LinkedIn Ads, programmatic advertising, ROI optimization, conversion tracking',
  openGraph: {
    title: 'Paid Advertising Services | BKND Development',
    description: 'Data-driven paid advertising that delivers measurable ROI. Developer-built tracking for complete transparency.',
    type: 'website',
    url: 'https://bknd.dev/services/paid-advertising',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paid Advertising Services | BKND Development',
    description: 'Data-driven paid advertising that delivers measurable ROI. Developer-built tracking for complete transparency.',
  },
};

const platforms = [
  {
    icon: Target,
    title: 'Google Ads',
    description: 'Search, Display, Shopping, and YouTube campaigns. We capture intent when it matters most.',
  },
  {
    icon: Eye,
    title: 'Meta Ads',
    description: 'Facebook and Instagram advertising with precise audience targeting and creative optimization.',
  },
  {
    icon: TrendingUp,
    title: 'LinkedIn Ads',
    description: 'B2B lead generation targeting decision-makers by job title, company, and industry.',
  },
  {
    icon: Zap,
    title: 'Programmatic',
    description: 'Automated media buying across premium inventory with real-time bidding optimization.',
  },
];

const approach = [
  {
    step: '01',
    title: 'Audit',
    description: 'We analyze your current campaigns, tracking setup, and conversion paths. Most accounts have significant waste hiding in plain sight.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We build a data-backed media plan aligned with your business goals. No vanity metrics—just revenue-focused KPIs.',
  },
  {
    step: '03',
    title: 'Launch',
    description: 'Campaigns go live with proper tracking from day one. Server-side tracking, enhanced conversions, and first-party data integration.',
  },
  {
    step: '04',
    title: 'Optimize',
    description: 'Continuous testing and refinement. We iterate on audiences, creative, and bidding strategies to maximize performance.',
  },
  {
    step: '05',
    title: 'Scale',
    description: 'Once we find what works, we scale strategically. New channels, expanded audiences, increased budgets—with maintained efficiency.',
  },
];

const aiFeatures = [
  {
    icon: Brain,
    title: 'AI-Powered Bid Management',
    description: 'Machine learning algorithms analyze thousands of signals in real-time to optimize bids at the keyword, audience, and placement level—far beyond what manual management can achieve.',
  },
  {
    icon: Gauge,
    title: 'Predictive Budget Allocation',
    description: 'AI forecasts performance across channels and automatically shifts budget to highest-performing campaigns. Your spend flows where the returns are.',
  },
  {
    icon: Sparkles,
    title: 'Creative Testing Automation',
    description: 'Automated multivariate testing of ad copy, images, and CTAs. AI identifies winning combinations and phases out underperformers without manual intervention.',
  },
  {
    icon: Layers,
    title: 'Cross-Channel AI Optimization',
    description: 'Unified AI optimization across Google, Meta, LinkedIn, and programmatic. One brain coordinating your entire paid media ecosystem for maximum efficiency.',
  },
  {
    icon: Activity,
    title: 'Real-Time Performance Adjustments',
    description: 'AI monitors campaigns 24/7 and makes micro-adjustments in milliseconds. Pause underperformers, boost winners, and respond to market changes instantly.',
  },
];

const benefits = [
  {
    icon: BarChart3,
    title: 'Transparent Reporting',
    description: 'Real-time dashboards showing exactly where every dollar goes. No black boxes, no hidden fees, no surprises.',
  },
  {
    icon: Code,
    title: 'Developer-Built Tracking',
    description: 'Server-side tracking, enhanced conversions, and first-party data capture. Your attribution actually works.',
  },
  {
    icon: DollarSign,
    title: 'No Long Contracts',
    description: 'Month-to-month engagements. We earn your business with results, not lock-ins.',
  },
  {
    icon: LineChart,
    title: 'True ROI Focus',
    description: 'We optimize for revenue and profit, not clicks or impressions. Your CFO will appreciate us.',
  },
];

const faqs = [
  {
    question: 'What budget do I need to start with paid advertising?',
    answer: 'We recommend a minimum of $3,000/month in ad spend to gather meaningful data and optimize effectively. However, the right budget depends on your industry, competition, and goals. We\'ll help you determine the optimal starting point during our strategy call.',
  },
  {
    question: 'How is your approach different from other agencies?',
    answer: 'We\'re developers first. That means proper tracking implementation, server-side conversions, and technical integrations that most agencies can\'t deliver. We build the infrastructure to actually measure ROI—not just report on vanity metrics.',
  },
  {
    question: 'How long until I see results?',
    answer: 'You\'ll see data from day one. Meaningful optimization typically takes 2-4 weeks as we gather conversion data. Most clients see significant improvement within 60-90 days. We set realistic expectations and provide clear milestones throughout.',
  },
  {
    question: 'Do you require long-term contracts?',
    answer: 'No. We work month-to-month because we believe in earning your business with results. Our retention comes from performance, not legal lock-ins. You can cancel anytime with 30 days notice.',
  },
];

export default function PaidAdvertisingPage() {
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
                  Paid Advertising
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  Paid advertising that{' '}
                  <span className="text-[#00D4FF]">pays back.</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
                  Most agencies report on clicks. We report on revenue. Our developer-first approach means every conversion is tracked, every dollar is accounted for, and every campaign is optimized for real business growth.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1D1D1F] text-white font-medium rounded-full hover:bg-[#000000] transition-all duration-300"
                >
                  Get Your Free Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
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
                Full-funnel paid media management
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From awareness to conversion, we manage campaigns across every major platform.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-[#F5F5F7] rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                    <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6">
                      <platform.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {platform.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed">
                      {platform.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-gray-400 text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Approach
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-4 tracking-tight">
                A systematic path to performance
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-gray-400 text-lg lg:text-xl text-center mb-16 max-w-2xl mx-auto">
                No guesswork. No hoping for the best. Just a proven process that delivers results.
              </p>
            </AnimateOnScroll>

            <div className="max-w-4xl mx-auto">
              {approach.map((item, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="flex gap-6 lg:gap-8 mb-8 last:mb-0">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center">
                        <span className="text-[#00D4FF] font-semibold text-lg">{item.step}</span>
                      </div>
                    </div>
                    <div className="pt-3">
                      <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* AI Ad Optimization Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                AI-Powered Performance
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                AI Ad Optimization
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Maximize ROAS through continuous AI optimization. Our machine learning systems work around the clock to squeeze every drop of performance from your ad spend.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiFeatures.map((feature, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                    <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6">
                      <feature.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={0.7}>
              <div className="mt-12 bg-[#1D1D1F] rounded-2xl p-8 lg:p-10">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="text-[#00D4FF] text-4xl lg:text-5xl font-semibold mb-2">24/7</p>
                    <p className="text-gray-400">Continuous Optimization</p>
                  </div>
                  <div>
                    <p className="text-[#00D4FF] text-4xl lg:text-5xl font-semibold mb-2">1000+</p>
                    <p className="text-gray-400">Signals Analyzed Per Bid</p>
                  </div>
                  <div>
                    <p className="text-[#00D4FF] text-4xl lg:text-5xl font-semibold mb-2">40%</p>
                    <p className="text-gray-400">Average ROAS Improvement</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
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
                Built different, by design
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                We approach paid media like engineers: systematic, measurable, and continuously optimized.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-[#F5F5F7] rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                    <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6">
                      <benefit.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Teaser */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <AnimateOnScroll>
                  <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase mb-4">
                    Case Study
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.1}>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">
                    From wasted spend to 4.2x ROAS
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.2}>
                  <p className="text-[#86868B] text-lg leading-relaxed mb-6">
                    A B2B SaaS company came to us spending $50k/month on Google Ads with no clear attribution. After implementing proper tracking and restructuring their campaigns, we achieved a 4.2x return on ad spend within 90 days.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.3}>
                  <ul className="space-y-3 mb-8">
                    {['63% reduction in cost per acquisition', '4.2x return on ad spend', '180% increase in qualified leads'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#1D1D1F]">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="9" cy="9" r="9" fill="#00D4FF" fillOpacity="0.2"/>
                          <path d="M13 6L7.5 11.5L5 9" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.4}>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-[#00D4FF] font-medium hover:gap-3 transition-all duration-300"
                  >
                    See how we can help you
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </AnimateOnScroll>
              </div>

              <AnimateOnScroll direction="right">
                <div className="bg-[#1D1D1F] rounded-2xl p-8 lg:p-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-[#00D4FF] text-4xl lg:text-5xl font-semibold mb-2">4.2x</p>
                      <p className="text-gray-400">ROAS</p>
                    </div>
                    <div>
                      <p className="text-[#00D4FF] text-4xl lg:text-5xl font-semibold mb-2">63%</p>
                      <p className="text-gray-400">Lower CPA</p>
                    </div>
                    <div>
                      <p className="text-[#00D4FF] text-4xl lg:text-5xl font-semibold mb-2">180%</p>
                      <p className="text-gray-400">More Leads</p>
                    </div>
                    <div>
                      <p className="text-[#00D4FF] text-4xl lg:text-5xl font-semibold mb-2">90</p>
                      <p className="text-gray-400">Days to Results</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-white">
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
              {faqs.map((faq, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <details className="group mb-4 bg-[#F5F5F7] rounded-2xl border border-gray-200/80">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="text-lg font-semibold text-[#1D1D1F] pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown className="w-5 h-5 text-[#86868B] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-[#86868B] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1D1D1F] py-24 lg:py-32">
          <div className="container-sg">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll>
                <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-6">
                  Ready to Scale?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Let&apos;s make every
                  <br />
                  <span className="text-[#00D4FF]">dollar count.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Get a free audit of your current campaigns and see where the opportunities are.
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
