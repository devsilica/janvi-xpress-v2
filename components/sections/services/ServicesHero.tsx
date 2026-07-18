"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe2,
  ArrowRight,
  Plane,
  Ship,
  Warehouse,
} from "lucide-react";

import { Container, Section } from "@/components/ui";

export default function ServicesHero() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-slate-50 pt-36 pb-28">
      {/* Background Blur */}
      <div className="absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-[620px] w-[620px] rounded-full bg-teal-100/30 blur-3xl" />

      {/* Floating Decorations */}
      <div className="absolute left-20 top-40 h-3 w-3 rounded-full bg-cyan-400/70" />
      <div className="absolute right-24 top-56 h-4 w-4 rounded-full bg-teal-300/70" />
      <div className="absolute bottom-28 left-1/2 h-2 w-2 rounded-full bg-cyan-500/70" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* Badge */}
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-100 px-5 py-2 text-sm font-semibold tracking-wide text-[#0E9AA7]"
          >
            <Globe2 className="h-4 w-4" />
            FREIGHT & LOGISTICS SOLUTIONS
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="mt-8 text-5xl font-bold leading-tight text-slate-900 md:text-6xl lg:text-7xl"
          >
            Comprehensive
            <span className="block text-[#0E9AA7]">
              Freight & Logistics Services
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600"
          >
            Janvi Xpress delivers reliable air freight, sea freight,
            customs clearance, procurement, warehousing, and end-to-end
            logistics solutions that help businesses and individuals
            move cargo efficiently across local and international
            markets.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/request-quote"
              className="group inline-flex items-center gap-2 rounded-2xl bg-[#0E9AA7] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0C8894] hover:shadow-xl"
            >
              Request a Quote

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-[#0E9AA7] hover:text-[#0E9AA7]"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Service Highlights */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            className="mt-20 grid gap-6 md:grid-cols-3"
          >
            <motion.div
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-teal-100">
                <Plane className="h-8 w-8 text-[#0E9AA7]" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Air Freight
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Express and scheduled air cargo services for urgent
                domestic and international shipments.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-teal-100">
                <Ship className="h-8 w-8 text-[#0E9AA7]" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Sea Freight
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Affordable ocean freight solutions for containerized
                cargo, imports, and exports worldwide.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-teal-100">
                <Warehouse className="h-8 w-8 text-[#0E9AA7]" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Warehousing
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Secure storage, inventory management, and distribution
                services to support your supply chain.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom Divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    </Section>
  );
}