"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Track", href: "/track" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-lg"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/logos/janvi-logo.png"
              alt="Janvi Xpress"
              width={200}
              height={200}
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={link.href}
                className={`relative transition ${
                  pathname === link.href
                    ? "font-semibold text-[#0E9AA7]"
                    : "text-gray-700 hover:text-[#0E9AA7]"
                }`}
              >
                {link.name}

                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#0E9AA7]"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link href="/request-quote">
              <Button>Get a Quote</Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden border-t bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-6 p-6">

              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`transition ${
                      pathname === link.href
                        ? "font-semibold text-[#0E9AA7]"
                        : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/request-quote"
                  onClick={() => setIsOpen(false)}
                >
                  <Button>Get a Quote</Button>
                </Link>
              </motion.div>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}