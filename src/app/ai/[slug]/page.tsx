import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { getPostBySlug, getPostsByCategory, formatDate } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getPostsByCategory("ai");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.category !== "ai") {
    return {
      title: "Post Not Found | BKND Development",
    };
  }

  return {
    title: `${post.title} | AI Corner | BKND Development`,
    description: post.excerpt,
    alternates: {
      canonical: `/ai/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://bknddevelopment.com/ai/${slug}`,
      ...(post.image && {
        images: [
          {
            url: `https://bknddevelopment.com${post.image}`,
            alt: post.imageAlt || post.title,
          },
        ],
      }),
    },
  };
}

export default async function AIArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.category !== "ai") {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "BKND Development",
      url: "https://bknddevelopment.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bknddevelopment.com/ai/${post.slug}`,
    },
  };

  // Helper function to process inline bold text
  const processInlineBold = (text: string): string => {
    return text.replace(
      /\*\*(.+?)\*\*/g,
      '<strong class="text-[#1D1D1F]">$1</strong>',
    );
  };

  // Helper function to process inline links [text](url) -> <a href="url">text</a>
  const processInlineLinks = (text: string): string => {
    return text.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-[#00D4FF] hover:underline">$1</a>',
    );
  };

  // Combined inline processing (links first, then bold)
  const processInlineFormatting = (text: string): string => {
    return processInlineBold(processInlineLinks(text));
  };

  // Helper function to process callout blocks
  const processCallouts = (content: string): string => {
    // Process :::stat blocks
    content = content.replace(
      /:::stat\s+([^\n]+)\n([\s\S]*?):::/g,
      `<div class="my-8 p-6 bg-gradient-to-r from-[#00D4FF]/10 to-[#00D4FF]/5 border-l-4 border-[#00D4FF] rounded-r-lg">
        <div class="text-4xl lg:text-5xl font-bold text-[#00D4FF] mb-2">$1</div>
        <p class="text-[#1D1D1F] text-sm lg:text-base m-0">$2</p>
      </div>`,
    );

    // Process :::tip blocks
    content = content.replace(
      /:::tip\n([\s\S]*?):::/g,
      `<div class="my-8 p-6 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
        <div class="flex items-start gap-3">
          <span class="text-emerald-500 text-xl">💡</span>
          <p class="text-[#1D1D1F] m-0">$1</p>
        </div>
      </div>`,
    );

    // Process :::warning blocks
    content = content.replace(
      /:::warning\n([\s\S]*?):::/g,
      `<div class="my-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
        <div class="flex items-start gap-3">
          <span class="text-amber-500 text-xl">⚠️</span>
          <p class="text-[#1D1D1F] m-0">$1</p>
        </div>
      </div>`,
    );

    // Process :::key blocks
    content = content.replace(
      /:::key\n([\s\S]*?):::/g,
      `<div class="my-8 p-6 bg-[#1D1D1F] rounded-lg">
        <div class="flex items-start gap-3">
          <span class="text-[#00D4FF] text-xl">🔑</span>
          <p class="text-white m-0">$1</p>
        </div>
      </div>`,
    );

    // Process :::pullquote blocks
    content = content.replace(
      /:::pullquote\n([\s\S]*?):::/g,
      `<blockquote class="my-8 pl-6 border-l-4 border-[#00D4FF] italic">
        <p class="text-xl lg:text-2xl text-[#1D1D1F] leading-relaxed m-0">$1</p>
      </blockquote>`,
    );

    return content;
  };

  // Pre-process callouts before splitting into paragraphs
  const processedContent = processCallouts(post.content);

  // Convert markdown-style content to HTML
  const contentHtml = processedContent
    .split("\n\n")
    .map((paragraph) => {
      // Skip if it's already processed HTML from callouts
      if (
        paragraph.trim().startsWith("<div") ||
        paragraph.trim().startsWith("<blockquote")
      ) {
        return paragraph;
      }
      // H2 headings
      if (paragraph.startsWith("## ")) {
        return `<h2 class="text-2xl lg:text-3xl font-semibold text-[#1D1D1F] mt-12 mb-6">${paragraph.slice(3)}</h2>`;
      }
      // H3 headings
      if (paragraph.startsWith("### ")) {
        return `<h3 class="text-xl lg:text-2xl font-semibold text-[#1D1D1F] mt-10 mb-4">${paragraph.slice(4)}</h3>`;
      }
      // Full paragraph bold (entire line wrapped in **)
      if (
        paragraph.startsWith("**") &&
        paragraph.endsWith("**") &&
        paragraph.indexOf("**", 2) === paragraph.length - 2
      ) {
        return `<p class="text-[#1D1D1F] font-semibold mb-4">${paragraph.slice(2, -2)}</p>`;
      }
      // Bullet lists with bold labels
      if (paragraph.startsWith("- **")) {
        const items = paragraph.split("\n").map((item) => {
          const match = item.match(/- \*\*(.+?)\*\*: (.+)/);
          if (match) {
            return `<li class="mb-3"><strong class="text-[#1D1D1F]">${match[1]}:</strong> <span class="text-[#86868B]">${match[2]}</span></li>`;
          }
          return `<li class="mb-3 text-[#86868B]">${item.slice(2)}</li>`;
        });
        return `<ul class="list-disc pl-6 mb-6 space-y-1">${items.join("")}</ul>`;
      }
      // Plain bullet lists (starting with - but not bold)
      if (paragraph.startsWith("- ")) {
        const items = paragraph
          .split("\n")
          .map((item) => {
            if (item.startsWith("- ")) {
              return `<li class="mb-3 text-[#86868B]">${processInlineFormatting(item.slice(2))}</li>`;
            }
            return "";
          })
          .filter(Boolean);
        return `<ul class="list-disc pl-6 mb-6 space-y-1">${items.join("")}</ul>`;
      }
      // Numbered/ordered lists
      if (/^\d+\.\s/.test(paragraph)) {
        const items = paragraph
          .split("\n")
          .map((item) => {
            const match = item.match(/^\d+\.\s(.+)/);
            if (match) {
              return `<li class="mb-3 text-[#86868B]">${processInlineFormatting(match[1])}</li>`;
            }
            return "";
          })
          .filter(Boolean);
        return `<ol class="list-decimal pl-6 mb-6 space-y-1">${items.join("")}</ol>`;
      }
      // Bold label at start of paragraph
      if (paragraph.startsWith("**")) {
        const match = paragraph.match(/\*\*(.+?)\*\*: (.+)/);
        if (match) {
          return `<p class="text-[#86868B] mb-4 leading-relaxed"><strong class="text-[#1D1D1F]">${match[1]}:</strong> ${processInlineFormatting(match[2])}</p>`;
        }
      }
      // Regular paragraph with inline formatting (links + bold)
      return `<p class="text-[#86868B] mb-6 leading-relaxed">${processInlineFormatting(paragraph)}</p>`;
    })
    .join("");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Article Header */}
        <article className="pt-24 pb-24 lg:pt-32 lg:pb-32 bg-white">
          <div className="container-sg">
            <div className="max-w-[720px] mx-auto">
              {/* Meta */}
              <AnimateOnScroll>
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-[#86868B] text-sm mb-6">
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h1 className="text-[32px] lg:text-[48px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.1] mb-6">
                    {post.title}
                  </h1>
                  <p className="text-[#86868B]">By {post.author}</p>
                </div>
              </AnimateOnScroll>

              {/* Hero Image */}
              {post.image && (
                <AnimateOnScroll delay={0.1}>
                  <div className="mb-10 -mx-4 lg:-mx-16 overflow-hidden rounded-lg">
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </AnimateOnScroll>
              )}

              {/* Content */}
              <AnimateOnScroll delay={0.15}>
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
              </AnimateOnScroll>

              {/* Back Link */}
              <AnimateOnScroll delay={0.2}>
                <div className="mt-16 pt-8 border-t border-[#D2D2D7]">
                  <Link
                    href="/ai"
                    className="text-[#1D1D1F] hover:text-[#00D4FF] transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Back to AI Corner
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
