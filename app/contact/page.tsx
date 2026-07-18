import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactCards from "@/components/sections/contact/ContactCards";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactMap from "@/components/sections/contact/ContactMap";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <ContactHero />

      <ContactCards />

      <ContactForm />

      <ContactMap />

      <Footer />
    </>
  );
}