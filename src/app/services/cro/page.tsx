"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  ArrowRight,
  BarChart3,
  FlaskConical,
  Search,
  Target,
  Repeat,
  LineChart,
  Users,
  CheckCircle2,
  Brain,
  Sparkles,
  Zap,
  TrendingUp,
  Activity,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Target,
    title: "Landing Page Optimization",
    description:
      "Transform underperforming pages into conversion engines. We analyze user behavior, test hypotheses, and implement changes that drive measurable improvements.",
  },
  {
    icon: FlaskConical,
    title: "A/B & Multivariate Testing",
    description:
      "Statistical rigor in every test. We design experiments with proper sample sizes, run them to significance, and only implement winners backed by data.",
  },
  {
    icon: Users,
    title: "User Research & Analytics",
    description:
      "Heatmaps, session recordings, and user surveys reveal why visitors leave. We find the friction points others miss.",
  },
  {
    icon: LineChart,
    title: "Funnel Analysis & Optimization",
    description:
      "Map your entire conversion funnel, identify drop-off points, and systematically improve each step of the customer journey.",
  },
];

const approach = [
  {
    step: "01",
    title: "Analyze",
    description:
      "Deep dive into your analytics, user behavior, and conversion data to identify the biggest opportunities.",
  },
  {
    step: "02",
    title: "Hypothesize",
    description:
      "Form data-backed hypotheses about what changes will improve conversions and prioritize by impact.",
  },
  {
    step: "03",
    title: "Test",
    description:
      "Run statistically significant A/B tests to validate hypotheses before making permanent changes.",
  },
  {
    step: "04",
    title: "Implement",
    description:
      "Roll out winning variations and document learnings for future optimization cycles.",
  },
  {
    step: "05",
    title: "Repeat",
    description:
      "Continuous optimization. Each test generates insights that inform the next round of improvements.",
  },
];

const aiFeatures = [
  {
    icon: TrendingUp,
    title: "Predictive Analytics for A/B Testing",
    description:
      "AI models predict test outcomes before reaching full statistical significance, helping you make faster decisions and run more tests in less time.",
  },
  {
    icon: Sparkles,
    title: "AI-Driven Personalization at Scale",
    description:
      "Deliver personalized experiences to every visitor segment automatically. Machine learning identifies patterns and serves the right content to the right user.",
  },
  {
    icon: Zap,
    title: "Automated Test Analysis & Insights",
    description:
      "Stop manually analyzing test results. AI automatically identifies winning variations, explains why they won, and recommends next steps.",
  },
  {
    icon: Brain,
    title: "ML-Optimized Conversion Funnels",
    description:
      "Machine learning continuously optimizes your funnel by identifying drop-off patterns and automatically adjusting experiences to maximize conversions.",
  },
  {
    icon: Activity,
    title: "Real-Time Behavioral Analysis",
    description:
      "AI monitors user behavior in real-time, detecting friction points and opportunities as they happen—not weeks later in a quarterly review.",
  },
];

const benefits = [
  {
    icon: BarChart3,
    title: "Statistical Rigor",
    description:
      "No gut feelings. Every recommendation is backed by statistically significant data and proper testing methodology.",
  },
  {
    icon: Search,
    title: "Developer-Built Tracking",
    description:
      "Clean, accurate analytics implementation. We track what matters and ensure your data is trustworthy.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Results",
    description:
      "Clear reporting on test results, lift percentages, and revenue impact. You see exactly what we do and why.",
  },
];

const faqs = [
  {
    question: "How long does it take to see results from CRO?",
    answer:
      "Most tests require 2-4 weeks to reach statistical significance, depending on your traffic volume. We typically see meaningful conversion improvements within the first 90 days of engagement, with compounding gains over time.",
  },
  {
    question: "What tools do you use for testing?",
    answer:
      "We use industry-leading tools like Google Optimize, VWO, and Optimizely for A/B testing, combined with Hotjar and FullStory for user behavior analysis. The specific stack depends on your needs and existing infrastructure.",
  },
  {
    question: "How much traffic do I need for CRO to work?",
    answer:
      "For meaningful A/B tests, we recommend at least 10,000 monthly visitors and 100+ conversions. With lower traffic, we focus on qualitative research, UX improvements, and high-impact changes that don't require split testing.",
  },
  {
    question: "What kind of conversion improvements can I expect?",
    answer:
      "Results vary by industry and starting point, but our clients typically see 15-40% improvement in conversion rates within the first 6 months. Some tests yield 100%+ lifts, while others show smaller incremental gains that compound over time.",
  },
];

export default function CROPage() {
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
                  Conversion Rate Optimization
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  Turn Visitors Into{" "}
                  <span className="text-[#00D4FF]">Customers.</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
                  Data-driven optimization that turns your existing traffic into
                  more revenue. No guessing, no gut feelings—just systematic
                  testing and measurable results.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Get a Free CRO Audit
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
                Conversion optimization services
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From quick wins to comprehensive optimization programs, we help
                you get more from every visitor.
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

        {/* AI-Powered CRO Section */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                AI-Powered CRO
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-4 tracking-tight">
                Smarter testing. Faster insights.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-gray-400 text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Traditional CRO takes weeks. AI accelerates every step—from
                hypothesis generation to winner identification—so you can run
                more tests and find winning variations faster.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {aiFeatures.map((feature, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-[#2D2D2F] rounded-2xl p-8 h-full border border-gray-700/50 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]">
                    <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6">
                      <feature.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={0.7}>
              <div className="bg-gradient-to-r from-[#00D4FF]/10 to-[#00D4FF]/5 rounded-2xl p-8 lg:p-10 border border-[#00D4FF]/20">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      The AI Advantage
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      While traditional testing requires waiting weeks for
                      statistical significance, AI-powered CRO identifies
                      winning patterns in days. Run 3x more tests, get
                      actionable insights faster, and compound your conversion
                      gains throughout the year.
                    </p>
                  </div>
                  <div className="flex gap-8 lg:gap-12">
                    <div className="text-center">
                      <p className="text-[#00D4FF] text-3xl lg:text-4xl font-semibold">
                        3x
                      </p>
                      <p className="text-gray-500 text-sm">Faster Testing</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[#00D4FF] text-3xl lg:text-4xl font-semibold">
                        10x
                      </p>
                      <p className="text-gray-500 text-sm">More Insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Approach
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                The CRO process that works
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                A systematic, repeatable process that delivers consistent
                improvements.
              </p>
            </AnimateOnScroll>

            <div className="max-w-4xl mx-auto">
              {approach.map((item, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="flex gap-6 mb-8 last:mb-0">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center">
                        <span className="text-[#00D4FF] text-xl font-semibold">
                          {item.step}
                        </span>
                      </div>
                    </div>
                    <div className="pt-2">
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

              <AnimateOnScroll delay={0.7}>
                <div className="flex justify-center mt-12">
                  <div className="inline-flex items-center gap-2 text-[#00D4FF]">
                    <Repeat className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      Continuous optimization cycle
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Why BKND
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                CRO done differently
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Developer-built optimization with the rigor your business
                deserves.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-200/80 text-center transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                    <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="w-7 h-7 text-[#00D4FF]" />
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
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="bg-gradient-to-br from-[#1D1D1F] to-[#2D2D2F] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4FF]/5 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-2xl">
                  <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-4">
                    Case Study
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                    47% Conversion Lift in 90 Days
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    How we helped a B2B SaaS company nearly double their trial
                    signups through systematic landing page optimization and
                    funnel improvements.
                  </p>
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div>
                      <p className="text-[#00D4FF] text-3xl font-semibold">
                        +47%
                      </p>
                      <p className="text-gray-500 text-sm">Conversion Rate</p>
                    </div>
                    <div>
                      <p className="text-[#00D4FF] text-3xl font-semibold">
                        12
                      </p>
                      <p className="text-gray-500 text-sm">Tests Run</p>
                    </div>
                    <div>
                      <p className="text-[#00D4FF] text-3xl font-semibold">
                        $340K
                      </p>
                      <p className="text-gray-500 text-sm">
                        Annual Revenue Impact
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/case-studies"
                    className="group inline-flex items-center gap-2 text-[#00D4FF] font-medium hover:text-[#00B8E0] transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
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
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-12 tracking-tight">
                Common questions about CRO
              </h2>
            </AnimateOnScroll>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200/80">
                    <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed">
                      {faq.answer}
                    </p>
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
                  Ready to Grow?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Stop leaving money
                  <br />
                  <span className="text-[#00D4FF]">on the table.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Get a free CRO audit and see exactly where your site is
                  leaking conversions.
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
