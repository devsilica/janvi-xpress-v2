"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui";

const card = {
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

export default function QuickTrackCard() {
  const router = useRouter();
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrack = () => {
    if (!trackingNumber.trim()) return;

    router.push(`/track/${trackingNumber.trim()}`);
  };

  return (
    <motion.div
      variants={card}
      initial="hidden"
      animate="show"
      whileHover={{
        y: -6,
        transition: {
          duration: 0.25,
        },
      }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold">
          Quick Track
        </h3>

        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <Search size={20} />
        </motion.div>
      </div>

      {/* Input */}
      <motion.input
        whileFocus={{
          scale: 1.01,
        }}
        transition={{ duration: 0.2 }}
        type="text"
        placeholder="Enter Tracking Number"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleTrack();
          }
        }}
        className="mb-4 w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-[#0E9AA7]"
      />

      {/* Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        <Button
          className="w-full"
          onClick={handleTrack}
        >
          Track Shipment
        </Button>
      </motion.div>

      {/* Recent Shipment */}
      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        transition={{ duration: 0.2 }}
        className="mt-8 rounded-2xl bg-slate-50 p-4"
      >
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Recent Shipment
        </p>

        <h4 className="mt-2 font-semibold">
          JX-309231
        </h4>

        <p className="text-sm text-slate-500">
          Singapore → Canada
        </p>
      </motion.div>
    </motion.div>
  );
}
