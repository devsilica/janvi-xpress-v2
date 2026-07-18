"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe2, ArrowRight } from "lucide-react";

import {
  Display,
  Label,
  Button,
} from "@/components/ui";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
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
      ease: "easeOut",
    },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-xl"
    >
      {/* Badge */}
      <motion.div
        variants={item}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-2"
      >
        <Globe2 size={16} className="text-[#0E9AA7]" />

        <Label className="tracking-wider">
          GLOBAL NETWORK LIVE
        </Label>
      </motion.div>

      {/* Heading */}
      <motion.div variants={item}>
        <Display>
          Global Logistics,
          <br />
          <span className="text-[#0E9AA7]">
            Reimagined.
          </span>
        </Display>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={item}
        className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
      >
        Experience reliable air and sea freight solutions with real-time
        shipment tracking, customs expertise, warehousing, and global logistics
        tailored for businesses and individuals.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={item}
        className="mt-10 flex flex-wrap gap-4"
      >
        <Link href="/request-quote">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Button size="lg">
              Request Quote
            </Button>
          </motion.div>
        </Link>

        <Link href="/track">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Button variant="outline" size="lg">
              Track Shipment
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </Link>
      </motion.div>

      {/* Trust Indicators */}
  {/* Trust Indicators */}
<motion.div
  variants={item}
  className="mt-10 flex flex-wrap gap-6"
>
  {[
  {
    number: "120+",
    label: "Countries",
  },
  {
    number: "99.9%",
    label: "Delivery Success",
  },
  {
    number: "24/7",
    label: "Live Support",
  },
].map((stat, index) => (
  <motion.div
    key={stat.label}
    initial={{
      opacity: 0,
      x: index % 2 === 0 ? -80 : 80,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    viewport={{ once: true }}
    transition={{
      duration: 0.7,
      delay: index * 0.2,
      ease: "easeOut",
    }}
    whileHover={{
      y: -8,
      scale: 1.05,
    }}
    className="rounded-2xl px-2 py-1"
  >
    <h3 className="font-[var(--font-number)] text-3xl font-bold text-[#0E9AA7]">
      {stat.number}
    </h3>

    <p className="mt-1 text-sm text-slate-500">
      {stat.label}
    </p>
  </motion.div>
))}
</motion.div>
    </motion.div>
  );
}