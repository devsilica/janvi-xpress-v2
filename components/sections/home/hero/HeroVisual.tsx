"use client";

import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">

      <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-100 blur-3xl opacity-50" />

      <Image
        src="/3d/globe.png"
        alt="Global Logistics"
        width={500}
        height={500}
        priority
        className="relative z-10"
      />

    </div>
  );
}