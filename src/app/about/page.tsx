"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Charwin Vanryck deGroot",
    role: "Founder & CEO",
    image: "/images/team/founder-avatar.jpg",
    bio: "Developer-turned-marketer who built the system. Writes the code, runs the SEO, builds the content, and talks to you directly.",
  },
  {
    name: "Ocyrus Jean Baptiste",
    role: "Head of Sales",
    image: "/images/team/ocyrus-headshot.jpg",
    bio: "Consultative approach to client growth. Connects businesses with the right marketing and AI solutions.",
  },
  {
    name: "Dean Holland",
    role: "Head of AI Innovation",
    image: "/images/team/dean-headshot.jpg",
    bio: "Architects the intelligent systems behind client results — predictive analytics, automation, and optimization.",
  },
];

const stats = [
  { value: "15+", label: "Active Clients" },
  { value: "5,000+", label: "Pages Built" },
  { value: "1", label: "Point of Contact" },
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
                    "No office. No middle management. No bloated layers. You pay for results, not headcount.",
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

        {/* The Team — Minority-Owned */}
        <section className="page-section bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-semibold tracking-widest uppercase">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1L8.5 4.5L12.5 5L9.75 7.5L10.5 11.5L7 9.5L3.5 11.5L4.25 7.5L1.5 5L5.5 4.5L7 1Z" fill="#00D4FF" />
                  </svg>
                  Minority-Owned Business
                </span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                The People Behind BKND
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg text-center mb-14 max-w-xl mx-auto leading-relaxed">
                Diverse perspectives, real expertise. No layers, no handoffs
                — just the people doing the work.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-[960px] mx-auto">
              {teamMembers.map((member, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.12}>
                  <div className="group text-center">
                    <div className="relative aspect-[4/5] w-full max-w-[260px] mx-auto mb-6 rounded-2xl overflow-hidden bg-[#F5F5F7]">
                      <Image
                        src={member.image}
                        alt={`${member.name}, ${member.role} at BKND Development`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 280px, 260px"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 group-hover:ring-[#00D4FF]/20 transition-all duration-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1D1D1F] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#00D4FF] font-medium text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-[#86868B] leading-relaxed text-[13px] max-w-[260px] mx-auto">
                      {member.bio}
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
