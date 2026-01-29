'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import Link from 'next/link';
import {
  ArrowRight,
  Search,
  Brain,
  MessageSquare,
  FileText,
  BarChart3,
  Zap,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Eye,
  Target,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Eye,
    title: 'AI Search Visibility Audits',
    description: 'Analyze how ChatGPT, Gemini, and Perplexity currently perceive your brand. Understand where you appear in AI-generated responses and where you\'re invisible.',
  },
  {
    icon: Brain,
    title: 'LLM Optimization',
    description: 'Structure your content for large language model understanding. We optimize for how AI reads, interprets, and retrieves your information.',
  },
  {
    icon: MessageSquare,
    title: 'AI Citation Generation',
    description: 'Get your content cited as a source in AI responses. We engineer content that AI systems reference when answering user queries.',
  },
  {
    icon: FileText,
    title: 'Content Structuring for AI',
    description: 'Format your information architecture for optimal AI consumption. Clear hierarchies, semantic relationships, and machine-readable structure.',
  },
  {
    icon: BarChart3,
    title: 'AI Search Tracking',
    description: 'Monitor your visibility across AI platforms over time. Track citations, references, and brand mentions in AI-generated content.',
  },
];

const platforms = [
  { name: 'ChatGPT / OpenAI', description: 'The largest AI assistant with millions of daily queries' },
  { name: 'Google Gemini / AI Overviews', description: 'Google\'s AI powering search results and Bard' },
  { name: 'Perplexity AI', description: 'The AI-native search engine gaining rapid adoption' },
  { name: 'Claude / Anthropic', description: 'Enterprise AI assistant with growing market share' },
  { name: 'Microsoft Copilot', description: 'AI integrated across Microsoft\'s ecosystem' },
];

const approach = [
  {
    step: '01',
    title: 'Audit',
    description: 'Analyze your current AI visibility. We query major AI platforms to understand how they perceive and cite your brand.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Identify high-value AI search opportunities. Map the questions your audience asks AI and where you should appear.',
  },
  {
    step: '03',
    title: 'Optimize',
    description: 'Restructure content for LLM understanding. Implement semantic markup, clear hierarchies, and AI-friendly formatting.',
  },
  {
    step: '04',
    title: 'Build Authority',
    description: 'Generate citations and references. Create content that AI systems trust and cite as authoritative sources.',
  },
  {
    step: '05',
    title: 'Track',
    description: 'Monitor AI search visibility over time. Track your citations, references, and brand presence across platforms.',
  },
];

const stats = [
  { value: '400+', label: 'AI citations generated for clients' },
  { value: '$220K+', label: 'Traffic value from AI search' },
  { value: 'First', label: 'Mover advantage in AI search' },
];

const whyNow = [
  {
    icon: TrendingUp,
    title: 'Exponential AI Search Growth',
    description: 'AI search usage is doubling year-over-year. ChatGPT alone processes millions of queries daily that used to go to Google.',
  },
  {
    icon: Target,
    title: 'Early Adopter Advantage',
    description: 'GEO is where SEO was in 2005. Brands optimizing now will dominate AI search results for years to come.',
  },
  {
    icon: Sparkles,
    title: 'Complete Search Strategy',
    description: 'Traditional SEO + GEO = comprehensive visibility. Capture users whether they search Google or ask AI.',
  },
];

const faqs = [
  {
    question: 'What is Generative Engine Optimization (GEO)?',
    answer: 'GEO is the practice of optimizing content to appear in AI-generated responses. While SEO targets traditional search engines like Google, GEO targets AI systems like ChatGPT, Gemini, and Perplexity that generate answers by synthesizing information from multiple sources.',
  },
  {
    question: 'How is GEO different from traditional SEO?',
    answer: 'Traditional SEO optimizes for ranking in a list of blue links. GEO optimizes to be cited within AI-generated answers. The goal shifts from "rank higher" to "be the source AI references." This requires different content structures, authority signals, and optimization tactics.',
  },
  {
    question: 'How do you track AI search visibility?',
    answer: 'We systematically query AI platforms with relevant questions and analyze which sources they cite. We track citation frequency, context accuracy, and brand mention sentiment. This provides ongoing visibility into your AI search presence.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'AI systems update their knowledge and citation patterns regularly. Initial improvements can appear within weeks as optimized content gets indexed. Full impact typically materializes over 2-4 months as AI systems learn to trust and cite your content.',
  },
  {
    question: 'Do I still need traditional SEO?',
    answer: 'Absolutely. Traditional search isn\'t going away—it\'s being supplemented by AI search. The strongest strategy combines SEO and GEO to capture users regardless of how they search. Many AI systems also use traditional search rankings as trust signals.',
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

export default function GEOServicePage() {
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
                  AI Search Optimization
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  Generative Engine{' '}
                  <span className="text-[#00D4FF]">Optimization (GEO)</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
                  Get found in AI search. As ChatGPT, Gemini, and Perplexity reshape how people find information, your content needs to be optimized for the new search landscape.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                  >
                    Get AI Search Audit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <AnimateOnScroll>
                <div className="bg-red-500/10 rounded-2xl p-8 lg:p-10 border border-red-500/20">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-6">
                    <Search className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">The Problem</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Traditional SEO optimizes for Google. But millions now ask ChatGPT, Gemini, and Perplexity instead. If AI can&apos;t find and cite you, you&apos;re invisible to a growing audience.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <div className="bg-[#00D4FF]/10 rounded-2xl p-8 lg:p-10 border border-[#00D4FF]/20">
                  <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">The Solution</h3>
                  <p className="text-gray-400 leading-relaxed">
                    GEO optimizes your content for AI search engines—getting you cited, referenced, and recommended in AI-generated answers. Be the source AI trusts.
                  </p>
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
                GEO Services
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Comprehensive optimization for the AI search era.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Platforms Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Platforms
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Platforms We Optimize For
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Complete visibility across the AI search ecosystem.
              </p>
            </AnimateOnScroll>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {platforms.map((platform, i) => (
                  <AnimateOnScroll key={i} delay={0.2 + i * 0.08}>
                    <div className="bg-white rounded-xl p-6 border border-gray-200/80 hover:border-[#00D4FF]/50 transition-all duration-300">
                      <h3 className="font-semibold text-[#1D1D1F] mb-2">
                        {platform.name}
                      </h3>
                      <p className="text-sm text-[#86868B]">
                        {platform.description}
                      </p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Process
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                How We Optimize for AI Search
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                A systematic approach to AI search visibility.
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

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Results
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-12 tracking-tight">
                GEO Impact
              </h2>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="text-center">
                    <p className="text-4xl lg:text-5xl font-semibold text-[#00D4FF] mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why GEO Now Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Why Now
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Why GEO Matters Now
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                The window for first-mover advantage is closing.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              {whyNow.map((item, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
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
                Common Questions
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
                  Ready for AI Search?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Get found in
                  <br />
                  <span className="text-[#00D4FF]">AI-generated answers.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Start with a free AI search audit. Discover how AI platforms currently see your brand.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Get AI Search Audit
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
