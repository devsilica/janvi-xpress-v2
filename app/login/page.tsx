"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);

const [error, setError] = useState("");

async function handleLogin(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  setLoading(true);
  setError("");

  const { error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    setLoading(false);
    setError(error.message);
    return;
  }

  router.push("/admin/shipments");
  router.refresh();
}

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-6">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0E9AA7]/20 blur-[120px]" />

      {/* Card */}

      <div className="relative w-full max-w-md rounded-[32px] border border-white/10 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">

        {/* Logo */}

        <div className="flex justify-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0E9AA7] text-3xl font-bold text-white shadow-lg">
            JX
          </div>

        </div>

        {/* Heading */}

        <div className="mt-8 text-center">

          <h1 className="text-3xl font-bold text-white">
            Janvi Xpress
          </h1>

          <p className="mt-2 text-slate-300">
            Admin Portal
          </p>

          <p className="mt-6 text-sm text-slate-400">
            Sign in to manage shipments,
            customers and logistics.
          </p>

        </div>

        {/* Form */}
<form
  onSubmit={handleLogin}
  className="mt-10 space-y-6"
>
          {/* Email */}

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">
              Email Address
            </label>

            <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">

              <Mail
                size={18}
                className="text-slate-400"
              />

           <input
  type="email"
  value={email}
  onChange={(e) =>
    setEmail(e.target.value)
  }
  placeholder="admin@janvixpress.com"
  className="w-full bg-transparent px-3 py-4 text-white outline-none placeholder:text-slate-500"
/>

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">

              <Lock
                size={18}
                className="text-slate-400"
              />

         <input
  type={
    showPassword
      ? "text"
      : "password"
  }
  value={password}
  onChange={(e) =>
    setPassword(e.target.value)
  }
  placeholder="••••••••"
  className="w-full bg-transparent px-3 py-4 text-white outline-none placeholder:text-slate-500"
/>
              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                {showPassword ? (
                  <EyeOff
                    size={18}
                    className="text-slate-400"
                  />
                ) : (
                  <Eye
                    size={18}
                    className="text-slate-400"
                  />
                )}
              </button>

            </div>

          </div>

                    {/* Options */}

          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm text-slate-300">

              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-600 bg-slate-800 accent-[#0E9AA7]"
              />

              Remember Me

            </label>

            <button
              type="button"
              className="text-sm text-[#38BDF8] transition hover:text-cyan-300"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login Button */}
{error && (
  <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
    {error}
  </div>
)}
       <button
  type="submit"
  disabled={loading}
  className="w-full rounded-2xl bg-[#0E9AA7] py-4 text-lg font-semibold text-white transition hover:bg-[#0C8792] disabled:cursor-not-allowed disabled:opacity-60"
>
  {loading ? (
    <div className="flex items-center justify-center gap-3">

      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />

      Signing In...

    </div>
  ) : (
    "Sign In"
  )}
</button>
          {/* Divider */}

          <div className="relative">

            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-transparent px-4 text-xs uppercase tracking-[0.3em] text-slate-500">
                Secure Access
              </span>
            </div>

          </div>

          {/* Security Badge */}

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20">

                <Lock
                  size={18}
                  className="text-emerald-400"
                />

              </div>

              <div>

                <p className="font-semibold text-emerald-300">
                  Protected Login
                </p>

                <p className="text-xs text-emerald-200/70">
                  Your credentials are securely encrypted.
                </p>

              </div>

            </div>

          </div>

        </form>

        {/* Footer */}

        <div className="mt-10 border-t border-white/10 pt-6 text-center">

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Janvi Xpress.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </main>
  );
}