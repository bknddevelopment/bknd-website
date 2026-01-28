'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { ArrowRight, Bot, Workflow, Sparkles, Search, Code, TrendingUp, DollarSign, Users, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots & Assistants',
    description: '24/7 customer engagement that converts. Our AI chatbots handle inquiries, qualify leads, and book meetings while you sleep.',
    href: '/services/ai/chatbots',
  },
  {
    icon: Workflow,
    title: 'AI Marketing Automation',
    description: 'Workflows that learn and optimize. From email sequences to customer journeys, AI-powered automation that gets smarter over time.',
    href: '/services/ai/automation',
  },
  {
    icon: Code,
    title: 'Custom AI Solutions',
    description: 'Bespoke AI built for your business. From RAG implementations to custom agents, we build AI that solves your specific challenges.',
    href: '/services/ai/custom',
  },
  {
    icon: Search,
    title: 'Generative Engine Optimization',
    description: 'Get found in AI search. Optimize your content for ChatGPT, Gemini, Perplexity, and the new wave of AI-powered search.',
    href: '/services/ai/geo',
  },
];

const whyBKND = [
  {
    icon: Code,
    title: "We're not just AI consultants—we execute",
    description: 'No decks, no hand-offs. We build and deploy working AI solutions directly into your marketing stack.',
  },
  {
    icon: Sparkles,
    title: 'Developer-built means we implement directly',
    description: 'Our technical foundation means no waiting on third parties. We code, test, and deploy AI solutions in-house.',
  },
  {
    icon: DollarSign,
    title: 'Revenue-focused, not technology-focused',
    description: "We don't chase shiny AI features. Every solution we build is tied to measurable business outcomes.",
  },
  {
    icon: Users,
    title: 'Full marketing integration, not siloed AI projects',
    description: 'Your AI solutions work seamlessly with your SEO, content, and paid strategies for compounding returns.',
  },
];

const stats = [
  {
    value: '250-300%',
    label: 'ROI vs traditional automation',
    description: 'AI-powered workflows deliver significantly higher returns through intelligent optimization.',
  },
  {
    value: '60%',
    label: 'of inquiries resolved by AI chatbots',
    description: 'Free your team to focus on high-value conversations while AI handles routine questions.',
  },
  {
    value: '$50B+',
    label: 'AI services market by 2030',
    description: "The businesses adopting AI now will dominate their markets. Don't get left behind.",
  },
];

const faqs = [
  {
    question: 'How quickly can AI solutions be implemented?',
    answer: 'Most AI chatbots can be deployed in 2-4 weeks. More complex solutions like custom RAG systems or multi-agent workflows typically take 6-12 weeks depending on scope and integration requirements.',
  },
  {
    question: 'Will AI replace our marketing team?',
    answer: "No. AI amplifies your team's capabilities, handling repetitive tasks and data processing so your people can focus on strategy, creativity, and relationship-building. Think of it as a force multiplier, not a replacement.",
  },
  {
    question: 'How do you ensure AI outputs match our brand voice?',
    answer: "We train AI systems on your existing content, brand guidelines, and communication style. Plus, we build in human review checkpoints for anything customer-facing until you're confident in the outputs.",
  },
  {
    question: 'What if AI makes mistakes or gives wrong information?',
    answer: 'We implement guardrails, fact-checking systems, and fallback protocols. For critical use cases, we design human-in-the-loop workflows. The goal is helpful automation with appropriate safety nets.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200/80">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium text-[#1D1D1F]">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#86868B] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-[#86868B] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function AIServicesPage() {
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
                  AI Solutions
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  AI Solutions That Actually{' '}
                  <span className="text-[#00D4FF]">Drive Revenue</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
                  We combine AI&apos;s speed and scale with human creativity and strategy. The result? Marketing that&apos;s smarter, faster, and more profitable.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1D1D1F] text-white font-medium rounded-full hover:bg-[#000000] transition-all duration-300"
                  >
                    Get AI Assessment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our AI Services
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                AI-Powered Marketing Solutions
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From conversational AI to workflow automation, we build AI that delivers real business results.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <Link href={service.href} className="block h-full">
                    <div className="bg-[#F5F5F7] rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] group">
                      <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6">
                        <service.icon className="w-6 h-6 text-[#00D4FF]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3 group-hover:text-[#00D4FF] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[#86868B] leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[#00D4FF] font-medium group-hover:gap-3 transition-all duration-300">
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why BKND for AI Section */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Why Choose Us
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-4 tracking-tight">
                Why BKND for AI
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-gray-400 text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                We don&apos;t just advise on AI—we build it, deploy it, and make it work for your business.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-6">
              {whyBKND.map((item, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="flex gap-6 p-8 bg-[#2D2D2F] rounded-2xl border border-gray-700/50">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[#00D4FF]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
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

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                The AI Advantage
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Numbers That Matter
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                AI isn&apos;t hype—it&apos;s a measurable business advantage.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 text-center border border-gray-200/80">
                    <div className="flex items-center justify-center mb-4">
                      <TrendingUp className="w-8 h-8 text-[#00D4FF]" />
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold text-[#00D4FF] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-[#1D1D1F] mb-2">
                      {stat.label}
                    </div>
                    <p className="text-[#86868B] text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
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
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Common Questions About AI
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Practical answers about implementing AI in your marketing.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="max-w-2xl mx-auto">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
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
                  Ready to Get Started?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Ready to Add AI to
                  <br />
                  <span className="text-[#00D4FF]">Your Marketing?</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Get a free AI assessment and discover how AI can transform your marketing performance.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Get Your Free AI Assessment
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
