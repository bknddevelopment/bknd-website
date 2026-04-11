import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Pillar {
  label: string;
  href: string;
  description: string;
  count: string;
}

const pillars: Pillar[] = [
  {
    label: "Compare",
    href: "/compare",
    description: "Side-by-side platform breakdowns",
    count: "Platform comparisons",
  },
  {
    label: "Cost Guides",
    href: "/cost",
    description: "Real pricing for digital services",
    count: "Pricing guides",
  },
  {
    label: "Best Of",
    href: "/best",
    description: "Curated tool and software picks",
    count: "Curated lists",
  },
  {
    label: "Alternatives",
    href: "/alternatives",
    description: "Free and better options to popular tools",
    count: "Tool alternatives",
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Marketing playbooks by industry",
    count: "Industry guides",
  },
  {
    label: "Glossary",
    href: "/glossary",
    description: "Plain-English tech definitions",
    count: "Definitions",
  },
  {
    label: "Tools",
    href: "/tools",
    description: "Free calculators and generators",
    count: "Free tools",
  },
  {
    label: "Locations",
    href: "/locations",
    description: "Local digital marketing services",
    count: "Local guides",
  },
];

export function KnowledgeHub() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#86868B] text-sm font-medium tracking-wide uppercase mb-4">
            Resources
          </p>
          <h2 className="text-[#1D1D1F] text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Knowledge Hub
          </h2>
          <p className="text-[#86868B] text-lg leading-relaxed">
            Expert guides, tools, and insights for growing your business
          </p>
        </div>

        {/* Pillar grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pillars.map(({ label, href, description, count }) => (
            <Link
              key={href}
              href={href}
              className="group block bg-white rounded-[4px] border border-[#E5E5E7] p-6 transition-all duration-200 hover:-translate-y-[2px] hover:border-[#00D4FF] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-[#1D1D1F] text-base font-semibold group-hover:text-[#00D4FF] transition-colors duration-150">
                  {label}
                </h3>
                <ArrowRight
                  className="w-4 h-4 text-[#86868B] flex-shrink-0 mt-0.5 transition-all duration-150 group-hover:text-[#00D4FF] group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
              <p className="text-[#86868B] text-sm leading-relaxed mb-4">
                {description}
              </p>
              <span className="text-xs text-[#86868B] font-medium">{count}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
