"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  ArrowRight,
  KanbanSquare,
  UserCheck,
  Timer,
  CalendarRange,
  Paperclip,
  BarChart3,
  Users,
  MessageSquare,
  FileSignature,
  Receipt,
  Check,
  X,
  Link2,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: KanbanSquare,
    name: "Kanban Boards",
    description:
      "Drag-and-drop boards that show exactly where every task stands. Customize columns for your workflow — no configuration manual required.",
  },
  {
    icon: UserCheck,
    name: "Task Assignments",
    description:
      "Assign tasks to team members with due dates, priorities, and dependencies. Everyone knows what they own and when it's due.",
  },
  {
    icon: Timer,
    name: "Time Tracking",
    description:
      "Built-in time tracking on every task. Know exactly how long work takes — bill accurately, estimate better, spot bottlenecks early.",
  },
  {
    icon: CalendarRange,
    name: "Sprint Planning",
    description:
      "Plan sprints with capacity awareness. See what your team can realistically deliver without the overhead of Jira's sprint rituals.",
  },
  {
    icon: Paperclip,
    name: "File Attachments",
    description:
      "Attach files directly to tasks. Designs, documents, specs — everything lives where the work happens, not buried in email threads.",
  },
  {
    icon: BarChart3,
    name: "Progress Dashboards",
    description:
      "Real-time dashboards that show project health at a glance. Burndown charts, velocity, and completion rates — without the data science degree.",
  },
];

const connections = [
  {
    icon: Users,
    module: "CRM",
    description:
      "Link tasks directly to deals and contacts. When a deal closes, the delivery project is already set up. No copy-pasting between tools.",
    link: "/opusite/crm",
  },
  {
    icon: MessageSquare,
    module: "Team Chat",
    description:
      "Discuss tasks in context without switching apps. Updates post to channels automatically. Decisions stay attached to the work.",
    link: "/opusite",
  },
  {
    icon: FileSignature,
    module: "E-Signatures",
    description:
      "Attach sign-off documents to project milestones. Clients approve deliverables directly from the project — no DocuSign tab needed.",
    link: "/opusite",
  },
  {
    icon: Receipt,
    module: "Invoicing",
    description:
      "Bill for completed work automatically. Time tracked on tasks flows into invoices. No more reconciling hours across spreadsheets.",
    link: "/opusite",
  },
];

const comparisonRows = [
  {
    feature: "Monthly cost (10 users)",
    opusite: "One flat price",
    jira: "$80 – $160/mo",
    asana: "$110 – $250/mo",
    monday: "$120 – $190/mo",
  },
  {
    feature: "Setup complexity",
    opusite: "Minutes",
    jira: "Weeks to months",
    asana: "Days to weeks",
    monday: "Days",
  },
  {
    feature: "Learning curve",
    opusite: "Low",
    jira: "High",
    asana: "Medium",
    monday: "Medium",
  },
  {
    feature: "Built-in CRM",
    opusite: true,
    jira: false,
    asana: false,
    monday: "Add-on",
  },
  {
    feature: "Built-in chat",
    opusite: true,
    jira: false,
    asana: false,
    monday: false,
  },
  {
    feature: "Built-in invoicing",
    opusite: true,
    jira: false,
    asana: false,
    monday: false,
  },
  {
    feature: "E-signatures",
    opusite: true,
    jira: false,
    asana: false,
    monday: false,
  },
  {
    feature: "File storage",
    opusite: true,
    jira: "Limited",
    asana: "Limited",
    monday: "Limited",
  },
];

const problems = [
  {
    title: "Too Many Features, Not Enough Clarity",
    description:
      "Jira has 200+ configuration options. Asana buries simple tasks under layers of abstraction. Your team ends up spending more time managing the tool than doing the work.",
  },
  {
    title: "Steep Learning Curve",
    description:
      "New hires need weeks to learn Jira. Monday.com automations break silently. You shouldn't need a certification to assign a task.",
  },
  {
    title: "Expensive Per-Seat Pricing",
    description:
      "Every new team member costs $10 – $25/month. Add integrations with Slack, your CRM, and invoicing, and you're paying $50+/user for tools that still don't talk to each other.",
  },
];

function ComparisonCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#00D4FF]/10">
          <Check className="w-4 h-4 text-[#00D4FF]" />
        </div>
      </div>
    ) : (
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-500/10">
          <X className="w-4 h-4 text-red-400" />
        </div>
      </div>
    );
  }
  return <span className="text-white/60 text-sm">{value}</span>;
}

export default function ProjectManagementPage() {
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
                    <li className="text-[#00D4FF]">Project Management</li>
                  </ol>
                </nav>
                <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-6">
                  Opusite Project Management
                </p>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-white tracking-[-0.02em] leading-[1.1] mb-6">
                  Project Management Without the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#8A2BE2]">
                    Jira Headaches.
                  </span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-8 max-w-[720px] mx-auto">
                  Powerful project management that doesn&apos;t require a
                  3-month onboarding. Kanban boards, time tracking, and sprint
                  planning — all connected to your CRM, chat, and invoicing.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <a
                  href="https://opusite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#00D4FF] text-[#050A14] px-8 py-4 rounded-full hover:bg-[#00B8E0] transition-all duration-300 font-semibold text-[17px]"
                >
                  Try Opusite Projects
                  <ArrowRight className="w-5 h-5" />
                </a>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 lg:py-24 bg-[#0A0F1A]">
          <div className="container-sg">
            <div className="max-w-[900px] mx-auto">
              <AnimateOnScroll>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                    Why Project Management Tools Overwhelm Small Teams
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Enterprise PM tools were built for 500-person engineering
                    teams. If you&apos;re running a business with 5 – 50 people,
                    they create more problems than they solve.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="space-y-4">
                  {problems.map((problem) => (
                    <div
                      key={problem.title}
                      className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:border-red-400/30 transition-colors duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 flex-shrink-0 mt-0.5">
                          <X className="w-4 h-4 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-white text-base font-semibold mb-2">
                            {problem.title}
                          </h3>
                          <p className="text-white/40 text-sm leading-relaxed">
                            {problem.description}
                          </p>
                        </div>
                      </div>
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
                    Everything You Need. Nothing You Don&apos;t.
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Six core features that cover 95% of what teams actually use
                    in Jira or Asana — without the other 200 features getting in
                    the way.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {features.map((feature) => (
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

        {/* Connected to Everything */}
        <section className="py-16 lg:py-24 bg-[#0A0F1A]">
          <div className="container-sg">
            <div className="max-w-[1100px] mx-auto">
              <AnimateOnScroll>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                    Connected to Everything
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Opusite Projects isn&apos;t a standalone tool bolted onto
                    your stack. It&apos;s wired into your CRM, chat, invoicing,
                    and e-signatures from day one.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {connections.map((conn) => (
                    <Link
                      key={conn.module}
                      href={conn.link}
                      className="group bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:border-[#00D4FF]/30 transition-colors duration-300 block"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <conn.icon className="w-5 h-5 text-[#00D4FF]" />
                        <Link2 className="w-3 h-3 text-white/20" />
                        <span className="text-white font-semibold text-base">
                          {conn.module}
                        </span>
                        <ArrowRight className="w-4 h-4 text-white/20 ml-auto group-hover:text-[#00D4FF] group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {conn.description}
                      </p>
                    </Link>
                  ))}
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
                    How Opusite Compares
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Most PM tools charge per seat and require separate
                    subscriptions for everything else. Opusite includes it all.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                {/* Desktop table */}
                <div className="hidden md:block bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/[0.08]">
                        <th className="text-left text-white/40 text-sm font-medium p-4 w-[28%]">
                          Feature
                        </th>
                        <th className="text-center text-[#00D4FF] text-sm font-semibold p-4 w-[18%] bg-[#00D4FF]/5">
                          Opusite
                        </th>
                        <th className="text-center text-white/60 text-sm font-medium p-4 w-[18%]">
                          Jira
                        </th>
                        <th className="text-center text-white/60 text-sm font-medium p-4 w-[18%]">
                          Asana
                        </th>
                        <th className="text-center text-white/60 text-sm font-medium p-4 w-[18%]">
                          Monday.com
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr
                          key={row.feature}
                          className="border-b border-white/[0.04] last:border-0"
                        >
                          <td className="text-white/60 text-sm p-4">
                            {row.feature}
                          </td>
                          <td className="text-center p-4 bg-[#00D4FF]/5">
                            <ComparisonCell value={row.opusite} />
                          </td>
                          <td className="text-center p-4">
                            <ComparisonCell value={row.jira} />
                          </td>
                          <td className="text-center p-4">
                            <ComparisonCell value={row.asana} />
                          </td>
                          <td className="text-center p-4">
                            <ComparisonCell value={row.monday} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile comparison cards */}
                <div className="md:hidden space-y-3">
                  {comparisonRows.map((row) => (
                    <div
                      key={row.feature}
                      className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-4"
                    >
                      <p className="text-white/60 text-sm font-medium mb-3">
                        {row.feature}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[#00D4FF] text-xs font-medium w-16">
                            Opusite
                          </span>
                          <ComparisonCell value={row.opusite} />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-white/40 text-xs w-16">
                            Jira
                          </span>
                          <ComparisonCell value={row.jira} />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-white/40 text-xs w-16">
                            Asana
                          </span>
                          <ComparisonCell value={row.asana} />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-white/40 text-xs w-16">
                            Monday
                          </span>
                          <ComparisonCell value={row.monday} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Internal links */}
              <AnimateOnScroll delay={0.3}>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/opusite"
                    className="text-sm text-white/40 hover:text-[#00D4FF] transition-colors duration-300"
                  >
                    Opusite Platform Overview
                  </Link>
                  <span className="text-white/20">|</span>
                  <Link
                    href="/marketing/best-jira-alternatives"
                    className="text-sm text-white/40 hover:text-[#00D4FF] transition-colors duration-300"
                  >
                    Best Jira Alternatives (2026)
                  </Link>
                  <span className="text-white/20">|</span>
                  <Link
                    href="/marketing/free-jira-alternatives"
                    className="text-sm text-white/40 hover:text-[#00D4FF] transition-colors duration-300"
                  >
                    Free Jira Alternatives
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
                  Try Opusite
                  <br />
                  <span className="text-[#00D4FF]">Projects.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
                  Project management that works with your CRM, chat, invoicing,
                  and e-signatures — not against them.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <a
                  href="https://opusite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Try Opusite Projects
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
