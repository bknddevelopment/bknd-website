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
  Star,
  Utensils,
  MessageSquare,
  Share2,
  CalendarCheck,
  Eye,
  Bot,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const restaurantServices = [
  {
    icon: Search,
    title: "Restaurant SEO",
    description:
      "Rank for high-intent searches like 'best Italian restaurant near me' and 'sushi delivery downtown.' We target the keywords hungry diners actually type into Google.",
  },
  {
    icon: MapPin,
    title: "Google Maps & Local Listings",
    description:
      "Dominate the local 3-pack where 90% of diners make their decision. Google Business Profile optimization, local citations on Yelp, TripAdvisor, and OpenTable.",
  },
  {
    icon: FileText,
    title: "Menu & Content Optimization",
    description:
      "Convert PDF menus to crawlable HTML with schema markup so Google can index your dishes. Create content that ranks for cuisine-specific and neighborhood searches.",
  },
  {
    icon: Share2,
    title: "Social Media Integration",
    description:
      "Connect your social presence with your SEO strategy. Ensure Instagram, Facebook, and TikTok content reinforces your search visibility and drives traffic to your site.",
  },
  {
    icon: Star,
    title: "Review & Reputation Management",
    description:
      "Monitor reviews across Google, Yelp, and TripAdvisor. Build a systematic review generation process and respond professionally to turn feedback into social proof.",
  },
  {
    icon: CalendarCheck,
    title: "Online Ordering & Reservation Optimization",
    description:
      "Optimize your reservation and ordering systems for search. Ensure Google surfaces your booking options directly in search results and Maps listings.",
  },
];

const approach = [
  {
    step: "01",
    title: "Restaurant Market Audit",
    description:
      "We analyze your current online presence, local competitors, review profiles, and search visibility. You get a clear picture of where you stand and where the opportunities are.",
  },
  {
    step: "02",
    title: "Local Keyword Strategy",
    description:
      "We identify the exact searches diners use to find restaurants like yours -- cuisine type, neighborhood, dining occasion, delivery, and reservation searches.",
  },
  {
    step: "03",
    title: "Technical & Menu SEO",
    description:
      "Fix site speed, mobile experience, and schema markup. Convert menus to crawlable formats. Ensure Google can read every dish, price, and description on your site.",
  },
  {
    step: "04",
    title: "Content & Reputation Building",
    description:
      "Create location-optimized content, build local citations, launch a review generation system, and establish your restaurant as the authority in your area.",
  },
  {
    step: "05",
    title: "Track Covers & Scale",
    description:
      "Monthly reports showing search visibility, Google Maps actions, reservation clicks, direction requests, and review trends. You see exactly how marketing drives covers.",
  },
];

const differentiators = [
  {
    icon: Utensils,
    title: "We Understand Hospitality Search Patterns",
    description:
      "Restaurant searches are uniquely time-sensitive and location-driven. We know the difference between a Friday night searcher and a Tuesday lunch browser, and optimize for both.",
  },
  {
    icon: Code,
    title: "Developer-First Implementation",
    description:
      "We build and implement changes directly -- no waiting on a dev team. Menu schema, site speed fixes, and technical SEO go live the same day, not weeks later.",
  },
  {
    icon: Bot,
    title: "AI-Enhanced Local Strategy",
    description:
      "We use AI tools to analyze competitor menus, track review sentiment at scale, identify trending cuisine searches, and optimize content faster than traditional agencies.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "No black box marketing. You see every change, every keyword, and every result. Monthly reports with real numbers tied to covers served, not vanity metrics.",
  },
];

const faqs = [
  {
    question: "How much does restaurant marketing cost?",
    answer:
      "Restaurant marketing costs typically range from $1,000 to $4,000 per month depending on your goals, competition, and number of locations. A single-location restaurant focused on local SEO and Google Maps starts around $1,000-$1,500/month, while multi-location restaurants or those in highly competitive markets may need $2,500-$4,000/month. We offer flexible month-to-month agreements because our results speak for themselves.",
  },
  {
    question: "How long does it take to see results from restaurant SEO?",
    answer:
      "Most restaurants see measurable improvements in Google Maps visibility within 4-6 weeks and significant organic ranking improvements within 3-4 months. Local SEO for restaurants tends to move faster than other industries because many competitors have poor online presence. Review management and Google Business Profile optimization often produce the fastest visible results.",
  },
  {
    question: "How do I get my restaurant to show up on Google Maps?",
    answer:
      "Getting your restaurant on Google Maps requires a fully optimized Google Business Profile with accurate hours, complete menu information, high-quality photos, consistent NAP (name, address, phone) across all directories, active review management, and local citations on platforms like Yelp, TripAdvisor, and OpenTable. We handle all of this as part of our restaurant marketing service.",
  },
  {
    question: "How important are online reviews for restaurants?",
    answer:
      "Online reviews are critical for restaurants. 94% of diners read online reviews before choosing a restaurant, and a one-star increase on Yelp can lead to a 5-9% increase in revenue. We help restaurants build a systematic review generation process, respond to all reviews professionally, and turn negative feedback into opportunities to demonstrate excellent customer service.",
  },
  {
    question: "What is menu SEO and why does it matter?",
    answer:
      "Menu SEO means optimizing your online menu so search engines can read and index your dishes, prices, and descriptions. Many restaurants use PDF menus or embed menus as images, which Google cannot read. We convert menus to crawlable HTML with proper schema markup so your dishes appear in search results when people search for specific cuisines or dishes in your area.",
  },
  {
    question: "Is social media or SEO more important for restaurants?",
    answer:
      "Both matter, but SEO delivers higher-intent traffic. Social media builds brand awareness and keeps you top of mind, but when someone searches 'best Italian restaurant near me' or 'sushi delivery downtown,' they are ready to eat now. SEO captures that high-intent demand. The best restaurant marketing strategy combines both: SEO for capturing ready-to-buy diners and social media for building community and brand loyalty.",
  },
  {
    question: "How do you handle marketing for multi-location restaurants?",
    answer:
      "Multi-location restaurants need location-specific landing pages, individual Google Business Profiles for each location, location-targeted content, and consistent NAP data across all directories for every location. We create a scalable system where each location has its own optimized presence while maintaining brand consistency. This prevents locations from competing against each other in search results.",
  },
  {
    question: "How do I measure ROI from restaurant marketing?",
    answer:
      "We track restaurant marketing ROI through multiple metrics: Google Business Profile actions (calls, direction requests, website clicks), online reservation and ordering conversions, organic traffic growth to your website, keyword rankings for high-intent dining searches, and review volume and sentiment trends. Monthly reports tie marketing activity directly to measurable business outcomes like covers served and revenue influenced.",
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

export default function RestaurantMarketingPage() {
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
                  <Utensils className="w-4 h-4" />
                  <span>Restaurant Marketing</span>
                </div>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.1] mb-6">
                  Restaurant Marketing That Fills{" "}
                  <span className="text-[#00D4FF]">Every Table</span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-4 max-w-[720px]">
                  Your restaurant competes with dozens of options in every
                  neighborhood. When a hungry diner searches Google for where to
                  eat tonight, you need to be the first name they see -- on the
                  map, in the reviews, and at the top of search results.
                </p>
                <p className="text-[16px] text-[#86868B] leading-relaxed mb-8 max-w-[720px]">
                  BKND Development is a restaurant marketing agency built by
                  developers. We combine technical SEO, Google Maps dominance,
                  review management, and content strategy to turn hungry
                  searchers into loyal regulars.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-8 py-4 rounded-lg hover:bg-[#00D4FF] transition-all duration-300 font-medium text-[17px]"
                  >
                    Get Your Free Restaurant Marketing Audit
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
                { number: "2,900+", label: "Monthly Restaurant Searches" },
                { number: "$8+", label: "Average Cost Per Click" },
                { number: "4/100", label: "Keyword Difficulty" },
                { number: "90%", label: "Diners Research Online First" },
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

        {/* Why Restaurants Need Digital Marketing */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-[720px] mx-auto mb-16">
              <AnimateOnScroll>
                <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.15] mb-6 text-center">
                  Why Restaurants Need Digital Marketing in 2026
                </h2>
                <div className="text-[17px] text-[#86868B] leading-relaxed space-y-4">
                  <p>
                    Dining is discovery-driven. Unlike plumbers or lawyers, diners
                    are not searching because they have a problem -- they are
                    searching because they want an experience. That means your
                    restaurant needs to appear at the exact moment someone is
                    deciding where to eat, and you need to look irresistible when
                    they find you.
                  </p>
                  <p>
                    Google Maps dominates restaurant discovery. When someone
                    searches &quot;restaurants near me,&quot; the map pack shows
                    three options above all organic results. If you are not in that
                    top three, you are invisible to the majority of diners who
                    never scroll past it. Your Google Business Profile is your
                    most valuable digital asset.
                  </p>
                  <p>
                    Review culture defines the restaurant industry. A single
                    one-star review can cost you thousands in lost revenue, while
                    a steady stream of five-star reviews builds the kind of social
                    proof that fills tables on a Tuesday night. Managing your
                    online reputation is not optional -- it is essential.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
              {[
                {
                  icon: TrendingUp,
                  stat: "75%",
                  title: "choose restaurants from search results",
                  description:
                    "Three out of four diners pick a restaurant based on what they find in Google Search and Maps. If you are not ranking, you are not on their shortlist.",
                },
                {
                  icon: Users,
                  stat: "94%",
                  title: "read restaurant reviews before dining",
                  description:
                    "Nearly every diner checks reviews before making a reservation. Your review profile is often the deciding factor between you and the competition.",
                },
                {
                  icon: Target,
                  stat: "$35+",
                  title: "average check drives lifetime value",
                  description:
                    "A single new customer is worth far more than one meal. With an average check of $35 and repeat visits, every new diner from search has significant lifetime value.",
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
                Our Restaurant Marketing Services
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-[#1D1D1F] text-center mb-4 tracking-tight">
                Marketing Services Built for Restaurants
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                From Google Maps dominance to review management, every service
                is designed to put more diners in your seats.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
              {restaurantServices.map((service, i) => (
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
                How We Fill Restaurant Tables Through Search
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-gray-400 text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                A proven five-step process that turns online searches into
                seated diners.
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
                What Sets Our Restaurant Marketing Apart
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Most agencies treat restaurants like any other local business.
                We understand that hospitality search behavior is fundamentally
                different -- and we optimize for it.
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
                Restaurant Marketing Questions Answered
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-[#86868B] text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
                Common questions from restaurant owners about digital marketing,
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
                  Ready to Fill Every Table?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Turn hungry searchers into
                  <br />
                  <span className="text-[#00D4FF]">loyal regulars.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Free restaurant marketing audit. We will show you exactly
                  where diners are finding your competitors instead of you.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Get Your Free Restaurant Marketing Audit
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
