"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");

    if (!accepted) {
      setVisible(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function rejectCookies() {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[95%] max-w-2xl -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">

      <div className="flex items-start gap-4">

        <div className="rounded-2xl bg-cyan-100 p-3">

          <Cookie className="h-7 w-7 text-[#0E9AA7]" />

        </div>

        <div className="flex-1">

          <h3 className="text-lg font-bold">
            We value your privacy
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Janvi Xpress uses cookies to improve your browsing experience,
            remember your preferences, and analyze website traffic.
            By clicking <strong>Accept</strong>, you agree to our use of cookies.
          </p>

          <div className="mt-3">

            <Link
              href="/privacy"
              className="font-semibold text-[#0E9AA7] hover:underline"
            >
              Read our Privacy Policy →
            </Link>

          </div>

          <div className="mt-6 flex flex-wrap gap-3">

            <button
              onClick={acceptCookies}
              className="rounded-xl bg-[#0E9AA7] px-6 py-3 font-semibold text-white transition hover:bg-[#0b7c87]"
            >
              Accept All
            </button>

            <button
              onClick={rejectCookies}
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
            >
              Reject Non-Essential
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}