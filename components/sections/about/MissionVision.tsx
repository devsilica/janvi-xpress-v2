"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function MissionVision() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Our Purpose
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            Mission & Vision
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Everything we do is driven by a commitment to delivering
            dependable logistics services while shaping the future of
            global freight and cargo movement.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Mission */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{ duration: 0.35 }}
            className="group relative overflow-hidden rounded-[32px] bg-white p-10 shadow-lg transition-all"
          >
            {/* Top Accent */}
            <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-cyan-500 to-teal-500" />

            {/* Icon */}
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
                🎯
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              To provide efficient, reliable, and customer-focused
              logistics solutions that connect businesses and
              individuals across global markets through innovation,
              professionalism, and exceptional service.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{ duration: 0.35 }}
            className="group relative overflow-hidden rounded-[32px] bg-white p-10 shadow-lg transition-all"
          >
            {/* Top Accent */}
            <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-teal-500 to-cyan-500" />

            {/* Icon */}
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-3xl">
                🌍
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              Our Vision
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              To become a trusted global logistics partner recognized
              for excellence, innovation, sustainability, and seamless
              cargo movement that empowers businesses worldwide.
            </p>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}