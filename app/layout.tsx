import type { Metadata } from "next";

import CookieBanner from "@/components/cookie/CookieBanner";
import {
  Inter,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-number",
});

export const metadata: Metadata = {
  title: "Janvi Xpress",
  description: "Premium International Air Freight & Logistics",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jakarta.variable} ${space.variable}`}
      >
        {children}


         <CookieBanner />
      </body>
    </html>
  );
}

