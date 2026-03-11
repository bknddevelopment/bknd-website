"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  BarChart3,
  Mail,
  Activity,
  Kanban,
  UsersRound,
  FolderKanban,
  MessageSquare,
  FileSignature,
  Receipt,
  Check,
  X,
  Minus,
} from "lucide-react";

const crmFeatures = [
  {
    icon: Users,
    name: "Contact Management",
    description:
      "Organize every lead, client, and vendor in one place. Custom fields, tags, and smart filters so you find the right person in seconds.",
  },
  {
    icon: Kanban,
    name: "Deal Pipeline",
    description:
      "Visual drag-and-drop pipeline that shows every deal at a glance. Know exactly where your revenue stands without running a report.",
  },
  {
    icon: Activity,
    name: "Activity Tracking",
    description:
      "Every call, email, meeting, and note automatically logged against the right contact. Never lose track of a conversation again.",
  },
  {
    icon: Mail,
    name: "Email Integration",
    description:
      "Send and receive emails directly from the CRM. Full thread history attached to each contact — no switching between apps.",
  },
  {
    icon: BarChart3,
    name: "Reporting & Analytics",
    description:
      "Revenue forecasts, conversion rates, and pipeline velocity at a glance. Dashboards that actually help you make decisions.",
  },
  {
    icon: UsersRound,
    name: "Team Collaboration",
    description:
      "Assign leads, share notes, and hand off deals without anything falling through the cracks. Your whole team on the same page.",
  },
];

const problems = [
  {
    title: "Too Complex",
    description:
      "Salesforce takes months to set up and requires a consultant to configure. Your team ends up using spreadsheets anyway because the CRM is too complicated.",
  },
  {
    title: "Too Expensive",
    description:
      "Per-seat pricing means your CRM bill grows every time you hire. HubSpot starts free, then suddenly costs $1,600/month when you need real features.",
  },
  {
    title: "Data Silos Everywhere",
    description:
      "Your CRM doesn't talk to your project management tool, which doesn't talk to your invoicing software. You end up copying data between 4 different apps.",
  },
];

const platformConnections = [
  {
    icon: FolderKanban,
    name: "Projects",
    description:
      "Close a deal and a project board is ready to go. No re-entering client info or switching tools.",
  },
  {
    icon: MessageSquare,
    name: "Team Chat",
    description:
      "Discuss deals in context. Tag a teammate, share a contact, or get a quick answer without leaving the CRM.",
  },
  {
    icon: FileSignature,
    name: "E-Signatures",
    description:
      "Send contracts for signing directly from a deal. Signed documents auto-attach to the contact record.",
  },
  {
    icon: Receipt,
    name: "Invoicing",
    description:
      "Generate invoices from closed deals with one click. Payment status syncs back to the contact automatically.",
  },
];

type ComparisonValue = boolean | "partial" | string;

const comparisonData: {
  feature: string;
  opusite: ComparisonValue;
  salesforce: ComparisonValue;
  hubspot: ComparisonValue;
  zoho: ComparisonValue;
}[] = [
  {
    feature: "Contact & Deal Management",
    opusite: true,
    salesforce: true,
    hubspot: true,
    zoho: true,
  },
  {
    feature: "Built-in Project Management",
    opusite: true,
    salesforce: false,
    hubspot: false,
    zoho: "partial",
  },
  {
    feature: "Built-in Team Chat",
    opusite: true,
    salesforce: false,
    hubspot: false,
    zoho: false,
  },
  {
    feature: "Built-in E-Signatures",
    opusite: true,
    salesforce: false,
    hubspot: false,
    zoho: false,
  },
  {
    feature: "Built-in Invoicing",
    opusite: true,
    salesforce: false,
    hubspot: false,
    zoho: "partial",
  },
  {
    feature: "No Per-Seat Pricing",
    opusite: true,
    salesforce: false,
    hubspot: false,
    zoho: false,
  },
  {
    feature: "Setup in Minutes",
    opusite: true,
    salesforce: false,
    hubspot: true,
    zoho: true,
  },
  {
    feature: "No Integration Headaches",
    opusite: true,
    salesforce: false,
    hubspot: false,
    zoho: false,
  },
];

function ComparisonIcon({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return (
      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#00D4FF]/10">
        <Check className="w-4 h-4 text-[#00D4FF]" />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-yellow-500/10">
        <Minus className="w-4 h-4 text-yellow-400" />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-500/10">
      <X className="w-4 h-4 text-red-400" />
    </div>
  );
}

export default function OpusiteCrmPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#050A14] overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#00D4FF]/5 blur-[130px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#8A2BE2]/5 blur-[160px] rounded-full mix-blend-screen" />

          <div className="container-sg relative z-10">
            <div className="max-w-[900px] mx-auto text-center">
              <AnimateOnScroll>
                <nav aria-label="Breadcrumb" className="mb-6">
                  <ol className="flex items-center justify-center gap-2 text-sm text-white/40">
                    <li>
                      <Link href="/" className="hover:text-white/60 transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>/</li>
                    <li>
                      <Link href="/opusite" className="hover:text-white/60 transition-colors">
                        Opusite
                      </Link>
                    </li>
                    <li>/</li>
                    <li className="text-[#00D4FF]">CRM</li>
                  </ol>
                </nav>
                <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-6">
                  Opusite CRM
                </p>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-white tracking-[-0.02em] leading-[1.1] mb-6">
                  CRM That Actually{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#8A2BE2]">
                    Helps You Sell
                  </span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-8 max-w-[720px] mx-auto">
                  Replace Salesforce and HubSpot bloat with a CRM built into
                  your complete business platform. Manage contacts, close deals,
                  and track everything — without the per-seat tax.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <a
                  href="https://opusite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#00D4FF] text-[#050A14] px-8 py-4 rounded-full hover:bg-[#00B8E0] transition-all duration-300 font-semibold text-[17px]"
                >
                  Try Opusite CRM
                  <ArrowRight className="w-5 h-5" />
                </a>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 lg:py-24 bg-[#0A0F1A]">
          <div className="container-sg">
            <div className="max-w-[1100px] mx-auto">
              <AnimateOnScroll>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                    Why Traditional CRMs Fail Small Businesses
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Enterprise CRMs were built for 500-person sales teams, not
                    growing businesses. You end up paying for complexity you
                    never use.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {problems.map((problem) => (
                    <div
                      key={problem.title}
                      className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:border-red-400/30 transition-colors duration-300"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10 mb-4">
                        <X className="w-5 h-5 text-red-400" />
                      </div>
                      <h3 className="text-white text-lg font-semibold mb-3">
                        {problem.title}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-16 lg:py-24 bg-[#050A14]">
          <div className="container-sg">
            <div className="max-w-[1100px] mx-auto">
              <AnimateOnScroll>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                    Everything You Need to Close More Deals
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Powerful CRM features without the learning curve. Set up in
                    minutes, not months.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {crmFeatures.map((feature) => (
                    <div
                      key={feature.name}
                      className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:border-[#00D4FF]/30 transition-colors duration-300"
                    >
                      <feature.icon className="w-6 h-6 text-[#00D4FF] mb-4" />
                      <h3 className="text-white text-base font-semibold mb-2">
                        {feature.name}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* One Platform Advantage */}
        <section className="py-16 lg:py-24 bg-[#0A0F1A]">
          <div className="container-sg">
            <div className="max-w-[1100px] mx-auto">
              <AnimateOnScroll>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                    One Platform.{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#8A2BE2]">
                      Zero Integrations.
                    </span>
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Most CRMs need Zapier, middleware, and hours of setup to talk
                    to your other tools. With Opusite, everything is already
                    connected. Data flows naturally because it was built that
                    way.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {platformConnections.map((connection) => (
                    <div
                      key={connection.name}
                      className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:border-[#00D4FF]/30 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00D4FF]/10">
                          <connection.icon className="w-5 h-5 text-[#00D4FF]" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-white/30 text-xs">CRM</span>
                          <ArrowRight className="w-3 h-3 text-[#00D4FF]/40" />
                          <span className="text-white font-medium text-sm">
                            {connection.name}
                          </span>
                        </div>
                      </div>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {connection.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div className="mt-8 text-center">
                  <Link
                    href="/opusite"
                    className="inline-flex items-center gap-2 text-[#00D4FF] hover:text-[#00B8E0] transition-colors text-sm font-medium"
                  >
                    See all Opusite modules
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 lg:py-24 bg-[#050A14]">
          <div className="container-sg">
            <div className="max-w-[1100px] mx-auto">
              <AnimateOnScroll>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                    How Opusite CRM Compares
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Other CRMs give you one piece of the puzzle and charge you
                    extra for everything else. Opusite gives you the whole
                    picture.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px]">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white/50 text-sm font-medium py-4 pr-4">
                          Feature
                        </th>
                        <th className="text-center text-[#00D4FF] text-sm font-semibold py-4 px-4">
                          Opusite
                        </th>
                        <th className="text-center text-white/50 text-sm font-medium py-4 px-4">
                          Salesforce
                        </th>
                        <th className="text-center text-white/50 text-sm font-medium py-4 px-4">
                          HubSpot
                        </th>
                        <th className="text-center text-white/50 text-sm font-medium py-4 px-4">
                          Zoho
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row) => (
                        <tr
                          key={row.feature}
                          className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                        >
                          <td className="text-white/70 text-sm py-4 pr-4">
                            {row.feature}
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex justify-center">
                              <ComparisonIcon value={row.opusite} />
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex justify-center">
                              <ComparisonIcon value={row.salesforce} />
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex justify-center">
                              <ComparisonIcon value={row.hubspot} />
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex justify-center">
                              <ComparisonIcon value={row.zoho} />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div className="mt-8 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wide mb-1">
                        Opusite
                      </p>
                      <p className="text-[#00D4FF] text-lg font-semibold">
                        One price
                      </p>
                      <p className="text-white/30 text-xs">All modules included</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wide mb-1">
                        Salesforce
                      </p>
                      <p className="text-white text-lg font-semibold">
                        $25 – $300
                      </p>
                      <p className="text-white/30 text-xs">Per user/month</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wide mb-1">
                        HubSpot
                      </p>
                      <p className="text-white text-lg font-semibold">
                        $0 – $1,600
                      </p>
                      <p className="text-white/30 text-xs">Free tier is limited</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wide mb-1">
                        Zoho CRM
                      </p>
                      <p className="text-white text-lg font-semibold">
                        $14 – $52
                      </p>
                      <p className="text-white/30 text-xs">Per user/month</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Cross-link section */}
        <section className="py-12 lg:py-16 bg-[#0A0F1A]">
          <div className="container-sg">
            <div className="max-w-[900px] mx-auto">
              <AnimateOnScroll>
                <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-medium mb-1">
                      Looking for project management too?
                    </p>
                    <p className="text-white/40 text-sm">
                      See how Opusite replaces Jira and Asana alongside your CRM.
                    </p>
                  </div>
                  <Link
                    href="/marketing/best-jira-alternatives"
                    className="inline-flex items-center gap-2 text-[#00D4FF] hover:text-[#00B8E0] transition-colors text-sm font-medium whitespace-nowrap"
                  >
                    Best Jira Alternatives
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1D1D1F] py-24 lg:py-32">
          <div className="container-sg">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll>
                <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
                  Try Opusite CRM
                  <br />
                  <span className="text-[#00D4FF]">today.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
                  A CRM that works with your projects, invoices, contracts, and
                  team chat — not against them. One platform, no per-seat fees.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <a
                  href="https://opusite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Get Started with Opusite
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
