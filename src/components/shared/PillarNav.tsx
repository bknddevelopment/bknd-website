import Link from "next/link";

interface PillarNavProps {
  activePillar?: string;
}

const pillarLinks = [
  { label: "Compare", href: "/compare", key: "comparisons" },
  { label: "Cost Guides", href: "/cost", key: "cost-guides" },
  { label: "Best Of", href: "/best", key: "best-of" },
  { label: "Alternatives", href: "/alternatives", key: "alternatives" },
  { label: "Industries", href: "/industries", key: "industry-guides" },
  { label: "Glossary", href: "/glossary", key: "glossary" },
  { label: "Tools", href: "/tools", key: "tools" },
  { label: "Locations", href: "/locations", key: "locations" },
];

export function PillarNav({ activePillar }: PillarNavProps) {
  return (
    <nav
      aria-label="Content pillars"
      className="w-full bg-[#F5F5F7] border-b border-[#E5E5E7]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ul className="flex items-center gap-0 overflow-x-auto scrollbar-none">
          {pillarLinks.map(({ label, href, key }) => {
            const isActive = activePillar === key;
            return (
              <li key={key} className="flex-shrink-0">
                <Link
                  href={href}
                  className={`
                    relative inline-flex items-center px-4 py-3 text-xs font-medium tracking-wide transition-colors duration-150 whitespace-nowrap
                    ${
                      isActive
                        ? "text-[#1D1D1F]"
                        : "text-[#86868B] hover:text-[#1D1D1F]"
                    }
                  `}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#00D4FF] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
