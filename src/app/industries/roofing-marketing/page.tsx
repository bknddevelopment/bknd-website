"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  ArrowRight,
  Search,
  Code,
  BarChart3,
  Zap,
  Globe,
  FileText,
  ChevronDown,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Users,
  Target,
  Eye,
  Bot,
  Star,
  Shield,
  CloudLightning,
  DollarSign,
  MousePointerClick,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const roofingServices = [
  {
    icon: Search,
    title: "Roofing SEO",
    description:
      "Rank for high-value keywords like 'roofing contractor near me,' 'roof replacement,' and 'emergency roof repair.' We target the searches that turn into $8K-$15K jobs.",
  },
  {
    icon: MapPin,
    title: "Google Maps Optimization",
    description:
      "Dominate the local 3-pack where homeowners find roofers. Full Google Business Profile optimization, citation building, and geo-targeted content for your service area.",
  },
  {
    icon: CloudLightning,
    title: "Storm Damage Content",
    description:
      "Pre-built storm damage pages ready to capture surges in search demand after hail, wind, and hurricane events. Be the roofer homeowners find when they need you most.",
  },
  {
    icon: DollarSign,
    title: "Paid Lead Generation",
    description:
      "Strategic Google Ads campaigns targeting high-intent roofing searches. We optimize for cost-per-lead, not just clicks, so every dollar drives real roofing jobs.",
  },
  {
    icon: Star,
    title: "Review & Reputation Management",
    description:
      "Build a 5-star reputation that converts searchers into callers. Automated review requests, professional response drafting, and reputation monitoring across platforms.",
  },
  {
    icon: MousePointerClick,
    title: "Website Conversion Optimization",
    description:
      "Turn website visitors into estimate requests. Click-to-call optimization, fast-loading pages, trust signals, and lead forms designed for roofing customers.",
  },
];

const approach = [
  {
    step: "01",
    title: "Roofing Market Audit",
    description:
      "We audit your current online presence, analyze your local competition, and identify the highest-value roofing keywords in your market. You get a clear picture of where you stand and where the opportunity is.",
  },
  {
    step: "02",
    title: "Keyword & Competitor Strategy",
    description:
      "Map every roofing service you offer to the keywords homeowners actually search. Analyze what your top-ranking competitors are doing and build a strategy to outrank them.",
  },
  {
    step: "03",
    title: "Technical SEO Foundation",
    description:
      "Fix site speed, mobile experience, schema markup, and crawlability issues. Most roofing websites have technical problems that prevent them from ranking -- we fix them directly.",
  },
  {
    step: "04",
    title: "Content & Link Building",
    description:
      "Create service pages, location pages, and storm damage content that ranks. Build authority through roofing directory listings, local partnerships, and industry-relevant backlinks.",
  },
  {
    step: "05",
    title: "Track Leads & Scale",
    description:
      "Every phone call, form submission, and direction request is tracked back to its source. Monthly reports show exactly how many leads SEO is generating and at what cost.",
  },
];

const differentiators = [
  {
    icon: CloudLightning,
    title: "We Know Roofing Seasonality & Storm Cycles",
    description:
      "Roofing demand spikes after storms and peaks during spring and fall. We build your content calendar around weather patterns and seasonal demand so you capture leads when volume is highest.",
  },
  {
    icon: Code,
    title: "Developer-First Implementation",
    description:
      "We build and modify websites directly. No waiting on a dev team to implement SEO recommendations. Changes go live the same day, which means faster results for your roofing company.",
  },
  {
    icon: Bot,
    title: "AI-Enhanced Competitive Analysis",
    description:
      "We use AI tools most marketing agencies do not have access to. Deeper keyword research, faster competitive analysis, and content optimization that keeps you ahead of other roofers in your market.",
  },
  {
    icon: Eye,
    title: "Full Transparency on Leads & ROI",
    description:
      "No black box marketing. You see every lead source, every keyword driving traffic, and exactly what your cost per roofing lead is. Monthly reports with real numbers, not vanity metrics.",
  },
];

const faqs = [
  {
    question: "How much does roofing marketing cost?",
    answer:
      "Roofing marketing costs typically range from $1,500 to $5,000 per month depending on your market competition, number of service areas, and the channels you want to invest in. SEO-focused campaigns start around $1,500/month while comprehensive programs including paid ads and content marketing may require $3,000-$5,000/month. We offer flexible month-to-month agreements because our results speak for themselves.",
  },
  {
    question: "How long does it take for roofing SEO to work?",
    answer:
      "Most roofing companies see measurable ranking improvements within 3-4 months and significant lead increases by 6-8 months. Local SEO improvements like Google Maps rankings tend to happen faster than organic rankings for competitive terms like 'roofing contractor near me.' Storm damage content can generate traffic almost immediately after a weather event if the pages are already indexed.",
  },
  {
    question: "How do I get my roofing company on Google Maps?",
    answer:
      "Getting your roofing company into the Google Maps 3-pack requires a fully optimized Google Business Profile, consistent business citations across directories, positive reviews with responses, and geo-targeted content on your website. We handle all of this as part of our roofing local SEO service, including category optimization, service area setup, and ongoing review management.",
  },
  {
    question: "Should roofing companies invest in storm chasing content?",
    answer:
      "Yes, but strategically. Storm damage content should be built before storm season so pages are already indexed and ranking when homeowners search for emergency roof repair. We create evergreen storm damage service pages plus seasonal content that captures high-intent searches during and after major weather events in your service area.",
  },
  {
    question: "How important are reviews for roofing companies?",
    answer:
      "Reviews are critical for roofing companies. 97% of consumers read reviews before hiring a contractor, and roofing is a high-trust purchase. Google also uses review signals as a ranking factor for local search. We help roofing companies build a review generation system, respond to all reviews professionally, and leverage positive reviews in marketing materials.",
  },
  {
    question: "Is PPC or SEO better for roofing companies?",
    answer:
      "Both have a role, but SEO delivers better long-term ROI for roofing companies. PPC costs for roofing keywords average $50+ per click, making it expensive to sustain. SEO builds organic visibility that generates leads without per-click costs. Most roofing companies benefit from PPC for immediate leads while SEO builds sustainable traffic. Over 12 months, organic leads typically cost 3x less than paid leads.",
  },
  {
    question: "How do I track leads from roofing marketing?",
    answer:
      "We set up call tracking, form submission tracking, and Google Analytics goals so you know exactly where every lead comes from. You get monthly reports showing leads by source (organic search, Google Maps, paid ads, direct), cost per lead by channel, and which keywords are driving the most valuable roofing leads.",
  },
  {
    question: "Do you work with multi-location roofing companies?",
    answer:
      "Yes. Multi-location roofing companies need a different strategy than single-location roofers. We create location-specific landing pages, manage separate Google Business Profiles for each location, build local citations per service area, and ensure your brand maintains consistency across all markets while targeting location-specific keywords.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200/80">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium text-[#1D1D1F] pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#86868B] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] pb-6" : "max-h-0"
        }`}
      >
        <p className="text-[#86868B] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function RoofingMarketingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
          <div className="container-sg">
            <div className="max-w-[900px]">
              <AnimateOnScroll>
                <div className="flex items-center gap-2 text-[#00D4FF] text-sm font-medium mb-6">
                  <Shield className="w-4 h-4" />
                  <span>Roofing Industry</span>
                </div>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.1] mb-6">
                  Roofing Marketing That Drives{" "}
                  <span className="text-[#00D4FF]">Qualified Leads</span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-4 max-w-[720px]">
                  Roofing companies are fighting for every lead. Between
                  pay-per-lead platforms taking a cut, $50+ Google Ads clicks,
                  and competitors outranking you on every search, you need a
                  marketing partner that understands the roofing business.
                </p>
                <p className="text-[16px] text-[#86868B] leading-relaxed mb-8 max-w-[720px]">
                  BKND Development builds roofing marketing systems that
                  generate leads you own -- not leads you rent. SEO, Google Maps,
                  storm damage content, and conversion optimization built
                  specifically for roofing companies.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-8 py-4 rounded-lg hover:bg-[#00D4FF] transition-all duration-300 font-medium text-[17px]"
                  >
                    Get Your Free Roofing Marketing Audit
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/services/seo"
                    className="inline-flex items-center justify-center gap-2 border border-[#D2D2D7] text-[#1D1D1F] px-8 py-4 rounded-lg hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-300 font-medium text-[17px]"
                  >
                    View All Services
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-[#1D1D1F]">
          <div className="container-sg">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "4,000+", label: "Monthly Roofing Searches" },
                { number: "$50+", label: "Average Cost Per Click" },
                { number: "4/100", label: "Keyword Difficulty" },
                { number: "82%", label: "Homeowners Search Online First" },
              ].map((stat, i) => (
                <AnimateOnScroll key={i} delay={i * 0.1}>
                  <div>
                    <div className="text-[32px] lg:text-[40px] font-bold text-[#00D4FF] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why Roofing Companies Need Digital Marketing */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-[720px] mx-auto mb-16">
              <AnimateOnScroll>
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6 text-center">
                  Why Roofing Companies Need Digital Marketing
                </h2>
                <div className="text-[17px] text-[#86868B] leading-relaxed space-y-4">
                  <p>
                    The roofing industry is driven by urgency. When a storm
                    damages a roof or a homeowner notices a leak, they go
                    straight to Google. The roofing companies that appear at the
                    top of search results and in the Google Maps 3-pack get the
                    calls. Everyone else gets nothing. With average roof
                    replacement jobs worth $8,000 to $15,000, every missed search
                    result is thousands of dollars left on the table.
                  </p>
                  <p>
                    Most roofing companies rely on pay-per-lead platforms like
                    Angi, HomeAdvisor, or Thumbtack -- paying $50 to $150 per
                    shared lead that three other roofers also received. SEO
                    builds a lead generation system you own. Once your roofing
                    company ranks on Google, every lead is exclusive and free.
                    That is how you build a{" "}
                    <Link
                      href="/marketing/roofing-company-marketing"
                      className="text-[#00D4FF] hover:underline"
                    >
                      roofing company marketing
                    </Link>{" "}
                    system that scales.
                  </p>
                  <p>
                    Storm-driven demand makes roofing marketing unlike any other
                    industry. You need content indexed and ranking before the
                    storm hits, a Google Business Profile optimized to capture
                    map searches, and a website that converts panicked
                    homeowners into booked inspections. That is exactly what we
                    build.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
              {[
                {
                  icon: Star,
                  stat: "97%",
                  title: "read reviews before hiring a roofer",
                  description:
                    "Homeowners research roofing contractors extensively before calling. Your online reputation directly determines how many leads convert.",
                },
                {
                  icon: DollarSign,
                  stat: "$8K-$15K",
                  title: "average roof replacement value",
                  description:
                    "Roofing is a high-ticket service. Every first-page ranking you hold generates thousands of dollars in potential revenue each month.",
                },
                {
                  icon: TrendingUp,
                  stat: "3x",
                  title: "ROI organic vs paid leads",
                  description:
                    "Over 12 months, roofing companies that invest in SEO generate leads at one-third the cost of Google Ads and pay-per-lead platforms.",
                },
              ].map((item, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 h-full">
                    <item.icon className="w-8 h-8 text-[#00D4FF] mb-4" />
                    <div className="text-[32px] font-bold text-[#1D1D1F] mb-1">
                      {item.stat}
                    </div>
                    <h3 className="text-[17px] font-semibold text-[#1D1D1F] mb-3">
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

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Roofing Marketing Services
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Everything Your Roofing Company Needs to Dominate Search
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From{" "}
                <Link
                  href="/services/seo"
                  className="text-[#00D4FF] hover:underline"
                >
                  technical SEO
                </Link>{" "}
                to reputation management, we cover every channel roofing
                companies need to generate consistent, qualified leads.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
              {roofingServices.map((service, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-[#F5F5F7] rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                    <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Process
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-4 tracking-tight">
                How We Get Roofing Companies to Page One
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-gray-400 text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                A proven five-step process built for the roofing industry. From
                audit to lead tracking, every step is designed to generate real
                roofing jobs.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-[1200px] mx-auto">
              {approach.map((item, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="relative">
                    <div className="text-[#00D4FF] text-4xl font-bold mb-4 opacity-50">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose BKND */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Why Choose Us
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                What Sets Our Roofing Marketing Apart
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Most marketing agencies treat roofing companies like every other
                client. We understand storm cycles, seasonality, and the
                high-trust nature of roofing purchases.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
              {differentiators.map((item, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <div className="flex gap-6 p-8 bg-[#F5F5F7] rounded-2xl border border-gray-200/80">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[#00D4FF]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#86868B] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                FAQ
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Roofing Marketing Questions Answered
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Common questions from roofing company owners about digital
                marketing, SEO, and lead generation -- answered honestly.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 border border-gray-200/80">
                {faqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1D1D1F] py-24 lg:py-32">
          <div className="container-sg">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll>
                <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-6">
                  Ready to Grow Your Roofing Business?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Stop losing roofing jobs to the
                  <br />
                  <span className="text-[#00D4FF]">
                    company ranked above you.
                  </span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Free roofing marketing audit. We will show you exactly where
                  your competitors are winning leads and how to take them back.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Get Your Free Roofing Marketing Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
