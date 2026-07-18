"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
  PackageCheck,
} from "lucide-react";

import { Container, Section } from "@/components/ui";

export default function TrackingCTA() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-[#0E9AA7] via-[#0B7F8A] to-[#075B63] py-24 text-white">
      {/* Background Decorations */}
      <div className="absolute -left-24 top-0 h-[400px] w-[400px] rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="absolute left-20 top-32 h-3 w-3 rounded-full bg-white/30" />
      <div className="absolute right-20 bottom-32 h-4 w-4 rounded-full bg-cyan-200/40" />

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mx-auto max-w-5xl text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide backdrop-blur">
            <PackageCheck className="h-4 w-4" />
            READY TO SHIP?
          </span>

          {/* Heading */}
          <h2 className="mt-8 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Need Reliable
            <span className="block">
              Logistics Support?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-100">
            Whether you're shipping locally or internationally,
            Janvi Xpress provides dependable freight forwarding,
            customs clearance, warehousing, procurement, and
            end-to-end logistics solutions tailored to your needs.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div
              whileHover={{
                scale: 1.03,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Link
                href="/request-quote"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-[#0E9AA7] shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                Request a Quote

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.03,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
              >
                <PhoneCall className="h-5 w-5" />
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="mt-2 text-cyan-100">
                Customer Support
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <h3 className="text-3xl font-bold">Global</h3>
              <p className="mt-2 text-cyan-100">
                Shipping Network
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <h3 className="text-3xl font-bold">Fast</h3>
              <p className="mt-2 text-cyan-100">
                Quote Response
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}