"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  ArrowRight,
  MessageSquare,
  Bot,
  Users,
  Globe,
  Sparkles,
  Clock,
  TrendingUp,
  Shield,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    icon: MessageSquare,
    title: "Customer Service Chatbots",
    description:
      "Handle FAQs, troubleshoot common issues, and reduce support ticket volume with intelligent automation that learns from every conversation.",
  },
  {
    icon: TrendingUp,
    title: "Sales Qualification Bots",
    description:
      "Qualify leads in real-time, book demos automatically, and capture contact information while your sales team focuses on closing.",
  },
  {
    icon: Users,
    title: "Lead Capture Assistants",
    description:
      "Engage every visitor with personalized conversations, collect valuable information, and route hot leads directly to your sales team.",
  },
  {
    icon: Globe,
    title: "Multi-Channel Deployment",
    description:
      "Deploy across website, SMS, Facebook Messenger, WhatsApp, and more—one AI brain powering consistent experiences everywhere.",
  },
  {
    icon: Sparkles,
    title: "Custom AI Assistants",
    description:
      "Trained on your data, speaking in your voice, following your processes. Not a generic bot—your digital team member.",
  },
];

const approach = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We analyze your customer conversations, understand common questions, and identify where automation creates the most impact.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Map conversation flows, integration points, and escalation paths. We design for natural conversations, not robotic scripts.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Develop and train your custom AI chatbot using your actual data, FAQs, and product information for accurate responses.",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "Launch across your channels with real-time monitoring, analytics dashboards, and human handoff protocols in place.",
  },
  {
    step: "05",
    title: "Optimize",
    description:
      "Continuous improvement based on real conversations. We analyze, retrain, and refine to increase automation rates over time.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Your AI never sleeps, never takes breaks, and responds instantly. Capture leads and help customers at 2 AM just as effectively as 2 PM.",
  },
  {
    icon: TrendingUp,
    title: "Instant Qualification",
    description:
      "Stop wasting sales time on unqualified leads. AI qualifies prospects in real-time using your exact criteria before routing to your team.",
  },
  {
    icon: Shield,
    title: "Consistent Experience",
    description:
      "Every customer gets your best service, every time. No bad days, no training gaps, no forgotten information.",
  },
  {
    icon: Bot,
    title: "Scalable Support",
    description:
      "Handle 10 or 10,000 conversations simultaneously without hiring. Scale customer engagement without scaling headcount.",
  },
];

const stats = [
  { value: "60%", label: "of inquiries resolved without human intervention" },
  { value: "40%", label: "increase in lead capture with 24/7 availability" },
  { value: "3 mo", label: "average ROI on chatbot implementation" },
];

const faqs = [
  {
    question: "How long does it take to build and deploy a chatbot?",
    answer:
      "A basic FAQ chatbot can be deployed in 2-3 weeks. More complex chatbots with integrations, custom training, and multi-channel deployment typically take 4-8 weeks. We prioritize getting value quickly while building toward your full vision.",
  },
  {
    question: "Will the chatbot sound robotic or generic?",
    answer:
      "Absolutely not. We train your AI on your actual content, brand voice, and communication style. The result is a chatbot that sounds like an extension of your team, not a generic script reader.",
  },
  {
    question: "What happens when the chatbot can't answer a question?",
    answer:
      "We build intelligent escalation paths. When your chatbot encounters something it can't handle, it seamlessly hands off to a human agent with full conversation context—no repetition required for the customer.",
  },
  {
    question: "Can the chatbot integrate with our existing tools?",
    answer:
      "Yes. We integrate with CRMs (Salesforce, HubSpot), help desks (Zendesk, Intercom), calendars (Calendly, Google), and most platforms with APIs. Your chatbot becomes part of your existing workflow, not a siloed tool.",
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

export default function AIChatbotsPage() {
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
                  AI Chatbots &amp; Assistants
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  AI Chatbots That{" "}
                  <span className="text-[#00D4FF]">
                    Convert Visitors Into Customers
                  </span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
                  24/7 intelligent engagement that qualifies leads, answers
                  questions, and books meetings—while you focus on closing
                  deals.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1D1D1F] text-white font-medium rounded-full hover:bg-[#000000] transition-all duration-300"
                  >
                    Get Your AI Chatbot
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
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimateOnScroll>
                <div className="bg-[#FEE2E2] rounded-2xl p-8 lg:p-10 border border-red-200/80">
                  <p className="text-red-600 text-sm font-medium tracking-wide uppercase mb-4">
                    The Problem
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-[#1D1D1F] mb-4">
                    Your team can&apos;t be online 24/7
                  </h3>
                  <ul className="space-y-3 text-[#86868B]">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">&#10005;</span>
                      Visitors leave without converting when no one&apos;s
                      available
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">&#10005;</span>
                      Support tickets pile up faster than your team can handle
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">&#10005;</span>
                      Sales spends hours on leads that were never qualified
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">&#10005;</span>
                      Peak hours overwhelm your team while off-hours go silent
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="bg-[#DCFCE7] rounded-2xl p-8 lg:p-10 border border-green-200/80">
                  <p className="text-green-600 text-sm font-medium tracking-wide uppercase mb-4">
                    The Solution
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-[#1D1D1F] mb-4">
                    AI that handles 60% of inquiries autonomously
                  </h3>
                  <ul className="space-y-3 text-[#86868B]">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">&#10003;</span>
                      Instant responses 24/7—never miss a lead again
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">&#10003;</span>
                      Qualify leads automatically using your criteria
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">&#10003;</span>
                      Reduce support volume while improving satisfaction
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">&#10003;</span>
                      Scale engagement without scaling headcount
                    </li>
                  </ul>
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
                What We Build
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                AI Chatbot Solutions
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From simple FAQ bots to sophisticated AI assistants, we build
                chatbots that actually work.
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

        {/* Our Approach Section */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Process
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-4 tracking-tight">
                From Concept to Deployment
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-gray-400 text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                A proven process that delivers AI chatbots that actually solve
                problems.
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

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Results That Matter
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-12 tracking-tight">
                What AI Chatbots Deliver
              </h2>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="text-center p-8 bg-[#F5F5F7] rounded-2xl border border-gray-200/80">
                    <div className="text-5xl lg:text-6xl font-bold text-[#00D4FF] mb-4">
                      {stat.value}
                    </div>
                    <p className="text-[#86868B] text-lg">{stat.label}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Why AI Chatbots
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                The Unfair Advantage
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Why businesses are racing to implement AI-powered customer
                engagement.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="flex gap-6 p-8 bg-white rounded-2xl border border-gray-200/80">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-[#00D4FF]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">
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
                Common Questions
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Everything you need to know about AI chatbot implementation.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="max-w-2xl mx-auto">
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
                  Ready to Automate?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Let&apos;s build your
                  <br />
                  <span className="text-[#00D4FF]">24/7 sales machine.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Get a free chatbot strategy session and discover how AI can
                  transform your customer engagement.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Schedule Strategy Session
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
