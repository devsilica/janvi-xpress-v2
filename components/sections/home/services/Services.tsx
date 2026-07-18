"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui";

import ServiceCard from "./ServiceCard";
import { services } from "./data";

export default function Services() {
  return (
    <section className="bg-[#F8FAF9] py-28">
      <Container>

        {/* Heading */}
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="inline-flex rounded-full bg-[#0E9AA7]/10 px-4 py-2 text-sm font-semibold text-[#0E9AA7]"
          >
            FREIGHT & LOGISTICS SERVICES
          </motion.span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            Comprehensive Freight & Logistics Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Janvi Xpress delivers reliable air cargo, sea cargo, import and
            export, warehousing, procurement, and customs clearance services
            designed to simplify global trade for businesses and individuals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* CTA */}
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
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 rounded-full border border-[#0E9AA7] px-8 py-4 font-semibold text-[#0E9AA7] transition-all hover:bg-[#0E9AA7] hover:text-white"
            >
              View All Services

              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

      </Container>
    </section>
  );
}