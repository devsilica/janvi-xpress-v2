"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui";

const faqs = [
  {
    question: "Do you handle international shipments?",
    answer:
      "Yes. We provide both international air and sea freight services.",
  },
  {
    question: "Do you offer customs clearance?",
    answer:
      "Yes. We manage customs clearance and shipping documentation.",
  },
  {
    question: "Can you help source products?",
    answer:
      "Yes. Our procurement service helps businesses source products globally.",
  },
];

export default function ServicesFAQ() {
  return (
    <Section>
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Cards */}
        <div className="mx-auto mt-12 max-w-4xl space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="rounded-2xl border border-slate-200 p-6 transition-all hover:border-[#0E9AA7]/20 hover:shadow-lg"
            >
              <h3 className="font-semibold">
                {faq.question}
              </h3>

              <p className="mt-3 text-slate-600">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}