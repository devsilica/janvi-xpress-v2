"use client";

import { motion } from "framer-motion";
import { Globe, PackageCheck, ShipWheel } from "lucide-react";
import { Container, Section } from "@/components/ui";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function CompanyStory() {
  return (
    <Section className="overflow-hidden bg-white py-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold tracking-wide text-cyan-700">
              OUR STORY
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
              Building Global Logistics Connections
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Janvi Xpress was founded with a clear vision—to simplify
              international logistics by providing reliable, efficient,
              and transparent freight forwarding solutions for businesses
              and individuals around the world.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Leveraging a strong global network and years of logistics
              expertise, we ensure every shipment moves with precision,
              speed, and care while delivering exceptional customer
              experiences at every stage.
            </p>

            {/* Features */}
            <div className="mt-10 grid gap-5">

              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="rounded-xl bg-cyan-100 p-3">
                  <Globe className="h-6 w-6 text-cyan-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Global Coverage
                  </h4>

                  <p className="text-sm text-slate-500">
                    Connecting businesses across international markets.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="rounded-xl bg-teal-100 p-3">
                  <PackageCheck className="h-6 w-6 text-teal-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Reliable Delivery
                  </h4>

                  <p className="text-sm text-slate-500">
                    Safe, secure and timely cargo transportation.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="rounded-xl bg-cyan-100 p-3">
                  <ShipWheel className="h-6 w-6 text-cyan-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Industry Expertise
                  </h4>

                  <p className="text-sm text-slate-500">
                    Experienced logistics professionals you can trust.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -8,
            }}
            transition={{ duration: 0.3 }}
            className="relative"
          >

            {/* Background Glow */}
            <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-cyan-100 bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-600 p-14 text-white shadow-2xl">

              <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">
                Our Promise
              </p>

              <h3 className="mt-8 text-7xl font-bold">
                100%
              </h3>

              <p className="mt-5 text-2xl font-semibold">
                Commitment to Excellence
              </p>

              <p className="mt-6 max-w-sm leading-8 text-cyan-50">
                Every shipment is handled with precision,
                transparency, and care, ensuring your cargo reaches
                its destination safely and on time.
              </p>

              {/* Bottom Stats */}
              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/20 pt-8">

                <div>
                  <h4 className="text-3xl font-bold">
                    Global
                  </h4>

                  <p className="text-cyan-100">
                    Logistics Network
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold">
                    24/7
                  </h4>

                  <p className="text-cyan-100">
                    Customer Support
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}