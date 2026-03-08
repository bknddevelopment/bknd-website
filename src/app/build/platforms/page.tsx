"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { ArrowRight, MessageSquare, Users, FolderKanban, Wrench, Receipt, FolderOpen, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const opusiteModules = [
  {
    icon: MessageSquare,
    name: "Team Chat",
    description: "Real-time messaging with channels, threads, and file sharing. No third-party chat tool needed.",
  },
  {
    icon: Users,
    name: "CRM",
    description: "Track leads through your pipeline, manage client relationships, and never lose a deal.",
  },
  {
    icon: FolderKanban,
    name: "Projects",
    description: "Kanban boards, task assignments, deadlines, and progress tracking — all in one place.",
  },
  {
    icon: Wrench,
    name: "Workbench",
    description: "Custom internal tools and workflow automation built for how your team actually works.",
  },
  {
    icon: Receipt,
    name: "Invoicing",
    description: "Create professional invoices, track payments, and manage billing without a separate tool.",
  },
  {
    icon: FolderOpen,
    name: "Files",
    description: "Secure file storage, organization, and sharing with role-based access controls.",
  },
  {
    icon: BarChart3,
    name: "Analytics",
    description: "Business metrics, usage data, and custom reports to understand what's working.",
  },
];

const builtWith = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Vercel",
];

const capabilities = [
  {
    title: "SaaS Platforms",
    description:
      "Multi-tenant applications with user authentication, billing, dashboards, and API integrations. Built for scale from day one.",
  },
  {
    title: "Internal Tools",
    description:
      "Custom admin panels, CRMs, and workflow tools that replace the spreadsheet chaos. Built around how your team actually works.",
  },
  {
    title: "AI-Powered Products",
    description:
      "Applications that leverage large language models, computer vision, or predictive analytics to solve real business problems.",
  },
  {
    title: "API & Integration Layer",
    description:
      "Connect your existing tools, automate data flows, and build the glue that holds your tech stack together.",
  },
];

export default function PlatformsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — Dark Cinematic */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#050A14] overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#00D4FF]/5 blur-[130px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#8A2BE2]/5 blur-[160px] rounded-full mix-blend-screen" />

          <div className="container-sg relative z-10">
            <div className="max-w-[900px]">
              <AnimateOnScroll>
                <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-6">
                  Platforms
                </p>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-white tracking-[-0.02em] leading-[1.1] mb-6">
                  Custom software and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#8A2BE2]">
                    platforms.
                  </span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-8 max-w-[720px]">
                  We don&apos;t just build websites. We build software products,
                  SaaS platforms, and internal tools that solve real business
                  problems.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#050A14] px-8 py-4 rounded-lg hover:bg-[#00D4FF] hover:text-white transition-all duration-300 font-medium text-[17px]"
                >
                  Tell us what you need
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Opusite Case Study */}
        <section className="py-16 lg:py-24 bg-[#0A0F1A]">
          <div className="container-sg">
            <div className="max-w-[1100px] mx-auto">
              <AnimateOnScroll>
                <div className="text-center mb-12">
                  <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-4">
                    Case Study
                  </p>
                  <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                    We Built Our Own Platform
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Opusite is a full business operating system we designed and built
                    from scratch. Team chat, CRM, invoicing, project management, file
                    storage, and analytics — all in one platform. It&apos;s the software
                    we run BKND on every day.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Dashboard Screenshot in Browser Frame */}
              <AnimateOnScroll delay={0.2}>
                <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-3 lg:p-4 mb-16">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="bg-white/5 rounded-md px-4 py-1 text-white/30 text-xs">
                        opusite.com
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-video rounded-b-xl overflow-hidden">
                    <Image
                      src="/images/opusite/dashboard.png"
                      alt="Opusite dashboard showing all 7 business modules"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
                      priority
                    />
                  </div>
                </div>
              </AnimateOnScroll>

              {/* The Story */}
              <AnimateOnScroll delay={0.3}>
                <div className="max-w-[720px] mx-auto mb-16">
                  <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
                    Why we built it
                  </h3>
                  <div className="space-y-4 text-[#86868B] text-[17px] leading-relaxed">
                    <p>
                      We got tired of stitching together Slack, Trello, QuickBooks, Dropbox,
                      and a CRM just to run a small agency. So we built one tool that does
                      all of it.
                    </p>
                    <p>
                      Opusite isn&apos;t a concept or a prototype. It&apos;s live software
                      that our team uses every day to chat, manage projects, send invoices,
                      and track business metrics.
                    </p>
                    <p>
                      Building it proved something important: we can design, architect, and
                      ship a production-grade SaaS platform from zero. That&apos;s the same
                      capability we bring to every client project.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Module Breakdown */}
              <AnimateOnScroll delay={0.3}>
                <h3 className="text-2xl font-semibold text-white mb-8 tracking-tight text-center">
                  7 Modules. One Platform.
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                  {opusiteModules.map((mod) => (
                    <div
                      key={mod.name}
                      className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:border-[#00D4FF]/30 transition-colors duration-300"
                    >
                      <mod.icon className="w-6 h-6 text-[#00D4FF] mb-4" />
                      <h4 className="text-white text-base font-semibold mb-2">{mod.name}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{mod.description}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Built With */}
              <AnimateOnScroll delay={0.3}>
                <div className="text-center mb-6">
                  <p className="text-white/40 text-sm font-medium tracking-wide uppercase mb-6">
                    Built With
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {builtWith.map((tech) => (
                      <div
                        key={tech}
                        className="bg-white/[0.06] border border-white/10 rounded-full px-5 py-2"
                      >
                        <span className="text-white/70 text-sm font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* What We Can Build — 4 Cards */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-12 tracking-tight">
                What We Can Build
              </h2>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
              {capabilities.map((item, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
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

        {/* CTA */}
        <section className="bg-[#1D1D1F] py-24 lg:py-32">
          <div className="container-sg">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll>
                <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
                  Need custom
                  <br />
                  <span className="text-[#00D4FF]">software?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
                  We&apos;ll scope it, build it, and ship it — the same way we built Opusite.
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
