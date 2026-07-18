"use client";

import Link from "next/link";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Container, Section } from "@/components/ui";

function makeReferenceCode() {
  const year = new Date().getFullYear();
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();

  return `JX-${year}-${rand}`;
}

export default function QuoteForm() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
  e.preventDefault();

  const formElement = e.currentTarget;

  setLoading(true);
  setError("");
  setSuccess("");

  if (!agreed) {
  setError(
    "Please agree to the Terms & Conditions and Privacy Policy."
  );
  setLoading(false);
  return;
}

  if (!captchaToken) {
    setError("Please complete captcha verification.");
    setLoading(false);
    return;
  }
  

  const form = new FormData(formElement);

  const reference_code = makeReferenceCode();

  const payload = {
    full_name: form.get("full_name"),
    sender_phone: form.get("sender_phone"),
    sender_email: form.get("sender_email"),

    pickup_location: form.get("pickup_location"),
    destination_country: form.get("destination_country"),

    package_type: form.get("package_type"),

    receiver_name: form.get("receiver_name"),
    receiver_phone: form.get("receiver_phone"),
    receiver_email: form.get("receiver_email"),

    receiver_postal_code: form.get("receiver_postal_code"),
    receiver_address: form.get("receiver_address"),

    weight: form.get("weight"),
    service_type: form.get("service_type"),

    notes: form.get("notes"),

    reference_code,
  };

  try {
    const res = await fetch("/api/request-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payload,
        captchaToken,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Submission failed");
    }

    setSuccess(reference_code);

    // Clear all form fields
    formElement.reset();

   formElement.reset();

// Reset states
setCaptchaToken(null);
setAgreed(false);


  } catch (err: any) {
    setError(err.message || "Submission failed");
  } finally {
    setLoading(false);
  }
}

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 md:grid-cols-2"
          >
            <input
              name="full_name"
              type="text"
              placeholder="Full Name"
              required
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0E9AA7]"
            />

            <input
              name="sender_phone"
              type="tel"
              placeholder="Sender Phone"
              required
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0E9AA7]"
            />

            <input
              name="sender_email"
              type="email"
              placeholder="Sender Email"
              required
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0E9AA7]"
            />

            <input
              name="pickup_location"
              type="text"
              placeholder="Pickup Location"
              required
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0E9AA7]"
            />

            <input
              name="destination_country"
              type="text"
              placeholder="Destination Country"
              required
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0E9AA7]"
            />

            <input
              name="package_type"
              type="text"
              placeholder="Package Type"
              required
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0E9AA7]"
            />

            <input
              name="receiver_name"
              type="text"
              placeholder="Receiver Name"
              required
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0E9AA7]"
            />

            <input
              name="receiver_phone"
              type="tel"
              placeholder="Receiver Phone"
              required
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0E9AA7]"
            />

            <input
              name="receiver_email"
              type="email"
              placeholder="Receiver Email"
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0E9AA7]"
            />

            <input
              name="receiver_postal_code"
              type="text"
              placeholder="Receiver Postal Code"
              required
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0E9AA7]"
            />

            <input
              name="weight"
              type="number"
              placeholder="Package Weight (KG)"
              required
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0E9AA7]"
            />

            <select
              name="service_type"
              required
              defaultValue=""
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0E9AA7]"
            >
              <option value="" disabled>
                Select Service Type
              </option>
              <option value="Air Cargo">Air Cargo</option>
              <option value="Sea Cargo">Sea Cargo</option>
              <option value="Importation">Importation</option>
              <option value="Exportation">Exportation</option>
              <option value="Warehousing">Warehousing</option>
              <option value="Procurement">Procurement</option>
              <option value="Custom Clearance">
                Custom Clearance
              </option>
            </select>

            <textarea
              name="receiver_address"
              rows={4}
              required
              placeholder="Receiver Address"
              className="col-span-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0E9AA7]"
            />

            <textarea
              name="notes"
              rows={5}
              placeholder="Additional Shipment Information"
              className="col-span-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-[#0E9AA7]"
            />

        <div className="col-span-full flex justify-center">
  <Turnstile
    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
    onSuccess={(token) => setCaptchaToken(token)}
    onExpire={() => setCaptchaToken(null)}
    onError={() => setCaptchaToken(null)}
  />
</div>

{/* Terms Agreement */}

<div className="col-span-full mt-2 rounded-2xl border border-slate-200 bg-slate-50 p-5">

  <label
    htmlFor="terms"
    className="flex cursor-pointer items-start gap-3"
  >
    <input
      id="terms"
      type="checkbox"
      checked={agreed}
      onChange={(e) => setAgreed(e.target.checked)}
      className="mt-1 h-5 w-5 accent-[#0E9AA7]"
    />

    <span className="text-sm leading-7 text-slate-600">
      I have read and agree to the{" "}

      <Link
        href="/terms"
        target="_blank"
        className="font-semibold text-[#0E9AA7] hover:underline"
      >
        Terms & Conditions
      </Link>

      {" "}and{" "}

      <Link
        href="/privacy"
        target="_blank"
        className="font-semibold text-[#0E9AA7] hover:underline"
      >
        Privacy Policy
      </Link>

      .
    </span>
  </label>

</div>

<button
  type="submit"
  disabled={loading || !captchaToken || !agreed}
  className={`col-span-full rounded-xl px-6 py-4 text-lg font-semibold text-white transition-all duration-300 ${
    loading || !captchaToken || !agreed
      ? "cursor-not-allowed bg-slate-300"
      : "bg-[#0E9AA7] hover:bg-[#0c8793]"
  }`}
>
  {loading ? "Submitting..." : "Request Quote"}
</button>
          </form>

          {error && (
            <p className="mt-6 text-center text-red-600">
              {error}
            </p>
          )}

       {success && (
  <div className="mt-8 text-center">
    <p className="font-semibold text-green-600">
      Quote Request Submitted Successfully
    </p>

    <a
      href={`/track/${success}`}
      className="mt-3 block text-2xl font-bold text-[#0E9AA7] hover:underline"
    >
      {success}
    </a>

    <p className="mt-2 text-sm text-slate-500">
      Click the tracking code to track your shipment.
    </p>
  </div>
)}
        </div>
      </Container>
    </Section>
  );
}