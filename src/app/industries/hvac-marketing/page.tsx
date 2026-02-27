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
  TrendingUp,
  Users,
  Target,
  Star,
  Thermometer,
  Megaphone,
  Shield,
  Calendar,
  Bot,
  Eye,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const hvacServices = [
  {
    icon: Search,
    title: "Local SEO for HVAC",
    description:
      "Rank for high-intent searches like 'AC repair near me' and 'furnace installation [city]'. We target the keywords homeowners use when they need HVAC service right now.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description:
      "Full GBP optimization with the right HVAC categories, services, photos, and review strategy. Show up in the local 3-pack when homeowners search for HVAC companies.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Seasonal content, maintenance guides, and service pages that capture homeowners at every stage -- from researching new systems to emergency AC breakdowns at 2am.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    description:
      "Google Ads and Local Services Ads targeting emergency and seasonal HVAC searches. We manage bids around peak demand so you capture leads when homeowners are ready to buy.",
  },
  {
    icon: Star,
    title: "Review Management",
    description:
      "Systematic review generation that builds your reputation and improves local rankings. We help you earn more 5-star reviews and respond professionally to all feedback.",
  },
  {
    icon: Globe,
    title: "Website Optimization",
    description:
      "Fast, mobile-first HVAC websites that convert visitors into calls. Speed optimization, clear CTAs, and service pages structured for both Google and homeowners.",
  },
];

const approach = [
  {
    step: "01",
    title: "HVAC Market Audit",
    description:
      "We analyze your current online presence, local competition, keyword opportunities, and where you are losing leads to competitors. You get a clear picture of your HVAC market position.",
  },
  {
    step: "02",
    title: "Keyword Strategy",
    description:
      "We identify the highest-value HVAC keywords in your service area -- emergency searches, seasonal terms, and service-specific queries that drive the most valuable jobs.",
  },
  {
    step: "03",
    title: "Technical Foundation",
    description:
      "Site speed, mobile optimization, schema markup, and crawlability fixes. We build the technical foundation that most HVAC marketing agencies skip because they cannot code.",
  },
  {
    step: "04",
    title: "Content & Authority",
    description:
      "Service pages, location pages, seasonal content, and link building that establishes your HVAC company as the authority in your market. Content that ranks and converts.",
  },
  {
    step: "05",
    title: "Track & Scale",
    description:
      "Monthly reporting with lead tracking, keyword rankings, and ROI by channel. We scale what works and adjust strategy based on seasonal demand patterns and results.",
  },
];

const differentiators = [
  {
    icon: Thermometer,
    title: "We Understand HVAC Seasonality",
    description:
      "We build marketing calendars around HVAC demand cycles. AC campaigns ramp before summer, heating before winter, and maintenance content fills the shoulder seasons so you never have dead months.",
  },
  {
    icon: Code,
    title: "Developer-First Implementation",
    description:
      "We build and implement changes directly -- no waiting on a dev team, no miscommunication. SEO fixes, landing pages, and technical optimizations go live the same day.",
  },
  {
    icon: Bot,
    title: "AI-Enhanced Analysis",
    description:
      "We use AI tools for deeper keyword research, competitive analysis, and content optimization that most HVAC marketing agencies do not have access to. Better data means better results.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "No black box marketing. You see every keyword we target, every change we make, and exactly where every lead comes from. Monthly reports with real numbers, not vanity metrics.",
  },
];

const faqs = [
  {
    question: "How much does HVAC marketing cost?",
    answer:
      "HVAC marketing typically costs between $1,500 and $5,000 per month depending on your market size, competition level, and service mix. Local SEO for a single-location HVAC company starts around $1,500/month, while comprehensive campaigns including paid ads and content marketing may require $3,000-$5,000/month. We offer flexible month-to-month agreements because our results speak for themselves.",
  },
  {
    question: "How long does it take to see results from HVAC marketing?",
    answer:
      "Most HVAC companies see measurable improvements within 3-4 months for SEO and immediate results from paid advertising. Google Business Profile optimizations often show results within 4-6 weeks. The full impact of a comprehensive HVAC marketing strategy typically materializes by 6-8 months, with compounding returns after that.",
  },
  {
    question: "How do you handle seasonal HVAC marketing?",
    answer:
      "We build seasonal strategies that ramp up before peak demand periods. AC content and ads intensify in spring before summer hits. Heating campaigns launch in early fall. During shoulder seasons, we focus on maintenance, indoor air quality, and system replacement content to keep leads flowing year-round instead of leaving you with dead months.",
  },
  {
    question: "How do I get my HVAC company to show up on Google Maps?",
    answer:
      "Google Maps rankings for HVAC companies depend on three factors: a fully optimized Google Business Profile, consistent citations across online directories, and strong reviews. We handle all three -- optimizing your GBP with the right categories and services, building citations on HVAC-relevant directories, and implementing a review generation strategy that builds social proof.",
  },
  {
    question: "How important are reviews for HVAC marketing?",
    answer:
      "Reviews are critical for HVAC companies. 93% of homeowners read reviews before hiring a contractor, and Google uses review quantity, quality, and recency as ranking factors for local search. We help you build a systematic review generation process that consistently earns 5-star reviews and respond professionally to all feedback.",
  },
  {
    question: "What kind of content should HVAC companies publish?",
    answer:
      "HVAC companies should publish service pages for every service they offer, location pages for each service area, seasonal maintenance guides, troubleshooting articles that capture emergency searches, and comparison content like heat pump vs furnace guides. This content captures searchers at every stage from research to emergency calls.",
  },
  {
    question: "Should my HVAC company invest in PPC or SEO?",
    answer:
      "Both, but for different reasons. PPC (Google Ads) delivers immediate leads, especially for emergency searches like AC repair. SEO builds long-term organic visibility that generates free leads once you rank. Most HVAC companies benefit from PPC for immediate ROI while SEO compounds over time. We help you allocate budget between both based on your goals and season.",
  },
  {
    question: "How do you track ROI on HVAC marketing?",
    answer:
      "We track every lead source -- phone calls, form submissions, and chat messages -- back to the specific marketing channel and keyword that generated it. Monthly reports show cost per lead by channel, which keywords drive the most valuable jobs, and your overall return on marketing investment. You always know exactly what your marketing dollars are producing.",
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

export default function HVACMarketingPage() {
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
                  <Thermometer className="w-4 h-4" />
                  <span>HVAC Marketing</span>
                </div>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.1] mb-6">
                  HVAC Marketing That Fills Your{" "}
                  <span className="text-[#00D4FF]">Service Calendar</span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-4 max-w-[720px]">
                  Most HVAC companies rely on word-of-mouth and hope the phone
                  rings. We build digital marketing systems that generate
                  consistent leads year-round -- through peak season, shoulder
                  months, and everything in between.
                </p>
                <p className="text-[16px] text-[#86868B] leading-relaxed mb-8 max-w-[720px]">
                  From local SEO and Google Business Profile optimization to
                  paid ads and content marketing, we handle the digital side so
                  you can focus on running your HVAC business. Developer-built.
                  Data-driven. Designed for HVAC.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-8 py-4 rounded-lg hover:bg-[#00D4FF] transition-all duration-300 font-medium text-[17px]"
                  >
                    Get Your Free HVAC Marketing Audit
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
                { number: "1,900+", label: "Monthly HVAC Searches" },
                { number: "$45+", label: "Average Cost Per Click" },
                { number: "4/100", label: "Keyword Difficulty" },
                { number: "78%", label: "Searches With Local Intent" },
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

        {/* Why HVAC Companies Need Digital Marketing */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-[720px] mx-auto mb-16">
              <AnimateOnScroll>
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6 text-center">
                  Why HVAC Companies Need Digital Marketing
                </h2>
                <div className="text-[17px] text-[#86868B] leading-relaxed space-y-4">
                  <p>
                    The HVAC industry is fiercely competitive. Homeowners do not
                    flip through phone books anymore -- they grab their phone and
                    search "AC repair near me" or "best HVAC company in [city]."
                    If your company does not show up in those results, your
                    competitors are getting those calls instead.
                  </p>
                  <p>
                    HVAC searches are some of the highest-intent queries on
                    Google. When someone searches for emergency AC repair in
                    July, they are not browsing -- they are sweating and ready to
                    hire right now. The average cost per click for HVAC keywords
                    exceeds $45, which tells you exactly how valuable these leads
                    are.
                  </p>
                  <p>
                    The HVAC companies that invest in digital marketing
                    consistently outperform those that rely on referrals alone.
                    SEO builds a sustainable pipeline of leads. Paid ads capture
                    emergency demand. A strong Google Business Profile puts you
                    in the map results. Together, they keep your trucks rolling
                    year-round.
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
                    "If your HVAC company is not on page one, homeowners are calling your competitors instead of you.",
                },
                {
                  icon: Users,
                  stat: "76%",
                  title: "of local searches lead to a visit within 24 hours",
                  description:
                    "HVAC searches have extreme local intent. Homeowners search, call, and book -- often within the same hour.",
                },
                {
                  icon: Target,
                  stat: "$8K+",
                  title: "average HVAC job value for system replacements",
                  description:
                    "A single new system installation can pay for months of marketing. The ROI on HVAC marketing is among the highest in home services.",
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

        {/* HVAC Marketing Services */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our HVAC Marketing Services
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Marketing Services Built for HVAC Companies
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From ranking on Google to generating reviews, every service is
                designed around how homeowners search for and choose HVAC
                companies.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
              {hvacServices.map((service, i) => (
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

        {/* Our Process */}
        <section className="py-16 lg:py-24 bg-[#1D1D1F]">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Process
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-4 tracking-tight">
                How We Market HVAC Companies
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-gray-400 text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                A proven five-step process that builds sustainable lead
                generation for HVAC companies.
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

        {/* Why Choose BKND for HVAC Marketing */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Why Choose Us
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                What Sets Our HVAC Marketing Apart
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Most marketing agencies treat HVAC like every other industry. We
                build strategies around how homeowners actually search for and
                choose HVAC companies.
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
                HVAC Marketing Questions Answered
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Common questions from HVAC company owners about digital
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
                  Ready to Grow Your HVAC Business?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Stop losing HVAC leads
                  <br />
                  <span className="text-[#00D4FF]">to your competitors.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Free HVAC marketing audit. We will show you exactly where you
                  are losing leads and how to capture them.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Get Your Free HVAC Marketing Audit
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
