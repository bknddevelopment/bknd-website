"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
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
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code,
    title: "Custom Website Development",
    description:
      "High-performance websites built with Next.js, Webflow, or WordPress. Designed to convert visitors into customers for Elizabeth businesses.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Technical SEO, local optimization, and content strategy that gets Elizabeth businesses found on Google when customers are searching.",
  },
  {
    icon: BarChart3,
    title: "Analytics and Tracking",
    description:
      "GA4 setup, conversion tracking, and attribution modeling so you know exactly which marketing channels drive revenue.",
  },
  {
    icon: Bot,
    title: "AI Marketing Solutions",
    description:
      "AI chatbots, marketing automation, and generative AI tools that help Elizabeth businesses scale without scaling headcount.",
  },
  {
    icon: Globe,
    title: "Local SEO and Google Maps",
    description:
      "Google Business Profile optimization, local citations, and review management to dominate Elizabeth and Union County search results.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    description:
      "Google Ads, Meta Ads, and LinkedIn campaigns targeted to Elizabeth and surrounding areas with measurable ROI.",
  },
];

const neighborhoodAreas = [
  "Downtown Elizabeth",
  "Elmora",
  "Peterstown",
  "Westminster",
  "Bayway",
  "Elizabeth Port",
  "North Elizabeth",
  "South Elizabeth",
];

const nearbyAreas = [
  "Linden",
  "Roselle",
  "Roselle Park",
  "Rahway",
  "Union",
  "Cranford",
  "Clark",
  "Hillside",
  "Newark",
  "Woodbridge",
];

export default function ElizabethNJPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
          <div className="container-sg">
            <div className="max-w-[900px]">
              <AnimateOnScroll>
                <div className="flex items-center gap-2 text-[#00D4FF] text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>Elizabeth, New Jersey</span>
                </div>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.1] mb-6">
                  Web Development Company in Elizabeth, NJ
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-8 max-w-[720px]">
                  BKND Development builds high-performance websites and
                  data-driven marketing systems for Elizabeth businesses. We
                  combine developer expertise with measurable marketing strategy
                  to help local companies grow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-6 py-3 rounded-lg hover:bg-[#00D4FF] transition-all duration-300 font-medium"
                  >
                    Get a Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center gap-2 border border-[#D2D2D7] text-[#1D1D1F] px-6 py-3 rounded-lg hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-300 font-medium"
                  >
                    View Our Work
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Why Elizabeth Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="max-w-[720px] mx-auto text-center mb-16">
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6">
                  Why Elizabeth Businesses Choose BKND
                </h2>
                <p className="text-[17px] text-[#86868B] leading-relaxed">
                  Elizabeth is one of the largest cities in New Jersey with over
                  130,000 residents and a thriving commercial district. Local
                  businesses here compete for visibility in a dense market. We
                  help them stand out.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
              <AnimateOnScroll delay={0.1}>
                <div className="bg-white rounded-2xl p-8 h-full">
                  <Building2 className="w-8 h-8 text-[#00D4FF] mb-4" />
                  <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-3">
                    Local Market Knowledge
                  </h3>
                  <p className="text-[15px] text-[#86868B] leading-relaxed">
                    We understand the Elizabeth business landscape -- from the
                    Elmora district to Downtown and the Port area. Our marketing
                    strategies are built around how local customers actually
                    search and buy.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <div className="bg-white rounded-2xl p-8 h-full">
                  <Code className="w-8 h-8 text-[#00D4FF] mb-4" />
                  <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-3">
                    Developer-Built Quality
                  </h3>
                  <p className="text-[15px] text-[#86868B] leading-relaxed">
                    Your website is not a template with your logo slapped on it.
                    We build custom, high-performance sites using modern
                    frameworks that load fast and convert visitors into
                    customers.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.3}>
                <div className="bg-white rounded-2xl p-8 h-full">
                  <BarChart3 className="w-8 h-8 text-[#00D4FF] mb-4" />
                  <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-3">
                    Measurable Results
                  </h3>
                  <p className="text-[15px] text-[#86868B] leading-relaxed">
                    Every campaign comes with tracking, attribution, and
                    reporting. You see exactly where leads come from and what
                    your marketing dollars produce. No vanity metrics.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="max-w-[720px] mx-auto text-center mb-16">
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6">
                  Services for Elizabeth Businesses
                </h2>
                <p className="text-[17px] text-[#86868B] leading-relaxed">
                  From website development to local SEO and AI-powered
                  marketing, we provide everything Elizabeth businesses need to
                  grow their online presence.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
              {services.map((service, index) => (
                <AnimateOnScroll key={service.title} delay={index * 0.1}>
                  <div className="border border-[#D2D2D7] rounded-2xl p-8 h-full hover:border-[#00D4FF] transition-colors duration-300">
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
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="max-w-[720px] mx-auto text-center mb-16">
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-white tracking-[-0.02em] leading-[1.15] mb-6">
                  How We Work With Elizabeth Clients
                </h2>
                <p className="text-[17px] text-[#86868B] leading-relaxed">
                  A straightforward process designed to get results without
                  wasting your time or budget.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-4 gap-8 max-w-[1100px] mx-auto">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description:
                    "We learn your business, your customers, and your goals. No generic questionnaires -- a real conversation about what success looks like.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description:
                    "We audit your current digital presence, research your Elizabeth market competitors, and build a plan with specific, measurable targets.",
                },
                {
                  step: "03",
                  title: "Build",
                  description:
                    "We execute the plan -- website development, SEO implementation, ad campaigns, or whatever your strategy calls for.",
                },
                {
                  step: "04",
                  title: "Grow",
                  description:
                    "We track results, optimize continuously, and report monthly on what is working, what is not, and what to do next.",
                },
              ].map((item, index) => (
                <AnimateOnScroll key={item.step} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-[48px] font-bold text-[#00D4FF] mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-[18px] font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-[#86868B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <div className="max-w-[900px] mx-auto">
              <AnimateOnScroll>
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6 text-center">
                  Serving Elizabeth and Surrounding Areas
                </h2>
                <p className="text-[17px] text-[#86868B] leading-relaxed text-center mb-12 max-w-[600px] mx-auto">
                  We work with businesses throughout Elizabeth neighborhoods and
                  nearby Union County communities.
                </p>
              </AnimateOnScroll>

              <div className="grid md:grid-cols-2 gap-12">
                <AnimateOnScroll delay={0.1}>
                  <div>
                    <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-6">
                      Elizabeth Neighborhoods
                    </h3>
                    <ul className="space-y-3">
                      {neighborhoodAreas.map((area) => (
                        <li
                          key={area}
                          className="flex items-center gap-3 text-[#86868B]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#00D4FF] flex-shrink-0" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.2}>
                  <div>
                    <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-6">
                      Nearby Communities
                    </h3>
                    <ul className="space-y-3">
                      {nearbyAreas.map((area) => (
                        <li
                          key={area}
                          className="flex items-center gap-3 text-[#86868B]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#00D4FF] flex-shrink-0" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* About Elizabeth Section (local content for SEO) */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-[720px] mx-auto">
              <AnimateOnScroll>
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6">
                  Web Development for Elizabeth&apos;s Growing Business
                  Community
                </h2>
                <div className="space-y-6 text-[17px] text-[#86868B] leading-relaxed">
                  <p>
                    Elizabeth is the fourth-largest city in New Jersey and the
                    county seat of Union County. With a population exceeding
                    130,000, it is one of the most commercially active cities in
                    the state. The city&apos;s location along major
                    transportation routes -- including Newark Liberty
                    International Airport, the New Jersey Turnpike, and NJ
                    Transit rail lines -- makes it a hub for businesses serving
                    the greater Newark metro area.
                  </p>
                  <p>
                    The downtown Elizabeth business district, anchored by Broad
                    Street and Elizabeth Avenue, is home to hundreds of small
                    businesses ranging from retail shops and restaurants to
                    professional services and healthcare providers. The Elmora
                    section has its own thriving commercial corridor along
                    Elmora Avenue.
                  </p>
                  <p>
                    For Elizabeth businesses competing in this dense market, a
                    strong online presence is not optional. When local customers
                    search for services, the businesses that appear on page one
                    of Google get the calls. We help Elizabeth businesses get
                    there and stay there through technical SEO, custom website
                    development, and data-driven marketing strategies.
                  </p>
                  <p>
                    Whether you are a restaurant on Elizabeth Avenue, a
                    professional services firm Downtown, or a contractor serving
                    Union County from an Elizabeth base, we build the digital
                    infrastructure that brings customers to your door.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="max-w-[720px] mx-auto text-center">
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6">
                  Ready to Grow Your Elizabeth Business?
                </h2>
                <p className="text-[17px] text-[#86868B] leading-relaxed mb-8">
                  Get a free consultation and find out exactly what it would
                  take to improve your online presence. No pressure, no jargon,
                  just a clear plan.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-8 py-4 rounded-lg hover:bg-[#00D4FF] transition-all duration-300 font-medium text-[17px]"
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
