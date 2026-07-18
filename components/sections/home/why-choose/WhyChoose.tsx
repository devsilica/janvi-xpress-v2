"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui";
import FeatureCard from "./FeatureCard";
import { features } from "./data";

export default function WhyChoose() {
  return (
    <section className="bg-white py-28">
      <Container>

        {/* Section Header */}
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="inline-flex rounded-full bg-[#0E9AA7]/10 px-4 py-2 text-sm font-semibold text-[#0E9AA7]"
          >
            WHY CHOOSE JANVI XPRESS
          </motion.span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            Trusted Freight & Logistics Partner
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            We combine speed, security, transparency, and exceptional customer
            service to deliver dependable freight and logistics solutions for
            businesses and individuals worldwide.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}