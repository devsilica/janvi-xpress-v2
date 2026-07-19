"use client";

import { motion } from "framer-motion";
import {
  Plane,
  Ship,
  Globe2,
  Warehouse,
  ShoppingCart,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import type { ServiceIcon } from "./data";

interface ServiceCardProps {
  icon: ServiceIcon;
  title: string;
  description: string;
  index?: number;
}

const iconMap = {
  plane: Plane,
  ship: Ship,
  globe: Globe2,
  warehouse: Warehouse,
  shopping: ShoppingCart,
  shield: ShieldCheck,
};

export default function ServiceCard({
  icon,
  title,
  description,
  index = 0,
}: ServiceCardProps) {
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
      <motion.div
        whileHover={{
          rotate: 12,
          scale: 1.1,
        }}
        transition={{
          duration: 0.25,
        }}
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0E9AA7]/10"
      >
        <Icon className="h-8 w-8 text-[#0E9AA7]" />
      </motion.div>

      <h3 className="mb-4 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="leading-7 text-slate-500">
        {description}
      </p>

      <motion.button
        whileHover={{
          x: 5,
        }}
        className="mt-8 flex items-center gap-2 font-semibold text-[#0E9AA7]"
      >
        Learn More

        <motion.div
          animate={{
            x: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowRight className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}