"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  ArrowRight,
  Search,
  Target,
  Hammer,
  Rocket,
  TrendingUp,
  CheckCircle2,
  Clock,
  DollarSign,
  Users,
  Zap,
  Shield,
  ChevronDown,
  Brain,
  BarChart3,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const phases = [
  {
    id: "assess",
    number: "01",
    title: "Assess",
    subtitle: "AI Readiness Evaluation",
    icon: Search,
    duration: "1-2 weeks",
    description:
      "Before building anything, we understand everything. A comprehensive evaluation of your current technology, processes, and opportunities.",
    activities: [
      "Technology stack audit and integration assessment",
      "Current workflow and process documentation",
      "Data infrastructure and quality evaluation",
      "Competitive AI landscape analysis",
      "Team capability and training needs assessment",
      "Quick-win opportunity identification",
    ],
    deliverables: [
      "AI Readiness Score with benchmarks",
      "Gap analysis report",
      "Priority opportunity matrix",
      "Risk assessment and mitigation plan",
    ],
    outcomes:
      "Clear understanding of where you are, where you could be, and what it takes to get there.",
  },
  {
    id: "strategize",
    number: "02",
    title: "Strategize",
    subtitle: "AI Implementation Roadmap",
    icon: Target,
    duration: "2-3 weeks",
    description:
      "Transform insights into action. We develop a customized roadmap that aligns AI initiatives with your business objectives and maximizes ROI.",
    activities: [
      "Define success metrics and KPIs",
      "Prioritize initiatives by business impact and feasibility",
      "Design solution architecture",
      "Create phased implementation timeline",
      "Establish governance and oversight frameworks",
      "Build business case with projected ROI",
    ],
    deliverables: [
      "Comprehensive AI strategy document",
      "Phased implementation roadmap",
      "Technology selection recommendations",
      "Resource and budget requirements",
    ],
    outcomes:
      "A clear path forward with prioritized initiatives, realistic timelines, and measurable goals.",
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    subtitle: "AI Solution Development",
    icon: Hammer,
    duration: "4-8 weeks",
    description:
      "Where strategy becomes reality. We develop AI solutions using agile methodologies with continuous feedback and iterative improvements.",
    activities: [
      "Agile development sprints with weekly reviews",
      "AI model development and training",
      "Integration with existing systems",
      "Quality assurance and testing",
      "Documentation and knowledge transfer",
      "Stakeholder demos and feedback incorporation",
    ],
    deliverables: [
      "Fully functional AI solutions",
      "Integration documentation",
      "Testing and validation reports",
      "User guides and training materials",
    ],
    outcomes:
      "Production-ready AI solutions that integrate seamlessly with your existing marketing stack.",
  },
  {
    id: "deploy",
    number: "04",
    title: "Deploy",
    subtitle: "Integration and Launch",
    icon: Rocket,
    duration: "1-2 weeks",
    description:
      "Systematic rollout with minimal disruption. We handle deployment, training, and change management to ensure smooth adoption.",
    activities: [
      "Staged rollout with pilot testing",
      "Team training and enablement sessions",
      "Performance monitoring setup",
      "Fallback and recovery procedures",
      "Change management support",
      "Go-live support and troubleshooting",
    ],
    deliverables: [
      "Deployed and operational AI systems",
      "Monitoring dashboards",
      "Training completion certificates",
      "Support documentation and runbooks",
    ],
    outcomes:
      "AI solutions live in production with trained teams and monitoring in place.",
  },
  {
    id: "optimize",
    number: "05",
    title: "Optimize",
    subtitle: "Continuous AI Improvement",
    icon: TrendingUp,
    duration: "Ongoing",
    description:
      "AI gets smarter over time. We continuously monitor, analyze, and improve your AI solutions to maximize ROI and adapt to changing needs.",
    activities: [
      "Performance monitoring and analytics",
      "A/B testing and experimentation",
      "Model retraining and updates",
      "Scaling successful initiatives",
      "New opportunity identification",
      "Regular business reviews and reporting",
    ],
    deliverables: [
      "Monthly performance reports",
      "Optimization recommendations",
      "Updated models and workflows",
      "Quarterly strategic reviews",
    ],
    outcomes:
      "Continuously improving AI performance with compounding returns over time.",
  },
];

const stats = [
  {
    value: "88%",
    label: "of marketers use AI daily",
    description: "Up from 29% in 2021. The adoption curve is accelerating.",
    source: "SurveyMonkey 2025",
  },
  {
    value: "300%",
    label: "average ROI from AI marketing",
    description: "AI-powered campaigns deliver significantly higher returns.",
    source: "Loopex Digital 2025",
  },
  {
    value: "75%",
    label: "faster campaign launches",
    description: "Campaigns that took weeks now launch in days.",
    source: "BCG Marketing AI Report",
  },
  {
    value: "40%",
    label: "efficiency improvement",
    description: "Teams accomplish more with AI augmentation.",
    source: "McKinsey AI Report 2025",
  },
];

const differentiators = [
  {
    icon: Hammer,
    title: "We Build, Not Just Advise",
    description:
      "Unlike consultants who hand you a strategy and walk away, we implement end-to-end. No decks sitting on shelves.",
  },
  {
    icon: DollarSign,
    title: "Revenue-Focused, Not Tech-Focused",
    description:
      "We don't chase shiny AI features. Every solution is tied to measurable business outcomes and ROI.",
  },
  {
    icon: Zap,
    title: "Speed to Value",
    description:
      "Most clients see initial results within 30 days. Our phased approach delivers quick wins while building toward comprehensive solutions.",
  },
  {
    icon: Users,
    title: "Human + AI Collaboration",
    description:
      "AI amplifies your team, not replaces it. We design systems where AI handles scale while humans provide strategy and creativity.",
  },
  {
    icon: Shield,
    title: "Built-In Guardrails",
    description:
      "Every AI solution includes safety mechanisms, brand alignment checks, and human-in-the-loop workflows where needed.",
  },
  {
    icon: BarChart3,
    title: "Full Marketing Integration",
    description:
      "AI works with your SEO, content, paid media, and analytics. Not siloed projects, but integrated marketing systems.",
  },
];

const faqs = [
  {
    question: "How long does AI implementation take?",
    answer:
      "Most AI solutions can be deployed in 6-12 weeks. Simple chatbots take 2-4 weeks, while complex custom AI systems with RAG implementations typically require 8-12 weeks. Our phased approach ensures you see value quickly while building toward comprehensive solutions.",
  },
  {
    question: "What ROI can we expect from AI implementation?",
    answer:
      "AI-powered workflows deliver 250-300% ROI compared to traditional automation. Our clients typically see 40% efficiency gains, 30% cost reductions, and measurable revenue improvements within 90 days of deployment.",
  },
  {
    question:
      "Do we need technical expertise to work with your AI methodology?",
    answer:
      "No. Our methodology is designed to work with businesses at any technical level. We handle all development, integration, and optimization. Your team provides business context and objectives; we handle the technical implementation.",
  },
  {
    question: "How do you ensure AI solutions align with our brand?",
    answer:
      "During the Assessment phase, we document your brand voice, guidelines, and communication standards. We then train AI systems on your existing content and build in human review checkpoints. The result is AI that sounds like your brand, not generic automation.",
  },
  {
    question: "What if AI makes mistakes or gives wrong information?",
    answer:
      "We implement guardrails, fact-checking systems, and fallback protocols. For critical use cases, we design human-in-the-loop workflows. AI is powerful but not infallible. The goal is helpful automation with appropriate safety nets.",
  },
  {
    question: "How do you handle data privacy and security?",
    answer:
      "Data security is built into every phase. We follow industry best practices for data handling, use enterprise-grade platforms, and can work with your security team to meet compliance requirements. Your data stays your data.",
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
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-[#86868B] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function AIMethodologyPage() {
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
                  AI Methodology
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  How We Transform Businesses{" "}
                  <span className="text-[#00D4FF]">With AI</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
                  Our proven 5-phase methodology turns AI potential into
                  business results. From readiness assessment to continuous
                  optimization, we guide you through every step of successful AI
                  implementation.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1D1D1F] text-white font-medium rounded-full hover:bg-[#000000] transition-all duration-300"
                  >
                    Get Your AI Readiness Assessment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                The AI Imperative
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                AI is No Longer Optional
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                The businesses implementing AI now will dominate their markets.
                Here&apos;s what the data shows.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-[#F5F5F7] rounded-2xl p-8 text-center border border-gray-200/80">
                    <div className="text-4xl lg:text-5xl font-bold text-[#00D4FF] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-[#1D1D1F] mb-2">
                      {stat.label}
                    </div>
                    <p className="text-[#86868B] text-sm leading-relaxed mb-2">
                      {stat.description}
                    </p>
                    <p className="text-xs text-[#6E6E73]">{stat.source}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Phases */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Methodology
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-4 tracking-tight">
                5 Phases to AI Success
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-gray-400 text-lg lg:text-xl text-center mb-16 max-w-2xl mx-auto">
                A systematic approach that minimizes risk, maximizes ROI, and
                ensures successful AI adoption at every stage.
              </p>
            </AnimateOnScroll>

            <div className="space-y-8">
              {phases.map((phase, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div
                    id={phase.id}
                    className="bg-[#2D2D2F] rounded-2xl p-8 lg:p-10 border border-gray-700/50"
                  >
                    <div className="grid lg:grid-cols-12 gap-8">
                      {/* Phase Header */}
                      <div className="lg:col-span-4">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="text-[#00D4FF] text-5xl font-bold opacity-50">
                            {phase.number}
                          </div>
                          <div>
                            <h3 className="text-2xl lg:text-3xl font-semibold text-white">
                              {phase.title}
                            </h3>
                            <p className="text-[#00D4FF] font-medium">
                              {phase.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 mb-4">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{phase.duration}</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                          {phase.description}
                        </p>
                      </div>

                      {/* Activities */}
                      <div className="lg:col-span-4">
                        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                          What We Do
                        </h4>
                        <ul className="space-y-3">
                          {phase.activities.map((activity, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-sm">
                                {activity}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables & Outcomes */}
                      <div className="lg:col-span-4">
                        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                          What You Get
                        </h4>
                        <ul className="space-y-3 mb-6">
                          {phase.deliverables.map((deliverable, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <Sparkles className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-sm">
                                {deliverable}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="bg-[#00D4FF]/10 rounded-xl p-4 border border-[#00D4FF]/20">
                          <p className="text-[#00D4FF] text-sm font-medium mb-1">
                            Outcome
                          </p>
                          <p className="text-gray-300 text-sm">
                            {phase.outcomes}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Why Choose Us
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                The BKND Difference
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                What sets our AI methodology apart from consultants and
                agencies.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((diff, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                    <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6">
                      <diff.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {diff.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline Visual */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Typical Timeline
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                From Assessment to Results
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Most clients see initial results within 30 days and full
                deployment within 12 weeks.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

                  <div className="space-y-8">
                    {[
                      {
                        week: "Week 1-2",
                        title: "Assessment Complete",
                        description:
                          "AI readiness score and opportunity matrix delivered.",
                      },
                      {
                        week: "Week 3-5",
                        title: "Strategy Approved",
                        description:
                          "Implementation roadmap with prioritized initiatives and timelines.",
                      },
                      {
                        week: "Week 6-10",
                        title: "Solution Built",
                        description:
                          "AI solutions developed, tested, and ready for deployment.",
                      },
                      {
                        week: "Week 11-12",
                        title: "Go Live",
                        description:
                          "Solutions deployed with team trained and monitoring active.",
                      },
                      {
                        week: "Ongoing",
                        title: "Continuous Optimization",
                        description:
                          "Regular improvements, new opportunities, and scaling success.",
                      },
                    ].map((milestone, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-[#00D4FF]/10 flex items-center justify-center border-4 border-white shadow-sm z-10 relative">
                            <Brain className="w-6 h-6 text-[#00D4FF]" />
                          </div>
                        </div>
                        <div className="flex-1 pb-8">
                          <p className="text-[#00D4FF] text-sm font-medium mb-1">
                            {milestone.week}
                          </p>
                          <h4 className="text-xl font-semibold text-[#1D1D1F] mb-2">
                            {milestone.title}
                          </h4>
                          <p className="text-[#86868B]">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
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
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Common Questions
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Straight answers about our AI methodology and implementation
                process.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 border border-gray-200/80">
                {faqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    question={faq.question}
                    answer={faq.answer}
                  />
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
                  Ready to Start?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Get Your Free
                  <br />
                  <span className="text-[#00D4FF]">
                    AI Readiness Assessment
                  </span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Discover where you stand, what&apos;s possible, and how to get
                  there. No obligation, just clarity.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Start Your Assessment
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
