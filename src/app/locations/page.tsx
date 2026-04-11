import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { cities, type City } from "@/data/cities";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Design & Digital Marketing Locations | BKND Development",
  description:
    "BKND Development provides web design, SEO, and digital marketing services across the United States. Find your city and get a free consultation.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Web Design & Digital Marketing Locations | BKND Development",
    description:
      "BKND Development provides web design, SEO, and digital marketing services across the United States.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://bknddevelopment.com/locations",
  },
};

const REGION_LABELS: Record<City["region"], string> = {
  northeast: "Northeast",
  southeast: "Southeast",
  midwest: "Midwest",
  southwest: "Southwest",
  west: "West",
};

const REGION_ORDER: City["region"][] = [
  "northeast",
  "southeast",
  "midwest",
  "southwest",
  "west",
];

function groupByRegion(allCities: City[]): Record<City["region"], City[]> {
  const grouped = {} as Record<City["region"], City[]>;
  for (const region of REGION_ORDER) {
    grouped[region] = allCities.filter((c) => c.region === region);
  }
  return grouped;
}

export default function LocationsHubPage() {
  const grouped = groupByRegion(cities);

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
          <div className="container-sg">
            <div className="max-w-[720px]">
              <AnimateOnScroll>
                <div className="flex items-center gap-2 text-[#00D4FF] text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>Service Areas</span>
                </div>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.1] mb-6">
                  Web Design &amp; Digital Marketing Across the US
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-8">
                  BKND Development builds high-performance websites and runs
                  data-driven marketing campaigns for businesses across the
                  United States. Browse our service locations below.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-6 py-3 rounded-[2px] hover:bg-[#00D4FF] transition-all duration-300 font-medium"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Cities by Region ──────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="space-y-16 max-w-[1100px] mx-auto">
              {REGION_ORDER.map((region) => {
                const regionCities = grouped[region];
                if (!regionCities || regionCities.length === 0) return null;
                return (
                  <div key={region}>
                    <AnimateOnScroll>
                      <h2 className="text-[22px] font-semibold text-[#1D1D1F] mb-8 pb-4 border-b border-[#D2D2D7]">
                        {REGION_LABELS[region]}
                      </h2>
                    </AnimateOnScroll>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {regionCities.map((city, i) => (
                        <AnimateOnScroll key={city.slug} delay={i * 0.05}>
                          <Link
                            href={`/locations/${city.slug}`}
                            className="flex items-start gap-4 bg-white border border-[#D2D2D7] rounded-[4px] p-6 hover:border-[#00D4FF] hover:shadow-sm transition-all duration-300 group"
                          >
                            <MapPin className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-[16px] font-semibold text-[#1D1D1F] group-hover:text-[#00D4FF] transition-colors">
                                {city.name}, {city.stateAbbr}
                              </div>
                              <div className="text-[13px] text-[#86868B] mt-0.5 line-clamp-2">
                                {city.industries.slice(0, 3).join(" · ")}
                              </div>
                            </div>
                          </Link>
                        </AnimateOnScroll>
                      ))}
                      {/* Elizabeth, NJ lives as a hardcoded page — list it under Northeast */}
                      {region === "northeast" && (
                        <AnimateOnScroll delay={regionCities.length * 0.05}>
                          <Link
                            href="/locations/elizabeth-nj"
                            className="flex items-start gap-4 bg-white border border-[#D2D2D7] rounded-[4px] p-6 hover:border-[#00D4FF] hover:shadow-sm transition-all duration-300 group"
                          >
                            <MapPin className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-[16px] font-semibold text-[#1D1D1F] group-hover:text-[#00D4FF] transition-colors">
                                Elizabeth, NJ
                              </div>
                              <div className="text-[13px] text-[#86868B] mt-0.5">
                                Retail · Professional Services · Healthcare
                              </div>
                            </div>
                          </Link>
                        </AnimateOnScroll>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="max-w-[720px] mx-auto text-center">
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6">
                  Don&apos;t see your city?
                </h2>
                <p className="text-[17px] text-[#86868B] leading-relaxed mb-8">
                  We work with businesses across the United States. Reach out
                  and we will let you know how we can help in your area.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-8 py-4 rounded-[2px] hover:bg-[#00D4FF] transition-all duration-300 font-medium text-[17px]"
                >
                  Get in Touch
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
