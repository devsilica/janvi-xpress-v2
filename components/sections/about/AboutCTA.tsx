"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Container, Section } from "@/components/ui";

export default function AboutCTA() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-[#0E9AA7] via-[#0B7F8A] to-[#075B63] py-24 text-white">
      {/* Background Decorations */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide backdrop-blur">
            LET'S MOVE YOUR BUSINESS FORWARD
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Ready To Ship
            <br />
            With Confidence?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cyan-100">
            Whether you're shipping locally or across the globe, Janvi Xpress
            delivers dependable freight forwarding, customs clearance,
            warehousing, and supply chain solutions tailored to your business.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/request-quote"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-[#0E9AA7] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
            >
              <PhoneCall className="h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}