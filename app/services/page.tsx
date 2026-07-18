import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import ProcessSection from "@/components/sections/services/ProcessSection";
import IndustriesSection from "@/components/sections/services/IndustriesSection";
import WhyChooseSection from "@/components/sections/services/WhyChooseSection";
import ServicesFAQ from "@/components/sections/services/ServicesFAQ";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <ServicesHero />

      <ServicesGrid />

      <ProcessSection />

      <IndustriesSection />

      <WhyChooseSection />

      <ServicesFAQ />

      <ServicesCTA />

      <Footer />
    </>
  );
}