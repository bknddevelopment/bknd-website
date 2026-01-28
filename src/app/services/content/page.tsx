'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { ArrowRight, FileText, BookOpen, Mail, Share2, PenTool, Search, BarChart3, Target, Users, CheckCircle, Sparkles, Zap, Brain, Users2, Bot } from 'lucide-react';
import Link from 'next/link';

// What We Do services
const contentServices = [
  {
    icon: FileText,
    title: 'Blog Content',
    description: 'SEO-optimized articles that rank and convert. We research, write, and optimize content that drives organic traffic and establishes thought leadership.',
  },
  {
    icon: BookOpen,
    title: 'Case Studies',
    description: 'Compelling success stories that showcase your results. Data-driven narratives that build credibility and help prospects see themselves in your solutions.',
  },
  {
    icon: PenTool,
    title: 'Whitepapers & Guides',
    description: 'In-depth resources that generate qualified leads. Research-backed content that positions you as the authority in your space.',
  },
  {
    icon: Mail,
    title: 'Email Sequences',
    description: 'Nurture campaigns that move prospects through your funnel. Strategic sequences from welcome series to re-engagement campaigns.',
  },
  {
    icon: Share2,
    title: 'Social Content',
    description: 'Platform-native content that engages and converts. LinkedIn thought leadership, Twitter threads, and content repurposing strategies.',
  },
];

// Our Approach steps
const approachSteps = [
  {
    number: '01',
    title: 'Research',
    description: 'Deep dive into your audience, competitors, and keywords to identify content opportunities.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Build a content roadmap aligned with business goals and buyer journey stages.',
  },
  {
    number: '03',
    title: 'Create',
    description: 'Produce high-quality content that balances SEO best practices with engaging storytelling.',
  },
  {
    number: '04',
    title: 'Distribute',
    description: 'Amplify content across channels to maximize reach and engagement.',
  },
  {
    number: '05',
    title: 'Measure',
    description: 'Track performance, gather insights, and continuously optimize for better results.',
  },
];

// Benefits
const benefits = [
  {
    icon: Search,
    title: 'SEO-Optimized',
    description: 'Every piece is built to rank. Keyword research, proper structure, and technical SEO baked into the process.',
  },
  {
    icon: Target,
    title: 'Conversion-Focused',
    description: 'Content designed to move readers to action. Strategic CTAs and persuasive frameworks throughout.',
  },
  {
    icon: Users,
    title: 'Brand-Aligned',
    description: 'Your voice, amplified. We learn your tone, values, and positioning to create content that feels authentically you.',
  },
];

// AI-Powered Content features
const aiFeatures = [
  {
    icon: Sparkles,
    title: 'AI Content at Scale',
    description: 'Generate high-quality drafts 10x faster. Our AI tools handle research, outlines, and initial drafts while human editors ensure every piece meets your brand standards.',
  },
  {
    icon: Brain,
    title: 'AI-Assisted Research',
    description: 'Comprehensive briefs in minutes, not hours. AI analyzes competitors, extracts insights, and surfaces opportunities humans might miss.',
  },
  {
    icon: Zap,
    title: 'Automated SEO Optimization',
    description: 'Real-time optimization suggestions as content is created. AI handles keyword density, readability scoring, and technical SEO so writers can focus on storytelling.',
  },
  {
    icon: Users2,
    title: 'Human + AI Collaboration',
    description: 'AI amplifies human creativity, never replaces it. Writers guide strategy and voice while AI handles repetitive tasks and data analysis.',
  },
  {
    icon: Bot,
    title: 'LLM-Ready Content',
    description: 'Content structured for how AI systems read and cite information. Clear hierarchies, factual density, and citation-friendly formatting for the AI-search era.',
  },
];

// FAQ data
const faqs = [
  {
    question: 'How do you ensure content quality and consistency?',
    answer: 'We start with a comprehensive brand voice guide and content brief process. Every piece goes through our editorial workflow: research, outline approval, draft, revision, and final polish. You maintain full approval authority while we handle the heavy lifting.',
  },
  {
    question: 'What makes your content different from other agencies?',
    answer: 'We combine SEO expertise with genuine storytelling. Our developer-first background means we understand how to make content work technically (proper schema, internal linking, keyword optimization) while still being engaging and valuable to readers. No keyword-stuffed fluff.',
  },
  {
    question: 'How long does it take to see results from content marketing?',
    answer: 'Content marketing is a compounding investment. You\'ll typically see initial ranking improvements within 3-4 months, with significant traffic growth at 6-12 months. We focus on evergreen content that continues to drive value for years, not just quick wins.',
  },
  {
    question: 'Do you handle content distribution and promotion?',
    answer: 'Yes. Content creation is only half the battle. We develop distribution strategies including social amplification, email integration, internal linking, and outreach for backlinks. Our goal is maximizing the ROI of every piece we create.',
  },
];

// Component for the Content Marketing page
function ContentMarketingPageContent() {
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
                  Content Marketing
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  Content That{' '}
                  <span className="text-[#00D4FF]">Converts.</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
                  Strategy-first content that builds authority, drives organic traffic, and turns readers into customers. We don&apos;t just create content&mdash;we create content systems that compound.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1D1D1F] text-white font-medium rounded-full hover:bg-[#000000] transition-all duration-300"
                  >
                    Get Your Content Strategy
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="#approach"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[#1D1D1F] font-medium hover:text-[#00D4FF] transition-colors"
                  >
                    See Our Process
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
                Full-spectrum content services
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From blog posts to thought leadership, we create content that drives measurable business results.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentServices.map((service, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.05}>
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

        {/* Our Approach Section */}
        <section id="approach" className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Approach
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                A systematic approach to content
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-16 max-w-2xl mx-auto">
                We treat content like a product&mdash;with clear processes, quality standards, and continuous improvement.
              </p>
            </AnimateOnScroll>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical line connector */}
                <div className="absolute left-[23px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#00D4FF] via-[#00D4FF]/50 to-transparent hidden md:block" />

                <div className="space-y-8">
                  {approachSteps.map((step, i) => (
                    <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1D1D1F] text-white flex items-center justify-center font-semibold text-sm relative z-10">
                          {step.number}
                        </div>
                        <div className="flex-1 bg-white rounded-2xl p-6 border border-gray-200/80">
                          <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-[#86868B] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Why It Works
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Content built for results
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Every piece we create is designed to achieve specific business objectives.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="w-8 h-8 text-[#00D4FF]" />
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

        {/* AI-Powered Content Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                AI-Powered Content
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Human creativity, amplified by AI
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Produce more content, faster, without sacrificing quality. Our AI-enhanced workflow lets your team focus on strategy while automation handles the heavy lifting.
              </p>
            </AnimateOnScroll>

            {/* Efficiency Stats Bar */}
            <AnimateOnScroll delay={0.2}>
              <div className="bg-[#1D1D1F] rounded-2xl p-6 lg:p-8 mb-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  <div className="text-center">
                    <p className="text-3xl lg:text-4xl font-semibold text-[#00D4FF]">10x</p>
                    <p className="text-gray-400 text-sm mt-1">Faster Drafts</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl lg:text-4xl font-semibold text-[#00D4FF]">3x</p>
                    <p className="text-gray-400 text-sm mt-1">More Content</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl lg:text-4xl font-semibold text-[#00D4FF]">100%</p>
                    <p className="text-gray-400 text-sm mt-1">Human Edited</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl lg:text-4xl font-semibold text-[#00D4FF]">0</p>
                    <p className="text-gray-400 text-sm mt-1">Quality Compromise</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiFeatures.map((feature, i) => (
                <AnimateOnScroll key={i} delay={0.25 + i * 0.05}>
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#00D4FF]/5 flex items-center justify-center mb-6">
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

            {/* Human-AI Philosophy Note */}
            <AnimateOnScroll delay={0.5}>
              <div className="mt-12 bg-white rounded-2xl p-6 lg:p-8 border border-[#00D4FF]/20">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                    <Users2 className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1D1D1F] mb-2">
                      AI assists. Humans create.
                    </h4>
                    <p className="text-[#86868B] leading-relaxed">
                      Every piece of content is crafted by experienced writers who use AI as a research assistant and first-draft tool&mdash;never as a replacement for human judgment, creativity, and brand understanding. Your voice stays authentic because real people ensure it does.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Case Study Teaser Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="relative bg-[#1D1D1F] rounded-3xl p-8 lg:p-12 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4FF]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00D4FF]/5 rounded-full blur-2xl" />

                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-4">
                      Case Study
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                      How strategic content drove 340% organic traffic growth
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      See how we helped a B2B SaaS company build a content engine that generates thousands of qualified leads monthly through SEO-optimized thought leadership.
                    </p>
                    <div className="flex flex-wrap gap-6 mb-8">
                      <div>
                        <p className="text-3xl font-semibold text-[#00D4FF]">340%</p>
                        <p className="text-gray-400 text-sm">Traffic Growth</p>
                      </div>
                      <div>
                        <p className="text-3xl font-semibold text-[#00D4FF]">2.5x</p>
                        <p className="text-gray-400 text-sm">Lead Increase</p>
                      </div>
                      <div>
                        <p className="text-3xl font-semibold text-[#00D4FF]">47</p>
                        <p className="text-gray-400 text-sm">Page 1 Rankings</p>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 text-white hover:text-[#00D4FF] transition-colors font-medium"
                    >
                      Get Similar Results
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  <div className="hidden lg:block">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <BarChart3 className="w-5 h-5 text-[#00D4FF]" />
                        <span className="text-white font-medium">Content Performance</span>
                      </div>
                      {/* Placeholder chart visualization */}
                      <div className="space-y-3">
                        {[85, 92, 78, 95, 88].map((value, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <span className="text-gray-400 text-sm w-20">Month {i + 1}</span>
                            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-[#00D4FF] to-[#00D4FF]/70 rounded-full"
                                style={{ width: `${value}%` }}
                              />
                            </div>
                            <span className="text-white text-sm w-12">{value}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
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

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-[#F5F5F7] rounded-2xl p-6 lg:p-8 border border-gray-200/80">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-[#86868B] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
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
                  Ready to Start?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Let&apos;s create content that
                  <br />
                  <span className="text-[#00D4FF]">drives growth.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Get a custom content strategy tailored to your business goals.
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

export default ContentMarketingPageContent;
