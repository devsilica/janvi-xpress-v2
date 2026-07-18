"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Search,
  PackageSearch,
  ShieldCheck,
  Clock3,
  Truck,
  ArrowRight,
} from "lucide-react";

import { Container, Section } from "@/components/ui";

export default function TrackingSearch() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const router = useRouter();

  const handleTrack = () => {
    if (!trackingNumber.trim()) return;

    router.push(`/track/${trackingNumber}`);
  };

  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24">
      {/* Background */}
      <div className="absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-cyan-100/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-[480px] w-[480px] rounded-full bg-teal-100/20 blur-3xl" />

      <Container className="relative">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl"
        >
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left */}
            <div className="p-10 lg:p-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold tracking-wide text-[#0E9AA7]">
                <PackageSearch className="h-4 w-4" />
                SHIPMENT TRACKING
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                Track Your Shipment
                <span className="block text-[#0E9AA7]">
                  In Seconds
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Enter your tracking reference number to access
                the latest shipment status, estimated delivery
                date, and real-time logistics updates.
              </p>

              {/* Search */}
              <div className="mt-10 flex flex-col gap-4 md:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Example: JX-2026-ABC123"
                    value={trackingNumber}
                    onChange={(e) =>
                      setTrackingNumber(e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleTrack();
                      }
                    }}
                    className="w-full rounded-2xl border border-slate-300 py-4 pl-14 pr-5 text-slate-900 transition-all duration-300 placeholder:text-slate-400 focus:border-[#0E9AA7] focus:outline-none focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={handleTrack}
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E9AA7] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0C8894] hover:shadow-xl"
                >
                  Track Shipment

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                Tracking Number Example:
                <span className="font-semibold text-slate-700">
                  {" "}
                  JX-2026-ABC123
                </span>
              </p>
            </div>

            {/* Right */}
            <div className="bg-gradient-to-br from-cyan-50 via-white to-slate-50 p-10 lg:p-12">
              <h3 className="text-2xl font-bold text-slate-900">
                Why Track With Janvi Xpress?
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                    <Clock3 className="h-6 w-6 text-[#0E9AA7]" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Live Shipment Updates
                    </h4>

                    <p className="mt-1 text-slate-600">
                      Follow every stage of your shipment in
                      real time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                    <Truck className="h-6 w-6 text-[#0E9AA7]" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Delivery Progress
                    </h4>

                    <p className="mt-1 text-slate-600">
                      Know where your cargo is from pickup to
                      final delivery.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                    <ShieldCheck className="h-6 w-6 text-[#0E9AA7]" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Safe & Secure
                    </h4>

                    <p className="mt-1 text-slate-600">
                      Access accurate shipment information
                      anytime with confidence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-3xl bg-[#0E9AA7] p-6 text-white">
                <h4 className="text-xl font-bold">
                  Need Help?
                </h4>

                <p className="mt-3 leading-7 text-cyan-100">
                  Can't find your tracking number or have
                  questions about your shipment? Our support
                  team is ready to assist you.
                </p>

                <button className="mt-6 rounded-xl bg-white px-5 py-3 font-semibold text-[#0E9AA7] transition hover:shadow-lg">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}