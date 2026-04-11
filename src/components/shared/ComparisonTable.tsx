'use client';

import { useState, useEffect } from 'react';
import type { ComparisonRow } from '@/lib/content-types';

interface ComparisonTableProps {
  rows: ComparisonRow[];
  platformA: string;
  platformB: string;
}

export function ComparisonTable({ rows, platformA, platformB }: ComparisonTableProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    handler(mq);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (isMobile) {
    return (
      <div className="space-y-4">
        {rows.map((row, i) => (
          <div
            key={i}
            className="rounded-[4px] border border-[#F5F5F7] overflow-hidden"
          >
            <div className="bg-[#F5F5F7] px-4 py-3">
              <span className="text-sm font-semibold text-[#1D1D1F]">
                {row.feature}
              </span>
            </div>
            <div className="divide-y divide-[#F5F5F7]">
              <div className="px-4 py-3 flex justify-between items-start gap-4">
                <span className="text-xs font-medium text-[#86868B] uppercase tracking-wide shrink-0">
                  {platformA}
                </span>
                <span className="text-sm text-[#1D1D1F] text-right">
                  {row.platformA}
                </span>
              </div>
              <div className="px-4 py-3 flex justify-between items-start gap-4">
                <span className="text-xs font-medium text-[#86868B] uppercase tracking-wide shrink-0">
                  {platformB}
                </span>
                <span className="text-sm text-[#1D1D1F] text-right">
                  {row.platformB}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-[4px] border border-[#F5F5F7]">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-[#1D1D1F] text-white">
            <th className="px-6 py-4 font-semibold">Feature</th>
            <th className="px-6 py-4 font-semibold">{platformA}</th>
            <th className="px-6 py-4 font-semibold">{platformB}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F7]'}
            >
              <td className="px-6 py-4 font-medium text-[#1D1D1F]">
                {row.feature}
              </td>
              <td className="px-6 py-4 text-[#1D1D1F]/80">{row.platformA}</td>
              <td className="px-6 py-4 text-[#1D1D1F]/80">{row.platformB}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
