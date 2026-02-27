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
  Phone,
  Star,
  Smartphone,
  Target,
  Eye,
  Bot,
  Shield,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const plumbingServices = [
  {
    icon: Search,
    title: "Plumbing SEO",
    description:
      "Technical SEO, on-page optimization, and link building targeting high-intent plumbing keywords. We get your plumbing company ranking for the searches that turn into booked jobs.",
  },
  {
    icon: MapPin,
    title: "Google Maps & Local Pack",
    description:
      "Google Business Profile optimization, local citations, and geo-targeted content to dominate the local 3-pack when homeowners search for plumbers in your service area.",
  },
  {
    icon: Zap,
    title: "Emergency Service Content",
    description:
      "Content strategy targeting emergency plumbing keywords — burst pipe, no hot water, sewer backup. We capture homeowners in crisis who need a plumber right now.",
  },
  {
    icon: Target,
    title: "Paid Search for Plumbers",
    description:
      "Google Ads management with emergency keyword targeting, call-only campaigns, and Local Service Ads setup. Immediate calls while your organic rankings build.",
  },
  {
    icon: Star,
    title: "Review Generation & Management",
    description:
      "Automated review request systems, review response templates, and reputation monitoring. Build the 4.8+ star rating that makes homeowners choose you over competitors.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Website Optimization",
    description:
      "86% of emergency plumbing searches happen on mobile. We optimize your site for speed, click-to-call, and instant booking so you never lose a mobile lead.",
  },
];

const approach = [
  {
    step: "01",
    title: "Plumbing Market Audit",
    description:
      "We analyze your local market, audit your website and Google Business Profile, and identify every gap between you and the plumbers ranking above you.",
  },
  {
    step: "02",
    title: "Emergency & Service Keywords",
    description:
      "We map out every keyword your customers use — from emergency searches to routine maintenance — and prioritize by call volume and commercial value.",
  },
  {
    step: "03",
    title: "Technical SEO Setup",
    description:
      "Fix site speed, mobile issues, schema markup, and indexation. We implement changes directly because we are developers, not just consultants handing off a PDF.",
  },
  {
    step: "04",
    title: "Content & Local Authority",
    description:
      "Service pages for every offering, location pages for every city, emergency content, and local link building that establishes your plumbing company as the authority.",
  },
  {
    step: "05",
    title: "Track Calls & Grow",
    description:
      "Call tracking on every channel, monthly reporting with real numbers, and continuous optimization. You see exactly how many jobs come from your marketing investment.",
  },
];

const differentiators = [
  {
    icon: Wrench,
    title: "We Understand Emergency Search Intent",
    description:
      "Plumbing is not like other industries. When someone searches for a plumber at 2 AM with a burst pipe, they are not comparison shopping. We optimize for urgency, not just rankings.",
  },
  {
    icon: Code,
    title: "Developer-First Implementation",
    description:
      "We build websites and implement SEO changes directly. No waiting on a dev team. No miscommunication. Your plumbing site changes go live the same day we identify them.",
  },
  {
    icon: Bot,
    title: "AI-Enhanced Local Strategy",
    description:
      "We use AI tools that most marketing agencies do not have access to. Faster keyword research, deeper competitor analysis, and content optimization at scale for your plumbing market.",
  },
  {
    icon: Eye,
    title: "Full ROI Transparency",
    description:
      "Every call tracked, every lead attributed, every dollar accounted for. You see exactly which marketing channels are generating plumbing jobs and what each job costs to acquire.",
  },
];

const faqs = [
  {
    question: "How much does plumbing marketing cost?",
    answer:
      "Plumbing marketing typically costs between $1,500 and $5,000 per month depending on your market size, competition level, and how many services you want to target. Local SEO for a single-location plumbing company starts around $1,500/month. Multi-location or highly competitive metro areas may require $3,000-$5,000/month. We offer flexible month-to-month agreements because our results speak for themselves.",
  },
  {
    question: "How long does it take for plumber SEO to work?",
    answer:
      "Most plumbing companies see measurable ranking improvements within 3-4 months and significant call volume increases by 6-8 months. Google Maps and local 3-pack rankings tend to improve faster than organic rankings for competitive keywords. Emergency plumbing keywords often show results sooner because the search intent is so strong and conversion rates are high.",
  },
  {
    question: "How do I get my plumbing company to show up on Google Maps?",
    answer:
      "Getting your plumbing company into the Google Maps 3-pack requires optimizing your Google Business Profile with accurate categories and services, building consistent citations across plumbing directories, generating authentic customer reviews, and creating geo-targeted content for each service area. We handle all of this as part of our plumbing local SEO service.",
  },
  {
    question: "What are the best keywords for plumbers?",
    answer:
      "The highest-value plumbing keywords combine service type with location and urgency. Emergency plumber near me, 24 hour plumber, plumber in [city], water heater repair, drain cleaning, and sewer line repair are consistently high-volume and high-intent. We research the specific keyword landscape in your market to find the best opportunities based on search volume, competition, and commercial value.",
  },
  {
    question: "How important are reviews for plumbing companies?",
    answer:
      "Reviews are critical for plumbing companies. They directly influence your Google Maps ranking, your click-through rate in search results, and whether a homeowner calls you or your competitor. Plumbing companies with 50+ reviews and a 4.5+ star rating consistently outrank competitors with fewer reviews. We implement review generation systems that help you collect reviews after every job.",
  },
  {
    question: "What content should a plumbing website have?",
    answer:
      "A plumbing website needs individual pages for each service you offer (drain cleaning, water heater repair, sewer line replacement, etc.), location pages for each city you serve, an emergency services page optimized for urgent keywords, a blog with helpful plumbing tips, and trust signals like licenses, insurance, and customer testimonials. Each page should target specific keywords your customers search for.",
  },
  {
    question: "Should plumbers invest in PPC or SEO?",
    answer:
      "Both, but they serve different purposes. PPC (Google Ads) gets you immediate calls — especially for emergency plumbing keywords where the cost per click is $35 or more. SEO builds long-term visibility so you get free organic calls month after month. Most plumbing companies benefit from running PPC while SEO builds momentum, then gradually shifting budget toward organic as rankings improve.",
  },
  {
    question: "How do I track phone calls from my plumbing marketing?",
    answer:
      "We implement call tracking that assigns unique phone numbers to each marketing channel — Google organic, Google Maps, Google Ads, and your website. This tells you exactly how many calls come from each source, what keywords drove those calls, and your cost per lead. You see a clear dashboard showing which marketing dollars are generating actual plumbing jobs.",
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

export default function PlumbingMarketingPage() {
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
                  <Wrench className="w-4 h-4" />
                  <span>Plumbing Industry</span>
                </div>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.1] mb-6">
                  Plumbing Marketing That Keeps Your{" "}
                  <span className="text-[#00D4FF]">Phones Ringing</span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-4 max-w-[720px]">
                  Homeowners searching for a plumber have a problem right now.
                  They are not browsing -- they are calling the first company
                  they find on Google. If that is not you, it is your
                  competitor.
                </p>
                <p className="text-[16px] text-[#86868B] leading-relaxed mb-8 max-w-[720px]">
                  BKND Development is a plumbing marketing agency built by
                  developers. We combine SEO, Google Maps optimization, emergency
                  keyword targeting, and paid search to make sure your plumbing
                  company is the one homeowners call first.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-8 py-4 rounded-lg hover:bg-[#00D4FF] transition-all duration-300 font-medium text-[17px]"
                  >
                    Get Your Free Plumbing Marketing Audit
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
                { number: "1,900+", label: "Monthly Plumbing Searches" },
                { number: "$35+", label: "Average Cost Per Click" },
                { number: "20/100", label: "Keyword Difficulty" },
                { number: "86%", label: "Emergency Searches Are Mobile" },
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

        {/* Why Plumbing Companies Need Digital Marketing */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-[720px] mx-auto mb-16">
              <AnimateOnScroll>
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6 text-center">
                  Why Plumbing Companies Need Digital Marketing
                </h2>
                <div className="text-[17px] text-[#86868B] leading-relaxed space-y-4">
                  <p>
                    Plumbing is one of the most search-driven industries in
                    home services. When a pipe bursts at midnight or a water
                    heater fails on a Sunday morning, homeowners grab their
                    phone and search for a plumber. That emergency search
                    behavior means the plumbing companies on page one of Google
                    get the calls — and everyone else gets nothing.
                  </p>
                  <p>
                    But plumbing marketing is not just about emergencies. The
                    real money is in repeat customers and referrals. A homeowner
                    who finds you for an emergency drain cleaning becomes a
                    customer for water heater replacements, remodeling plumbing,
                    and annual maintenance. Your marketing needs to capture both
                    the urgent searches and the planned service searches.
                  </p>
                  <p>
                    The problem is competition. Every plumbing company in your
                    area is fighting for the same Google real estate. The
                    companies that invest in SEO, Google Maps optimization, and
                    strategic content are the ones that show up first — and in
                    plumbing, showing up first is the difference between a
                    $5,000 job and a missed call.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
              {[
                {
                  icon: Search,
                  stat: "92%",
                  title: "choose a plumber from page one",
                  description:
                    "Homeowners with a plumbing emergency do not scroll to page two. If your plumbing company is not in the top results, you are invisible.",
                },
                {
                  icon: Phone,
                  stat: "$350",
                  title: "average plumbing service call value",
                  description:
                    "Every missed call is a $350+ job walking to your competitor. Emergency calls for sewer or water heater work can exceed $2,000.",
                },
                {
                  icon: BarChart3,
                  stat: "5x",
                  title: "lifetime customer value with retention",
                  description:
                    "A homeowner who trusts your plumbing company comes back for every plumbing need. One emergency call can become $10,000+ in lifetime value.",
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

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Plumbing Marketing Services
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Marketing Services Built for Plumbers
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From SEO and Google Maps to paid search and review management,
                everything a plumbing company needs to dominate local search.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
              {plumbingServices.map((service, i) => (
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

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Process
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-4 tracking-tight">
                How We Get Plumbers to Page One
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-gray-400 text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                A proven five-step process that builds sustainable rankings and
                consistent call volume for plumbing companies.
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

        {/* Differentiators */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Why Choose Us
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                What Sets Our Plumbing Marketing Apart
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Most marketing agencies treat plumbing like every other
                industry. We understand that emergency intent, seasonal demand,
                and trust signals make plumbing marketing unique.
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
                Plumbing Marketing Questions Answered
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Common questions from plumbing company owners about digital
                marketing, answered honestly.
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
                  Ready to Grow Your Plumbing Business?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Be the plumber homeowners
                  <br />
                  <span className="text-[#00D4FF]">call first.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Free plumbing marketing audit. We will show you exactly where
                  you are losing calls and how to fix it.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Get Your Free Plumbing Marketing Audit
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
