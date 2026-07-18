"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock3,
  Phone,
  Mail,
  Navigation,
} from "lucide-react";

import { Container, Section } from "@/components/ui";

export default function ContactMap() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left */}
            <div className="p-10 lg:p-14">
              <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-[#0E9AA7]">
                VISIT OUR OFFICE
              </span>

              <h2 className="mt-5 text-4xl font-bold text-slate-900">
                We'd Love To Meet You
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Visit our office to discuss your logistics,
                freight forwarding, customs clearance,
                procurement, or warehousing needs.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-2xl bg-cyan-100 p-3">
                    <MapPin className="h-6 w-6 text-[#0E9AA7]" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Office Address
                    </h3>

                    <p className="text-slate-600">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-2xl bg-cyan-100 p-3">
                    <Clock3 className="h-6 w-6 text-[#0E9AA7]" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Working Hours
                    </h3>

                    <p className="text-slate-600">
                      Monday – Saturday
                      <br />
                      8:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-2xl bg-cyan-100 p-3">
                    <Phone className="h-6 w-6 text-[#0E9AA7]" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Phone
                    </h3>

                    <p className="text-slate-600">
                      +234 904 823 6914
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-2xl bg-cyan-100 p-3">
                    <Mail className="h-6 w-6 text-[#0E9AA7]" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Email
                    </h3>

                    <p className="text-slate-600">
                      janvixpress247@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-[#0E9AA7] px-6 py-4 font-semibold text-white transition hover:bg-[#0C8894]">
                <Navigation className="h-5 w-5" />
                Get Directions
              </button>
            </div>

            {/* Right */}
            <div className="flex min-h-[500px] items-center justify-center bg-gradient-to-br from-cyan-50 to-slate-100">
              <div className="text-center">
                <MapPin className="mx-auto h-16 w-16 text-[#0E9AA7]" />

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Google Maps
                </h3>

                <p className="mt-3 text-slate-600">
                  Interactive map will be displayed here.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}