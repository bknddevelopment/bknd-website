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
  CheckCircle2,
  TrendingUp,
  Users,
  Target,
  Eye,
  Bot,
  Star,
  Palette,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const dentalServices = [
  {
    icon: Search,
    title: "Dental SEO",
    description:
      "Technical SEO, keyword targeting, and content optimization for dental search terms. We rank your practice for the procedures patients actually search for -- implants, veneers, emergency dental, and more.",
  },
  {
    icon: Globe,
    title: "Google Business Profile",
    description:
      "Full GBP optimization including categories, services, posts, photos, and Q&A management. We get your practice into the Google Maps 3-pack where 42% of patients click first.",
  },
  {
    icon: Star,
    title: "Patient Review Management",
    description:
      "Review generation workflows, monitoring, and professional response drafting. Build the online reputation that 88% of patients check before booking an appointment.",
  },
  {
    icon: FileText,
    title: "Dental Content Marketing",
    description:
      "Patient-focused blog content, service page optimization, and educational resources. We create content that answers patient questions and ranks for long-tail dental keywords.",
  },
  {
    icon: BarChart3,
    title: "Paid Patient Acquisition",
    description:
      "Google Ads campaigns targeting high-intent dental keywords like 'dentist near me' and 'emergency dentist.' Strategic bidding to keep cost per patient acquisition profitable.",
  },
  {
    icon: Palette,
    title: "Website Design & UX",
    description:
      "Conversion-optimized dental websites built for speed, mobile-first design, and patient experience. Online booking integration, HIPAA-compliant forms, and ADA accessibility.",
  },
];

const process = [
  {
    step: "01",
    title: "Practice Audit",
    description:
      "We audit your website, Google Business Profile, citations, reviews, and competitors. You get a clear picture of where your practice stands and what is holding you back.",
  },
  {
    step: "02",
    title: "Patient Keyword Research",
    description:
      "We identify the exact terms patients in your area use to find dental services. Not just 'dentist near me' but high-intent keywords for every procedure you offer.",
  },
  {
    step: "03",
    title: "Technical & Local SEO",
    description:
      "Fix site speed, schema markup, mobile issues, and GBP optimization. We build the technical foundation that most dental marketing agencies cannot implement.",
  },
  {
    step: "04",
    title: "Content & Reputation",
    description:
      "Create service pages, blog content, and patient resources that rank. Launch review generation campaigns that build the social proof patients need to book.",
  },
  {
    step: "05",
    title: "Measure & Grow",
    description:
      "Monthly reports tracking new patient calls, form submissions, keyword rankings, and ROI. We show you exactly how many patients your marketing investment generated.",
  },
];

const differentiators = [
  {
    icon: Users,
    title: "We Understand Dental Patient Behavior",
    description:
      "Dental patients search differently than other consumers. They compare reviews obsessively, check insurance acceptance, and often search in pain. We build strategies around how real patients find and choose dentists.",
  },
  {
    icon: Code,
    title: "Developer-First Implementation",
    description:
      "We build websites and implement SEO changes directly. No waiting on a dev team. No miscommunication between your marketing agency and your web developer. Changes go live the same day.",
  },
  {
    icon: Bot,
    title: "AI-Enhanced Analysis",
    description:
      "We use AI tools that most dental marketing agencies do not have access to. Faster keyword research, deeper competitive analysis, and content optimization that targets how patients actually search.",
  },
  {
    icon: Eye,
    title: "HIPAA-Aware Marketing",
    description:
      "We understand the compliance requirements of marketing a healthcare practice. No patient data in tracking pixels, HIPAA-compliant contact forms, and marketing strategies that protect your practice.",
  },
];

const faqs = [
  {
    question: "How much does dental marketing cost?",
    answer:
      "Dental marketing costs typically range from $1,500 to $5,000 per month depending on competition in your area, the number of services you want to rank for, and whether you need content creation and reputation management. Single-location dental practices usually start around $1,500-$2,500/month for SEO and GBP optimization. Multi-location practices or those in competitive metro areas may need $3,000-$5,000/month.",
  },
  {
    question: "How long does it take for dental SEO to show results?",
    answer:
      "Most dental practices see measurable improvements in Google Maps visibility within 2-3 months and significant organic ranking improvements within 4-6 months. The timeline depends on your current website health, local competition, and how many dental keywords you are targeting. Google Business Profile optimizations tend to show results faster than organic SEO.",
  },
  {
    question: "How do I get my dental practice to show up on Google Maps?",
    answer:
      "Ranking on Google Maps requires a fully optimized Google Business Profile with accurate categories, complete service lists, consistent NAP citations across the web, a steady stream of patient reviews, and geo-targeted content on your website. We handle all of this as part of our dental marketing service.",
  },
  {
    question: "How important are patient reviews for dental SEO?",
    answer:
      "Patient reviews are one of the top ranking factors for local dental searches. 88% of consumers trust online reviews as much as personal recommendations. Google uses review quantity, quality, recency, and your responses as ranking signals. A consistent review generation strategy is essential for any dental practice serious about showing up in local search.",
  },
  {
    question: "What kind of content should a dental practice publish?",
    answer:
      "Dental practices should publish service-specific pages for every procedure offered, educational blog content answering common patient questions, location-specific pages for each service area, and before-and-after case studies. This content targets long-tail dental keywords and builds topical authority that Google rewards with higher rankings.",
  },
  {
    question: "Should dentists invest in PPC or SEO?",
    answer:
      "Both have a place in dental marketing. PPC (Google Ads) delivers immediate visibility but costs $25+ per click for dental keywords and stops the moment you stop paying. SEO builds long-term organic visibility that generates free patient leads month after month. Most dental practices benefit from PPC for immediate patient acquisition while SEO builds sustainable traffic over time.",
  },
  {
    question: "How do you handle marketing for multi-location dental practices?",
    answer:
      "Multi-location dental practices need separate Google Business Profiles for each location, location-specific landing pages, unique content for each service area, and a citation strategy that keeps NAP data consistent across all locations. We build individual strategies for each location while maintaining brand consistency across the practice.",
  },
  {
    question: "How do you measure dental marketing ROI?",
    answer:
      "We track dental marketing ROI through new patient phone calls, appointment form submissions, Google Maps actions (calls, directions, website clicks), keyword rankings for target dental terms, organic traffic growth, and cost per patient acquisition. Monthly reports show exactly how many new patient leads your marketing investment generated.",
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

export default function DentalMarketingPage() {
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
                  <Target className="w-4 h-4" />
                  <span>Dental Marketing</span>
                </div>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.1] mb-6">
                  Dental Marketing That Fills Your{" "}
                  <span className="text-[#00D4FF]">Appointment Book</span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-4 max-w-[720px]">
                  Your dental practice needs a steady stream of new patients to
                  grow. We combine dental SEO, Google Business Profile
                  optimization, and reputation management to make sure patients
                  in your area find you first when they search for a dentist.
                </p>
                <p className="text-[16px] text-[#86868B] leading-relaxed mb-8 max-w-[720px]">
                  Most dental marketing agencies hand off a report and hope for
                  the best. We are developers who implement changes directly --
                  no middlemen, no delays, faster results for your practice.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-8 py-4 rounded-lg hover:bg-[#00D4FF] transition-all duration-300 font-medium text-[17px]"
                  >
                    Get Your Free Dental Marketing Audit
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
                { number: "4,000+", label: "Monthly Dental Searches" },
                { number: "$25+", label: "Average Cost Per Click" },
                { number: "21/100", label: "Keyword Difficulty" },
                { number: "72%", label: "Patients Search Online First" },
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

        {/* Why Dental Practices Need Digital Marketing */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-[720px] mx-auto mb-16">
              <AnimateOnScroll>
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6 text-center">
                  Why Dental Practices Need Digital Marketing in 2026
                </h2>
                <div className="text-[17px] text-[#86868B] leading-relaxed space-y-4">
                  <p>
                    The days of relying on insurance provider lists and word of
                    mouth to fill your dental chairs are over. Today, 72% of
                    patients start their search for a new dentist online. If your
                    practice does not show up on the first page of Google or in
                    the Google Maps 3-pack, you are invisible to the majority of
                    potential patients in your area.
                  </p>
                  <p>
                    Competition between dental practices is fierce. The average
                    US city has 6.7 dentists per 10,000 residents, and every one
                    of them is competing for the same patients searching
                    &quot;dentist near me.&quot; The practices that invest in SEO
                    and online reputation are the ones that consistently fill
                    their schedules.
                  </p>
                  <p>
                    Online reputation is no longer optional for dentists. 88% of
                    patients trust online reviews as much as personal
                    recommendations, and the average patient reads 7 reviews
                    before choosing a dentist. A strong digital presence with
                    consistent reviews, an optimized Google profile, and a fast
                    website is the foundation of modern patient acquisition.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
              {[
                {
                  icon: TrendingUp,
                  stat: "77%",
                  title: "of patients use search to find a dentist",
                  description:
                    "If your dental practice is not ranking on page one, your competitors are getting those new patient appointments instead.",
                },
                {
                  icon: Star,
                  stat: "88%",
                  title: "trust online reviews like personal referrals",
                  description:
                    "Patients check Google reviews before booking. A strong review profile is the single biggest trust signal for dental practices.",
                },
                {
                  icon: Target,
                  stat: "$653",
                  title: "average lifetime value of a new dental patient",
                  description:
                    "Every new patient that finds you through search represents significant long-term revenue through cleanings, procedures, and referrals.",
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

        {/* Dental Marketing Services */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Our Dental Marketing Services
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Everything Your Practice Needs to Grow Online
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From technical SEO to patient review management, our dental
                marketing services cover every aspect of getting your practice
                found and chosen by patients.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
              {dentalServices.map((service, i) => (
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
                How We Fill Your Appointment Book
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-gray-400 text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                A proven five-step process that turns online searches into
                booked dental appointments.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-[1200px] mx-auto">
              {process.map((item, i) => (
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

        {/* Why Choose BKND for Dental Marketing */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <AnimateOnScroll>
              <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase text-center mb-4">
                Why Choose Us
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                What Sets Our Dental Marketing Apart
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Most dental marketing companies outsource their work and send
                you generic reports. We do the work ourselves and show you
                exactly how many patients it generated.
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
                Dental Marketing Questions Answered
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Common questions from dentists and dental practice owners about
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
                  Ready to Grow Your Practice?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Fill your chairs with
                  <br />
                  <span className="text-[#00D4FF]">the right patients.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Free dental marketing audit for your practice. We will show
                  you exactly where patients are finding your competitors
                  instead of you.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Get Your Free Dental Marketing Audit
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
