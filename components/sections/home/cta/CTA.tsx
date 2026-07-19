"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PackageCheck } from "lucide-react";
import { Container } from "@/components/ui";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0E9AA7] py-32">

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl"
      />

      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >

          {/* Icon */}
          <motion.div
            variants={item}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur"
          >
            <PackageCheck className="h-10 w-10 text-white" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={item}
            className="text-5xl font-bold tracking-tight text-white"
          >
            Ready to Move Your Cargo?
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-white/80"
          >
            Whether by air or sea, Janvi Xpress provides dependable freight,
            customs clearance, warehousing, procurement, and global logistics
            services tailored to your business.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-col justify-center gap-5 sm:flex-row"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-[#0E9AA7] shadow-lg transition"
              >
                Request Quote

                <motion.div
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <Link
                href="/track"
                className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0E9AA7]"
              >
                Track Shipment
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}