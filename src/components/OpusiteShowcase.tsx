"use client";

import { AnimateOnScroll } from "./AnimateOnScroll";
import { ArrowRight, MessageSquare, Users, FolderKanban, Wrench, Receipt, FolderOpen, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const modules = [
  { icon: MessageSquare, name: "Team Chat", description: "Real-time messaging for your whole team" },
  { icon: Users, name: "CRM", description: "Track leads, deals, and client relationships" },
  { icon: FolderKanban, name: "Projects", description: "Kanban boards and task management" },
  { icon: Wrench, name: "Workbench", description: "Custom tools and workflow automation" },
  { icon: Receipt, name: "Invoicing", description: "Create, send, and track invoices" },
  { icon: FolderOpen, name: "Files", description: "Secure file storage and sharing" },
  { icon: BarChart3, name: "Analytics", description: "Business metrics and reporting" },
];

export default function OpusiteShowcase() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0f1d32 100%)" }}>
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)" }} />

      <div className="container-sg relative z-10">
        <div className="max-w-[1100px] mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <p className="text-[#00D4FF] text-sm font-medium tracking-widest uppercase mb-4">
                Proof We Practice What We Preach
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
                We Built Our Own Platform
              </h2>
              <p className="text-white/60 text-lg max-w-[700px] mx-auto leading-relaxed">
                We didn&apos;t just build websites for clients. We built the entire platform
                we run our business on — team chat, CRM, invoicing, project management,
                and more. All from scratch.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Dashboard Screenshot in Browser Frame */}
          <AnimateOnScroll delay={0.2}>
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-3 lg:p-4 mb-12">
              {/* Browser chrome */}
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
              {/* Screenshot */}
              <div className="relative aspect-video rounded-b-xl overflow-hidden">
                <Image
                  src="/images/opusite/dashboard.png"
                  alt="Opusite dashboard showing Team Chat, CRM, Projects, Workbench, Invoicing, Files, and Analytics modules"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Feature Grid */}
          <AnimateOnScroll delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 mb-10">
              {modules.map((mod) => (
                <div
                  key={mod.name}
                  className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-4 lg:p-5 hover:border-[#00D4FF]/30 transition-colors duration-300"
                >
                  <mod.icon className="w-5 h-5 text-[#00D4FF] mb-3" />
                  <p className="text-white text-sm font-medium mb-1">{mod.name}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{mod.description}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.4}>
            <div className="text-center">
              <Link
                href="/build/platforms"
                className="group inline-flex items-center gap-3 text-white/60 text-sm font-semibold uppercase tracking-wider hover:text-[#00D4FF] transition-colors duration-300"
              >
                See the full story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
