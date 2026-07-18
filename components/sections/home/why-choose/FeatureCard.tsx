"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Globe2,
  MapPinned,
  Headset,
  BadgeDollarSign,
} from "lucide-react";

interface FeatureCardProps {
  icon:
    | "shield"
    | "zap"
    | "globe"
    | "map"
    | "headset"
    | "badge";
  title: string;
  description: string;
  index?: number;
}

const iconMap = {
  shield: ShieldCheck,
  zap: Zap,
  globe: Globe2,
  map: MapPinned,
  headset: Headset,
  badge: BadgeDollarSign,
};

export default function FeatureCard({
  icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  const Icon = iconMap[icon];

  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: fromLeft ? -100 : 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#0E9AA7]/20 hover:shadow-2xl"
    >
      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: 12,
          scale: 1.12,
        }}
        transition={{
          duration: 0.25,
        }}
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0E9AA7]/10"
      >
        <Icon className="h-8 w-8 text-[#0E9AA7]" />
      </motion.div>

      {/* Title */}
      <h3 className="mb-3 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-7 text-slate-500">
        {description}
      </p>
    </motion.div>
  );
}