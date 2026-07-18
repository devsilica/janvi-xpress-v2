"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui";
import FAQItem from "./FAQItem";
import { faqs } from "./data";

export default function FAQ() {
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
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Find answers to the most common questions about our freight,
            logistics, customs clearance, and shipping services.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl space-y-5"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}