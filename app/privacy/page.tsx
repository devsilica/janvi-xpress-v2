"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "When you use Janvi Xpress, we may collect personal information including your name, email address, phone number, pickup and delivery addresses, shipment details, and any information you voluntarily provide when requesting our services.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use your information to process shipments, provide tracking updates, communicate with you, improve our logistics services, prevent fraud, and comply with applicable legal obligations.",
    },
    {
      title: "3. Sharing Your Information",
      content:
        "Janvi Xpress does not sell your personal information. We may share your information only with trusted service providers, logistics partners, customs authorities, or when required by law.",
    },
    {
      title: "4. Data Security",
      content:
        "We implement industry-standard administrative, technical, and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
    },
    {
      title: "5. Cookies",
      content:
        "Our website uses cookies and similar technologies to improve functionality, remember your preferences, analyze website traffic, and enhance your overall browsing experience.",
    },
    {
      title: "6. Data Retention",
      content:
        "We retain customer information only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.",
    },
    {
      title: "7. Your Rights",
      content:
        "Depending on your location, you may have the right to request access to your personal information, request corrections, request deletion, or object to certain processing activities.",
    },
    {
      title: "8. Third-Party Services",
      content:
        "Our platform may use trusted third-party providers such as Supabase, Cloudflare Turnstile, analytics providers, and payment services to operate securely and efficiently.",
    },
    {
      title: "9. Contact Us",
      content:
        "If you have any questions regarding this Privacy Policy or how your information is handled, please contact Janvi Xpress through our official support channels.",
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
              Privacy Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-3xl text-lg leading-8 text-white/85"
            >
              Your privacy matters to us. This Privacy Policy explains how
              Janvi Xpress collects, uses, protects, and manages your
              personal information whenever you use our logistics services
              or interact with our website.
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