"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  rating: number;
  review: string;
}

export default function TestimonialCard({
  name,
  company,
  rating,
  review,
}: TestimonialCardProps) {
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
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#0E9AA7]/20 hover:shadow-xl"
    >
      {/* Quote Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0E9AA7]/10">
        <Quote className="h-7 w-7 text-[#0E9AA7]" />
      </div>

      {/* Review */}
      <p className="text-lg leading-8 text-slate-600">
        "{review}"
      </p>

      {/* Rating */}
      <div className="mt-6 flex gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* User */}
      <div className="mt-8 border-t border-slate-100 pt-6">
        <h4 className="text-lg font-bold text-slate-900">
          {name}
        </h4>

        <p className="text-slate-500">
          {company}
        </p>
      </div>
    </motion.div>
  );
}