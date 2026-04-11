import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  cities,
  getCityBySlug,
  getNearbyInRegion,
  type City,
} from "@/data/cities";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Search,
  BarChart3,
  Bot,
  Globe,
  Megaphone,
  MapPin,
  Building2,
  CheckCircle2,
  Users,
  TrendingUp,
} from "lucide-react";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return { title: "Not Found | BKND Development" };

  const fullTitle = `Web Design & Digital Marketing in ${city.name}, ${city.stateAbbr} | BKND Development`;
  const fullDescription = `${city.description.split(".")[0]}. BKND Development provides web design, SEO, and digital marketing services in ${city.name}, ${city.state}.`;

  return {
    title: fullTitle,
    description: fullDescription,
    alternates: { canonical: `/locations/${city.slug}` },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      type: "website",
      locale: "en_US",
      siteName: "BKND Development",
      url: `https://bknddevelopment.com/locations/${city.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
    },
  };
}

const services = [
  {
    icon: Code,
    title: "Web Design & Development",
    description:
      "Custom, high-performance websites built with Next.js, Webflow, or WordPress. Designed to convert visitors into paying customers.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Technical SEO, local optimization, and content strategy that gets your business found on Google when customers are actively searching.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    description:
      "GA4 setup, conversion tracking, and attribution modeling so you know exactly which marketing channels drive revenue.",
  },
  {
    icon: Bot,
    title: "AI Marketing Solutions",
    description:
      "AI chatbots, marketing automation, and generative AI tools that help your business scale without scaling headcount.",
  },
  {
    icon: Globe,
    title: "Local SEO & Google Maps",
    description:
      "Google Business Profile optimization, local citations, and review management to dominate local search results.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    description:
      "Google Ads, Meta Ads, and LinkedIn campaigns with tight targeting and measurable return on ad spend.",
  },
];

function formatPopulation(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return n.toLocaleString();
}

function WhyReasonCard({
  icon: Icon,
  title,
  body,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  delay: number;
}) {
  return (
    <AnimateOnScroll delay={delay}>
      <div className="bg-white rounded-[4px] p-8 h-full">
        <Icon className="w-8 h-8 text-[#00D4FF] mb-4" />
        <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-3">
          {title}
        </h3>
        <p className="text-[15px] text-[#86868B] leading-relaxed">{body}</p>
      </div>
    </AnimateOnScroll>
  );
}

export default async function CityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return notFound();

  const nearby = getNearbyInRegion(city, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://bknddevelopment.com/locations/${city.slug}`,
        name: "BKND Development",
        description: `Web design and digital marketing agency serving ${city.name}, ${city.state}`,
        url: `https://bknddevelopment.com/locations/${city.slug}`,
        telephone: "+19735185600",
        email: "info@bknddevelopment.com",
        areaServed: {
          "@type": "City",
          name: `${city.name}, ${city.state}`,
        },
        serviceType: [
          "Web Design",
          "SEO",
          "Digital Marketing",
          "AI Solutions",
          "Local SEO",
          "Paid Advertising",
        ],
        founder: {
          "@type": "Person",
          name: "Charwin Vanryck deGroot",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://bknddevelopment.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Locations",
            item: "https://bknddevelopment.com/locations/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${city.name}, ${city.stateAbbr}`,
            item: `https://bknddevelopment.com/locations/${city.slug}/`,
          },
        ],
      },
    ],
  };

  const whyReasons: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    body: string;
  }> = [
    {
      icon: Building2,
      title: `${city.name} Market Expertise`,
      body: `We understand the competitive dynamics and customer behavior in ${city.name}. Our strategies are built around what actually drives results in your local market, not generic playbooks copied from other regions.`,
    },
    {
      icon: Code,
      title: "Developer-Built Quality",
      body: "Your website is not a template with your logo dropped in. We build custom, high-performance sites using modern frameworks that load fast, rank well, and convert visitors into customers.",
    },
    {
      icon: BarChart3,
      title: "Measurable Results",
      body: "Every campaign includes tracking, attribution, and monthly reporting. You see exactly where leads come from and what your marketing investment produces. No vanity metrics, no guesswork.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* ── Breadcrumbs ───────────────────────────────────────────────────── */}
        <div className="bg-[#F5F5F7] border-b border-[#D2D2D7] py-3">
          <div className="container-sg">
            <nav className="text-sm text-[#86868B]" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#1D1D1F] transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/locations"
                className="hover:text-[#1D1D1F] transition-colors"
              >
                Locations
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#1D1D1F]">
                {city.name}, {city.stateAbbr}
              </span>
            </nav>
          </div>
        </div>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="pt-16 pb-16 lg:pt-24 lg:pb-24 bg-white">
          <div className="container-sg">
            <div className="max-w-[900px]">
              <AnimateOnScroll>
                <div className="flex items-center gap-2 text-[#00D4FF] text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {city.name}, {city.state}
                  </span>
                </div>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.1] mb-6">
                  Web Design &amp; Digital Marketing in {city.name},{" "}
                  {city.state}
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-8 max-w-[720px]">
                  {city.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-6 py-3 rounded-[2px] hover:bg-[#00D4FF] transition-all duration-300 font-medium"
                  >
                    Get a Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center gap-2 border border-[#D2D2D7] text-[#1D1D1F] px-6 py-3 rounded-[2px] hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-300 font-medium"
                  >
                    View Our Work
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Why [City] Section ────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="max-w-[720px] mx-auto text-center mb-16">
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6">
                  Why {city.name} Businesses Choose BKND
                </h2>
                <p className="text-[17px] text-[#86868B] leading-relaxed">
                  We combine technical engineering with performance marketing to
                  help {city.name} businesses grow their online presence and
                  generate measurable revenue.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
              {whyReasons.map((reason, i) => (
                <WhyReasonCard
                  key={reason.title}
                  icon={reason.icon}
                  title={reason.title}
                  body={reason.body}
                  delay={(i + 1) * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Services Grid ─────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="max-w-[720px] mx-auto text-center mb-16">
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6">
                  Services for {city.name} Businesses
                </h2>
                <p className="text-[17px] text-[#86868B] leading-relaxed">
                  From website development to AI-powered marketing, we provide
                  everything {city.name} businesses need to compete and grow
                  online.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
              {services.map((service, index) => (
                <AnimateOnScroll key={service.title} delay={index * 0.08}>
                  <div className="border border-[#D2D2D7] rounded-[4px] p-8 h-full hover:border-[#00D4FF] transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-[#00D4FF] mb-4" />
                    <h3 className="text-[18px] font-semibold text-[#1D1D1F] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[15px] text-[#86868B] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            <AnimateOnScroll delay={0.4}>
              <div className="text-center mt-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-6 py-3 rounded-[2px] hover:bg-[#00D4FF] transition-all duration-300 font-medium"
                >
                  Get a Quote for {city.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Industries We Serve ───────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <div className="max-w-[900px] mx-auto">
              <AnimateOnScroll>
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-white tracking-[-0.02em] leading-[1.15] mb-4 text-center">
                  Industries We Serve in {city.name}
                </h2>
                <p className="text-[17px] text-[#86868B] leading-relaxed text-center mb-12 max-w-[600px] mx-auto">
                  We have built websites and run campaigns across {city.name}
                  &apos;s key industries. We understand the competitive
                  landscape and buyer behavior in each sector.
                </p>
              </AnimateOnScroll>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {city.industries.map((industry, i) => (
                  <AnimateOnScroll key={industry} delay={i * 0.08}>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-[4px] p-5">
                      <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                      <span className="text-white text-[15px] font-medium">
                        {industry}
                      </span>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── About [City] Stats ────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-[900px] mx-auto">
              <AnimateOnScroll>
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-12 text-center">
                  About {city.name}
                </h2>
              </AnimateOnScroll>
              <div className="grid sm:grid-cols-3 gap-8 mb-12">
                <AnimateOnScroll delay={0.1}>
                  <div className="bg-white rounded-[4px] p-8 text-center">
                    <Users className="w-8 h-8 text-[#00D4FF] mb-3 mx-auto" />
                    <div className="text-[36px] font-bold text-[#1D1D1F] tracking-[-0.02em]">
                      {formatPopulation(city.population)}
                    </div>
                    <div className="text-[14px] text-[#86868B] mt-1">
                      Residents
                    </div>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.2}>
                  <div className="bg-white rounded-[4px] p-8 text-center">
                    <TrendingUp className="w-8 h-8 text-[#00D4FF] mb-3 mx-auto" />
                    <div className="text-[36px] font-bold text-[#1D1D1F] tracking-[-0.02em]">
                      {city.tier === 1
                        ? "Major"
                        : city.tier === 2
                          ? "Mid-Size"
                          : "Local"}
                    </div>
                    <div className="text-[14px] text-[#86868B] mt-1">
                      Market
                    </div>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.3}>
                  <div className="bg-white rounded-[4px] p-8 text-center">
                    <MapPin className="w-8 h-8 text-[#00D4FF] mb-3 mx-auto" />
                    <div className="text-[36px] font-bold text-[#1D1D1F] tracking-[-0.02em]">
                      {city.stateAbbr}
                    </div>
                    <div className="text-[14px] text-[#86868B] mt-1">
                      {city.state}
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* ── Nearby Locations ──────────────────────────────────────────────── */}
        {nearby.length > 0 && (
          <section className="py-16 lg:py-24 bg-white">
            <div className="container-sg">
              <AnimateOnScroll>
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-4 text-center">
                  Also Serving the {city.state} Region
                </h2>
                <p className="text-[17px] text-[#86868B] leading-relaxed text-center mb-12 max-w-[560px] mx-auto">
                  BKND works with businesses across the region. Explore our
                  services in nearby cities.
                </p>
              </AnimateOnScroll>
              <div className="flex flex-wrap justify-center gap-4 max-w-[800px] mx-auto">
                {nearby.map((nearbyCity, i) => (
                  <AnimateOnScroll key={nearbyCity.slug} delay={i * 0.08}>
                    <Link
                      href={`/locations/${nearbyCity.slug}`}
                      className="inline-flex items-center gap-2 border border-[#D2D2D7] text-[#1D1D1F] px-5 py-2.5 rounded-[20px] hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-300 text-[15px] font-medium"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      {nearbyCity.name}, {nearbyCity.stateAbbr}
                    </Link>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-[720px] mx-auto">
              <AnimateOnScroll>
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-12 text-center">
                  Frequently Asked Questions
                </h2>
              </AnimateOnScroll>
              <div className="space-y-6">
                {[
                  {
                    q: `How much does web design cost in ${city.name}?`,
                    a: `Web design pricing in ${city.name} depends on the scope of the project. A professional custom website typically ranges from $3,000 to $15,000, while more complex builds with e-commerce, integrations, or custom applications can exceed that. We provide a detailed estimate after a free consultation — no obligations, no pressure. Our goal is a clear scope and honest pricing before you commit.`,
                  },
                  {
                    q: `What digital marketing services do you offer in ${city.name}?`,
                    a: `We offer the full stack: custom web design and development, technical SEO and local SEO, Google Ads and Meta Ads management, analytics and conversion tracking, and AI-powered marketing automation. Most ${city.name} clients start with a website audit and SEO strategy, then add paid media or content programs once the foundation is solid.`,
                  },
                  {
                    q: `Why hire a local agency for ${city.name}?`,
                    a: `${city.name} has a specific competitive landscape, customer behavior patterns, and industry mix that generic national agencies tend to miss. We research your local market before building any strategy — who ranks for what, which competitors run ads, what local search terms drive actual business. That market context is the difference between campaigns that work and campaigns that burn budget.`,
                  },
                ].map((faq, i) => (
                  <AnimateOnScroll key={i} delay={i * 0.1}>
                    <div className="bg-white rounded-[4px] p-8">
                      <h3 className="text-[18px] font-semibold text-[#1D1D1F] mb-3">
                        {faq.q}
                      </h3>
                      <p className="text-[15px] text-[#86868B] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="max-w-[720px] mx-auto text-center">
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6">
                  Ready to grow your {city.name} business?
                </h2>
                <p className="text-[17px] text-[#86868B] leading-relaxed mb-8">
                  Get a free consultation and a clear plan for improving your
                  online presence in {city.name}. No jargon, no pressure — just
                  honest recommendations.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-8 py-4 rounded-[2px] hover:bg-[#00D4FF] transition-all duration-300 font-medium text-[17px]"
                >
                  Start Your Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
