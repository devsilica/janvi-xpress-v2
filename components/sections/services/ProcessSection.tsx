"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui";

const steps = [
  {
    number: "01",
    title: "Request a Quote",
    description:
      "Tell us about your shipment, destination, and logistics requirements.",
  },
  {
    number: "02",
    title: "Planning & Documentation",
    description:
      "We prepare all required logistics, customs, and shipping documentation.",
  },
  {
    number: "03",
    title: "Transportation",
    description:
      "Your cargo is shipped safely via air or sea freight.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "Goods arrive safely at their destination with full visibility.",
  },
];

export default function ProcessSection() {
  return (
    <Section className="bg-slate-50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold">
            How It Works
          </h2>

          <p className="mt-4 text-slate-600">
            A simple and efficient logistics process.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
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
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-xl"
            >
              <motion.span
                whileHover={{
                  scale: 1.1,
                }}
                className="text-5xl font-bold text-[#0E9AA7]"
              >
                {step.number}
              </motion.span>

              <h3 className="mt-4 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}