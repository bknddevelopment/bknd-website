import { AnimateOnScroll } from './AnimateOnScroll';

const testimonials = [
  {
    quote: "BKND delivered our entire marketing stack in 3 weeks. Other agencies quoted 3 months. The speed alone paid for itself, but the quality exceeded what we expected from a much longer timeline.",
    name: 'Michael Chen',
    title: 'VP of Growth',
    company: 'TechFlow',
    avatar: 'MC',
  },
  {
    quote: "First agency that actually cared about our revenue numbers, not just vanity metrics. Within 90 days, our pipeline doubled and cost per lead dropped 40%. They get that marketing exists to drive business outcomes.",
    name: 'Sarah Rodriguez',
    title: 'Marketing Director',
    company: 'CloudBase',
    avatar: 'SR',
  },
  {
    quote: "Finally an agency that understands our tech stack. No hand-holding required on integrations, no amateur hour with our analytics setup. They plugged in and started driving results from week one.",
    name: 'David Kim',
    title: 'CEO',
    company: 'Nexus Digital',
    avatar: 'DK',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#1a1a1a] relative overflow-hidden py-20 lg:py-28">
      {/* Orange pixel decorations - top left */}
      <div className="absolute top-8 left-8 flex gap-1">
        <div className="w-2 h-2 bg-sg-orange" />
        <div className="w-2 h-2 bg-sg-orange" />
        <div className="w-2 h-2 bg-sg-orange opacity-60" />
      </div>
      <div className="absolute top-12 left-8 flex gap-1">
        <div className="w-2 h-2 bg-sg-orange opacity-60" />
        <div className="w-2 h-2 bg-sg-orange" />
      </div>
      <div className="absolute top-16 left-8">
        <div className="w-2 h-2 bg-sg-orange opacity-40" />
      </div>

      {/* Orange pixel decorations - bottom right */}
      <div className="absolute bottom-16 right-8">
        <div className="w-2 h-2 bg-sg-orange opacity-40" />
      </div>
      <div className="absolute bottom-12 right-8 flex gap-1">
        <div className="w-2 h-2 bg-sg-orange" />
        <div className="w-2 h-2 bg-sg-orange opacity-60" />
      </div>
      <div className="absolute bottom-8 right-8 flex gap-1">
        <div className="w-2 h-2 bg-sg-orange opacity-60" />
        <div className="w-2 h-2 bg-sg-orange" />
        <div className="w-2 h-2 bg-sg-orange" />
      </div>

      <div className="container-sg relative">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-sg-orange font-medium text-sm uppercase tracking-wider mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              People Love Working With Us
            </h2>
          </div>
        </AnimateOnScroll>

        {/* 3-Column Grid */}
        <AnimateOnScroll delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-white/10 rounded-lg p-8 hover:border-white/20 transition-colors"
              >
                {/* Quote mark */}
                <svg
                  className="w-10 h-10 text-sg-orange mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>

                {/* Quote text */}
                <blockquote className="text-white text-base leading-relaxed mb-8">
                  {testimonial.quote}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-sg-orange to-sg-gold flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
