'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  Cpu,
  Database,
  FileText,
  MessageSquare,
  Cog,
  Building2,
  Lightbulb,
  ChevronDown,
  CheckCircle2,
  Bot,
  Workflow,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Database,
    title: 'RAG Implementations',
    description: 'Knowledge bases that answer questions from your documents. Turn company wikis, manuals, and documentation into intelligent assistants.',
    price: '$40K-$100K',
  },
  {
    icon: Bot,
    title: 'Custom AI Agents',
    description: 'Autonomous systems that handle complex workflows. From customer service to data processing, agents that work around the clock.',
    price: 'Custom pricing',
  },
  {
    icon: Cog,
    title: 'AI Integration Services',
    description: 'Connect AI to your existing tech stack. CRMs, ERPs, databases, and APIs working together with intelligent automation.',
    price: 'Based on scope',
  },
  {
    icon: Building2,
    title: 'Industry-Specific AI',
    description: 'Solutions built for healthcare, legal, finance, and more. AI that understands your domain and compliance requirements.',
    price: 'Custom pricing',
  },
  {
    icon: Lightbulb,
    title: 'AI Strategy & Consulting',
    description: 'Roadmaps for AI adoption and implementation. Identify opportunities, assess feasibility, and plan your AI journey.',
    price: '$15K-$50K',
  },
];

const useCases = [
  {
    icon: FileText,
    title: 'Internal Knowledge Assistants',
    description: 'Train AI on company documentation, policies, and procedures. Employees get instant, accurate answers without searching through folders.',
  },
  {
    icon: MessageSquare,
    title: 'Customer-Facing AI',
    description: 'AI that knows your products deeply. Answer complex questions, recommend solutions, and escalate intelligently when needed.',
  },
  {
    icon: Workflow,
    title: 'Automated Data Processing',
    description: 'Extract, transform, and analyze data at scale. From invoice processing to report generation, AI handles the repetitive work.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Content Generation',
    description: 'Generate product descriptions, marketing copy, and technical documentation that matches your brand voice and standards.',
  },
  {
    icon: Brain,
    title: 'Intelligent Document Processing',
    description: 'Parse contracts, extract key terms, categorize documents, and surface insights from unstructured text at enterprise scale.',
  },
];

const approach = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Deep dive into your challenges and data. We understand your workflows, pain points, and what success looks like.',
  },
  {
    step: '02',
    title: 'Architecture',
    description: 'Design the AI solution and integrations. Choose the right models, data pipelines, and infrastructure for your needs.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build and train custom models. Iterative development with regular demos and feedback cycles.',
  },
  {
    step: '04',
    title: 'Testing',
    description: 'Rigorous QA and edge case handling. We test for accuracy, performance, and security before anything goes live.',
  },
  {
    step: '05',
    title: 'Deployment',
    description: 'Launch with monitoring and support. Continuous improvement based on real-world usage and feedback.',
  },
];

const investmentTiers = [
  {
    tier: 'Simple Chatbots',
    range: '$5,000 - $15,000',
    description: 'FAQ bots, basic customer service, simple document Q&A',
    features: [
      'Pre-built model integration',
      'Basic conversation flows',
      'Standard web deployment',
      'Basic analytics',
    ],
  },
  {
    tier: 'Smart Agents with Learning',
    range: '$50,000 - $150,000',
    description: 'RAG systems, workflow automation, custom-trained models',
    features: [
      'Custom knowledge bases',
      'Multi-step workflows',
      'API integrations',
      'Advanced analytics & feedback loops',
      'Continuous learning capabilities',
    ],
  },
  {
    tier: 'Enterprise Solutions',
    range: '$300,000+',
    description: 'Full-scale AI platforms, multi-agent systems, industry-specific solutions',
    features: [
      'Custom model training',
      'Multi-system integration',
      'Enterprise security & compliance',
      'Dedicated support & SLAs',
      'On-premise deployment options',
    ],
  },
];

const faqs = [
  {
    question: 'What makes your AI solutions different from off-the-shelf tools?',
    answer: 'Off-the-shelf AI doesn\'t know your business. We build solutions trained on your data, designed for your workflows, and integrated with your systems. The result is AI that actually understands context and delivers accurate, relevant results.',
  },
  {
    question: 'How long does a custom AI project take?',
    answer: 'Simple chatbots can be deployed in 4-6 weeks. RAG implementations typically take 8-12 weeks. Enterprise solutions with custom training and integrations can take 4-6 months. We provide detailed timelines after discovery.',
  },
  {
    question: 'What about data privacy and security?',
    answer: 'Your data stays yours. We can deploy on your infrastructure, use private cloud instances, and implement enterprise-grade security. For regulated industries, we build compliance into the architecture from day one.',
  },
  {
    question: 'Do you handle the ongoing maintenance?',
    answer: 'Yes. AI systems need monitoring, updates, and continuous improvement. We offer support packages that include performance monitoring, model updates, and regular optimization based on usage patterns.',
  },
  {
    question: 'What if we\'re not sure AI is right for our use case?',
    answer: 'That\'s exactly what our strategy and consulting services are for. We\'ll assess your needs, identify the highest-impact opportunities, and give you an honest recommendation on whether AI makes sense for your situation.',
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

export default function CustomAIPage() {
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
                  Custom AI Solutions
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  Custom AI Solutions{' '}
                  <span className="text-[#00D4FF]">Built for Your Business</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
                  From RAG implementations to bespoke AI agents, we build intelligent systems that solve your specific challenges and drive measurable results.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                  >
                    Schedule AI Consultation
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
                <div className="bg-white/5 rounded-2xl p-8 lg:p-10 border border-white/10">
                  <p className="text-red-400 text-sm font-medium tracking-wide uppercase mb-4">
                    The Problem
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                    Off-the-shelf AI doesn&apos;t understand your business.
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Generic solutions create generic results. ChatGPT doesn&apos;t know your products. Claude doesn&apos;t understand your processes. Pre-built tools force you to adapt to their limitations instead of solving your actual problems.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="bg-[#00D4FF]/10 rounded-2xl p-8 lg:p-10 border border-[#00D4FF]/20">
                  <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-4">
                    The Solution
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                    Custom AI built on your data.
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Trained for your use cases. Integrated with your systems. AI that speaks your language, understands your context, and delivers results that matter to your business.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                What We Build
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                AI solutions for every challenge
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From simple chatbots to enterprise-scale AI platforms, we build what you need.
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
                    <p className="text-[#86868B] leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-[#00D4FF] font-medium text-sm">
                      {service.price}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Use Cases
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                What custom AI can do for you
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Real applications that deliver real business value.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-200/80">
                    <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center mb-4">
                      <useCase.icon className="w-5 h-5 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed text-sm">
                      {useCase.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Process
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-4 tracking-tight">
                From concept to production
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-gray-400 text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                A proven methodology for building AI that works.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {approach.map((item, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="relative">
                    <div className="text-[#00D4FF] text-4xl font-bold mb-4 opacity-50">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Investment
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Pricing that scales with complexity
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From quick wins to transformative platforms, we have options for every stage.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-6">
              {investmentTiers.map((tier, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className={`rounded-2xl p-8 h-full border transition-all duration-300 ${i === 1 ? 'bg-[#1D1D1F] border-[#00D4FF]/30' : 'bg-[#F5F5F7] border-gray-200/80'}`}>
                    <h3 className={`text-xl font-semibold mb-2 ${i === 1 ? 'text-white' : 'text-[#1D1D1F]'}`}>
                      {tier.tier}
                    </h3>
                    <p className="text-[#00D4FF] text-2xl font-bold mb-3">
                      {tier.range}
                    </p>
                    <p className={`text-sm leading-relaxed mb-6 ${i === 1 ? 'text-gray-400' : 'text-[#86868B]'}`}>
                      {tier.description}
                    </p>
                    <ul className="space-y-3">
                      {tier.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${i === 1 ? 'text-[#00D4FF]' : 'text-[#00D4FF]'}`} />
                          <span className={`text-sm ${i === 1 ? 'text-gray-300' : 'text-[#86868B]'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
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
                Common questions about custom AI
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
                  Ready to Build?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Let&apos;s create AI that
                  <br />
                  <span className="text-[#00D4FF]">works for you.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Schedule a consultation to discuss your challenges and explore what custom AI can do for your business.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Schedule AI Consultation
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
