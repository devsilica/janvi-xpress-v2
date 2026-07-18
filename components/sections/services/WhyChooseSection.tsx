"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Container, Section } from "@/components/ui";

const features = [
  "Reliable Air & Sea Freight",
  "Global Logistics Network",
  "Fast Customs Clearance",
  "Professional Documentation",
  "Secure Warehousing",
  "Procurement Expertise",
];

export default function WhyChooseSection() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-[#0E9AA7]">
              WHY JANVI XPRESS
            </span>

            <h2 className="mt-4 text-5xl font-bold">
              Trusted Logistics Partner
            </h2>

            <p className="mt-6 text-slate-600">
              We provide reliable logistics solutions
              with efficiency, transparency and
              customer satisfaction at the center
              of everything we do.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                  }}
                >
                  <CheckCircle className="h-6 w-6 text-[#0E9AA7]" />
                </motion.div>

                <span className="font-medium">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}