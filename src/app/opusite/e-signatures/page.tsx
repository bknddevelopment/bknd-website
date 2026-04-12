"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  ArrowRight,
  FileText,
  MousePointerClick,
  ShieldCheck,
  Scale,
  Users,
  Smartphone,
  Handshake,
  FolderKanban,
  Receipt,
  Check,
  X,
  Minus,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: FileText,
    name: "Document Templates",
    description:
      "Create reusable templates for contracts, NDAs, proposals, and any document you send regularly. Set it up once, use it forever.",
  },
  {
    icon: MousePointerClick,
    name: "Drag-and-Drop Signature Fields",
    description:
      "Place signature, date, initial, and text fields anywhere on your document. No coding or complicated setup required.",
  },
  {
    icon: ShieldCheck,
    name: "Full Audit Trail",
    description:
      "Every action is logged — who opened, viewed, and signed the document, when, and from what IP address. Complete legal protection.",
  },
  {
    icon: Scale,
    name: "Legally Binding",
    description:
      "Compliant with ESIGN Act and UETA. Your e-signatures carry the same legal weight as wet ink on paper.",
  },
  {
    icon: Users,
    name: "Multi-Signer Workflows",
    description:
      "Route documents to multiple signers in sequence or parallel. Set signing order, add approvers, and track progress in real time.",
  },
  {
    icon: Smartphone,
    name: "Mobile Signing",
    description:
      "Signers can review and sign documents from any device — phone, tablet, or desktop. No app download required.",
  },
];

const workflows = [
  {
    icon: Handshake,
    title: "CRM Deals",
    description:
      "Close a deal in your pipeline? Send the contract for signature right from the deal page. No switching tabs, no downloading PDFs, no re-uploading.",
    highlight: "Sign contracts from the deal page",
  },
  {
    icon: FolderKanban,
    title: "Projects",
    description:
      "Get sign-off on deliverables, scope changes, or project milestones without leaving your project board. Attach signed documents directly to tasks.",
    highlight: "Sign-off on deliverables in context",
  },
  {
    icon: Receipt,
    title: "Invoicing",
    description:
      "Attach a service agreement or terms to an invoice. The client signs and pays in one flow — no back-and-forth.",
    highlight: "Sign and pay in one step",
  },
];

const comparisonRows = [
  {
    feature: "Unlimited signatures",
    opusite: true,
    docusign: false,
    pandadoc: false,
    hellosign: false,
  },
  {
    feature: "No per-envelope fees",
    opusite: true,
    docusign: false,
    pandadoc: false,
    hellosign: false,
  },
  {
    feature: "Built-in CRM",
    opusite: true,
    docusign: false,
    pandadoc: "partial" as const,
    hellosign: false,
  },
  {
    feature: "Built-in project management",
    opusite: true,
    docusign: false,
    pandadoc: false,
    hellosign: false,
  },
  {
    feature: "Built-in invoicing",
    opusite: true,
    docusign: false,
    pandadoc: false,
    hellosign: false,
  },
  {
    feature: "Document templates",
    opusite: true,
    docusign: true,
    pandadoc: true,
    hellosign: true,
  },
  {
    feature: "Audit trail",
    opusite: true,
    docusign: true,
    pandadoc: true,
    hellosign: true,
  },
  {
    feature: "Mobile signing",
    opusite: true,
    docusign: true,
    pandadoc: true,
    hellosign: true,
  },
  {
    feature: "Starting price",
    opusite: "Included",
    docusign: "$25/mo",
    pandadoc: "$35/mo",
    hellosign: "$20/mo",
  },
];

function ComparisonCell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00D4FF]/10 mx-auto">
        <Check className="w-3.5 h-3.5 text-[#00D4FF]" />
      </div>
    );
  if (value === false)
    return (
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 mx-auto">
        <X className="w-3.5 h-3.5 text-red-400" />
      </div>
    );
  if (value === "partial")
    return (
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/10 mx-auto">
        <Minus className="w-3.5 h-3.5 text-yellow-400" />
      </div>
    );
  return <span className="text-white/60 text-sm">{value}</span>;
}

export default function OpusiteESignaturesPage() {
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
                <nav className="text-sm text-white/40 mb-6">
                  <Link href="/opusite" className="hover:text-white/60 transition-colors">
                    Opusite
                  </Link>
                  <span className="mx-2">/</span>
                  <span className="text-white/60">E-Signatures</span>
                </nav>
                <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-6">
                  E-Signatures Module
                </p>
                <h1 className="text-[36px] lg:text-[56px] font-semibold text-white tracking-[-0.02em] leading-[1.1] mb-6">
                  Sign Documents in Seconds —{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#8A2BE2]">
                    No Extra Software Needed
                  </span>
                </h1>
                <p className="text-[18px] lg:text-[21px] text-[#86868B] leading-relaxed mb-8 max-w-[720px] mx-auto">
                  DocuSign-level e-signatures built right into your business
                  platform. No per-envelope fees. No extra logins. Just sign and
                  move on.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <a
                  href="https://opusite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#00D4FF] text-[#050A14] px-8 py-4 rounded-full hover:bg-[#00B8E0] transition-all duration-300 font-semibold text-[17px]"
                >
                  Try Opusite E-Signatures
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
                    Standalone E-Signature Tools Are a Waste of Money
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    You&apos;re paying per envelope, managing another login, and
                    your signed documents live in a completely separate system
                    from your CRM and projects.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10 mb-4">
                      <Receipt className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-white text-base font-semibold mb-2">
                      Per-Envelope Fees Add Up
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      DocuSign charges $25-65/month and still limits how many
                      envelopes you can send. Send a lot of contracts? Pay a lot
                      more.
                    </p>
                  </div>
                  <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10 mb-4">
                      <Users className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-white text-base font-semibold mb-2">
                      Another Login to Manage
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      Your team already juggles a CRM, project tool, and
                      invoicing system. Adding a separate e-signature tool means
                      one more password, one more tab, one more bill.
                    </p>
                  </div>
                  <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10 mb-4">
                      <FolderKanban className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-white text-base font-semibold mb-2">
                      No Connection to Your Work
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      Signed contracts sit in DocuSign while your deals live in
                      Salesforce and your projects live in Jira. Nothing talks to
                      each other.
                    </p>
                  </div>
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
                    Everything You Need to Sign Documents
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Professional e-signatures with all the features you&apos;d
                    expect from a standalone tool — included in your platform at
                    no extra cost.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {features.map((feat) => (
                    <div
                      key={feat.name}
                      className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:border-[#00D4FF]/30 transition-colors duration-300"
                    >
                      <feat.icon className="w-6 h-6 text-[#00D4FF] mb-4" />
                      <h3 className="text-white text-base font-semibold mb-2">
                        {feat.name}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Built Into Your Workflow */}
        <section className="py-16 lg:py-24 bg-[#0A0F1A]">
          <div className="container-sg">
            <div className="max-w-[900px] mx-auto">
              <AnimateOnScroll>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                    Built Into Your Workflow
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    E-signatures aren&apos;t a bolt-on. They&apos;re woven into
                    every part of Opusite — so signing happens where your work
                    already lives.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="space-y-4">
                  {workflows.map((flow) => (
                    <div
                      key={flow.title}
                      className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:border-[#00D4FF]/30 transition-colors duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00D4FF]/10 flex-shrink-0">
                          <flow.icon className="w-5 h-5 text-[#00D4FF]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white text-base font-semibold mb-1">
                            {flow.title}
                          </h3>
                          <p className="text-white/40 text-sm leading-relaxed mb-3">
                            {flow.description}
                          </p>
                          <p className="text-[#00D4FF] text-sm font-medium">
                            {flow.highlight}
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

        {/* Comparison Table */}
        <section className="py-16 lg:py-24 bg-[#050A14]">
          <div className="container-sg">
            <div className="max-w-[1100px] mx-auto">
              <AnimateOnScroll>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                    Opusite vs. the E-Signature Tools You&apos;re Paying For
                  </h2>
                  <p className="text-[#86868B] text-lg leading-relaxed max-w-[720px] mx-auto">
                    Why pay for a standalone e-signature tool when Opusite
                    includes everything — plus CRM, projects, and invoicing?
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                      <thead>
                        <tr className="border-b border-white/[0.08]">
                          <th className="text-left text-white/40 text-sm font-medium p-4 w-[240px]">
                            Feature
                          </th>
                          <th className="text-center p-4 w-[140px]">
                            <span className="text-[#00D4FF] text-sm font-semibold">
                              Opusite
                            </span>
                          </th>
                          <th className="text-center text-white/40 text-sm font-medium p-4 w-[140px]">
                            DocuSign
                          </th>
                          <th className="text-center text-white/40 text-sm font-medium p-4 w-[140px]">
                            PandaDoc
                          </th>
                          <th className="text-center text-white/40 text-sm font-medium p-4 w-[140px]">
                            HelloSign
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonRows.map((row, i) => (
                          <tr
                            key={row.feature}
                            className={
                              i < comparisonRows.length - 1
                                ? "border-b border-white/[0.05]"
                                : ""
                            }
                          >
                            <td className="text-white/60 text-sm p-4">
                              {row.feature}
                            </td>
                            <td className="text-center p-4">
                              <ComparisonCell value={row.opusite} />
                            </td>
                            <td className="text-center p-4">
                              <ComparisonCell value={row.docusign} />
                            </td>
                            <td className="text-center p-4">
                              <ComparisonCell value={row.pandadoc} />
                            </td>
                            <td className="text-center p-4">
                              <ComparisonCell value={row.hellosign} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div className="mt-6 text-center">
                  <p className="text-white/30 text-sm">
                    Looking for alternatives?{" "}
                    <Link
                      href="/marketing/best-docusign-alternatives"
                      className="text-[#00D4FF]/60 hover:text-[#00D4FF] transition-colors"
                    >
                      Best DocuSign Alternatives
                    </Link>
                    {" "}|{" "}
                    <Link
                      href="/marketing/free-docusign-alternatives"
                      className="text-[#00D4FF]/60 hover:text-[#00D4FF] transition-colors"
                    >
                      Free DocuSign Alternatives
                    </Link>
                  </p>
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
                  Stop Paying
                  <br />
                  <span className="text-[#00D4FF]">Per Envelope.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
                  Unlimited e-signatures, built into your CRM, projects, and
                  invoicing. One platform. No extra cost.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://opusite.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                  >
                    Try Opusite E-Signatures
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <Link
                    href="/opusite"
                    className="inline-flex items-center gap-2 px-8 py-4 text-white/60 hover:text-white transition-colors duration-300 font-medium"
                  >
                    See All Modules
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
