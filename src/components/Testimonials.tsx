import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";

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

// Star rating component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-[#1D1D1F]" : "text-[#D2D2D7]"}`}
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
              Real Results From Real Clients
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
                  boxShadow:
                    "0 4px 6px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.08)",
                }}
              >
                {/* Quote mark */}
                <svg
                  className="w-10 h-10 text-[#00D4FF] mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
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
                      {testimonial.company
                        ? `${testimonial.title}, ${testimonial.company}`
                        : testimonial.title}
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
