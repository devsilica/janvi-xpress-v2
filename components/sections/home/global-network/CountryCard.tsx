"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CountryCardProps {
  country: string;
  city: string;
  flag: string;
}

export default function CountryCard({
  country,
  city,
  flag,
}: CountryCardProps) {
  return (
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
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-[#0E9AA7]/20 hover:shadow-lg"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0E9AA7]/10 text-3xl">
          {flag}
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">
            {country}
          </h3>

          <p className="text-sm text-slate-500">
            {city}
          </p>
        </div>
      </div>

      <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all group-hover:text-[#0E9AA7] group-hover:translate-x-1 group-hover:-translate-y-1" />
    </motion.div>
  );
}