import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { getPostBySlug, getAllPosts, formatDate } from '@/lib/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | BKND Development',
    };
  }

  return {
    title: `${post.title} | BKND Development`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Convert markdown-style content to HTML
  const contentHtml = post.content
    .split('\n\n')
    .map((paragraph) => {
      if (paragraph.startsWith('## ')) {
        return `<h2 class="text-2xl lg:text-3xl font-semibold text-[#1D1D1F] mt-12 mb-6">${paragraph.slice(3)}</h2>`;
      }
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return `<p class="text-[#1D1D1F] font-semibold mb-4">${paragraph.slice(2, -2)}</p>`;
      }
      if (paragraph.startsWith('- **')) {
        const items = paragraph.split('\n').map((item) => {
          const match = item.match(/- \*\*(.+?)\*\*: (.+)/);
          if (match) {
            return `<li class="mb-3"><strong class="text-[#1D1D1F]">${match[1]}:</strong> <span class="text-[#86868B]">${match[2]}</span></li>`;
          }
          return `<li class="mb-3 text-[#86868B]">${item.slice(2)}</li>`;
        });
        return `<ul class="list-disc pl-6 mb-6 space-y-1">${items.join('')}</ul>`;
      }
      if (paragraph.startsWith('**')) {
        const match = paragraph.match(/\*\*(.+?)\*\*: (.+)/);
        if (match) {
          return `<p class="text-[#86868B] mb-4 leading-relaxed"><strong class="text-[#1D1D1F]">${match[1]}:</strong> ${match[2]}</p>`;
        }
      }
      return `<p class="text-[#86868B] mb-6 leading-relaxed">${paragraph}</p>`;
    })
    .join('');

  return (
    <>
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
                  <p className="text-[#86868B]">
                    By {post.author}
                  </p>
                </div>
              </AnimateOnScroll>

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
                    href="/blog"
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
                    Back to Insights
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
