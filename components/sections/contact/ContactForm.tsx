"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Container, Section } from "@/components/ui";

export default function ContactForm() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl"
        >
          {/* Header */}
          <div className="border-b border-slate-100 px-8 py-10 text-center">
            <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold tracking-wide text-[#0E9AA7]">
              SEND US A MESSAGE
            </span>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Let's Discuss Your Shipping Needs
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Fill out the form below and our logistics team will get back to
              you as soon as possible.
            </p>
          </div>

          {/* Form */}
          <form className="grid gap-6 p-8 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 transition-all duration-300 placeholder:text-slate-400 focus:border-[#0E9AA7] focus:outline-none focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 transition-all duration-300 placeholder:text-slate-400 focus:border-[#0E9AA7] focus:outline-none focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+234..."
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 transition-all duration-300 placeholder:text-slate-400 focus:border-[#0E9AA7] focus:outline-none focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Subject
              </label>

              <input
                type="text"
                placeholder="Freight Inquiry"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 transition-all duration-300 placeholder:text-slate-400 focus:border-[#0E9AA7] focus:outline-none focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell us about your shipment or logistics requirements..."
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 transition-all duration-300 placeholder:text-slate-400 focus:border-[#0E9AA7] focus:outline-none focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            <div className="md:col-span-2">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0E9AA7] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0C8894] hover:shadow-xl md:w-auto"
              >
                Send Message

                <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </Container>
    </Section>
  );
}