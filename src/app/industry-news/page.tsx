import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HubHero } from "@/components/HubHero";
import { ArticleGrid } from "@/components/ArticleGrid";
import { getPostsByCategory, getLatestByCategory } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Industry News | BKND Development",
  description:
    "Platform updates, algorithm changes, and market trends. Stay informed about the latest developments in marketing and technology.",
  alternates: {
    canonical: "/industry-news",
  },
  openGraph: {
    title: "Industry News | BKND Development",
    description:
      "Platform updates, algorithm changes, and market trends. Stay informed about the latest developments in marketing and technology.",
    type: "website",
    url: "https://bknddevelopment.com/industry-news",
  },
};

export default function IndustryNewsPage() {
  const allPosts = getPostsByCategory("news");
  const featuredPost = getLatestByCategory("news", 1)[0];
  const remainingPosts = allPosts.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industry News",
    description:
      "Platform updates, algorithm changes, and market trends in marketing and technology.",
    url: "https://bknddevelopment.com/industry-news",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allPosts.length,
      itemListElement: allPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://bknddevelopment.com/industry-news/${post.slug}`,
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
          title="Industry News"
          description="Platform updates, algorithm changes, and market trends. Stay informed about the latest developments in marketing and technology."
          featuredPost={featuredPost}
          hubSlug="industry-news"
        />
        <ArticleGrid posts={remainingPosts} basePath="industry-news" />
      </main>
      <Footer />
    </>
  );
}
