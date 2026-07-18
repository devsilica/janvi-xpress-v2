"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using Janvi Xpress, you agree to comply with these Terms & Conditions. If you do not agree, please do not use our services.",
    },
    {
      title: "2. Our Services",
      content:
        "Janvi Xpress provides domestic and international freight forwarding, air cargo, sea cargo, customs clearance, warehousing, procurement, and logistics solutions.",
    },
    {
      title: "3. Customer Responsibilities",
      content:
        "Customers are responsible for providing accurate shipment information, including sender and receiver details, addresses, package contents, weight, and required documentation.",
    },
    {
      title: "4. Prohibited Items",
      content:
        "Shipments containing illegal goods, hazardous materials, weapons, explosives, counterfeit products, or any items prohibited by applicable laws will not be accepted.",
    },
    {
      title: "5. Customs & Import Regulations",
      content:
        "Customers are responsible for ensuring shipments comply with destination-country customs regulations. Any customs duties, taxes, or additional charges remain the responsibility of the customer unless otherwise agreed.",
    },
    {
      title: "6. Delivery Time",
      content:
        "Estimated delivery dates are provided for guidance only and are not guaranteed. Delays may occur due to customs inspections, weather conditions, transportation disruptions, or other circumstances beyond our control.",
    },
    {
      title: "7. Liability",
      content:
        "Janvi Xpress will exercise reasonable care in handling shipments but shall not be liable for indirect, incidental, or consequential damages except where required by applicable law.",
    },
    {
      title: "8. Lost or Damaged Shipments",
      content:
        "Any claim for loss or damage must be submitted promptly with supporting documentation. Compensation, where applicable, will be assessed according to our claims policy and governing laws.",
    },
    {
      title: "9. Privacy",
      content:
        "Your use of our services is also governed by our Privacy Policy, which explains how your personal information is collected, stored, and protected.",
    },
    {
      title: "10. Changes to These Terms",
      content:
        "Janvi Xpress reserves the right to modify these Terms & Conditions at any time. Updated versions will be published on this website with a revised effective date.",
    },
    {
      title: "11. Contact Information",
      content:
        "If you have any questions regarding these Terms & Conditions, please contact Janvi Xpress through our official customer support channels.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">

        {/* Hero */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-[#0E9AA7] via-[#118AB2] to-[#1B4965] py-24 text-white"
        >
          <div className="mx-auto max-w-6xl px-6">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="uppercase tracking-[0.3em] text-white/70"
            >
              Legal
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-5xl font-bold"
            >
              Terms & Conditions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-3xl text-lg leading-8 text-white/85"
            >
              These Terms & Conditions govern your use of Janvi Xpress and our
              logistics services. Please read them carefully before requesting
              or shipping any package through our platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 inline-flex rounded-full bg-white/20 px-5 py-3 backdrop-blur"
            >
              Last Updated • July 2026
            </motion.div>

          </div>
        </motion.section>

        {/* Content */}

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="space-y-8">

              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="rounded-[32px] bg-white p-8 shadow-xl"
                >
                  <h2 className="text-2xl font-bold text-slate-900">
                    {section.title}
                  </h2>

                  <p className="mt-5 leading-8 text-slate-600">
                    {section.content}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}