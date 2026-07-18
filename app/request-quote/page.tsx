import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import QuoteHero from "@/components/sections/quote/QuoteHero";
import QuoteForm from "@/components/sections/quote/QuoteForm";
import QuoteBenefits from "@/components/sections/quote/QuoteBenefits";

export default function RequestQuotePage() {
  return (
    <>
      <Navbar />

      <QuoteHero />

      <QuoteForm />

      <QuoteBenefits />

      <Footer />
    </>
  );
}