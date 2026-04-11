import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { getContentByCategory } from "@/lib/content";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Comparisons | BKND Development",
  description:
    "Side-by-side comparisons of the most popular platforms, tools, and software.",
};

export default function CompareHub() {
  const posts = getContentByCategory("comparison");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        <section className="max-w-6xl mx-auto px-6 py-16">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-4">
              Platform Comparisons
            </h1>
            <p className="text-lg text-[#86868B] mb-12 max-w-2xl">
              Side-by-side breakdowns to help you choose the right tools for
              your business.
            </p>
          </AnimateOnScroll>

          {posts.length === 0 ? (
            <p className="text-[#86868B]">Articles coming soon.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <AnimateOnScroll key={post.slug}>
                  <Link href={`/compare/${post.slug}`} className="group block">
                    {post.featuredImage && (
                      <img
                        src={post.featuredImage}
                        alt={post.featuredImageAlt}
                        className="w-full aspect-video object-cover rounded-[4px] mb-4"
                      />
                    )}
                    <h2 className="text-xl font-semibold text-[#1D1D1F] group-hover:text-[#00D4FF] transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-[#86868B] text-sm line-clamp-2">
                      {post.description}
                    </p>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
