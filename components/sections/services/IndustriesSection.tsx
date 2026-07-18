"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui";

const industries = [
  "E-Commerce",
  "Manufacturing",
  "Retail",
  "Automotive",
  "Healthcare",
  "Construction",
  "Technology",
  "Import & Export",
];

export default function IndustriesSection() {
  return (
    <Section>
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
            Industries We Serve
          </h2>

          <p className="mt-4 text-slate-600">
            Supporting businesses across multiple industries.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{
                opacity: 0,
                y: 30,
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
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-2xl border border-slate-200 p-6 text-center font-semibold transition-all hover:border-[#0E9AA7]/20 hover:shadow-xl"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}