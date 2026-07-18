import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/home/hero";
import Stats from "@/components/sections/home/stats";
import Services from "@/components/sections/home/services";
import WhyChoose from "@/components/sections/home/why-choose";
import GlobalNetwork from "@/components/sections/home/global-network";
import Testimonials from "@/components/sections/home/testimonials";
import FAQ from "@/components/sections/home/faq";
import CTA from "@/components/sections/home/cta";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
<>
  <Navbar />
  <Hero />
  <Stats />
  <Services />
  <WhyChoose />
  <GlobalNetwork />
  <Testimonials />
  <FAQ />
  <CTA />
  <Footer />
</>
  );
}