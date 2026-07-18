"use client";

import { motion } from "framer-motion";
import {
  Plane,
  Ship,
  Globe,
  Warehouse,
  ShoppingCart,
  FileCheck,
} from "lucide-react";

import { Container, Section } from "@/components/ui";

const services = [
  {
    icon: Plane,
    title: "Air Cargo",
    description:
      "Fast and secure air freight solutions worldwide.",
  },

  {
    icon: Ship,
    title: "Sea Cargo",
    description:
      "Cost-effective international ocean freight services.",
  },

  {
    icon: Globe,
    title: "Import & Export",
    description:
      "End-to-end international trade logistics support.",
  },

  {
    icon: Warehouse,
    title: "Warehousing",
    description:
      "Safe storage and inventory management solutions.",
  },

  {
    icon: ShoppingCart,
    title: "Procurement",
    description:
      "Reliable sourcing and purchasing services globally.",
  },

  {
    icon: FileCheck,
    title: "Custom Clearance",
    description:
      "Documentation and customs processing handled professionally.",
  },
];

export default function ServicesGrid() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
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
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#0E9AA7]/20 hover:shadow-xl"
              >
                <motion.div
                  whileHover={{
                    rotate: 12,
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50"
                >
                  <Icon className="h-7 w-7 text-[#0E9AA7]" />
                </motion.div>

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}