import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { getContentByCategory, getContentBySlug } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getContentByCategory("tool");
  const slugs = posts.map((post) => ({ slug: post.slug }));
  // Next.js 16 static export requires at least one entry when content is empty.
  // This placeholder resolves to notFound() so no visible page is produced.
  return slugs.length > 0 ? slugs : [{ slug: "_placeholder" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getContentBySlug("tool", slug);
  if (!post) return { title: "Not Found | BKND Development" };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/tools/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishDate,
      url: `https://bknddevelopment.com/tools/${slug}`,
      images: post.featuredImage
        ? [{ url: `https://bknddevelopment.com${post.featuredImage}`, alt: post.featuredImageAlt }]
        : [],
    },
  };
}

export default async function ToolsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getContentBySlug("tool", slug);
  if (!post) return notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        <article className="max-w-4xl mx-auto px-6 py-16">
          {/* Breadcrumbs */}
          <nav className="text-sm text-[#86868B] mb-8">
            <a href="/" className="hover:text-[#1D1D1F] transition-colors">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="/tools" className="hover:text-[#1D1D1F] transition-colors">
              Tools
            </a>
            <span className="mx-2">/</span>
            <span className="text-[#1D1D1F]">{post.title}</span>
          </nav>

          <AnimateOnScroll>
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-[#86868B] text-sm mb-8">
              <span>{post.author}</span>
              <span>|</span>
              <span>{post.publishDate}</span>
              <span>|</span>
              <span>{post.readingTime} min read</span>
            </div>
          </AnimateOnScroll>

          {/* Featured image */}
          {post.featuredImage && (
            <AnimateOnScroll delay={0.1}>
              <img
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                className="w-full rounded-[4px] mb-12"
              />
            </AnimateOnScroll>
          )}

          {/* Content */}
          <AnimateOnScroll delay={0.15}>
            <div
              className="prose prose-lg max-w-none prose-headings:text-[#1D1D1F] prose-p:text-[#1D1D1F]/80 prose-a:text-[#00D4FF]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimateOnScroll>
        </article>
      </main>
      <Footer />
    </>
  );
}
