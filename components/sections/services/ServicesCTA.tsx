"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui";

export default function ServicesCTA() {
  return (
    <Section className="bg-[#0E9AA7] text-white">
      <Container>
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.6,
            }}
            className="text-5xl font-bold"
          >
            Ready To Move Your Cargo?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="mx-auto mt-6 max-w-2xl text-cyan-100"
          >
            Get reliable logistics support from
            Janvi Xpress today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="mt-8 inline-block"
          >
            <Link
              href="/request-quote"
              className="inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-[#0E9AA7]"
            >
              Request A Quote
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}