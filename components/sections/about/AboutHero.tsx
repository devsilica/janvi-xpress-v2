"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe2,
  ArrowRight,
  ShieldCheck,
  Plane,
  Ship,
} from "lucide-react";

import { Container, Section } from "@/components/ui";

export default function AboutHero() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-slate-50 pt-36 pb-24">
      {/* Background Blur */}
      <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-[600px] w-[600px] rounded-full bg-teal-100/30 blur-3xl" />

      {/* Floating Decorations */}
      <div className="absolute left-24 top-36 h-3 w-3 rounded-full bg-cyan-400/70" />
      <div className="absolute right-20 top-52 h-4 w-4 rounded-full bg-teal-300/70" />
      <div className="absolute bottom-24 left-1/2 h-2 w-2 rounded-full bg-cyan-500/70" />

      <Container className="relative">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-100 px-5 py-2 text-sm font-semibold tracking-wide text-[#0E9AA7]">
            <Globe2 className="h-4 w-4" />
            ABOUT JANVI XPRESS
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 md:text-6xl lg:text-7xl">
            Moving Cargo Across
            <span className="block text-[#0E9AA7]">
              Borders With Confidence
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Janvi Xpress is a trusted logistics partner providing
            dependable freight forwarding, customs clearance,
            procurement, warehousing, and end-to-end supply chain
            solutions for businesses and individuals across the globe.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/request-quote"
              className="group inline-flex items-center gap-2 rounded-2xl bg-[#0E9AA7] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0C8894] hover:shadow-xl"
            >
              Request a Quote

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-[#0E9AA7] hover:text-[#0E9AA7]"
            >
              Explore Services
            </Link>
          </div>

          {/* Stats / Highlights */}
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <motion.div
              whileHover={{
                y: -5,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                <Plane className="h-7 w-7 text-[#0E9AA7]" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Air Freight
              </h3>

              <p className="mt-3 text-slate-600">
                Fast and reliable international air cargo solutions.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                <Ship className="h-7 w-7 text-[#0E9AA7]" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Sea Freight
              </h3>

              <p className="mt-3 text-slate-600">
                Cost-effective ocean freight for global trade.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                <ShieldCheck className="h-7 w-7 text-[#0E9AA7]" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Trusted Logistics
              </h3>

              <p className="mt-3 text-slate-600">
                Secure shipping backed by dependable customer support.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Bottom Divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    </Section>
  );
}