"use client";

import { motion } from "framer-motion";
import {
  Package,
  Plane,
  Ship,
  ShieldCheck,
  Clock3,
  Globe2,
} from "lucide-react";

import { Container, Section } from "@/components/ui";

const badges = [
  {
    icon: ShieldCheck,
    label: "Secure Shipping",
  },
  {
    icon: Clock3,
    label: "Fast Response",
  },
  {
    icon: Globe2,
    label: "Worldwide Delivery",
  },
];

export default function QuoteHero() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-slate-50 pt-36 pb-24">

      {/* Background Glow */}
      <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl" />

      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute left-12 top-40 hidden rounded-3xl bg-white p-5 shadow-xl lg:block"
      >
        <Plane className="h-8 w-8 text-cyan-600" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute right-16 top-60 hidden rounded-3xl bg-white p-5 shadow-xl lg:block"
      >
        <Ship className="h-8 w-8 text-teal-600" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="absolute bottom-20 left-1/4 hidden rounded-3xl bg-white p-5 shadow-xl lg:block"
      >
        <Package className="h-8 w-8 text-cyan-600" />
      </motion.div>

      <Container>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* Badge */}
          <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Request A Quote
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-slate-900 lg:text-7xl">
            Get A Logistics Quote
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Share your shipment details and receive a customized logistics
            solution tailored to your business. Our team is ready to help
            you move cargo safely, efficiently, and on time.
          </p>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {badges.map((badge) => {
              const Icon = badge.icon;

              return (
                <motion.div
                  key={badge.label}
                  whileHover={{
                    y: -4,
                  }}
                  className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-cyan-600" />

                  <span className="font-medium text-slate-700">
                    {badge.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

      </Container>
    </Section>
  );
}