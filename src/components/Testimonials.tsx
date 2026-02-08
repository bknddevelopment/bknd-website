"use client";

import Image from "next/image";

const testimonials = [
  {
    quote:
      "BKND Development delivered exactly what they promised. Their keyword strategy worked like a charm—almost immediately we saw a steady stream of high-intent inquiries. Not fluff, not vanity metrics. Real customers ready to buy.",
    name: "R.F.",
    title: "Construction Business Owner",
    company: "New Jersey",
    image: "/images/testimonials/randy-franco.jpg",
    rating: 5,
  },
  {
    quote:
      "These guys definitely make things happen for small businesses. We are seeing nothing but results. If you want real visibility and customers who are actually searching for what you offer, BKND delivers.",
    name: "A.W.",
    title: "Retail Business Owner",
    company: "New Jersey",
    image: "/images/testimonials/andrew-williams.jpg",
    rating: 5,
  },
  {
    quote:
      "These guys are the real deal. Best investment we made for our small business. They focus on what actually matters—getting you in front of customers who are ready to buy, not just vanity numbers.",
    name: "Rich C.",
    title: "Small Business Owner",
    company: "",
    image: "/images/testimonials/rich-c.jpg",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-[#FBBC04]" : "text-[#D2D2D7]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Removed scroll-reveal variants - content is always visible

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-24"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F5F7 100%)",
      }}
    >
      <div className="container-sg relative">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#6E6E73] font-medium text-sm uppercase tracking-wider mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#1D1D1F] tracking-tight">
            Real Results From Real Clients
          </h2>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-[18px] p-8 border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-[#00D4FF]/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.06),0_0_20px_rgba(0,212,255,0.08)] cursor-default"
              style={{
                boxShadow:
                  "0 4px 6px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              {/* Quote mark - larger, decorative */}
              <svg
                className="w-14 h-14 text-[#00D4FF] mb-5 opacity-30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Star Rating - gold */}
              <StarRating rating={testimonial.rating} />

              {/* Quote text */}
              <blockquote className="text-[#1D1D1F] text-base leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-[#00D4FF]/40 to-[#06B6D4]/20" />
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} headshot`}
                    width={56}
                    height={56}
                    className="relative rounded-full object-cover ring-2 ring-white"
                  />
                </div>
                <div>
                  <div className="text-[#1D1D1F] font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-[#86868B] text-sm">
                    {testimonial.company
                      ? `${testimonial.title}, ${testimonial.company}`
                      : testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
