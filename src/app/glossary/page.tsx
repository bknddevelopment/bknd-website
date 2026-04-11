import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { glossaryTerms } from "@/data/glossary-terms";
import { GlossaryIndex } from "./GlossaryIndex";

export const metadata: Metadata = {
  title: "Marketing & Tech Glossary | BKND Development",
  description:
    "Plain-English definitions for digital marketing, web development, SEO, and AI terms. 30+ definitions with examples and expert insights.",
  alternates: { canonical: "/glossary" },
};

export default function GlossaryHub() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        <section className="max-w-6xl mx-auto px-6 py-16">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-4">
              Marketing &amp; Tech Glossary
            </h1>
            <p className="text-lg text-[#86868B] mb-12 max-w-2xl">
              Plain-English definitions for digital marketing, web development,
              SEO, and AI terms — with real examples and expert context.
            </p>
          </AnimateOnScroll>

          <GlossaryIndex terms={glossaryTerms} />
        </section>
      </main>
      <Footer />
    </>
  );
}
