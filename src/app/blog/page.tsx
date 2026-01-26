import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { getAllPosts, formatDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Insights | BKND Development',
  description: 'Thoughts on data-driven marketing, growth strategy, and building marketing systems that actually work.',
  openGraph: {
    title: 'Insights | BKND Development',
    description: 'Thoughts on data-driven marketing, growth strategy, and building marketing systems that actually work.',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <h1 className="text-[40px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] mb-4">
                Insights
              </h1>
              <p className="text-[#86868B] text-lg lg:text-xl max-w-xl">
                Practical thinking on marketing that works.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-24 lg:pb-32 bg-white">
          <div className="container-sg">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <AnimateOnScroll key={post.slug} delay={index * 0.1}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <article className="h-full">
                      <div className="mb-4">
                        <span className="text-[#86868B] text-sm">
                          {formatDate(post.date)}
                        </span>
                        <span className="text-[#86868B] text-sm mx-2">·</span>
                        <span className="text-[#86868B] text-sm">
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl lg:text-2xl font-semibold text-[#1D1D1F] mb-3 group-hover:text-[#00D4FF] transition-colors duration-200">
                        {post.title}
                      </h2>
                      <p className="text-[#86868B] leading-relaxed">
                        {post.excerpt}
                      </p>
                    </article>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
