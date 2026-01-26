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

// Flame icon component for center
function FlameIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 23c-3.866 0-7-3.134-7-7 0-2.685 1.504-5.187 3.357-7.229a18.93 18.93 0 0 1 2.862-2.523c.234-.166.452-.32.652-.458.2.138.418.292.652.458a18.93 18.93 0 0 1 2.862 2.523C17.496 10.813 19 13.315 19 16c0 3.866-3.134 7-7 7zm0-15.5c-.685.548-1.5 1.283-2.285 2.146C8.336 11.21 7 13.315 7 16a5 5 0 0 0 10 0c0-2.685-1.336-4.79-2.715-6.354A16.93 16.93 0 0 0 12 7.5z"/>
      <path d="M12 21a3 3 0 0 1-3-3c0-1.5.75-2.5 2-3.5.5-.4 1-.7 1-1 0 .3.5.6 1 1 1.25 1 2 2 2 3.5a3 3 0 0 1-3 3z"/>
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
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(257.07deg, #2F343A 0%, #232020 100%)',
      }}
    >
      {/* Radial Orange Glow in Center */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -30%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(242, 112, 56, 0.25) 0%, rgba(242, 112, 56, 0.1) 30%, transparent 70%)',
        }}
      />

      <div className="container-sg relative z-10">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-orange-DEFAULT text-sm font-medium tracking-wider uppercase mb-4">
              Methodology
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
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
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-full blur-2xl"
                      style={{
                        background: 'radial-gradient(circle, rgba(242, 112, 56, 0.5) 0%, transparent 70%)',
                        transform: 'scale(1.5)',
                      }}
                    />
                    <div className="relative w-20 h-20 rounded-full bg-dark-primary flex items-center justify-center border border-orange-DEFAULT/30">
                      <FlameIcon className="w-10 h-10 text-orange-DEFAULT" />
                    </div>
                  </div>
                </div>

                {/* Steps List */}
                <div className="space-y-4">
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-DEFAULT flex items-center justify-center text-white font-bold">
                        {step.id}
                      </div>
                      <div>
                        <p className="text-orange-DEFAULT text-xs font-medium uppercase tracking-wider mb-1">
                          {step.duration}
                        </p>
                        <h3 className="text-white font-semibold text-lg">
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
              {/* SVG for dotted circle path */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox={`0 0 ${svgSize} ${svgSize}`}
              >
                {/* Dotted circular path */}
                <circle
                  cx={center}
                  cy={center}
                  r={circleRadius}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="2"
                  strokeDasharray="8 12"
                />
              </svg>

              {/* Center Logo with Glow */}
              <div
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-full animate-pulse-glow"
                  style={{
                    background: 'radial-gradient(circle, rgba(242, 112, 56, 0.4) 0%, transparent 70%)',
                    transform: 'scale(2.5)',
                    filter: 'blur(20px)',
                  }}
                />
                {/* Logo container */}
                <div className="relative w-24 h-24 rounded-full bg-dark-primary flex items-center justify-center border-2 border-orange-DEFAULT/50 shadow-orange-glow-lg">
                  <FlameIcon className="w-12 h-12 text-orange-DEFAULT" />
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
                      <div className="w-12 h-12 rounded-full bg-orange-DEFAULT flex items-center justify-center text-white font-bold text-lg mb-3 shadow-orange-glow transition-transform group-hover:scale-110">
                        {step.id}
                      </div>
                      {/* Time Estimate */}
                      <p className="text-orange-DEFAULT text-xs font-medium uppercase tracking-wider mb-1 whitespace-nowrap">
                        {step.duration}
                      </p>
                      {/* Step Title */}
                      <h3 className="text-white font-semibold text-base whitespace-nowrap max-w-[140px] leading-tight">
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
