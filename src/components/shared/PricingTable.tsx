interface PricingTableProps {
  low: number;
  mid: number;
  high: number;
  label?: string;
}

function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

const tiers = [
  { key: 'low', name: 'Basic', description: 'Entry-level option' },
  { key: 'mid', name: 'Standard', description: 'Most common' },
  { key: 'high', name: 'Premium', description: 'Full-featured option' },
] as const;

export function PricingTable({ low, mid, high, label }: PricingTableProps) {
  const values = { low, mid, high };

  return (
    <div>
      {label && (
        <h3 className="text-lg font-semibold text-[#1D1D1F] mb-6 text-center">
          {label}
        </h3>
      )}
      <div className="grid sm:grid-cols-3 gap-4">
        {tiers.map((tier) => {
          const isMid = tier.key === 'mid';
          return (
            <div
              key={tier.key}
              className={`rounded-[4px] border p-6 text-center ${
                isMid
                  ? 'border-[#00D4FF] ring-1 ring-[#00D4FF]'
                  : 'border-[#F5F5F7]'
              }`}
            >
              {isMid && (
                <span className="inline-block text-xs font-medium text-[#00D4FF] uppercase tracking-wide mb-3">
                  Most Common
                </span>
              )}
              <p className="text-sm font-medium text-[#86868B] mb-2">
                {tier.name}
              </p>
              <p className="text-3xl font-bold text-[#1D1D1F] mb-2">
                {formatCurrency(values[tier.key])}
              </p>
              <p className="text-sm text-[#86868B]">{tier.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
