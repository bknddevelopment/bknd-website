import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { glossaryTerms, type GlossaryTermData } from "@/data/glossary-terms";
import { FAQSection } from "@/components/shared/FAQSection";
import Link from "next/link";

function getTermBySlug(slug: string): GlossaryTermData | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

function getRelatedTerms(term: GlossaryTermData): GlossaryTermData[] {
  return term.relatedTerms
    .map((slug) => glossaryTerms.find((t) => t.slug === slug))
    .filter((t): t is GlossaryTermData => t !== undefined);
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) return { title: "Not Found" };

  return {
    title: `What is ${term.term}? Definition & Guide | BKND Development`,
    description: term.shortDefinition,
    alternates: { canonical: `/glossary/${slug}` },
    openGraph: {
      title: `What is ${term.term}?`,
      description: term.shortDefinition,
      type: "article",
      url: `https://bknddevelopment.com/glossary/${slug}`,
    },
  };
}

const categoryLabels: Record<GlossaryTermData["category"], string> = {
  seo: "SEO",
  "web-dev": "Web Development",
  marketing: "Marketing",
  ai: "AI",
  business: "Business",
  design: "Design",
  analytics: "Analytics",
};

export default async function GlossaryTermPage({ params }: PageProps) {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) return notFound();

  const related = getRelatedTerms(term);

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.shortDefinition,
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
        />

        <article className="max-w-3xl mx-auto px-6 py-16">
          {/* Breadcrumbs */}
          <nav className="text-sm text-[#86868B] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#1D1D1F] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/glossary"
              className="hover:text-[#1D1D1F] transition-colors"
            >
              Glossary
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1D1D1F]">{term.term}</span>
          </nav>

          <AnimateOnScroll>
            {/* Category pill */}
            <span className="inline-block text-xs font-medium text-[#86868B] bg-[#F5F5F7] px-3 py-1 rounded-[20px] mb-4 uppercase tracking-wide">
              {categoryLabels[term.category]}
            </span>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-8 leading-tight">
              What is {term.term}?
            </h1>
          </AnimateOnScroll>

          {/* Quick definition — featured snippet optimized */}
          <AnimateOnScroll>
            <div className="bg-[#F5F5F7] rounded-[4px] p-6 mb-10 border-l-4 border-[#00D4FF]">
              <p className="text-sm font-semibold text-[#86868B] uppercase tracking-wide mb-2">
                Definition
              </p>
              <p className="text-[#1D1D1F] text-lg leading-relaxed">
                {term.shortDefinition}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Full explanation */}
          <AnimateOnScroll>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4">
                Understanding {term.term}
              </h2>
              <div
                className="prose prose-lg max-w-none prose-headings:text-[#1D1D1F] prose-p:text-[#1D1D1F]/80 prose-a:text-[#00D4FF] prose-strong:text-[#1D1D1F] prose-code:text-[#1D1D1F] prose-code:bg-[#F5F5F7] prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
                dangerouslySetInnerHTML={{ __html: term.fullDefinition }}
              />
            </section>
          </AnimateOnScroll>

          {/* Examples */}
          <AnimateOnScroll>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4">
                Real-World Examples
              </h2>
              <ol className="space-y-4">
                {term.examples.map((example, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F5F5F7] text-[#1D1D1F] text-sm font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-[#1D1D1F]/80 leading-relaxed">{example}</p>
                  </li>
                ))}
              </ol>
            </section>
          </AnimateOnScroll>

          {/* Why it matters */}
          <AnimateOnScroll>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4">
                Why {term.term} Matters for Your Business
              </h2>
              <p className="text-[#1D1D1F]/80 leading-relaxed text-lg">
                {term.whyItMatters}
              </p>
            </section>
          </AnimateOnScroll>

          {/* Related terms */}
          {related.length > 0 && (
            <AnimateOnScroll>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4">
                  Related Terms
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {related.map((relTerm) => (
                    <Link
                      key={relTerm.slug}
                      href={`/glossary/${relTerm.slug}`}
                      className="group block bg-[#F5F5F7] hover:bg-[#1D1D1F] rounded-[4px] p-4 transition-colors"
                    >
                      <p className="font-semibold text-[#1D1D1F] group-hover:text-white transition-colors mb-1">
                        {relTerm.term}
                      </p>
                      <p className="text-xs text-[#86868B] group-hover:text-white/60 transition-colors line-clamp-2">
                        {relTerm.shortDefinition.slice(0, 90)}...
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            </AnimateOnScroll>
          )}

          {/* FAQ */}
          <AnimateOnScroll>
            <section className="mb-12">
              <FAQSection items={term.faq} />
            </section>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll>
            <div className="bg-[#1D1D1F] rounded-[4px] p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Need help with {term.term}?
              </h2>
              <p className="text-white/60 mb-6 max-w-md mx-auto">
                BKND Development specializes in web development and digital
                marketing. Talk to us about how we can put{" "}
                {term.term.toLowerCase()} to work for your business.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-[#00D4FF] text-[#1D1D1F] font-semibold px-6 py-3 rounded-[2px] hover:bg-[#00D4FF]/90 transition-colors"
              >
                Talk to BKND
              </Link>
            </div>
          </AnimateOnScroll>
        </article>
      </main>
      <Footer />
    </>
  );
}
