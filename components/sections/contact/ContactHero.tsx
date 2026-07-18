"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import { Container, Section } from "@/components/ui";

export default function ContactHero() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-slate-50 pt-36 pb-24">
      {/* Background Decorations */}
      <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-100 px-5 py-2 text-sm font-semibold tracking-wide text-[#0E9AA7]">
            CONTACT JANVI XPRESS
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 md:text-6xl lg:text-7xl">
            Let's Move Your
            <span className="block text-[#0E9AA7]">
              Cargo With Confidence
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you need air freight, sea freight, customs clearance,
            procurement, or warehousing, our team is ready to provide reliable
            logistics solutions tailored to your business.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/request-quote"
              className="group inline-flex items-center gap-2 rounded-2xl bg-[#0E9AA7] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0C8894] hover:shadow-xl"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="tel:+2349048236914"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-[#0E9AA7] hover:text-[#0E9AA7]"
            >
              <Phone className="h-5 w-5" />
              Call Us
            </Link>
          </div>

          {/* Quick Contact Cards */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <Phone className="mx-auto mb-3 h-6 w-6 text-[#0E9AA7]" />
              <p className="text-sm text-slate-500">Phone</p>
              <p className="mt-1 font-semibold text-slate-900">
                +234 904 823 6914
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <Mail className="mx-auto mb-3 h-6 w-6 text-[#0E9AA7]" />
              <p className="text-sm text-slate-500">Email</p>
              <p className="mt-1 break-all font-semibold text-slate-900">
                janvixpress247@gmail.com
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <MessageCircle className="mx-auto mb-3 h-6 w-6 text-[#0E9AA7]" />
              <p className="text-sm text-slate-500">WhatsApp</p>
              <p className="mt-1 font-semibold text-slate-900">
                Available 24/7
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}