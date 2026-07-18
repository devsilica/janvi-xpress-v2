"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bell, LogOut, Search } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function Topbar() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);

    await supabase.auth.signOut();

    router.replace("/login");
    router.refresh();
  }

  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-5">

      <div>

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-500">
          Welcome back 👋
        </p>

      </div>

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="flex items-center gap-3 rounded-xl border px-4 py-3">

          <Search size={18} />

          <input
            placeholder="Search..."
            className="outline-none"
          />

        </div>

        {/* Notification */}

        <button className="rounded-xl border p-3 transition hover:bg-slate-100">

          <Bell />

        </button>

        {/* Logout */}

        <button
          onClick={handleLogout}
          disabled={loading}
          className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <LogOut size={18} />

          {loading ? "Logging out..." : "Logout"}

        </button>

      </div>

    </header>
  );
}