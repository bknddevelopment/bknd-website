import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HubHero } from "@/components/HubHero";
import { ArticleGrid } from "@/components/ArticleGrid";
import { getPostsByCategory, getLatestByCategory } from "@/lib/blog";

export const metadata: Metadata = {
  title: "SEO Insights | BKND Development",
  description:
    "Search optimization, content marketing, and technical SEO guides. Learn how to dominate local search and drive organic traffic.",
  alternates: {
    canonical: "/seo-insights",
  },
  openGraph: {
    title: "SEO Insights | BKND Development",
    description:
      "Search optimization, content marketing, and technical SEO guides. Learn how to dominate local search and drive organic traffic.",
    type: "website",
    url: "https://bknddevelopment.com/seo-insights",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Insights | BKND Development",
    description:
      "Search optimization, content marketing, and technical SEO guides. Learn how to dominate local search and drive organic traffic.",
    images: ["/images/bknd-logo-new.png"],
  },
};

export default function SEOInsightsPage() {
  const allPosts = getPostsByCategory("seo");
  const featuredPost = getLatestByCategory("seo", 1)[0];
  const remainingPosts = allPosts.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SEO Insights",
    description:
      "Search optimization, content marketing, and technical SEO guides.",
    url: "https://bknddevelopment.com/seo-insights",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allPosts.length,
      itemListElement: allPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://bknddevelopment.com/seo-insights/${post.slug}`,
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
          title="SEO Insights"
          description="Search optimization, content marketing, and technical SEO guides. Learn how to dominate local search and drive organic traffic."
          featuredPost={featuredPost}
          hubSlug="seo-insights"
        />
        <ArticleGrid posts={remainingPosts} basePath="seo-insights" />
      </main>
      <Footer />
    </>
  );
}
