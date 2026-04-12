"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Image from "next/image";
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

const services = [
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
    title: "AI-Powered Content",
    description:
      "Keyword research, content gap analysis, topic clusters, and editorial planning. AI-assisted content that ranks and converts NJ searchers into customers.",
  },
  {
    icon: BarChart3,
    title: "Link Building",
    description:
      "White-hat link building through NJ business directories, local partnerships, digital PR, and content that earns links naturally.",
  },
  {
    icon: Bot,
    title: "AI Search Optimization",
    description:
      "Generative Engine Optimization for ChatGPT, Gemini, and AI Overviews. Your NJ business needs to appear in AI search results, not just traditional Google.",
  },
];

const differentiators = [
  {
    icon: Code,
    title: "One Person, Full Execution",
    description:
      "No account managers. No handoffs. Strategy and implementation by the same person — powered by AI tools that multiply output.",
  },
  {
    icon: Bot,
    title: "AI-Powered Everything",
    description:
      "We use AI tools that most NJ agencies do not have access to. Faster research, deeper analysis, and optimization at scale.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "No black box marketing. You see every change, every keyword targeted, and every result. Monthly reports with real numbers.",
  },
  {
    icon: Zap,
    title: "Speed to Results",
    description:
      "Because we handle everything directly in code, changes go live the same day. No waiting on dev teams or project managers.",
  },
];

const njCounties = [
  {
    name: "Union County",
    cities: ["Elizabeth", "Cranford", "Westfield", "Scotch Plains", "Summit", "Linden", "Rahway", "Roselle", "Clark", "Union Township"],
  },
  {
    name: "Essex County",
    cities: ["Newark", "Montclair", "Livingston", "West Orange", "Bloomfield", "Nutley", "Maplewood", "South Orange", "Millburn", "Cedar Grove"],
  },
  {
    name: "Middlesex County",
    cities: ["New Brunswick", "Edison", "Woodbridge", "Perth Amboy", "Piscataway", "East Brunswick", "Old Bridge", "South Brunswick", "Metuchen", "Highland Park"],
  },
  {
    name: "Bergen County",
    cities: ["Hackensack", "Paramus", "Fort Lee", "Englewood", "Teaneck", "Fair Lawn", "Ridgewood", "Garfield", "Bergenfield", "Lodi"],
  },
  {
    name: "Morris County",
    cities: ["Morristown", "Parsippany", "Dover", "Denville", "Rockaway", "Madison", "Chatham", "Randolph", "Mount Olive", "Boonton"],
  },
  {
    name: "Hudson County",
    cities: ["Jersey City", "Hoboken", "Bayonne", "North Bergen", "West New York", "Union City", "Secaucus", "Kearny", "Harrison", "Guttenberg"],
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
      "SEO costs in New Jersey typically range from $1,500 to $5,000 per month depending on the scope, competition level, and number of target keywords. Local SEO for a single-location NJ business starts around $1,500/month, while multi-location or competitive statewide campaigns may require $3,000-$5,000/month.",
  },
  {
    question: "How long does it take to rank on Google in NJ?",
    answer:
      "Most NJ businesses see measurable ranking improvements within 3-4 months and significant results by 6-8 months. The timeline depends on your current site health, competition level for your target keywords, and how aggressively we can build authority. Local SEO improvements like Google Maps rankings tend to happen faster.",
  },
  {
    question: "What makes BKND different from other NJ marketing companies?",
    answer:
      "We are one person with AI and custom software doing what normally takes a 15-person agency. We implement changes directly in code, use AI tools for research and optimization, and move faster because there are no handoffs or bottlenecks. Our clients see faster results because we move faster.",
  },
  {
    question: "Do you work with small businesses in NJ?",
    answer:
      "Yes. Most of our NJ clients are small to mid-size businesses — contractors, professional services firms, healthcare practices, and local service companies. We specialize in helping NJ businesses that depend on local customers finding them through Google Search and Google Maps.",
  },
  {
    question: "What NJ areas do you serve?",
    answer:
      "We serve businesses throughout New Jersey with a focus on Central and Northern NJ including Union County, Essex County, Middlesex County, Bergen County, Morris County, Hudson County, Somerset County, and Passaic County. Our office is in Elizabeth, NJ, but we work with clients across the entire state.",
  },
  {
    question: "Can you help my NJ business show up on Google Maps?",
    answer:
      "Absolutely. Google Maps and the local 3-pack are where most NJ customers start when searching for local services. We optimize your Google Business Profile, build consistent local citations, manage reviews, and create geo-targeted content that helps you rank in the map results for your service area.",
  },
  {
    question: "Do you guarantee first page Google rankings?",
    answer:
      "No legitimate marketing company can guarantee specific Google rankings. What we guarantee is transparent work, measurable progress, and adherence to Google best practices that build sustainable rankings over time.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200/80">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex items-center justify-between text-left">
        <span className="text-lg font-medium text-[#1D1D1F] pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#86868B] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] pb-6" : "max-h-0"}`}>
        <p className="text-[#86868B] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function NJMarketingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
          <div className="container-sg">
            <div className="max-w-[900px]">
              <AnimateOnScroll>
                <div className="flex items-center gap-2 text-[#00D4FF] text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>New Jersey</span>
                </div>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.1] mb-6">
                  AI-Powered Marketing for{" "}
                  <span className="text-[#00D4FF]">NJ Businesses</span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-4 max-w-[720px]">
                  BKND Development is a New Jersey marketing company powered by
                  AI and custom software. We combine technical expertise with
                  data-driven strategy to help NJ businesses rank higher, get
                  more traffic, and turn searchers into customers.
                </p>
                <p className="text-[16px] text-[#86868B] leading-relaxed mb-8 max-w-[720px]">
                  Based in Elizabeth, NJ, we serve businesses across Union
                  County, Essex County, Bergen County, and throughout the state.
                  One person with AI tools delivers what agencies need 15 people
                  to do.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-8 py-4 rounded-lg hover:bg-[#00D4FF] transition-all duration-300 font-medium text-[17px]">
                    Get Your Free NJ Marketing Audit
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/build/marketing" className="inline-flex items-center justify-center gap-2 border border-[#D2D2D7] text-[#1D1D1F] px-8 py-4 rounded-lg hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-300 font-medium text-[17px]">
                    View All Marketing Services
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative w-full h-[300px] lg:h-[420px] overflow-hidden">
          <Image src="/images/hero/nj-skyline.jpg" alt="New Jersey skyline at sunset" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1F] via-transparent to-transparent" />
        </section>

        {/* Stats */}
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
                    <div className="text-[32px] lg:text-[40px] font-bold text-[#00D4FF] mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm lg:text-base">{stat.label}</div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why NJ Businesses Need Marketing */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-[720px] mx-auto mb-16">
              <AnimateOnScroll>
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6 text-center">
                  Why New Jersey Businesses Need AI-Powered Marketing
                </h2>
                <div className="text-[17px] text-[#86868B] leading-relaxed space-y-4">
                  <p>New Jersey is the most densely populated state in the US with over 9 million residents. That density means intense competition for every local search query. When someone in Newark searches for a plumber, or a Morristown resident looks for a dentist, the businesses that appear on page one get the calls.</p>
                  <p>NJ consumers have high purchasing power and are willing to pay for quality — but only if they can find you. Traditional agencies charge for 15 people when the work can be done faster and better by one person with the right AI tools.</p>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
              {[
                { icon: TrendingUp, stat: "93%", title: "of online experiences start with search", description: "If your NJ business is not on page one, your competitors are getting those customers." },
                { icon: Users, stat: "46%", title: "of Google searches are local", description: "Nearly half of all searches have local intent. NJ businesses that invest in local SEO capture this traffic." },
                { icon: Target, stat: "28%", title: "of local searches lead to a purchase", description: "Local searchers are buyers. When someone searches 'plumber near me' in NJ, they are ready to hire." },
              ].map((item, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 h-full">
                    <item.icon className="w-8 h-8 text-[#00D4FF] mb-4" />
                    <div className="text-[32px] font-bold text-[#1D1D1F] mb-1">{item.stat}</div>
                    <h3 className="text-[17px] font-semibold text-[#1D1D1F] mb-3">{item.title}</h3>
                    <p className="text-[15px] text-[#86868B] leading-relaxed">{item.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">Our NJ Marketing Services</p>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-12 tracking-tight">Marketing Services for New Jersey</h2>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
              {services.map((service, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.05}>
                  <div className="bg-[#F5F5F7] rounded-2xl p-8 h-full border border-gray-200/80 transition-all duration-300 hover:border-[#00D4FF]/50">
                    <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">{service.title}</h3>
                    <p className="text-[#86868B] leading-relaxed">{service.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose BKND */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-12 tracking-tight">What Sets Us Apart in NJ</h2>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
              {differentiators.map((item, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.1}>
                  <div className="flex gap-6 p-8 bg-white rounded-2xl border border-gray-200/80">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[#00D4FF]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">{item.title}</h3>
                      <p className="text-[#86868B] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-12 tracking-tight">NJ Industries We Serve</h2>
            </AnimateOnScroll>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1000px] mx-auto">
              {industries.map((industry, i) => (
                <AnimateOnScroll key={i} delay={0.05 + i * 0.03}>
                  <div className="flex items-center gap-3 bg-[#F5F5F7] rounded-xl p-4 border border-gray-200/80">
                    <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                    <span className="text-[15px] text-[#1D1D1F] font-medium">{industry}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-12 tracking-tight">Marketing Services Across New Jersey</h2>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
              {njCounties.map((county, i) => (
                <AnimateOnScroll key={i} delay={0.1 + i * 0.05}>
                  <div className="bg-white rounded-2xl p-6">
                    <h3 className="text-[18px] font-semibold text-[#1D1D1F] mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#00D4FF]" />
                      {county.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {county.cities.map((city) => (
                        <span key={city} className="text-[13px] text-[#86868B] bg-[#F5F5F7] px-3 py-1 rounded-full border border-gray-200/80">{city}</span>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] text-center mb-12 tracking-tight">NJ Marketing Questions Answered</h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div className="max-w-2xl mx-auto bg-[#F5F5F7] rounded-2xl p-8 border border-gray-200/80">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1D1D1F] py-24 lg:py-32">
          <div className="container-sg">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll>
                <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
                  Get your NJ business to
                  <br />
                  <span className="text-[#00D4FF]">page one of Google.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
                  Free marketing audit for New Jersey businesses. We&apos;ll
                  show you exactly where the opportunities are.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300">
                  Get Your Free NJ Marketing Audit
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
