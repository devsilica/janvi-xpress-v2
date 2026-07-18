"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Container, Section } from "@/components/ui";

const benefits = [
  {
    title: "Fast Response Time",
    description:
      "Receive timely quotations and updates from our experienced logistics team.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Transparent pricing with cost-effective shipping solutions for every shipment.",
  },
  {
    title: "Global Logistics Network",
    description:
      "Reliable shipping connections across international and domestic destinations.",
  },
  {
    title: "Professional Customs Clearance",
    description:
      "Expert handling of customs documentation to avoid unnecessary delays.",
  },
  {
    title: "Reliable Air & Sea Freight",
    description:
      "Flexible freight solutions tailored to your cargo, timeline, and budget.",
  },
  {
    title: "Dedicated Customer Support",
    description:
      "Friendly professionals ready to assist you before, during, and after shipment.",
  },
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
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function QuoteBenefits() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 to-white">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold tracking-wide text-[#0E9AA7]">
            WHY CHOOSE JANVI XPRESS
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
            Why Request a Quote From Us?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We provide dependable logistics solutions backed by industry
            expertise, transparent pricing, and a commitment to delivering your
            cargo safely and on time.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={item}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
              }}
              className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-cyan-200 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-teal-100 transition-transform duration-300 group-hover:scale-110">
                <CheckCircle className="h-7 w-7 text-[#0E9AA7]" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}