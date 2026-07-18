"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PackageSearch,
  ArrowRight,
  ShieldCheck,
  Clock3,
  Globe2,
} from "lucide-react";

import { Container, Section } from "@/components/ui";

export default function TrackHero() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-slate-50 pt-36 pb-24">
      {/* Background Decorations */}
      <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-teal-200/20 blur-3xl" />

      <div className="absolute left-20 top-40 h-3 w-3 rounded-full bg-cyan-400/70" />
      <div className="absolute right-24 top-56 h-4 w-4 rounded-full bg-teal-300/70" />
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
            <PackageSearch className="h-4 w-4" />
            SHIPMENT TRACKING
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 md:text-6xl lg:text-7xl">
            Track Your
            <span className="block text-[#0E9AA7]">
              Shipment In Real Time
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Stay informed every step of the way. Enter your shipment tracking
            reference to receive real-time updates on your cargo's journey,
            delivery status, and estimated arrival.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#tracking-form"
              className="group inline-flex items-center gap-2 rounded-2xl bg-[#0E9AA7] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0C8894] hover:shadow-xl"
            >
              Track Shipment

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Features */}
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <motion.div
              whileHover={{
                y: -5,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                <Clock3 className="h-7 w-7 text-[#0E9AA7]" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Live Updates
              </h3>

              <p className="mt-3 text-slate-600">
                Receive up-to-date tracking information throughout your shipment.
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
                Secure Tracking
              </h3>

              <p className="mt-3 text-slate-600">
                Your shipment information is protected and always accessible.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                <Globe2 className="h-7 w-7 text-[#0E9AA7]" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Worldwide Coverage
              </h3>

              <p className="mt-3 text-slate-600">
                Track international and domestic shipments from one place.
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