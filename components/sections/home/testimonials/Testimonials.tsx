"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./data";

export default function Testimonials() {
  return (
    <section className="bg-[#F8FAF9] py-28">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#0E9AA7]/10 px-4 py-2 text-sm font-semibold text-[#0E9AA7]">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            Trusted by Businesses Worldwide
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Our commitment to reliable freight and logistics solutions has earned
            the trust of businesses and individuals across international markets.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              company={testimonial.company}
              rating={testimonial.rating}
              review={testimonial.review}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}