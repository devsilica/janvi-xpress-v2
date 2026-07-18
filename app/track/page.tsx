import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import TrackHero from "@/components/sections/track/TrackHero";
import TrackingSearch from "@/components/sections/track/TrackingSearch";
import TrackingCTA from "@/components/sections/track/TrackingCTA";

export default function TrackPage() {
  return (
    <>
      <Navbar />

      <TrackHero />

      <TrackingSearch />

      <TrackingCTA />

      <Footer />
    </>
  );
}