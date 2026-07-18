"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Container, Section } from "@/components/ui";

const reasons = [
  "Reliable Air & Sea Freight",
  "Professional Customs Clearance",
  "Global Logistics Network",
  "Secure Warehousing",
  "Procurement Expertise",
  "Dedicated Customer Support",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function AboutWhyChoose() {
  return (
    <Section className="bg-gradient-to-b from-white to-slate-50">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold tracking-wider text-[#0E9AA7]">
            WHY CHOOSE US
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
            Trusted Logistics Partner
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            We combine global logistics expertise with reliable service,
            innovative solutions, and a customer-first approach to deliver
            seamless shipping experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason}
              variants={item}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="group flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-cyan-200 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-teal-100 transition-transform duration-300 group-hover:scale-110">
                <CheckCircle className="h-7 w-7 text-[#0E9AA7]" />
              </div>

              <span className="text-lg font-semibold text-slate-800">
                {reason}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}