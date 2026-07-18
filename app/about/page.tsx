import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/sections/about/AboutHero";
import CompanyStory from "@/components/sections/about/CompanyStory";
import MissionVision from "@/components/sections/about/MissionVision";
import AboutWhyChoose from "@/components/sections/about/AboutWhyChoose";
import AboutCTA from "@/components/sections/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <AboutHero />

      <CompanyStory />

      <MissionVision />

      <AboutWhyChoose />

      <AboutCTA />

      <Footer />
    </>
  );
}