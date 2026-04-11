import type { ToolEntry } from '@/lib/content-types';

interface ToolCardProps {
  tool: ToolEntry;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="rounded-[4px] border border-[#F5F5F7] p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-lg font-semibold text-[#1D1D1F]">{tool.name}</h3>
        <span className="shrink-0 text-xs font-medium text-[#1D1D1F] bg-[#F5F5F7] px-3 py-1 rounded-full">
          {tool.pricing}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-[#86868B] leading-relaxed mb-5">
        {tool.description}
      </p>

      {/* Pros */}
      {tool.pros.length > 0 && (
        <div className="mb-4">
          <ul className="space-y-1.5">
            {tool.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#1D1D1F]/80">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {pro}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cons */}
      {tool.cons.length > 0 && (
        <div className="mb-5">
          <ul className="space-y-1.5">
            {tool.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#1D1D1F]/80">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {con}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-[#F5F5F7] flex items-center justify-between gap-4">
        <span className="text-xs text-[#86868B]">
          Best for: {tool.bestFor}
        </span>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#00D4FF] hover:underline shrink-0"
        >
          Visit &rarr;
        </a>
      </div>
    </div>
  );
}
