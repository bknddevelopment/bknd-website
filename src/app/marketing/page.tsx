import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HubHero } from "@/components/HubHero";
import { ArticleGrid } from "@/components/ArticleGrid";
import { getPostsByCategory, getLatestByCategory } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Marketing Hub | BKND Development",
  description:
    "Marketing strategy, tactics, campaigns, and case studies. Practical guides for service businesses and contractors.",
  openGraph: {
    title: "Marketing Hub | BKND Development",
    description:
      "Marketing strategy, tactics, campaigns, and case studies. Practical guides for service businesses and contractors.",
    type: "website",
  },
};

export default function MarketingHubPage() {
  const allPosts = getPostsByCategory("marketing");
  const featuredPost = getLatestByCategory("marketing", 1)[0];
  const remainingPosts = allPosts.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Marketing Hub",
    description:
      "Marketing strategy, tactics, campaigns, and case studies for service businesses.",
    url: "https://bknddevelopment.com/marketing",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allPosts.length,
      itemListElement: allPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://bknddevelopment.com/marketing/${post.slug}`,
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
          title="Marketing Hub"
          description="Marketing strategy, tactics, campaigns, and case studies. Practical guides for service businesses and contractors."
          featuredPost={featuredPost}
          hubSlug="marketing"
        />
        <ArticleGrid posts={remainingPosts} basePath="marketing" />
      </main>
      <Footer />
    </>
  );
}
