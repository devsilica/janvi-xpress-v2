"use client";

import Image from "next/image";

export default function HeroGlobe() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-[#0E9AA7]/10 blur-3xl" />

      {/* Globe */}
      <div className="relative z-10">

        <Image
          src="/3d/globe.png"
          alt="Global Logistics Network"
          width={520}
          height={520}
          priority
          className="animate-[float_6s_ease-in-out_infinite]"
        />

      </div>

      {/* Floating Card */}
      <div className="absolute left-0 top-16 rounded-2xl bg-white p-4 shadow-xl">
        <p className="text-xs text-slate-500">
          Active Shipment
        </p>

        <h3 className="mt-1 font-semibold">
          Lagos → London
        </h3>

        <span className="mt-2 inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-[#0E9AA7]">
          In Transit
        </span>
      </div>

      {/* Floating Plane */}
      <div className="absolute bottom-12 right-2 rounded-full bg-white p-3 shadow-xl">
        ✈️
      </div>

    </div>
  );
}