"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import { Container, Section } from "@/components/ui";

const cards = [
  {
    title: "Call Us",
    description: "+234 904 823 6914",
    href: "tel:+2349048236914",
    icon: Phone,
  },
  {
    title: "Email Us",
    description: "janvixpress247@gmail.com",
    href: "mailto:janvixpress247@gmail.com",
    icon: Mail,
  },
  {
    title: "Visit Our Office",
    description: "Lagos, Nigeria",
    href: "#",
    icon: MapPin,
  },
  {
    title: "WhatsApp",
    description: "Chat With Us",
    href: "https://wa.me/2349048236914",
    icon: MessageCircle,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ContactCards() {
  return (
    <Section className="bg-slate-50">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold tracking-wide text-[#0E9AA7]">
            CONTACT INFORMATION
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
            We're Here To Help
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Reach out through your preferred channel. Our logistics experts are
            ready to assist with freight forwarding, customs clearance, and
            shipping enquiries.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card) => {
            const Icon = card.icon;

            const content = (
              <motion.div
                variants={item}
                whileHover={{
                  y: -8,
                }}
                className="group h-full rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-cyan-200 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-teal-100 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-[#0E9AA7]" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-3 break-words text-slate-600">
                  {card.description}
                </p>

                {card.href !== "#" && (
                  <div className="mt-6 inline-flex items-center gap-2 font-medium text-[#0E9AA7]">
                    Contact
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                )}
              </motion.div>
            );

            return card.href === "#" ? (
              <div key={card.title}>{content}</div>
            ) : (
              <Link
                key={card.title}
                href={card.href}
                target={
                  card.href.startsWith("https") ? "_blank" : undefined
                }
              >
                {content}
              </Link>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}