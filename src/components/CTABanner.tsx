export default function CTABanner() {
  return (
    <section className="py-16 bg-[#F27038]">
      <div className="container-sg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white text-2xl font-bold text-center md:text-left">
            Ready to Skyrocket Your Growth?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-[#F27038] px-8 py-4 rounded-md font-semibold hover:bg-white/90 transition-colors"
          >
            Work With Us
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
