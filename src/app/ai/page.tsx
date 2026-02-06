import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HubHero } from "@/components/HubHero";
import { ArticleGrid } from "@/components/ArticleGrid";
import { getPostsByCategory, getLatestByCategory } from "@/lib/blog";

export const metadata: Metadata = {
  title: "AI Corner | BKND Development",
  description:
    "AI news, tools, guides, and industry updates. Stay ahead with the latest in artificial intelligence for marketing and business.",
  alternates: {
    canonical: "/ai",
  },
  openGraph: {
    title: "AI Corner | BKND Development",
    description:
      "AI news, tools, guides, and industry updates. Stay ahead with the latest in artificial intelligence for marketing and business.",
    type: "website",
    url: "https://bknddevelopment.com/ai",
  },
};

export default function AICornerPage() {
  const allPosts = getPostsByCategory("ai");
  const featuredPost = getLatestByCategory("ai", 1)[0];
  const remainingPosts = allPosts.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Corner",
    description:
      "AI news, tools, guides, and industry updates for marketing and business.",
    url: "https://bknddevelopment.com/ai",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allPosts.length,
      itemListElement: allPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://bknddevelopment.com/ai/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <HubHero
          title="AI Corner"
          description="AI news, tools, guides, and industry updates. Stay ahead with the latest in artificial intelligence for marketing and business."
          featuredPost={featuredPost}
          hubSlug="ai"
        />
        <ArticleGrid posts={remainingPosts} basePath="ai" />
      </main>
      <Footer />
    </>
  );
}
