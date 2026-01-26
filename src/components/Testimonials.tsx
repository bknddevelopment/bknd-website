import Image from 'next/image';
import { AnimateOnScroll } from './AnimateOnScroll';

const testimonials = [
  {
    quote: "BKND delivered our entire marketing stack in 3 weeks. Other agencies quoted 3 months. The speed alone paid for itself, but the quality exceeded what we expected from a much longer timeline.",
    name: 'Michael Chen',
    title: 'VP of Growth',
    company: 'TechFlow',
    image: '/bknd-website/images/testimonials/michael-chen.jpg',
    rating: 5,
  },
  {
    quote: "First agency that actually cared about our revenue numbers, not just vanity metrics. Within 90 days, our pipeline doubled and cost per lead dropped 40%. They get that marketing exists to drive business outcomes.",
    name: 'Sarah Rodriguez',
    title: 'Marketing Director',
    company: 'CloudBase',
    image: '/bknd-website/images/testimonials/sarah-rodriguez.jpg',
    rating: 5,
  },
  {
    quote: "Finally an agency that understands our tech stack. No hand-holding required on integrations, no amateur hour with our analytics setup. They plugged in and started driving results from week one.",
    name: 'David Kim',
    title: 'CEO',
    company: 'Nexus Digital',
    image: '/bknd-website/images/testimonials/david-kim.jpg',
    rating: 5,
  },
];

// Star rating component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-[#1D1D1F]' : 'text-[#D2D2D7]'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white relative overflow-hidden py-16 lg:py-20">
      <div className="container-sg relative">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[#6E6E73] font-medium text-sm uppercase tracking-wider mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#1D1D1F] tracking-tight">
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
                className="bg-white rounded-[18px] p-8 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  boxShadow: '0 4px 6px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.08)',
                }}
              >
                {/* Quote mark */}
                <svg
                  className="w-10 h-10 text-[#00D4FF] mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>

                {/* Star Rating */}
                <StarRating rating={testimonial.rating} />

                {/* Quote text */}
                <blockquote className="text-[#1D1D1F] text-base leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} headshot`}
                    width={56}
                    height={56}
                    className="rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <div className="text-[#1D1D1F] font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-[#86868B] text-sm">
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
