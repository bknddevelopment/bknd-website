"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  ArrowRight,
  MessageSquare,
  Users,
  FolderKanban,
  Wrench,
  Receipt,
  FolderOpen,
  BarChart3,
  X,
  Check,
} from "lucide-react";
import Image from "next/image";

const modules = [
  {
    icon: MessageSquare,
    name: "Team Chat",
    description:
      "Real-time messaging with channels, threads, and file sharing. Replace Slack without losing a beat.",
  },
  {
    icon: Users,
    name: "CRM",
    description:
      "Track leads through your pipeline, manage client relationships, and close deals faster — all in one view.",
  },
  {
    icon: FolderKanban,
    name: "Projects",
    description:
      "Kanban boards, task assignments, deadlines, and progress tracking. No more juggling Jira and Asana.",
  },
  {
    icon: Wrench,
    name: "Workbench",
    description:
      "Custom internal tools and workflow automation built for how your team actually works.",
  },
  {
    icon: Receipt,
    name: "Invoicing",
    description:
      "Create professional invoices, track payments, and manage billing without QuickBooks or FreshBooks.",
  },
  {
    icon: FolderOpen,
    name: "Files",
    description:
      "Secure file storage, organization, and sharing with role-based access controls. Your team's single source of truth.",
  },
  {
    icon: BarChart3,
    name: "Analytics",
    description:
      "Business metrics, usage data, and custom reports to understand what's working and what's not.",
  },
];

const replacements = [
  {
    old: "Salesforce / HubSpot",
    new: "Opusite CRM",
    cost: "$75 – $300",
  },
  {
    old: "Jira / Asana",
    new: "Opusite Projects",
    cost: "$10 – $30",
  },
  {
    old: "DocuSign / PandaDoc",
    new: "Opusite E-Signatures",
    cost: "$25 – $65",
  },
  {
    old: "Slack / Teams",
    new: "Opusite Team Chat",
    cost: "$8 – $18",
  },
  {
    old: "QuickBooks / FreshBooks",
    new: "Opusite Invoicing",
    cost: "$30 – $80",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Vercel",
];

export default function OpusitePage() {
  const totalLow = replacements.reduce((sum, r) => {
    const match = r.cost.match(/\$(\d+)/);
    return sum + (match ? parseInt(match[1]) : 0);
  }, 0);
  const totalHigh = replacements.reduce((sum, r) => {
    const parts = r.cost.split("–");
    const high = parts[1]?.trim().replace("$", "").replace(",", "");
    return sum + (high ? parseInt(high) : 0);
  }, 0);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#050A14] overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#00D4FF]/5 blur-[130px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#8A2BE2]/5 blur-[160px] rounded-full mix-blend-screen" />

          <div className="container-sg relative z-10">
            <div className="max-w-[900px] mx-auto text-center">
              <AnimateOnScroll>
                <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-6">
                  All-in-One Business Platform
                </p>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-white tracking-[-0.02em] leading-[1.1] mb-6">
                  Replace 5+ tools with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#8A2BE2]">
                    one platform.
                  </span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-8 max-w-[720px] mx-auto">
                  CRM, project management, e-signatures, team chat, and
                  invoicing — all built into one platform. Stop paying for tools
                  that don&apos;t talk to each other.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <a
                  href="https://opusite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#00D4FF] text-[#050A14] px-8 py-4 rounded-full hover:bg-[#00B8E0] transition-all duration-300 font-semibold text-[17px]"
                >
                  See Opusite in Action
                  <ArrowRight className="w-5 h-5" />
                </a>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Replace Your Entire Stack */}
        <section className="py-16 lg:py-24 bg-[#0A0F1A]">
          <div className="container-sg">
            <div className="max-w-[900px] mx-auto">
              <AnimateOnScroll>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                    Replace Your Entire Stack
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Most businesses pay $148 – $493 per month for 5 separate
                    tools that don&apos;t integrate. Opusite replaces all of
                    them.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="space-y-3 mb-8">
                  {replacements.map((item) => (
                    <div
                      key={item.old}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-5 hover:border-[#00D4FF]/30 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 flex-shrink-0">
                          <X className="w-4 h-4 text-red-400" />
                        </div>
                        <span className="text-white/50 text-[15px] line-through">
                          {item.old}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 flex-1 min-w-0 sm:justify-center">
                        <ArrowRight className="w-4 h-4 text-white/20 hidden sm:block" />
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00D4FF]/10 flex-shrink-0">
                            <Check className="w-4 h-4 text-[#00D4FF]" />
                          </div>
                          <span className="text-white font-medium text-[15px]">
                            {item.new}
                          </span>
                        </div>
                      </div>
                      <div className="text-white/30 text-sm text-right flex-shrink-0">
                        <span className="text-red-400/60">
                          {item.cost}
                        </span>
                        <span className="text-white/20">/mo</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div className="bg-white/[0.04] backdrop-blur-sm border border-[#00D4FF]/20 rounded-xl p-6 text-center">
                  <p className="text-white/40 text-sm mb-2">
                    Combined monthly cost of separate tools
                  </p>
                  <p className="text-2xl font-semibold text-white mb-1">
                    <span className="text-red-400 line-through">
                      ${totalLow} – ${totalHigh}/mo
                    </span>
                  </p>
                  <p className="text-[#00D4FF] text-lg font-semibold">
                    Opusite: One platform. One price.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Feature Modules Grid */}
        <section className="py-16 lg:py-24 bg-[#050A14]">
          <div className="container-sg">
            <div className="max-w-[1100px] mx-auto">
              <AnimateOnScroll>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                    7 Modules. One Platform.
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Every module is built from the ground up to work together.
                    No integrations to configure, no data silos, no context
                    switching.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {modules.map((mod) => (
                    <div
                      key={mod.name}
                      className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:border-[#00D4FF]/30 transition-colors duration-300"
                    >
                      <mod.icon className="w-6 h-6 text-[#00D4FF] mb-4" />
                      <h3 className="text-white text-base font-semibold mb-2">
                        {mod.name}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {mod.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Dashboard Screenshot */}
        <section className="py-16 lg:py-24 bg-[#0A0F1A]">
          <div className="container-sg">
            <div className="max-w-[1100px] mx-auto">
              <AnimateOnScroll>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                    Built for How Teams Actually Work
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    A clean, intuitive interface where everything your business
                    needs is one click away. No training manual required.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-3 lg:p-4">
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
                      alt="Opusite dashboard showing all 7 business modules — Team Chat, CRM, Projects, Workbench, Invoicing, Files, and Analytics"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
                      priority
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Tech Stack Credibility */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-[900px] mx-auto">
              <AnimateOnScroll>
                <div className="text-center mb-10">
                  <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] mb-6 tracking-tight">
                    Enterprise-Grade Technology
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Opusite is built with the same stack that powers the
                    world&apos;s best SaaS products. Fast, secure, and
                    infinitely scalable.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="flex flex-wrap justify-center gap-3">
                  {techStack.map((tech) => (
                    <div
                      key={tech}
                      className="bg-white rounded-full px-6 py-3 border border-gray-200/80 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-300"
                    >
                      <span className="text-[#1D1D1F] text-sm font-medium">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1D1D1F] py-24 lg:py-32">
          <div className="container-sg">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll>
                <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
                  See Opusite
                  <br />
                  <span className="text-[#00D4FF]">in action.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
                  One platform for your entire business. CRM, projects,
                  invoicing, chat, files, and analytics — all in one place.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <a
                  href="https://opusite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Visit Opusite
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
