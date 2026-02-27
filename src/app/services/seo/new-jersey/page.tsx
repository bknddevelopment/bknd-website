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
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const seoServices = [
  {
    icon: Code,
    title: "Technical SEO",
    description:
      "Site speed, Core Web Vitals, schema markup, crawlability, and indexation. We fix the foundation that most NJ agencies overlook because they cannot code.",
  },
  {
    icon: Globe,
    title: "NJ Local SEO",
    description:
      "Google Business Profile optimization, local citations, review management, and geo-targeted content to dominate search results in your NJ service area.",
  },
  {
    icon: Search,
    title: "On-Page Optimization",
    description:
      "Title tags, meta descriptions, heading structure, internal linking, and content optimization targeting the keywords your NJ customers actually search for.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description:
      "Keyword research, content gap analysis, topic clusters, and editorial planning. We create content that ranks and converts NJ searchers into customers.",
  },
  {
    icon: BarChart3,
    title: "Link Building",
    description:
      "White-hat link building through NJ business directories, local partnerships, digital PR, and content that earns links naturally. No paid links, ever.",
  },
  {
    icon: Bot,
    title: "AI-Enhanced SEO",
    description:
      "Generative Engine Optimization for ChatGPT, Gemini, and AI Overviews. Your NJ business needs to appear in AI search results, not just traditional Google.",
  },
];

const approach = [
  {
    step: "01",
    title: "Free SEO Audit",
    description:
      "We crawl your site like Google does and identify every technical issue, content gap, and missed opportunity. You get a clear report of what is holding your NJ business back in search results.",
  },
  {
    step: "02",
    title: "Fix the Foundation",
    description:
      "Before chasing rankings, we fix site speed, mobile issues, broken links, and schema markup. Most NJ SEO companies skip this because they cannot implement technical changes.",
  },
  {
    step: "03",
    title: "Optimize and Create Content",
    description:
      "We target the keywords your NJ customers use to find businesses like yours. Every page gets optimized for search intent, and we fill content gaps your competitors have not covered.",
  },
  {
    step: "04",
    title: "Build Authority",
    description:
      "Earn backlinks from NJ directories, industry publications, and local partnerships. We build the kind of authority that Google rewards with higher rankings.",
  },
  {
    step: "05",
    title: "Track and Report",
    description:
      "Monthly reports showing keyword rankings, traffic growth, lead generation, and ROI. You always know exactly where your SEO investment stands.",
  },
];

const differentiators = [
  {
    icon: Code,
    title: "Developers, Not Just Marketers",
    description:
      "We build websites and implement SEO changes directly. No waiting on a dev team. No miscommunication. Changes go live the same day.",
  },
  {
    icon: Bot,
    title: "AI-Powered Analysis",
    description:
      "We use AI tools that most NJ agencies do not have access to. Faster keyword research, deeper competitive analysis, and content optimization at scale.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "No black box SEO. You see every change we make, every keyword we target, and every result we achieve. Monthly reports with real numbers, not vanity metrics.",
  },
  {
    icon: Zap,
    title: "Speed to Results",
    description:
      "Because we handle both strategy and implementation, our clients see ranking improvements faster than traditional agency timelines. No handoff delays.",
  },
];

const njCounties = [
  {
    name: "Union County",
    cities: [
      "Elizabeth",
      "Cranford",
      "Westfield",
      "Scotch Plains",
      "Summit",
      "Linden",
      "Rahway",
      "Roselle",
      "Clark",
      "Union Township",
    ],
  },
  {
    name: "Essex County",
    cities: [
      "Newark",
      "Montclair",
      "Livingston",
      "West Orange",
      "Bloomfield",
      "Nutley",
      "Maplewood",
      "South Orange",
      "Millburn",
      "Cedar Grove",
    ],
  },
  {
    name: "Middlesex County",
    cities: [
      "New Brunswick",
      "Edison",
      "Woodbridge",
      "Perth Amboy",
      "Piscataway",
      "East Brunswick",
      "Old Bridge",
      "South Brunswick",
      "Metuchen",
      "Highland Park",
    ],
  },
  {
    name: "Bergen County",
    cities: [
      "Hackensack",
      "Paramus",
      "Fort Lee",
      "Englewood",
      "Teaneck",
      "Fair Lawn",
      "Ridgewood",
      "Garfield",
      "Bergenfield",
      "Lodi",
    ],
  },
  {
    name: "Morris County",
    cities: [
      "Morristown",
      "Parsippany",
      "Dover",
      "Denville",
      "Rockaway",
      "Madison",
      "Chatham",
      "Randolph",
      "Mount Olive",
      "Boonton",
    ],
  },
  {
    name: "Hudson County",
    cities: [
      "Jersey City",
      "Hoboken",
      "Bayonne",
      "North Bergen",
      "West New York",
      "Union City",
      "Secaucus",
      "Kearny",
      "Harrison",
      "Guttenberg",
    ],
  },
];

const industries = [
  "Contractors and Home Services",
  "Healthcare and Medical Practices",
  "Law Firms and Legal Services",
  "Restaurants and Food Service",
  "Auto Repair and Dealerships",
  "Real Estate Agents and Brokers",
  "HVAC and Plumbing Companies",
  "Dental and Orthodontic Offices",
  "Accounting and Financial Services",
  "Roofing and Construction",
  "Landscaping and Lawn Care",
  "Cleaning and Janitorial Services",
];

const faqs = [
  {
    question: "How much does SEO cost in New Jersey?",
    answer:
      "SEO costs in New Jersey typically range from $1,500 to $5,000 per month depending on the scope, competition level, and number of target keywords. Local SEO for a single-location NJ business starts around $1,500/month, while multi-location or competitive statewide campaigns may require $3,000-$5,000/month. Unlike agencies that lock you into 12-month contracts, we offer flexible agreements because our results speak for themselves.",
  },
  {
    question: "How long does it take to rank on Google in NJ?",
    answer:
      "Most NJ businesses see measurable ranking improvements within 3-4 months and significant results by 6-8 months. The timeline depends on your current site health, competition level for your target keywords, and how aggressively we can build authority. Local SEO improvements like Google Maps rankings tend to happen faster than organic rankings for competitive statewide terms.",
  },
  {
    question: "What makes BKND different from other NJ SEO companies?",
    answer:
      "We are developers first, which means we implement SEO changes directly instead of handing off recommendations to your dev team. This eliminates the bottleneck that slows down most SEO campaigns. We also use AI-enhanced tools for keyword research, content optimization, and competitive analysis that most NJ agencies do not have access to. Our clients see faster results because we move faster.",
  },
  {
    question: "Do you work with small businesses in NJ?",
    answer:
      "Yes. Most of our NJ clients are small to mid-size businesses -- contractors, professional services firms, healthcare practices, and local service companies. We specialize in helping NJ businesses that depend on local customers finding them through Google Search and Google Maps.",
  },
  {
    question: "What NJ areas do you serve?",
    answer:
      "We serve businesses throughout New Jersey with a focus on Central and Northern NJ including Union County, Essex County, Middlesex County, Bergen County, Morris County, Hudson County, Somerset County, and Passaic County. Our office is in Cranford, NJ, but we work with clients across the entire state.",
  },
  {
    question: "Can you help my NJ business show up on Google Maps?",
    answer:
      "Absolutely. Google Maps and the local 3-pack are where most NJ customers start when searching for local services. We optimize your Google Business Profile, build consistent local citations, manage reviews, and create geo-targeted content that helps you rank in the map results for your service area.",
  },
  {
    question: "Do you guarantee first page Google rankings?",
    answer:
      "No legitimate SEO company can guarantee specific Google rankings -- anyone who promises that is either lying or using black hat tactics that will get your site penalized. What we guarantee is transparent work, measurable progress, and adherence to Google best practices that build sustainable rankings over time.",
  },
  {
    question: "What is the difference between SEO and PPC for NJ businesses?",
    answer:
      "SEO builds long-term organic visibility -- once you rank, you get free traffic. PPC (Google Ads) gets you immediate visibility but stops the moment you stop paying. Most NJ businesses benefit from both: PPC for immediate leads while SEO builds sustainable traffic. We help with both and can show you the ROI comparison for your specific market.",
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

export default function NJSEOPage() {
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
                  <MapPin className="w-4 h-4" />
                  <span>New Jersey</span>
                </div>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.1] mb-6">
                  NJ SEO Company That Gets{" "}
                  <span className="text-[#00D4FF]">Real Results</span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-4 max-w-[720px]">
                  BKND Development is a New Jersey SEO company built by
                  developers. We combine technical expertise with data-driven
                  strategy to help NJ businesses rank higher on Google, get more
                  traffic, and turn searchers into customers.
                </p>
                <p className="text-[16px] text-[#86868B] leading-relaxed mb-8 max-w-[720px]">
                  Based in Cranford, NJ, we serve businesses across Union County,
                  Essex County, Bergen County, and throughout the state. Our
                  developer-first approach means we implement SEO changes
                  directly -- no waiting, no middlemen, faster results.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-8 py-4 rounded-lg hover:bg-[#00D4FF] transition-all duration-300 font-medium text-[17px]"
                  >
                    Get Your Free NJ SEO Audit
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/services/seo"
                    className="inline-flex items-center justify-center gap-2 border border-[#D2D2D7] text-[#1D1D1F] px-8 py-4 rounded-lg hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-300 font-medium text-[17px]"
                  >
                    View All SEO Services
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
                { number: "87/100", label: "Technical Health Score" },
                { number: "68+", label: "Keywords Ranked" },
                { number: "10+", label: "NJ Businesses Served" },
                { number: "0", label: "Black Hat Tactics Used" },
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

        {/* Why NJ Businesses Need SEO */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-[720px] mx-auto mb-16">
              <AnimateOnScroll>
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6 text-center">
                  Why New Jersey Businesses Need SEO in 2026
                </h2>
                <div className="text-[17px] text-[#86868B] leading-relaxed space-y-4">
                  <p>
                    New Jersey is the most densely populated state in the US with
                    over 9 million residents packed into 8,723 square miles. That
                    density means intense competition for every local search
                    query. When someone in Newark searches for a plumber, or a
                    Morristown resident looks for a dentist, the businesses that
                    appear on page one of Google get the calls.
                  </p>
                  <p>
                    The NJ market is unique. Searchers are commuters who use
                    mobile constantly, expect fast-loading sites, and make
                    decisions quickly. NJ consumers have high purchasing power
                    and are willing to pay for quality -- but only if they can
                    find you. That is where SEO comes in.
                  </p>
                  <p>
                    As an NJ SEO company, we understand the local search
                    landscape. We know which NJ directories matter for
                    citations, how NJ consumers search differently from national
                    audiences, and how to compete in the most competitive local
                    markets in the country.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
              {[
                {
                  icon: TrendingUp,
                  stat: "93%",
                  title: "of online experiences start with search",
                  description:
                    "If your NJ business is not on page one, your competitors are getting those customers instead.",
                },
                {
                  icon: Users,
                  stat: "46%",
                  title: "of Google searches are local",
                  description:
                    "Nearly half of all searches have local intent. NJ businesses that invest in local SEO capture this traffic.",
                },
                {
                  icon: Target,
                  stat: "28%",
                  title: "of local searches lead to a purchase",
                  description:
                    "Local searchers are buyers. When someone searches 'plumber near me' in NJ, they are ready to hire.",
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

        {/* SEO Services Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our NJ SEO Services
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                SEO Services for New Jersey Businesses
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From technical foundations to local dominance, our NJ SEO
                services cover every aspect of getting your business found
                online.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
              {seoServices.map((service, i) => (
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
                How We Rank NJ Businesses on Google
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-gray-400 text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                A proven five-step process that builds sustainable rankings for
                New Jersey businesses.
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
                What Sets Our NJ SEO Company Apart
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Most NJ SEO companies outsource their work overseas and send you
                cookie-cutter reports. We do the work ourselves and show you
                exactly what changed.
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

        {/* Industries We Serve */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="max-w-[720px] mx-auto text-center mb-12">
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6">
                  NJ Industries We Specialize In
                </h2>
                <p className="text-[17px] text-[#86868B] leading-relaxed">
                  We have experience optimizing websites for NJ businesses
                  across these industries. Each industry has unique search
                  patterns, and we tailor our strategy accordingly.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1000px] mx-auto">
              {industries.map((industry, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.05}>
                  <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200/80">
                    <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                    <span className="text-[15px] text-[#1D1D1F] font-medium">
                      {industry}
                    </span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={0.6}>
              <p className="text-center text-[#86868B] text-[15px] mt-8">
                Do not see your industry? We work with NJ businesses of all
                types.{" "}
                <Link
                  href="/contact"
                  className="text-[#00D4FF] hover:underline"
                >
                  Contact us
                </Link>{" "}
                to discuss your specific needs.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* NJ Service Areas */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="max-w-[720px] mx-auto text-center mb-16">
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6">
                  SEO Services Across New Jersey
                </h2>
                <p className="text-[17px] text-[#86868B] leading-relaxed">
                  Based in Cranford, NJ, we provide SEO services to businesses
                  throughout Central and Northern New Jersey. Here are the
                  counties and cities we serve most frequently.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
              {njCounties.map((county, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.1}>
                  <div className="bg-[#F5F5F7] rounded-2xl p-6">
                    <h3 className="text-[18px] font-semibold text-[#1D1D1F] mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#00D4FF]" />
                      {county.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {county.cities.map((city) => (
                        <span
                          key={city}
                          className="text-[13px] text-[#86868B] bg-white px-3 py-1 rounded-full border border-gray-200/80"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={0.7}>
              <div className="max-w-[720px] mx-auto mt-12">
                <p className="text-[17px] text-[#86868B] leading-relaxed text-center">
                  We also serve businesses in Somerset County, Passaic County,
                  Monmouth County, Ocean County, and across South Jersey. SEO
                  strategy is customized for your specific service area -- whether
                  you serve one town or the entire state.
                </p>
              </div>
            </AnimateOnScroll>
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
                NJ SEO Questions Answered
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Common questions from New Jersey business owners about SEO,
                answered honestly.
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
                  Ready to Rank in NJ?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Get your NJ business to
                  <br />
                  <span className="text-[#00D4FF]">page one of Google.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Free SEO audit for New Jersey businesses. We will show you
                  exactly what is holding you back and how to fix it.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Get Your Free NJ SEO Audit
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
