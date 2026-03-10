"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "15+", label: "Active Clients" },
  { value: "5,000+", label: "Pages Built" },
  { value: "1", label: "Person Running It All" },
  { value: "0", label: "Account Managers" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — Dark */}
        <section className="page-hero relative overflow-hidden bg-[#050A14]">
          <div className="absolute left-[-10%] top-[-10%] h-[60vw] w-[60vw] max-h-[520px] max-w-[520px] rounded-full bg-[#00D4FF]/5 blur-[130px] mix-blend-screen" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[50vw] w-[50vw] max-h-[420px] max-w-[420px] rounded-full bg-[#8A2BE2]/5 blur-[160px] mix-blend-screen" />

          <div className="container-sg relative z-10">
            <div className="max-w-3xl">
              <AnimateOnScroll>
                <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-4">
                  About
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <h1 className="page-title mb-6 font-semibold text-white">
                  One person. AI. Software.{" "}
                  <span className="text-[#00D4FF]">Full results.</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="page-lead max-w-2xl text-[#86868B]">
                  BKND Development is not an agency. It&apos;s one person — Charwin
                  — using AI and custom software to deliver what would normally
                  take a 15-person team. No account managers. No junior staff.
                  No handoffs. Just one experienced builder running the entire
                  system.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* The Honest Truth */}
        <section className="page-section bg-white">
          <div className="container-sg">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <AnimateOnScroll>
                  <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase mb-4">
                    The Honest Truth
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.1}>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">
                    Most agencies sell you a team.
                    <br />
                    <span className="text-[#00D4FF]">I built a system.</span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.2}>
                  <div className="text-[#86868B] text-lg leading-relaxed space-y-4">
                    <p>
                      Traditional agencies hire an account manager to talk to you,
                      a strategist to plan, a writer to create content, a
                      developer to make changes, and a project manager to keep it
                      all moving. That&apos;s five people for work that one person
                      with the right tools can do better.
                    </p>
                    <p>
                      I write the code. I run the SEO. I build the content. I
                      analyze the data. I talk to you directly. AI handles the
                      grunt work — research, first drafts, data crunching — while
                      I focus on strategy and execution.
                    </p>
                    <p>
                      The result: faster turnaround, lower cost, and someone who
                      actually understands your business talking to you about it.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>

              <div className="relative">
                <AnimateOnScroll direction="right">
                  <div className="bg-[#1D1D1F] rounded-2xl p-8 lg:p-10">
                    <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-4">
                      The BKND Promise
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
                      If I can&apos;t build it, I won&apos;t sell it.
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "You talk to the person doing the work",
                        "Every change goes live the same day",
                        "AI amplifies the work, never fakes it",
                        "No long-term contracts — results keep you",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-[#86868B]">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <circle cx="9" cy="9" r="9" fill="#00D4FF" fillOpacity="0.2" />
                            <path d="M13 6L7.5 11.5L5 9" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Why It's a Strength */}
        <section className="page-section bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="max-w-[720px] mx-auto text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">
                  Why One Person Beats a Team
                </h2>
                <p className="text-[#86868B] text-lg leading-relaxed">
                  Fewer people means fewer handoffs, faster decisions, and
                  zero game of telephone between you and the work.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
              {[
                {
                  title: "Zero Handoffs",
                  description:
                    "Strategy, execution, and communication all happen through one person. Nothing gets lost in translation.",
                },
                {
                  title: "AI Leverage",
                  description:
                    "AI handles research, data analysis, content drafts, and repetitive tasks — freeing up time for the work that actually moves the needle.",
                },
                {
                  title: "Lower Overhead",
                  description:
                    "No office. No middle management. No sales team. You pay for results, not headcount.",
                },
              ].map((item, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-200/80">
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

        {/* Counter Stats */}
        <section className="bg-[#1D1D1F] py-16 lg:py-20">
          <div className="container-sg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <AnimateOnScroll key={i} delay={i * 0.1}>
                  <div>
                    <div className="text-[32px] lg:text-[40px] font-bold text-[#00D4FF] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="page-section bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="max-w-[720px] mx-auto text-center">
                <blockquote className="text-[28px] lg:text-[36px] font-semibold text-[#1D1D1F] leading-tight tracking-tight mb-6">
                  &ldquo;Build the system once. Let it compound forever.&rdquo;
                </blockquote>
                <p className="text-[#86868B] text-lg">
                  Every website, marketing system, and platform we build is
                  designed to grow on its own. Software doesn&apos;t take sick
                  days. AI doesn&apos;t forget. The work compounds.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1D1D1F] py-20 lg:py-28">
          <div className="container-sg">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll>
                <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                  Let&apos;s build something
                  <br />
                  <span className="text-[#00D4FF]">together.</span>
                </h2>
                <p className="mx-auto mb-10 max-w-xl text-lg font-normal text-gray-400 sm:text-xl lg:mb-12 lg:text-2xl">
                  No sales pitch. Just a conversation about what you need.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Let&apos;s Talk
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
