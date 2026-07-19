"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

import { Container } from "@/components/ui";



const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-16 py-20 md:grid-cols-2 lg:grid-cols-5"
        >
          {/* Company */}
          <motion.div variants={item}>
            <motion.h3
              whileHover={{ scale: 1.03 }}
              className="text-3xl font-bold"
            >
              Janvi<span className="text-[#0E9AA7]"> Xpress</span>
            </motion.h3>

            <p className="mt-6 leading-8 text-slate-400">
              Reliable freight and logistics solutions connecting businesses
              through air cargo, sea cargo, customs clearance, warehousing,
              procurement, and import & export services.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={item}>
            <h4 className="mb-6 text-lg font-semibold">
              Services
            </h4>

            <ul className="space-y-4 text-slate-400">
              {[
                "Air Cargo",
                "Sea Cargo",
                "Import & Export",
                "Warehousing",
                "Procurement",
                "Customs Clearance",
              ].map((service) => (
                <motion.li
                  key={service}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={item}>
            <h4 className="mb-6 text-lg font-semibold">
              Company
            </h4>

            <ul className="space-y-4 text-slate-400">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Request Quote", "/request-quote"],
                ["Track Shipment", "/track"],
                ["Contact", "/contact"],
              ].map(([name, href]) => (
                <motion.li
                  key={href}
                  whileHover={{ x: 6 }}
                >
                  <Link
                    href={href}
                    className="transition hover:text-white"
                  >
                    {name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={item}>
            <h4 className="mb-6 text-lg font-semibold">
              Legal
            </h4>

            <ul className="space-y-4 text-slate-400">

              <motion.li whileHover={{ x: 6 }}>
                <Link
                  href="/privacy"
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </Link>
              </motion.li>

              <motion.li whileHover={{ x: 6 }}>
                <Link
                  href="/terms"
                  className="transition hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </motion.li>

            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>

            <h4 className="mb-6 text-lg font-semibold">
              Contact Us
            </h4>

            <div className="space-y-5">

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3"
              >
                <MapPin className="mt-1 h-5 w-5 text-[#0E9AA7]" />

                <span className="text-slate-400">
                  Lagos, Nigeria
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
              >
                <Phone className="h-5 w-5 text-[#0E9AA7]" />

                <span className="text-slate-400">
                  +234 904 823 6914
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
              >
                <Mail className="h-5 w-5 text-[#0E9AA7]" />

                <span className="text-slate-400">
                  janvixpress247@gmail.com
                </span>
              </motion.div>

            </div>

            {/* Socials */}

            <div className="mt-8 flex gap-4">

              {[
                [
                  "https://web.facebook.com/ayodimeji.taiwo.98/?_rdc=1&_rdr#",
                  <FaFacebookF key="fb" />,
                ],
                [
                  "https://x.com/JanviXpress?s=20",
                  <FaTwitter key="tw" />,
                ],
                [
                  "https://www.linkedin.com/in/caleb-taiwo-83212a232/",
                  <FaLinkedinIn key="ln" />,
                ],
                [
                  "https://www.tiktok.com/@janvi.xpress",
                  <FaTiktok key="tt" />,
                ],
              ].map(([href, icon], index) => (
                <motion.a
                  key={index}
                  href={href as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -6,
                    scale: 1.15,
                    rotate: 8,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="rounded-full bg-slate-800 p-3 transition hover:bg-[#0E9AA7]"
                >
                  {icon}
                </motion.a>
              ))}

            </div>

          </motion.div>
        </motion.div>

        {/* Bottom */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="border-t border-slate-800 py-8"
        >
          <div className="flex flex-col items-center justify-between gap-5 text-sm text-slate-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} Janvi Xpress.
              All rights reserved.
            </p>

            <div className="flex items-center gap-6">

              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms & Conditions
              </Link>

            </div>

            <p>
              Built with ❤️ by{" "}
              <a
                href="https://wa.me/2347042953337"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0E9AA7] hover:underline"
              >
                Silica
              </a>{" "}
              for Janvi Xpress.
            </p>

          </div>
        </motion.div>

      </Container>
    </footer>
  );
}