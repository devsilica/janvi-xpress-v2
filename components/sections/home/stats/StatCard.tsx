"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Package,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import type { StatIcon } from "./data";

interface Props {
  icon: StatIcon;
  value: string;
  title: string;
  description: string;
  index?: number;
}

const iconMap = {
  globe: Globe2,
  package: Package,
  clock: Clock3,
  shield: ShieldCheck,
};

export default function StatCard({
  icon,
  value,
  title,
  description,
  index = 0,
}: Props) {
  const Icon = iconMap[icon];

  const variants = [
    {
      hidden: { opacity: 0, x: -100, y: -40 },
      visible: { opacity: 1, x: 0, y: 0 },
    },
    {
      hidden: { opacity: 0, x: 100, y: -40 },
      visible: { opacity: 1, x: 0, y: 0 },
    },
    {
      hidden: { opacity: 0, x: -100, y: 40 },
      visible: { opacity: 1, x: 0, y: 0 },
    },
    {
      hidden: { opacity: 0, x: 100, y: 40 },
      visible: { opacity: 1, x: 0, y: 0 },
    },
  ];

  const animation = variants[index % 4];

  return (
    <motion.div
      initial={animation.hidden}
      whileInView={animation.visible}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-2xl"
    >
      <motion.div
        whileHover={{
          rotate: 12,
          scale: 1.1,
        }}
        transition={{
          duration: 0.25,
        }}
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50"
      >
        <Icon className="h-7 w-7 text-[#0E9AA7]" />
      </motion.div>

      <h3 className="font-[var(--font-number)] text-4xl font-bold text-slate-900">
        {value}
      </h3>

      <h4 className="mt-3 text-xl font-semibold text-slate-900">
        {title}
      </h4>

      <p className="mt-2 text-slate-500">
        {description}
      </p>
    </motion.div>
  );
}