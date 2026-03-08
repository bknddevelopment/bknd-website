import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogoBar from "@/components/ClientLogoBar";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import OpusiteShowcase from "@/components/OpusiteShowcase";
import Testimonials from "@/components/Testimonials";
import Methodology from "@/components/Methodology";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import ExitIntentModal from "@/components/ExitIntentModal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogoBar />
        <WhyUs />
        <Services />
        <OpusiteShowcase />
        <Testimonials />
        <Methodology />
        <Contact />
      </main>
      <Footer />
      <StickyCtaBar />
      <ExitIntentModal />
    </>
  );
}
