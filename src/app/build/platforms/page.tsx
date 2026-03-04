import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Link from "next/link";
import { ArrowRight, Layers, Database, Cpu, Workflow } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Platforms | BKND Development",
  description:
    "We build custom platforms — dashboards, portals, internal tools, and SaaS products. Software-grade engineering for businesses that need more than a website.",
  alternates: { canonical: "/build/platforms" },
};

const capabilities = [
  {
    icon: Layers,
    title: "Custom Dashboards",
    desc: "Client portals, admin panels, and reporting dashboards — built to your exact workflow, not a generic template.",
  },
  {
    icon: Database,
    title: "Data Systems",
    desc: "CRMs, inventory management, and business intelligence tools that connect your data and automate your operations.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    desc: "Chatbots, content automation, and AI-powered workflows embedded directly into your business processes.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    desc: "Replace manual workflows with automated systems. From lead routing to report generation — if it repeats, we automate it.",
  },
];

export default function BuildPlatformsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-3xl">
              <AnimateOnScroll>
                <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-4">
                  Build / Platforms
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  Platforms built for{" "}
                  <span className="text-[#00D4FF]">your business.</span>
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl">
                  When off-the-shelf tools don&apos;t cut it, we build custom
                  platforms — dashboards, portals, and automation systems
                  engineered for how your business actually works.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((c, i) => (
                <AnimateOnScroll key={i} delay={0.1 * i}>
                  <div className="bg-[#F5F5F7] rounded-2xl p-8 h-full">
                    <c.icon className="w-8 h-8 text-[#00D4FF] mb-4" />
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {c.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed">{c.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1D1D1F] py-24 lg:py-32">
          <div className="container-sg">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll>
                <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
                  Let&apos;s build your{" "}
                  <span className="text-[#00D4FF]">platform.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
                  Describe the problem. We&apos;ll engineer the solution.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Start a Project
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
