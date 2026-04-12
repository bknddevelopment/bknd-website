"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  ArrowRight,
  Hash,
  MessageCircle,
  Paperclip,
  MessageSquare,
  Search,
  Bell,
  AtSign,
  FolderKanban,
  Users,
  FolderOpen,
  Check,
  X,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Hash,
    name: "Channels",
    description:
      "Organize conversations by team, project, or topic. Keep discussions focused and searchable instead of lost in a group text.",
  },
  {
    icon: MessageCircle,
    name: "Direct Messages",
    description:
      "Private 1-on-1 or small group conversations. Quick questions, sensitive topics, or just catching up — without cluttering a channel.",
  },
  {
    icon: Paperclip,
    name: "File Sharing",
    description:
      "Drag and drop files directly into any conversation. Images, documents, spreadsheets — shared instantly with your team.",
  },
  {
    icon: MessageSquare,
    name: "Threads",
    description:
      "Keep side conversations organized. Reply in a thread so the main channel stays clean and easy to follow.",
  },
  {
    icon: Search,
    name: "Full Search",
    description:
      "Find any message, file, or conversation instantly. No message history limits — everything your team has ever shared is searchable.",
  },
  {
    icon: Bell,
    name: "Notifications",
    description:
      "Get notified about what matters. Customize alerts per channel so you stay in the loop without the noise.",
  },
  {
    icon: AtSign,
    name: "@Mentions",
    description:
      "Tag teammates to get their attention. Mention individuals, groups, or entire channels — the right people see the right messages.",
  },
];

const integrations = [
  {
    icon: FolderKanban,
    module: "Projects",
    description:
      "Discuss tasks in context. Chat threads link directly to project boards so your team talks about work where work happens.",
  },
  {
    icon: Users,
    module: "CRM",
    description:
      "Share deal updates with your team instantly. Close a deal, notify the channel — no copy-pasting between tools.",
  },
  {
    icon: FolderOpen,
    module: "Files",
    description:
      "Share and preview documents without leaving chat. Files shared in conversations are automatically stored and organized.",
  },
  {
    icon: LinkIcon,
    module: "No Integrations Needed",
    description:
      "Everything is already connected. No Zapier, no webhooks, no API keys. Chat, CRM, projects, and files — one platform.",
  },
];

const comparisonRows = [
  {
    feature: "Per-user pricing",
    opusite: "No",
    slack: "Yes ($8.75+/user/mo)",
    teams: "Yes ($4+/user/mo)",
    discord: "No",
    opusiteWin: true,
  },
  {
    feature: "Message history",
    opusite: "Unlimited",
    slack: "90 days (free)",
    teams: "Unlimited",
    discord: "Unlimited",
    opusiteWin: true,
  },
  {
    feature: "File storage",
    opusite: "Built-in",
    slack: "5 GB (free)",
    teams: "10 GB",
    discord: "25 MB limit",
    opusiteWin: true,
  },
  {
    feature: "Built-in CRM",
    opusite: "Yes",
    slack: "No",
    teams: "No",
    discord: "No",
    opusiteWin: true,
  },
  {
    feature: "Project management",
    opusite: "Yes",
    slack: "No",
    teams: "Basic (Planner)",
    discord: "No",
    opusiteWin: true,
  },
  {
    feature: "Invoicing",
    opusite: "Yes",
    slack: "No",
    teams: "No",
    discord: "No",
    opusiteWin: true,
  },
  {
    feature: "E-Signatures",
    opusite: "Yes",
    slack: "No",
    teams: "No",
    discord: "No",
    opusiteWin: true,
  },
  {
    feature: "Business-focused",
    opusite: "Yes",
    slack: "Yes",
    teams: "Yes",
    discord: "No",
    opusiteWin: false,
  },
];

export default function OpusiteTeamChatPage() {
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
                <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-6">
                  Opusite Team Chat
                </p>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-white tracking-[-0.02em] leading-[1.1] mb-6">
                  Team Chat That&apos;s Part of Your Workflow,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#8A2BE2]">
                    Not Another Tab
                  </span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-8 max-w-[720px] mx-auto">
                  Slack-level messaging without the per-user pricing. Channels,
                  threads, file sharing, and search — built into the same
                  platform as your CRM, projects, and invoicing.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <a
                  href="https://opusite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#00D4FF] text-[#050A14] px-8 py-4 rounded-full hover:bg-[#00B8E0] transition-all duration-300 font-semibold text-[17px]"
                >
                  Try Opusite Chat
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
                    Why Slack Costs Too Much for Small Teams
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Slack is great — until you see the bill. Per-user pricing
                    punishes growing teams, and the free plan holds your messages
                    hostage.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="space-y-4">
                  {[
                    {
                      problem: "Per-user pricing adds up fast",
                      detail:
                        "A 10-person team pays $87.50/month for Slack Pro. Add more people and it only gets worse — $8.75 per user, every month, forever.",
                    },
                    {
                      problem: "Message history disappears on the free plan",
                      detail:
                        "Slack's free tier only keeps 90 days of messages. That important decision from last quarter? Gone. Pay up or lose your history.",
                    },
                    {
                      problem: "Another silo of information",
                      detail:
                        "Conversations about deals happen in Slack. Deal data lives in your CRM. Project updates live in Jira. Nothing connects — so your team wastes time copying information between tools.",
                    },
                  ].map((item) => (
                    <div
                      key={item.problem}
                      className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:border-[#00D4FF]/30 transition-colors duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 flex-shrink-0 mt-0.5">
                          <X className="w-4 h-4 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-white text-base font-semibold mb-2">
                            {item.problem}
                          </h3>
                          <p className="text-white/40 text-sm leading-relaxed">
                            {item.detail}
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
                    Everything You Need to Communicate
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Real-time messaging built for how teams actually work. No
                    missing features, no message limits, no per-user fees.
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

        {/* Chat Where Work Happens */}
        <section className="py-16 lg:py-24 bg-[#0A0F1A]">
          <div className="container-sg">
            <div className="max-w-[1100px] mx-auto">
              <AnimateOnScroll>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                    Chat Where Work Happens
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Unlike standalone chat tools, Opusite connects your
                    conversations to your actual work. No integrations to
                    configure — it&apos;s all one platform.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {integrations.map((item) => (
                    <div
                      key={item.module}
                      className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:border-[#00D4FF]/30 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <item.icon className="w-6 h-6 text-[#00D4FF]" />
                        <h3 className="text-white text-base font-semibold">
                          {item.module}
                        </h3>
                      </div>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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
                    Opusite isn&apos;t just a chat tool — it&apos;s a complete
                    business platform. Here&apos;s how the messaging stacks up.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white/40 text-sm font-medium py-4 pr-4 min-w-[160px]">
                          Feature
                        </th>
                        <th className="text-center text-[#00D4FF] text-sm font-semibold py-4 px-4 min-w-[120px]">
                          Opusite
                        </th>
                        <th className="text-center text-white/40 text-sm font-medium py-4 px-4 min-w-[120px]">
                          Slack
                        </th>
                        <th className="text-center text-white/40 text-sm font-medium py-4 px-4 min-w-[120px]">
                          MS Teams
                        </th>
                        <th className="text-center text-white/40 text-sm font-medium py-4 px-4 min-w-[120px]">
                          Discord
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr
                          key={row.feature}
                          className="border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors duration-200"
                        >
                          <td className="text-white text-sm font-medium py-4 pr-4">
                            {row.feature}
                          </td>
                          <td className="text-center py-4 px-4">
                            <span className="text-[#00D4FF] text-sm font-medium">
                              {row.opusite === "Yes" ? (
                                <Check className="w-5 h-5 text-[#00D4FF] mx-auto" />
                              ) : row.opusite === "No" ? (
                                <X className="w-5 h-5 text-red-400 mx-auto" />
                              ) : (
                                row.opusite
                              )}
                            </span>
                          </td>
                          <td className="text-center text-white/40 text-sm py-4 px-4">
                            {row.slack}
                          </td>
                          <td className="text-center text-white/40 text-sm py-4 px-4">
                            {row.teams}
                          </td>
                          <td className="text-center text-white/40 text-sm py-4 px-4">
                            {row.discord}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 lg:py-16 bg-[#0A0F1A]">
          <div className="container-sg">
            <div className="max-w-[900px] mx-auto">
              <AnimateOnScroll>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    href="/opusite"
                    className="text-white/40 text-sm hover:text-[#00D4FF] transition-colors duration-200 underline underline-offset-4"
                  >
                    Opusite Platform Overview
                  </Link>
                  <span className="text-white/20">|</span>
                  <Link
                    href="/marketing/best-slack-alternatives"
                    className="text-white/40 text-sm hover:text-[#00D4FF] transition-colors duration-200 underline underline-offset-4"
                  >
                    Best Slack Alternatives
                  </Link>
                  <span className="text-white/20">|</span>
                  <Link
                    href="/marketing/slack-alternative-small-teams"
                    className="text-white/40 text-sm hover:text-[#00D4FF] transition-colors duration-200 underline underline-offset-4"
                  >
                    Slack Alternatives for Small Teams
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
                  Try Opusite Chat
                  <br />
                  <span className="text-[#00D4FF]">for your team.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
                  Team messaging that&apos;s part of your CRM, projects, and
                  files — not another tab to manage. No per-user fees. No
                  message limits.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <a
                  href="https://opusite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Try Opusite Chat
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
