'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import Link from 'next/link';
import {
  ArrowRight,
  Mail,
  GitBranch,
  Brain,
  Sparkles,
  Settings,
  CheckCircle2,
  ChevronDown,
  TrendingUp,
  Clock,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Mail,
    title: 'Email Campaign Automation',
    description: 'AI-optimized email sequences with predictive send times. Every message lands when your audience is most likely to engage.',
  },
  {
    icon: GitBranch,
    title: 'Customer Journey Automation',
    description: 'Multi-channel workflows that adapt in real-time. From first touch to conversion, every interaction is personalized.',
  },
  {
    icon: Brain,
    title: 'Lead Scoring & Nurturing',
    description: 'ML-powered scoring that identifies ready-to-buy leads. Stop wasting time on cold prospects—focus on signals that matter.',
  },
  {
    icon: Sparkles,
    title: 'Predictive Personalization',
    description: 'Dynamic content based on behavior and intent. Every touchpoint delivers exactly what each prospect needs to convert.',
  },
  {
    icon: Settings,
    title: 'Workflow Optimization',
    description: 'AI that identifies bottlenecks and suggests improvements. Your automation gets smarter with every interaction.',
  },
];

const approach = [
  {
    step: '01',
    title: 'Audit',
    description: 'Analyze your current automation setup and identify gaps. We map every workflow, measure performance, and find opportunities.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Design AI-enhanced workflow architecture. We build the blueprint for automation that learns and scales.',
  },
  {
    step: '03',
    title: 'Implement',
    description: 'Build and integrate automation systems. Clean code, proper testing, seamless platform integration.',
  },
  {
    step: '04',
    title: 'Train',
    description: 'Configure AI models on your data. The system learns your audience, your timing, your best-performing patterns.',
  },
  {
    step: '05',
    title: 'Scale',
    description: 'Expand and optimize based on results. As your business grows, your automation grows with it.',
  },
];

const benefits = [
  {
    title: 'Self-Optimizing Campaigns',
    description: 'Traditional automation is set-and-forget. AI automation continuously tests, learns, and improves without manual intervention.',
  },
  {
    title: 'Predictive Send Times',
    description: 'Stop guessing when to send. AI analyzes individual recipient behavior to deliver messages at peak engagement moments.',
  },
  {
    title: 'Dynamic Segmentation',
    description: 'Segments that update in real-time based on behavior. No more static lists—your audience is always current.',
  },
  {
    title: 'Platform Agnostic',
    description: 'We integrate with Klaviyo, HubSpot, Marketo, and more. Your existing tools, supercharged with AI capabilities.',
  },
];

const stats = [
  {
    value: '250-300%',
    label: 'ROI vs traditional automation',
    icon: TrendingUp,
  },
  {
    value: '60%',
    label: 'Achieve positive ROI within 12 months',
    icon: Clock,
  },
  {
    value: '25-40%',
    label: 'Productivity improvements',
    icon: Zap,
  },
];

const faqs = [
  {
    question: 'How is AI automation different from regular marketing automation?',
    answer: 'Traditional automation runs on fixed rules—if X happens, do Y. AI automation learns from every interaction. It optimizes send times, personalizes content, and improves conversion rates automatically. No more manual A/B testing or guessing at the best approach.',
  },
  {
    question: 'What platforms do you integrate with?',
    answer: 'We work with all major marketing automation platforms including Klaviyo, HubSpot, Marketo, ActiveCampaign, Salesforce Marketing Cloud, and more. We build integrations that enhance your existing tools rather than replacing them.',
  },
  {
    question: 'How long until we see results?',
    answer: 'Most clients see measurable improvements within 30-60 days. The AI needs some initial data to learn from, but the optimization happens continuously. Expect 60% of implementations to achieve positive ROI within 12 months.',
  },
  {
    question: 'Do we need a lot of data to get started?',
    answer: 'Not necessarily. We can start with as little as 1,000 email subscribers or 500 monthly leads. The AI begins learning immediately and improves as your data grows. More data means faster optimization, but we can work with what you have.',
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

export default function AIAutomationServicePage() {
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
                  AI Marketing Automation
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  AI-Powered Marketing{' '}
                  <span className="text-[#00D4FF]">Automation.</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
                  Workflows that learn, optimize, and scale. From email sequences to customer journeys, automation that gets smarter with every interaction.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                  >
                    Get an Automation Assessment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <AnimateOnScroll>
                <div className="bg-[#1D1D1F] rounded-2xl p-8 lg:p-10 h-full">
                  <p className="text-red-400 text-sm font-medium tracking-wide uppercase mb-4">
                    The Problem
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                    Traditional automation is set-and-forget.
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    It doesn&apos;t learn. It doesn&apos;t adapt. It leaves money on the table. Static workflows send the same message at the same time, regardless of what works. You&apos;re manually testing, manually optimizing, manually falling behind.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <div className="bg-[#F5F5F7] rounded-2xl p-8 lg:p-10 h-full border border-[#00D4FF]/20">
                  <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-4">
                    The Solution
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-[#1D1D1F] mb-4">
                    AI-powered automation that optimizes itself.
                  </h3>
                  <p className="text-[#86868B] text-lg leading-relaxed">
                    Automation that optimizes send times, personalizes content, and improves conversion rates automatically. Every campaign learns from the last. Every workflow gets smarter. Your marketing scales without your workload scaling with it.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                What We Do
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Automation that works while you sleep
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From email campaigns to complex customer journeys, we build AI systems that learn and improve automatically.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
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

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-gray-400 text-sm font-medium tracking-wide uppercase text-center mb-4">
                The Results
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-12 tracking-tight">
                AI automation delivers measurable ROI
              </h2>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center mx-auto mb-6">
                      <stat.icon className="w-8 h-8 text-[#00D4FF]" />
                    </div>
                    <p className="text-4xl lg:text-5xl font-semibold text-[#00D4FF] mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-lg">
                      {stat.label}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Process
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                From audit to scale
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                A proven process that transforms static workflows into intelligent, self-optimizing systems.
              </p>
            </AnimateOnScroll>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {approach.map((item, i) => (
                  <AnimateOnScroll key={i} delay={0.2 + i * 0.08}>
                    <div className="flex gap-6 items-start bg-[#F5F5F7] rounded-2xl p-6 lg:p-8 border border-gray-200/80">
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
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Why AI Automation
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Beyond set-and-forget
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                AI automation doesn&apos;t just execute—it learns, adapts, and improves.
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

        {/* Platforms Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <div className="max-w-4xl mx-auto">
              <AnimateOnScroll>
                <div className="bg-[#F5F5F7] rounded-2xl p-8 lg:p-12 border border-gray-200/80 text-center">
                  <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase mb-4">
                    Platform Integration
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-[#1D1D1F] mb-4">
                    Works with your existing tools
                  </h3>
                  <p className="text-[#86868B] text-lg leading-relaxed mb-8">
                    We integrate AI capabilities into the platforms you already use. No migration required—just smarter automation.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {['Klaviyo', 'HubSpot', 'Marketo', 'ActiveCampaign', 'Salesforce'].map((platform) => (
                      <span
                        key={platform}
                        className="px-6 py-3 bg-white rounded-full text-[#1D1D1F] font-medium border border-gray-200/80"
                      >
                        {platform}
                      </span>
                    ))}
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
                  Ready to Automate Smarter?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Let&apos;s build automation
                  <br />
                  <span className="text-[#00D4FF]">that learns.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Start with a free automation assessment. We&apos;ll show you where AI can transform your marketing workflows.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Get Your Free Assessment
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
