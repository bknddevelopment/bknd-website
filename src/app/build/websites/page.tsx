import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Link from "next/link";
import { ArrowRight, Globe, Zap, Shield, Search } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Websites | BKND Development",
  description:
    "We build websites that work as hard as you do — fast, optimized, and built to convert. Custom websites engineered with software-grade precision.",
  alternates: { canonical: "/build/websites" },
};

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Sub-second load times. Every millisecond of delay costs conversions — we engineer speed from the ground up.",
  },
  {
    icon: Search,
    title: "SEO-Ready Architecture",
    desc: "Built with search engines in mind from day one. Proper schema, sitemaps, and crawlable structure included.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    desc: "Enterprise-grade security, SSL, and hosting infrastructure. Your site stays up when it matters most.",
  },
  {
    icon: Globe,
    title: "Mobile-First Design",
    desc: "Over 60% of your traffic is mobile. Every site we build looks and works perfectly on any device.",
  },
];

export default function BuildWebsitesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-3xl">
              <AnimateOnScroll>
                <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-4">
                  Build / Websites
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  Websites built like{" "}
                  <span className="text-[#00D4FF]">software.</span>
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl">
                  Not templates with your logo slapped on. We engineer custom
                  websites with the same rigor we&apos;d build a SaaS product —
                  fast, secure, and built to grow your business.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <AnimateOnScroll key={i} delay={0.1 * i}>
                  <div className="bg-[#F5F5F7] rounded-2xl p-8 h-full">
                    <f.icon className="w-8 h-8 text-[#00D4FF] mb-4" />
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {f.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed">{f.desc}</p>
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
                  <span className="text-[#00D4FF]">website.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
                  Tell us about your business. We&apos;ll show you what we&apos;d
                  build.
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
