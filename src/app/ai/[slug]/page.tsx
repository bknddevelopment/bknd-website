import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  getPostBySlug,
  getPostsByCategory,
  getLatestByCategory,
  formatDate,
} from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getPostsByCategory("ai");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.category !== "ai") return { title: "Post Not Found | BKND Development" };
  return {
    title: `${post.title} | AI Corner | BKND Development`,
    description: post.excerpt,
    alternates: { canonical: `/ai/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://bknddevelopment.com/ai/${slug}`,
      images: post.image
        ? [{ url: `https://bknddevelopment.com${post.image}`, alt: post.imageAlt || post.title }]
        : [{ url: "/images/bknd-logo-new.png", width: 1536, height: 1024, alt: "BKND Development Logo" }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [`https://bknddevelopment.com${post.image}`] : ["/images/bknd-logo-new.png"],
    },
  };
}

export default async function AIArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.category !== "ai") notFound();

  const pageUrl = `https://bknddevelopment.com/ai/${post.slug}`;
  const relatedPosts = getLatestByCategory("ai", 4).filter((p) => p.slug !== post.slug).slice(0, 3);

  // --- JSON-LD ---
  const graphItems: Record<string, unknown>[] = [
    {
      "@type": "Article", "@id": `${pageUrl}#article`, headline: post.title,
      description: post.excerpt, datePublished: post.date, dateModified: post.date,
      ...(post.image && { image: { "@type": "ImageObject", url: `https://bknddevelopment.com${post.image}` } }),
      author: { "@type": "Person", name: post.author },
      publisher: { "@type": "Organization", name: "BKND Development", url: "https://bknddevelopment.com" },
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bknddevelopment.com/" },
        { "@type": "ListItem", position: 2, name: "AI Corner", item: "https://bknddevelopment.com/ai" },
        { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
      ],
    },
  ];
  if (post.faqData?.length) {
    graphItems.push({
      "@type": "FAQPage", "@id": `${pageUrl}#faq`,
      mainEntity: post.faqData.map((faq) => ({
        "@type": "Question", name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }
  if (post.itemListData?.length) {
    graphItems.push({
      "@type": "ItemList", "@id": `${pageUrl}#itemlist`, name: post.title,
      numberOfItems: post.itemListData.length,
      itemListElement: post.itemListData.map((item, i) => ({
        "@type": "ListItem", position: i + 1, name: item.name, description: item.description,
      })),
    });
  }
  const jsonLd = { "@context": "https://schema.org", "@graph": graphItems };

  // --- Inline formatting ---
  const bold = (t: string) => t.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#1D1D1F] font-semibold">$1</strong>');
  const links = (t: string) => t.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-[#00D4FF] underline underline-offset-2 decoration-[#00D4FF]/30 hover:decoration-[#00D4FF] transition-colors">$1</a>',
  );
  const fmt = (t: string) => bold(links(t));

  // --- Callout processing ---
  const processCallouts = (c: string): string => {
    // :::stat — horizontal metric card
    c = c.replace(
      /:::stat\s+([^\n]+)\n([\s\S]*?):::/g,
      `<div class="my-14 flex flex-col sm:flex-row gap-6 sm:gap-0 sm:items-stretch">
        <div class="sm:pr-10 flex-shrink-0 flex items-center">
          <span class="text-[56px] lg:text-[72px] font-bold leading-none tracking-tight text-[#1D1D1F]">$1</span>
        </div>
        <div class="sm:border-l sm:border-[#E5E5E5] sm:pl-10 flex items-center">
          <p class="text-[#86868B] text-base lg:text-[17px] leading-relaxed m-0">$2</p>
        </div>
      </div>`,
    );
    c = c.replace(
      /:::tip\n([\s\S]*?):::/g,
      `<div class="my-10 p-6 bg-emerald-50/50 border border-emerald-200/60 rounded-lg"><p class="text-[#1D1D1F] m-0 leading-relaxed">$1</p></div>`,
    );
    c = c.replace(
      /:::warning\n([\s\S]*?):::/g,
      `<div class="my-10 p-6 bg-amber-50/50 border border-amber-200/60 rounded-lg"><p class="text-[#1D1D1F] m-0 leading-relaxed">$1</p></div>`,
    );
    // :::key — accent left bar on light background
    c = c.replace(
      /:::key\n([\s\S]*?):::/g,
      `<div class="my-14 pl-6 border-l-[3px] border-[#1D1D1F]">
        <p class="text-[#1D1D1F] text-lg lg:text-xl leading-relaxed m-0 font-medium">$1</p>
      </div>`,
    );
    // :::pullquote — oversized text
    c = c.replace(
      /:::pullquote\n([\s\S]*?):::/g,
      `<div class="my-16">
        <p class="text-[22px] lg:text-[26px] text-[#1D1D1F] leading-[1.55] m-0 font-light tracking-[-0.01em]">$1</p>
      </div>`,
    );
    return c;
  };

  const processed = processCallouts(post.content);
  const paragraphs = processed.split("\n\n");

  // --- Build HTML with smart detection ---
  let h2Counter = 0;
  let isFirstParagraph = true;
  let inFaqSection = false;
  let faqBuffer: { q: string; a: string[] }[] = [];
  let currentFaqQuestion = "";
  const htmlParts: string[] = [];

  // Track level cards
  let inLevelSection = false;
  let levelCards: { num: string; name: string; sub: string; body: string[]; cost: string; advantage: string }[] = [];
  let currentLevel: { num: string; name: string; sub: string; body: string[]; cost: string; advantage: string } | null = null;

  // Track timeline
  let inTimeline = false;
  let timelineSteps: { label: string; body: string[] }[] = [];
  let currentStep: { label: string; body: string[] } | null = null;

  const flushLevels = () => {
    if (levelCards.length === 0) return;
    let html = `<div class="my-14 grid grid-cols-1 sm:grid-cols-2 gap-4">`;
    const accents = ["#E5E5E5", "#D2D2D7", "#00D4FF", "#1D1D1F"];
    levelCards.forEach((card, i) => {
      const isHighlight = i >= 2;
      html += `<div class="relative p-6 rounded-xl border ${isHighlight ? "border-[#1D1D1F] bg-[#1D1D1F]" : "border-[#E5E5E5] bg-[#FAFAFA]"}">
        <div class="flex items-center gap-3 mb-3">
          <span class="w-8 h-8 rounded-lg ${isHighlight ? "bg-[#00D4FF] text-[#1D1D1F]" : "bg-[#E5E5E5] text-[#86868B]"} text-xs font-bold flex items-center justify-center">${card.num}</span>
          <span class="text-sm font-semibold ${isHighlight ? "text-white" : "text-[#1D1D1F]"}">${card.name}</span>
        </div>
        <p class="text-xs ${isHighlight ? "text-white/50" : "text-[#86868B]"} mb-4 leading-relaxed">${card.sub}</p>
        <div class="flex items-center justify-between text-xs border-t ${isHighlight ? "border-white/10" : "border-[#E5E5E5]"} pt-3 mt-auto">
          <span class="${isHighlight ? "text-white/60" : "text-[#86868B]"}">${card.cost}</span>
          <span class="${isHighlight ? "text-[#00D4FF]" : "text-[#1D1D1F]"} font-medium">${card.advantage}</span>
        </div>
      </div>`;
    });
    html += `</div>`;
    htmlParts.push(html);
    levelCards = [];
    inLevelSection = false;
  };

  const flushTimeline = () => {
    if (timelineSteps.length === 0) return;
    let html = `<div class="my-14 relative">`;
    html += `<div class="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-[#1D1D1F] via-[#D2D2D7] to-transparent hidden sm:block"></div>`;
    timelineSteps.forEach((step, i) => {
      html += `<div class="relative pl-0 sm:pl-12 mb-8 last:mb-0">
        <div class="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#1D1D1F] text-white text-xs font-bold flex items-center justify-center hidden sm:flex">${i + 1}</div>
        <div class="bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl p-6">
          <div class="text-sm font-semibold text-[#1D1D1F] mb-3">${step.label}</div>
          <div class="text-[15px] text-[#86868B] leading-relaxed space-y-3">${step.body.map((b) => `<p class="m-0">${fmt(b)}</p>`).join("")}</div>
        </div>
      </div>`;
    });
    html += `</div>`;
    htmlParts.push(html);
    timelineSteps = [];
    inTimeline = false;
  };

  const flushFaq = () => {
    if (faqBuffer.length === 0) return;
    let html = `<div class="my-10 space-y-3">`;
    faqBuffer.forEach((faq) => {
      html += `<details class="group bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl overflow-hidden">
        <summary class="flex items-center justify-between cursor-pointer px-6 py-5 text-[16px] font-medium text-[#1D1D1F] leading-snug select-none list-none [&::-webkit-details-marker]:hidden">
          <span>${faq.q}</span>
          <svg class="w-5 h-5 text-[#86868B] flex-shrink-0 ml-4 transition-transform duration-200 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
        </summary>
        <div class="px-6 pb-5 text-[15px] text-[#86868B] leading-relaxed border-t border-[#E5E5E5] pt-4">
          ${faq.a.map((p) => `<p class="mb-3 last:mb-0">${fmt(p)}</p>`).join("")}
        </div>
      </details>`;
    });
    html += `</div>`;
    htmlParts.push(html);
    faqBuffer = [];
  };

  for (const paragraph of paragraphs) {
    const trimmed = paragraph.trim();

    // Skip already-processed HTML from callouts
    if (trimmed.startsWith("<div") || trimmed.startsWith("<blockquote")) {
      // Flush any open sections
      if (inLevelSection && currentLevel) {
        levelCards.push(currentLevel);
        currentLevel = null;
      }
      if (inTimeline && currentStep) {
        timelineSteps.push(currentStep);
        currentStep = null;
      }
      htmlParts.push(paragraph);
      continue;
    }

    // --- FAQ section detection ---
    if (trimmed === "## Frequently Asked Questions") {
      // Flush open sections
      if (inLevelSection) { if (currentLevel) { levelCards.push(currentLevel); currentLevel = null; } flushLevels(); }
      if (inTimeline) { if (currentStep) { timelineSteps.push(currentStep); currentStep = null; } flushTimeline(); }

      h2Counter++;
      inFaqSection = true;
      htmlParts.push(`<div id="frequently-asked-questions" class="mt-20 mb-8 scroll-mt-24">
        <div class="flex items-center gap-4 mb-4">
          <span class="text-xs font-mono text-[#00D4FF] tracking-wider">${String(h2Counter).padStart(2, "0")}</span>
          <span class="flex-1 h-px bg-[#E5E5E5]"></span>
        </div>
        <h2 class="text-[26px] lg:text-[34px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15]">Frequently Asked Questions</h2>
      </div>`);
      continue;
    }

    if (inFaqSection) {
      if (trimmed.startsWith("### ")) {
        // New FAQ question — flush previous
        if (currentFaqQuestion && faqBuffer.length > 0) {
          // already pushed
        }
        currentFaqQuestion = trimmed.slice(4);
        faqBuffer.push({ q: currentFaqQuestion, a: [] });
      } else if (trimmed.startsWith("## ")) {
        // New H2 — exit FAQ mode
        flushFaq();
        inFaqSection = false;
        // Process this H2 normally (fall through)
      } else if (trimmed && faqBuffer.length > 0) {
        faqBuffer[faqBuffer.length - 1].a.push(trimmed);
        continue;
      } else {
        continue;
      }
      if (inFaqSection) continue;
    }

    // --- Level card detection ---
    const levelMatch = trimmed.match(/^### Level (\d): (.+?) \((.+?)\)$/);
    if (levelMatch) {
      if (currentLevel) levelCards.push(currentLevel);
      currentLevel = { num: levelMatch[1], name: levelMatch[2], sub: levelMatch[3], body: [], cost: "", advantage: "" };
      inLevelSection = true;
      continue;
    }

    if (inLevelSection && currentLevel) {
      const costMatch = trimmed.match(/^\*\*Typical monthly cost:\*\*\s*(.+)/);
      const advMatch = trimmed.match(/^\*\*Competitive advantage:\*\*\s*(.+)/);
      if (costMatch) { currentLevel.cost = costMatch[1]; continue; }
      if (advMatch) {
        currentLevel.advantage = advMatch[1];
        // Check if next paragraph starts a new level or exits
        continue;
      }
      // If we hit a non-level H3 or H2, flush
      if (trimmed.startsWith("## ") || (trimmed.startsWith("### ") && !trimmed.startsWith("### Level "))) {
        levelCards.push(currentLevel);
        currentLevel = null;
        flushLevels();
        // Fall through to process this heading
      } else {
        currentLevel.body.push(trimmed);
        continue;
      }
    }

    // Flush levels if we hit a callout block
    if (inLevelSection && !currentLevel && levelCards.length > 0) {
      flushLevels();
    }

    // --- Timeline detection ---
    const timeMatch = trimmed.match(/^### Days (\d+) to (\d+): (.+)$/);
    if (timeMatch) {
      if (inLevelSection) { if (currentLevel) { levelCards.push(currentLevel); currentLevel = null; } flushLevels(); }
      if (currentStep) timelineSteps.push(currentStep);
      currentStep = { label: `Days ${timeMatch[1]}–${timeMatch[2]}: ${timeMatch[3]}`, body: [] };
      inTimeline = true;
      continue;
    }

    if (inTimeline && currentStep) {
      if (trimmed.startsWith("## ") || (trimmed.startsWith("### ") && !trimmed.match(/^### Days /))) {
        timelineSteps.push(currentStep);
        currentStep = null;
        flushTimeline();
        // Fall through
      } else {
        currentStep.body.push(trimmed);
        continue;
      }
    }

    // --- Standard rendering ---

    // H2
    if (trimmed.startsWith("## ")) {
      h2Counter++;
      const text = trimmed.slice(3);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      htmlParts.push(`<div id="${id}" class="mt-20 mb-8 scroll-mt-24">
        <div class="flex items-center gap-4 mb-4">
          <span class="text-xs font-mono text-[#00D4FF] tracking-wider">${String(h2Counter).padStart(2, "0")}</span>
          <span class="flex-1 h-px bg-[#E5E5E5]"></span>
        </div>
        <h2 class="text-[26px] lg:text-[34px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15]">${text}</h2>
      </div>`);
      continue;
    }

    // H3
    if (trimmed.startsWith("### ")) {
      htmlParts.push(`<h3 class="text-[20px] lg:text-[24px] font-semibold text-[#1D1D1F] mt-12 mb-4 tracking-[-0.01em] leading-[1.2]">${trimmed.slice(4)}</h3>`);
      continue;
    }

    // Lede (first real paragraph)
    if (isFirstParagraph && !trimmed.startsWith("<") && !trimmed.startsWith("**") && !trimmed.startsWith("-") && !trimmed.startsWith("#")) {
      isFirstParagraph = false;
      htmlParts.push(`<p class="text-[#1D1D1F] text-xl lg:text-[22px] leading-[1.7] mb-8 font-light">${fmt(trimmed)}</p>`);
      continue;
    }
    if (isFirstParagraph && (trimmed.startsWith("<") || trimmed.startsWith("**") || trimmed.startsWith("-") || trimmed.startsWith("#"))) {
      isFirstParagraph = false;
    }

    // Full bold paragraph
    if (trimmed.startsWith("**") && trimmed.endsWith("**") && trimmed.indexOf("**", 2) === trimmed.length - 2) {
      htmlParts.push(`<p class="text-[#1D1D1F] font-semibold mb-4 text-lg leading-relaxed">${trimmed.slice(2, -2)}</p>`);
      continue;
    }

    // Bold-label bullet lists — styled cards
    if (trimmed.startsWith("- **")) {
      const items = trimmed.split("\n").map((item) => {
        const m = item.match(/- \*\*(.+?)\*\*:?\s*(.+)?/);
        if (m) return `<li class="py-3.5 border-b border-[#F0F0F2] last:border-0"><span class="text-[#1D1D1F] font-medium">${m[1]}${m[2] ? "." : ""}</span>${m[2] ? ` <span class="text-[#86868B]">${m[2]}</span>` : ""}</li>`;
        return `<li class="py-3.5 border-b border-[#F0F0F2] last:border-0 text-[#86868B]">${item.slice(2)}</li>`;
      });
      htmlParts.push(`<ul class="list-none p-0 mb-8 bg-[#FAFAFA] rounded-xl px-6">${items.join("")}</ul>`);
      continue;
    }

    // Plain bullets
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").map((item) => {
        if (item.startsWith("- ")) return `<li class="flex gap-3 mb-3"><span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#1D1D1F] mt-[10px]"></span><span class="text-[#86868B]">${fmt(item.slice(2))}</span></li>`;
        return "";
      }).filter(Boolean);
      htmlParts.push(`<ul class="list-none p-0 mb-8">${items.join("")}</ul>`);
      continue;
    }

    // Numbered lists
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split("\n").map((item, idx) => {
        const m = item.match(/^\d+\.\s(.+)/);
        if (m) return `<li class="flex gap-4 mb-5"><span class="flex-shrink-0 w-7 h-7 rounded-md bg-[#1D1D1F] text-white text-xs font-medium flex items-center justify-center mt-0.5">${idx + 1}</span><span class="text-[#86868B] leading-relaxed">${fmt(m[1])}</span></li>`;
        return "";
      }).filter(Boolean);
      htmlParts.push(`<ol class="list-none p-0 mb-8">${items.join("")}</ol>`);
      continue;
    }

    // Bold-start paragraph
    if (trimmed.startsWith("**")) {
      const m = trimmed.match(/\*\*(.+?)\*\*:?\s*(.*)/);
      if (m) {
        htmlParts.push(`<p class="text-[#86868B] mb-6 leading-[1.85] text-[17px]"><strong class="text-[#1D1D1F] font-semibold">${m[1]}${m[2] ? ":" : ""}</strong> ${fmt(m[2] || "")}</p>`);
        continue;
      }
    }

    // Regular paragraph
    htmlParts.push(`<p class="text-[#86868B] mb-6 leading-[1.85] text-[17px]">${fmt(trimmed)}</p>`);
  }

  // Flush any remaining sections
  if (currentLevel) { levelCards.push(currentLevel); currentLevel = null; }
  if (levelCards.length > 0) flushLevels();
  if (currentStep) { timelineSteps.push(currentStep); currentStep = null; }
  if (timelineSteps.length > 0) flushTimeline();
  if (faqBuffer.length > 0) flushFaq();

  const contentHtml = htmlParts.join("");

  // --- TOC ---
  const tocItems: { id: string; text: string }[] = [];
  const h2Regex = /^## (.+)$/gm;
  let tocMatch;
  while ((tocMatch = h2Regex.exec(post.content)) !== null) {
    const text = tocMatch[1];
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    tocItems.push({ id, text });
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* ── Hero: Typographic, no stock photo ── */}
        <section className="relative bg-[#1D1D1F] overflow-hidden">
          {/* CSS geometric grid pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }} />
          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D4FF]/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#00D4FF]/[0.02] rounded-full blur-[100px] translate-y-1/2" />

          <div className="relative z-10 max-w-[1460px] mx-auto px-6 lg:px-20">
            <div className="pt-32 lg:pt-44 pb-20 lg:pb-28">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-white/30 mb-12 lg:mb-16">
                <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
                <span className="text-white/15">/</span>
                <Link href="/ai" className="hover:text-white/50 transition-colors">AI Corner</Link>
              </nav>

              <div className="max-w-[860px]">
                {/* Category */}
                <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#00D4FF]/70 mb-6">
                  Artificial Intelligence
                </span>

                {/* Title */}
                <h1 className="text-[32px] sm:text-[40px] lg:text-[56px] font-semibold text-white tracking-[-0.035em] leading-[1.06] mb-8">
                  {post.title}
                </h1>

                {/* Thin accent rule */}
                <div className="w-16 h-px bg-[#00D4FF]/40 mb-8" />

                {/* Excerpt */}
                <p className="text-white/40 text-base lg:text-lg leading-relaxed mb-12 max-w-[580px]">
                  {post.excerpt.split(".").slice(0, 2).join(".") + "."}
                </p>

                {/* Author + meta row */}
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm font-medium ring-1 ring-white/10">
                    {post.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="flex items-center gap-4 text-white/30 text-sm">
                    <span className="text-white/60 font-medium">{post.author}</span>
                    <span className="w-px h-3 bg-white/15" />
                    <span>{formatDate(post.date)}</span>
                    <span className="w-px h-3 bg-white/15" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="h-px bg-gradient-to-r from-[#00D4FF]/30 via-[#00D4FF]/10 to-transparent" />
        </section>

        {/* ── Article body ── */}
        <article className="bg-white">
          <div className="max-w-[1460px] mx-auto px-6 lg:px-20">
            <div className="flex gap-0 lg:gap-20 py-14 lg:py-20">
              {/* Left: content */}
              <div className="flex-1 min-w-0 max-w-[680px]">
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
              </div>

              {/* Right: sticky sidebar */}
              {tocItems.length > 3 && (
                <aside className="hidden lg:block w-[260px] flex-shrink-0">
                  <div className="sticky top-28 pt-2">
                    <div className="mb-10">
                      <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#86868B] mb-5">Contents</div>
                      <nav className="space-y-0.5">
                        {tocItems.map((item, i) => (
                          <a key={item.id} href={`#${item.id}`}
                            className="group flex items-start gap-3 py-2 text-[13px] text-[#86868B] hover:text-[#1D1D1F] transition-colors leading-snug">
                            <span className="font-mono text-[11px] text-[#D2D2D7] group-hover:text-[#00D4FF] transition-colors mt-px">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span>{item.text}</span>
                          </a>
                        ))}
                      </nav>
                    </div>
                    <div className="h-px bg-[#E5E5E5] mb-8" />
                    <div>
                      <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#86868B] mb-4">Share</div>
                      <div className="flex gap-2">
                        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(pageUrl)}`}
                          target="_blank" rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg border border-[#E5E5E5] flex items-center justify-center text-[#86868B] hover:text-[#1D1D1F] hover:border-[#C5C5C5] hover:bg-[#FAFAFA] transition-all" aria-label="Share on X">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
                          target="_blank" rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg border border-[#E5E5E5] flex items-center justify-center text-[#86868B] hover:text-[#1D1D1F] hover:border-[#C5C5C5] hover:bg-[#FAFAFA] transition-all" aria-label="Share on LinkedIn">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                      </div>
                    </div>
                    <div className="h-px bg-[#E5E5E5] my-8" />
                    <div className="bg-[#FAFAFA] rounded-xl p-5 border border-[#E5E5E5]">
                      <div className="text-sm font-semibold text-[#1D1D1F] mb-2">Need help with AI?</div>
                      <p className="text-xs text-[#86868B] leading-relaxed mb-4">We build these systems. For real clients. Every week.</p>
                      <Link href="/contact" className="block w-full text-center text-sm font-medium bg-[#1D1D1F] text-white py-2.5 rounded-lg hover:bg-black transition-colors">
                        Talk to us
                      </Link>
                    </div>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </article>

        {/* ── Author ── */}
        <section className="bg-[#FAFAFA] border-y border-[#E5E5E5]">
          <div className="max-w-[1460px] mx-auto px-6 lg:px-20 py-14">
            <div className="max-w-[680px] flex gap-5 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#1D1D1F] flex items-center justify-center text-white text-sm font-semibold">
                {post.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#86868B] mb-1">About the author</div>
                <div className="text-lg font-semibold text-[#1D1D1F] mb-1">{post.author}</div>
                <p className="text-[#86868B] text-sm leading-relaxed">
                  CEO &amp; Founder of BKND Development. Builds agentic AI systems for marketing teams that demand speed, transparency, and measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related ── */}
        {relatedPosts.length > 0 && (
          <section className="bg-white py-20 lg:py-24">
            <div className="max-w-[1460px] mx-auto px-6 lg:px-20">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#00D4FF] mb-3 block">Continue reading</span>
                  <h2 className="text-[24px] lg:text-[32px] font-semibold text-[#1D1D1F] tracking-[-0.02em]">More from AI Corner</h2>
                </div>
                <Link href="/ai" className="hidden sm:inline-flex items-center gap-1.5 text-sm text-[#86868B] hover:text-[#1D1D1F] transition-colors">
                  View all
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {relatedPosts.map((related) => (
                  <Link key={related.slug} href={`/ai/${related.slug}`} className="group block">
                    <article>
                      {related.image && (
                        <div className="relative overflow-hidden rounded-xl mb-5 aspect-[16/10] bg-[#F5F5F7]">
                          <img src={related.image} alt={related.imageAlt || related.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-xs text-[#86868B] mb-3">
                        <span>{formatDate(related.date)}</span>
                        <span className="w-3 h-px bg-[#D2D2D7]" />
                        <span>{related.readTime}</span>
                      </div>
                      <h3 className="text-[17px] font-semibold text-[#1D1D1F] leading-snug group-hover:text-[#00D4FF] transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="bg-[#1D1D1F] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }} />
          <div className="max-w-[1460px] mx-auto px-6 lg:px-20 py-20 lg:py-28 relative z-10">
            <div className="max-w-xl">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#00D4FF]/70 mb-4 block">Ready to move</span>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-white tracking-[-0.02em] leading-[1.1] mb-4">
                Stop reading about agentic AI. Start using it.
              </h2>
              <p className="text-white/35 text-base lg:text-lg mb-10 leading-relaxed">
                We build the marketing systems that your competitors are reading about.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link href="/contact" className="btn-primary px-8 py-3.5 text-[15px]">Get in touch</Link>
                <Link href="/services/ai" className="btn-ghost px-8 py-3.5 text-[15px]">Our AI services</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
