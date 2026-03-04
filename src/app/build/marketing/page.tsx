import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Link from "next/link";
import { ArrowRight, BarChart3, Search, Target, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Marketing Systems | BKND Development",
  description:
    "We build marketing systems that compound — SEO, content, paid media, and analytics engineered to drive measurable revenue growth.",
  alternates: { canonical: "/build/marketing" },
};

const capabilities = [
  {
    icon: Search,
    title: "SEO That Compounds",
    desc: "Technical SEO, content strategy, and local dominance. We build organic traffic that grows month over month.",
  },
  {
    icon: Target,
    title: "Paid Media That Converts",
    desc: "Google Ads, Meta, and programmatic — managed with engineering precision. Every dollar tracked to revenue.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Attribution",
    desc: "Know exactly which channels drive leads. Full-funnel tracking from first click to closed deal.",
  },
  {
    icon: TrendingUp,
    title: "Content Systems",
    desc: "Blog posts, landing pages, and thought leadership — built on keyword research and designed to rank.",
  },
];

export default function BuildMarketingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-3xl">
              <AnimateOnScroll>
                <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-4">
                  Build / Marketing
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  Marketing systems that{" "}
                  <span className="text-[#00D4FF]">compound.</span>
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl">
                  Not campaigns that fizzle out. We build marketing machines —
                  SEO, content, and paid media systems engineered to deliver
                  compounding returns.
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
                  <span className="text-[#00D4FF]">growth engine.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
                  Tell us your goals. We&apos;ll build the system to hit them.
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
