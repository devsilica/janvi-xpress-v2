"use client";

import { motion } from "framer-motion";

import { Container, Section } from "@/components/ui";
import HeroContent from "./HeroContent";
import QuickTrackCard from "./QuickTrackCard";
import HeroScene from "@/components/three/HeroScene";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAF9] via-white to-slate-50 pt-28">
      {/* Background Blur */}
      <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-teal-100/30 blur-3xl" />

      {/* Floating Decorations */}
      <div className="absolute left-20 top-40 h-3 w-3 rounded-full bg-cyan-400/70" />

      <div className="absolute right-32 top-56 h-4 w-4 rounded-full bg-teal-300/70" />

      <div className="absolute bottom-32 left-1/2 h-2 w-2 rounded-full bg-cyan-500/70" />

      <Container className="relative">
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-10 lg:grid-cols-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
            }}
            className="relative z-20 lg:col-span-4"
          >
            <HeroContent />
          </motion.div>

          {/* Center */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative z-10 flex items-center justify-center overflow-visible lg:col-span-5"
          >
            {/* Glow Behind 3D */}
            <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-200/40 blur-[120px]" />

            <HeroScene />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative z-20 flex justify-end lg:col-span-3"
          >
            <QuickTrackCard />
          </motion.div>
        </div>
      </Container>

      {/* Bottom Divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    </Section>
  );
}