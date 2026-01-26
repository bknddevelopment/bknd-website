'use client';

import { AnimateOnScroll } from './AnimateOnScroll';

interface Step {
  id: number;
  duration: string;
  title: string;
  angle: number; // Position on circle in degrees (0 = top, clockwise)
}

const steps: Step[] = [
  {
    id: 1,
    duration: '1-2 Hours',
    title: 'Friendly Chat',
    angle: -90, // Top
  },
  {
    id: 2,
    duration: '1-2 Weeks',
    title: 'Opportunities Analysis',
    angle: -18, // Top-right
  },
  {
    id: 3,
    duration: '2-4 Weeks',
    title: 'Strategy Discussion',
    angle: 54, // Bottom-right
  },
  {
    id: 4,
    duration: 'Up to 3 Months',
    title: 'Full Rollout',
    angle: 126, // Bottom-left
  },
  {
    id: 5,
    duration: 'Learn and Adjust',
    title: 'Continuous Optimization',
    angle: 198, // Top-left
  },
];

// Minimal arrow icon for center
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}

export default function Methodology() {
  // Circle dimensions
  const circleRadius = 200; // Radius for step positioning
  const svgSize = 520; // SVG viewBox size
  const center = svgSize / 2;

  // Calculate position on circle
  const getPosition = (angle: number) => {
    const radians = (angle * Math.PI) / 180;
    return {
      x: center + circleRadius * Math.cos(radians),
      y: center + circleRadius * Math.sin(radians),
    };
  };

  return (
    <section
      className="relative py-16 lg:py-20 overflow-hidden"
      style={{
        backgroundColor: '#F5F5F7',
      }}
    >
      <div className="container-sg relative z-10">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-12 lg:mb-14">
            <p
              className="text-sm font-medium tracking-wider uppercase mb-4"
              style={{ color: '#6E6E73' }}
            >
              Methodology
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold"
              style={{ color: '#1D1D1F' }}
            >
              Discover Our Growth Methodology
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Circular Process Diagram */}
        <AnimateOnScroll delay={0.2}>
          <div className="relative flex items-center justify-center">
            {/* Mobile: Vertical Layout */}
            <div className="lg:hidden w-full max-w-md mx-auto">
              <div className="relative">
                {/* Center Logo for Mobile */}
                <div className="flex justify-center mb-8">
                  <div
                    className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center"
                    style={{
                      boxShadow: '0 2px 20px rgba(0, 0, 0, 0.06)',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    <ArrowIcon className="w-8 h-8 text-[#00D4FF]" />
                  </div>
                </div>

                {/* Steps List */}
                <div className="space-y-3">
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-white"
                      style={{
                        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm"
                        style={{
                          backgroundColor: '#1D1D1F',
                          color: '#FFFFFF',
                        }}
                      >
                        {step.id}
                      </div>
                      <div>
                        <p
                          className="text-xs font-medium uppercase tracking-wider mb-1"
                          style={{ color: '#00D4FF' }}
                        >
                          {step.duration}
                        </p>
                        <h3
                          className="font-semibold text-lg"
                          style={{ color: '#1D1D1F' }}
                        >
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop: Circular Layout */}
            <div className="hidden lg:block relative" style={{ width: svgSize, height: svgSize }}>
              {/* SVG for circle path */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox={`0 0 ${svgSize} ${svgSize}`}
              >
                {/* Clean circular path */}
                <circle
                  cx={center}
                  cy={center}
                  r={circleRadius}
                  fill="none"
                  stroke="rgba(0, 0, 0, 0.08)"
                  strokeWidth="1"
                />
                {/* Subtle dashed progress indicator */}
                <circle
                  cx={center}
                  cy={center}
                  r={circleRadius}
                  fill="none"
                  stroke="rgba(0, 212, 255, 0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                />
              </svg>

              {/* Center Logo */}
              <div
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Subtle glow */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
                    transform: 'scale(3)',
                  }}
                />
                {/* Logo container */}
                <div
                  className="relative w-28 h-28 rounded-full bg-white flex items-center justify-center"
                  style={{
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: '#1D1D1F',
                    }}
                  >
                    <span
                      className="text-2xl font-bold"
                      style={{ color: '#FFFFFF' }}
                    >
                      5
                    </span>
                  </div>
                </div>
              </div>

              {/* Step Nodes */}
              {steps.map((step) => {
                const pos = getPosition(step.angle);
                return (
                  <div
                    key={step.id}
                    className="absolute"
                    style={{
                      left: pos.x,
                      top: pos.y,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="flex flex-col items-center text-center group cursor-default">
                      {/* Step Number Circle */}
                      <div
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center font-semibold text-lg mb-3 transition-all duration-300 group-hover:scale-105"
                        style={{
                          boxShadow: '0 2px 16px rgba(0, 0, 0, 0.08)',
                          border: '1px solid rgba(0, 0, 0, 0.06)',
                          color: '#1D1D1F',
                        }}
                      >
                        {step.id}
                      </div>
                      {/* Time Estimate */}
                      <p
                        className="text-xs font-medium uppercase tracking-wider mb-1 whitespace-nowrap"
                        style={{ color: '#00D4FF' }}
                      >
                        {step.duration}
                      </p>
                      {/* Step Title */}
                      <h3
                        className="font-semibold text-base whitespace-nowrap max-w-[140px] leading-tight"
                        style={{ color: '#1D1D1F' }}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
