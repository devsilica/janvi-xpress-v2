"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui";
import StatCard from "./StatCard";
import { stats } from "./data";

export default function Stats() {
  return (
    <section className="bg-white py-24">
      <Container>

        <motion.div
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
            duration: 0.7,
          }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="text-5xl font-bold">
            Trusted Worldwide
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Delivering excellence through global logistics,
            innovation, and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.title}
              index={index}
              {...stat}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}