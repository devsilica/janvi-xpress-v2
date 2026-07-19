"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type ShippingRequest = {
id: string;
full_name: string;
phone: string;
pickup_location: string;
destination_country: string;
package_type: string;
status: string;
reference_code: string;
created_at: string;
};

const BRAND = {
teal: "#1F7A8C",
tealHover: "#176270",
cream: "#F2EFE6",
dark: "#0b0f14",
};

const STATUS = ["Pending", "Contacted", "Confirmed", "Dispatched", "Delivered"] as const;

function cls(...a: Array<string | false | null | undefined>) {
return a.filter(Boolean).join(" ");
}

function fmt(iso: string) {
try {
return new Date(iso).toLocaleString();
} catch {
return iso;
}
}

function pill(status: string) {
switch (status) {
case "Pending":
return "bg-amber-500/10 text-amber-950 ring-amber-500/20 dark:bg-amber-400/10 dark:text-amber-200 dark:ring-amber-400/20";
case "Contacted":
return "bg-sky-500/10 text-sky-950 ring-sky-500/20 dark:bg-sky-400/10 dark:text-sky-200 dark:ring-sky-400/20";
case "Confirmed":
return "bg-indigo-500/10 text-indigo-950 ring-indigo-500/20 dark:bg-indigo-400/10 dark:text-indigo-200 dark:ring-indigo-400/20";
case "Dispatched":
return "bg-violet-500/10 text-violet-950 ring-violet-500/20 dark:bg-violet-400/10 dark:text-violet-200 dark:ring-violet-400/20";
case "Delivered":
return "bg-emerald-500/10 text-emerald-950 ring-emerald-500/20 dark:bg-emerald-400/10 dark:text-emerald-200 dark:ring-emerald-400/20";
default:
return "bg-neutral-500/10 text-neutral-950 ring-neutral-500/20 dark:bg-white/10 dark:text-neutral-200 dark:ring-white/10";
}
}

function Surface({ children, className = "" }: { children: React.ReactNode; className?: string }) {
return (
<div
className={cls(
"rounded-3xl",
"border border-black/5 dark:border-white/10",
"bg-white/90 dark:bg-white/[0.04]",
"shadow-[0_1px_0_rgba(0,0,0,0.05)] dark:shadow-none",
className
)}
>
{children}
</div>
);
}

function StatCard({ label, value }: { label: string; value: number }) {
return (
<Surface className="p-4">
{/* label MUST be black in light mode */}
<div className="text-[11px] font-semibold tracking-wide uppercase text-neutral-950 dark:text-neutral-200">
{label}
</div>
<div className="mt-2 text-3xl font-semibold text-neutral-950 dark:text-white">{value}</div>
</Surface>
);
}

function Field({ label, value }: { label: string; value: string }) {
return (
<div className="flex items-start justify-between gap-3">
<span className="text-[12px] font-semibold text-neutral-950 dark:text-neutral-200">{label}</span>
<span className="text-[13px] font-medium text-neutral-950 dark:text-white text-right break-words max-w-[65%]">
{value}
</span>
</div>
);
}

export default function AdminDashboard() {
const router = useRouter();

const [ready, setReady] = useState(false);
const [dark, setDark] = useState(false);

const [loading, setLoading] = useState(true);
const [err, setErr] = useState<string | null>(null);
const [requests, setRequests] = useState<ShippingRequest[]>([]);

const [q, setQ] = useState("");
const [filter, setFilter] = useState<string>("All");

// Theme init + persistence
useEffect(() => {
const stored = typeof window !== "undefined" ? localStorage.getItem("janvi_theme") : null;
const prefersDark =
typeof window !== "undefined" &&
window.matchMedia &&
window.matchMedia("(prefers-color-scheme: dark)").matches;

const isDark = stored ? stored === "dark" : prefersDark;

setDark(isDark);
if (isDark) document.documentElement.classList.add("dark");
setReady(true);
}, []);

useEffect(() => {
if (!ready) return;
if (dark) {
document.documentElement.classList.add("dark");
localStorage.setItem("janvi_theme", "dark");
} else {
document.documentElement.classList.remove("dark");
localStorage.setItem("janvi_theme", "light");
}
}, [dark, ready]);

// Auth + Fetch
useEffect(() => {
let cancelled = false;

async function init() {
setLoading(true);
setErr(null);

const { data: userRes } = await supabase.auth.getUser();
if (cancelled) return;

if (!userRes.user) {
router.push("/admin/login");
return;
}

const { data, error } = await supabase
  .from("shipping_requests")
  .select("*")
  .order("created_at", { ascending: false });

console.log("Fetched rows:", data);
console.log("Error:", error);
console.log("Count:", data?.length);

if (cancelled) return;

if (error) {
setErr(error.message);
setRequests([]);
} else {
setRequests((data ?? []) as ShippingRequest[]);
}

setLoading(false);
}

init();

return () => {
cancelled = true;
};
}, [router]);

const stats = useMemo(() => {
const total = requests.length;
const pending = requests.filter((r) => r.status === "Pending").length;
const active = requests.filter((r) => r.status !== "Delivered").length;
const delivered = requests.filter((r) => r.status === "Delivered").length;
const contacted = requests.filter((r) => r.status === "Contacted").length;
return { total, pending, active, delivered, contacted };
}, [requests]);

const filtered = useMemo(() => {
const query = q.trim().toLowerCase();
return requests.filter((r) => {
const okStatus = filter === "All" ? true : r.status === filter;
const okQ =
!query ||
r.full_name?.toLowerCase().includes(query) ||
r.phone?.toLowerCase().includes(query) ||
r.reference_code?.toLowerCase().includes(query) ||
r.destination_country?.toLowerCase().includes(query) ||
r.pickup_location?.toLowerCase().includes(query) ||
r.package_type?.toLowerCase().includes(query);

return okStatus && okQ;
});
}, [requests, q, filter]);

async function refresh() {
setErr(null);
const { data, error } = await supabase
.from("shipping_requests")
.select("id,full_name,phone,pickup_location,destination_country,package_type,status,reference_code,created_at")
.order("created_at", { ascending: false });

if (error) {
setErr(error.message);
return;
}
setRequests((data ?? []) as ShippingRequest[]);
}

async function updateStatus(id: string, status: string) {
setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));

const { error } = await supabase.from("shipping_requests").update({ status }).eq("id", id);
if (error) {
setErr(error.message);
await refresh();
}
}

async function logout() {
await supabase.auth.signOut();
router.push("/admin/login");
}

return (
<div
className="min-h-screen opacity-100"
style={{ backgroundColor: dark ? BRAND.dark : BRAND.cream }}
>
{/* Top bar */}
<header className="sticky top-0 z-40 border-b border-black/5 dark:border-white/10 bg-white/80 dark:bg-[#0b0f14]/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
<div className="flex items-center gap-3 min-w-0">
<div
className="h-9 w-9 sm:h-10 sm:w-10 rounded-2xl text-white flex items-center justify-center font-semibold"
style={{ backgroundColor: BRAND.teal }}
>
JX
</div>
<div className="min-w-0">
<div className="text-[13px] sm:text-[14px] font-semibold text-neutral-950 dark:text-white truncate">
JANVI XPRESS — Admin Dashboard
</div>
{/* description MUST be black in light mode */}
<div className="text-[12px] font-semibold text-neutral-950 dark:text-neutral-200 truncate">
Operations view: shipping requests and status updates
</div>
</div>
</div>

<div className="flex items-center gap-2">
<button
onClick={() => setDark((v) => !v)}
className="rounded-2xl px-3 py-2 text-sm font-semibold border border-black/10 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] text-neutral-950 dark:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.06]"
>
{dark ? "Light" : "Dark"}
</button>

<button
onClick={refresh}
className="rounded-2xl px-3 py-2 text-sm font-semibold text-white"
style={{ backgroundColor: BRAND.teal }}
>
Refresh
</button>

<button
onClick={logout}
className="hidden sm:inline-flex rounded-2xl px-3 py-2 text-sm font-semibold bg-neutral-950 hover:bg-neutral-900 text-white"
>
Logout
</button>
</div>
</div>

{/* Mobile logout (always available) */}
<div className="sm:hidden px-3 pb-3">
<button
onClick={logout}
className="w-full rounded-2xl px-3 py-2 text-sm font-semibold bg-neutral-950 hover:bg-neutral-900 text-white"
>
Logout
</button>
</div>
</header>

<main className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-5 sm:py-6 md:py-10 space-y-5 sm:space-y-6">
{/* Title + controls */}
<Surface className="p-5 sm:p-6 md:p-7">
<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div>
<div className="text-[11px] font-semibold tracking-wide uppercase text-neutral-950 dark:text-neutral-200">
Shipping Requests
</div>
<h1 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-950 dark:text-white">
Requests (Nigeria → UK / USA / Europe)
</h1>
<p className="mt-2 text-sm font-semibold text-neutral-950 dark:text-neutral-200">
Search a request and update status. (All helper text is black in light mode.)
</p>
</div>

<div className="grid grid-cols-1 gap-3 w-full md:w-[680px] md:grid-cols-[1fr_260px]">
<div>
<div className="mb-2 text-[12px] font-semibold text-neutral-950 dark:text-neutral-200">
Search Requests
</div>
<input
value={q}
onChange={(e) => setQ(e.target.value)}
placeholder="Search by name, phone, reference, pickup, destination, package"
className={cls(
"w-full rounded-2xl border border-black/10 dark:border-white/10",
"bg-white dark:bg-[#0b0f14]",
"px-4 py-3 text-sm",
"text-neutral-950 dark:text-white",
// placeholder MUST look black in light mode
"placeholder:text-neutral-950/70 dark:placeholder:text-white/40",
"outline-none focus:ring-2"
)}
style={{ ["--tw-ring-color" as any]: BRAND.teal }}
/>
</div>

<div>
<div className="mb-2 text-[12px] font-semibold text-neutral-950 dark:text-neutral-200">
Filter by Status
</div>
<select
value={filter}
onChange={(e) => setFilter(e.target.value)}
className={cls(
"w-full rounded-2xl border border-black/10 dark:border-white/10",
"bg-white dark:bg-[#0b0f14]",
"px-4 py-3 text-sm",
"text-neutral-950 dark:text-white",
"outline-none focus:ring-2"
)}
style={{ ["--tw-ring-color" as any]: BRAND.teal }}
>
<option value="All">All statuses</option>
{STATUS.map((s) => (
<option key={s} value={s}>
{s}
</option>
))}
</select>
</div>
</div>
</div>

{err && (
<div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-neutral-950 dark:bg-amber-500/10 dark:border-amber-400/20 dark:text-amber-200">
{err}
</div>
)}
</Surface>

{/* Stats */}
<div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
<StatCard label="Total Requests" value={stats.total} />
<StatCard label="Active Requests" value={stats.active} />
<StatCard label="Pending Requests" value={stats.pending} />
<StatCard label="Contacted" value={stats.contacted} />
<StatCard label="Delivered" value={stats.delivered} />
</div>

{/* Mobile cards */}
<div className="lg:hidden grid grid-cols-1 gap-3">
{loading ? (
<Surface className="p-6 text-center font-semibold text-neutral-950 dark:text-neutral-200">
Loading shipping requests…
</Surface>
) : filtered.length === 0 ? (
<Surface className="p-6 text-center font-semibold text-neutral-950 dark:text-neutral-200">
No requests found.
</Surface>
) : (
filtered.map((r) => (
<Surface key={r.id} className="p-5">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-[11px] font-semibold tracking-wide uppercase text-neutral-950 dark:text-neutral-200">
Reference
</div>
<div className="mt-1 text-[16px] font-semibold text-neutral-950 dark:text-white">
{r.reference_code}
</div>
<div className="mt-1 text-[12px] font-semibold text-neutral-950 dark:text-neutral-200">
Created: {fmt(r.created_at)}
</div>
</div>

<span
className={cls(
"inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1",
pill(r.status)
)}
>
{r.status}
</span>
</div>

<div className="mt-4 space-y-2">
<Field label="Customer" value={r.full_name} />
<Field label="Phone" value={r.phone} />
<Field label="Pickup" value={r.pickup_location} />
<Field label="Destination" value={r.destination_country} />
<Field label="Package Type" value={r.package_type} />
</div>

<div className="mt-4">
<div className="text-[12px] font-semibold text-neutral-950 dark:text-neutral-200">
Update Status
</div>
<select
value={r.status}
onChange={(e) => updateStatus(r.id, e.target.value)}
className={cls(
"mt-2 w-full rounded-2xl border border-black/10 dark:border-white/10",
"bg-white dark:bg-[#0b0f14]",
"px-4 py-3 text-sm",
"text-neutral-950 dark:text-white",
"outline-none focus:ring-2"
)}
style={{ ["--tw-ring-color" as any]: BRAND.teal }}
>
{STATUS.map((s) => (
<option key={s} value={s}>
{s}
</option>
))}
</select>
</div>
</Surface>
))
)}
</div>

{/* Desktop table */}
<Surface className="hidden lg:block overflow-hidden">
<div className="px-6 py-5 border-b border-black/5 dark:border-white/10 flex items-center justify-between gap-4">
<div>
<div className="text-[14px] font-semibold text-neutral-950 dark:text-white">
Requests (Table)
</div>
<div className="mt-1 text-[12px] font-semibold text-neutral-950 dark:text-neutral-200">
Update status using the dropdown in each row.
</div>
</div>
<div className="text-[12px] font-semibold text-neutral-950 dark:text-neutral-200">
Showing {filtered.length}
</div>
</div>

{loading ? (
<div className="p-10 text-center font-semibold text-neutral-950 dark:text-neutral-200">
Loading…
</div>
) : filtered.length === 0 ? (
<div className="p-10 text-center font-semibold text-neutral-950 dark:text-neutral-200">
No requests found.
</div>
) : (
<div className="overflow-x-auto">
<table className="min-w-[1200px] w-full text-left">
<thead className="bg-black/[0.02] dark:bg-white/[0.04]">
<tr className="text-[11px] font-semibold uppercase tracking-wide text-neutral-950 dark:text-neutral-200">
<th className="px-6 py-4">Reference</th>
<th className="px-6 py-4">Customer</th>
<th className="px-6 py-4">Phone</th>
<th className="px-6 py-4">Pickup</th>
<th className="px-6 py-4">Destination</th>
<th className="px-6 py-4">Package</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Update</th>
<th className="px-6 py-4">Created</th>
</tr>
</thead>

<tbody>
{filtered.map((r) => (
<tr
key={r.id}
className="border-t border-black/5 dark:border-white/10 hover:bg-black/[0.02] dark:hover:bg-white/[0.03]"
>
<td className="px-6 py-4 font-semibold text-neutral-950 dark:text-white">
{r.reference_code}
</td>
<td className="px-6 py-4 font-medium text-neutral-950 dark:text-white">
{r.full_name}
</td>
<td className="px-6 py-4 font-medium text-neutral-950 dark:text-white">
{r.phone}
</td>
<td className="px-6 py-4 font-medium text-neutral-950 dark:text-white">
{r.pickup_location}
</td>
<td className="px-6 py-4 font-medium text-neutral-950 dark:text-white">
{r.destination_country}
</td>
<td className="px-6 py-4 font-medium text-neutral-950 dark:text-white">
{r.package_type}
</td>

<td className="px-6 py-4">
<span className={cls("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1", pill(r.status))}>
{r.status}
</span>
</td>

<td className="px-6 py-4">
<select
value={r.status}
onChange={(e) => updateStatus(r.id, e.target.value)}
className={cls(
"rounded-2xl border border-black/10 dark:border-white/10",
"bg-white dark:bg-[#0b0f14]",
"px-3 py-2 text-sm",
"text-neutral-950 dark:text-white",
"outline-none focus:ring-2"
)}
style={{ ["--tw-ring-color" as any]: BRAND.teal }}
>
{STATUS.map((s) => (
<option key={s} value={s}>
{s}
</option>
))}
</select>
</td>

<td className="px-6 py-4 font-semibold text-neutral-950 dark:text-neutral-200">
{fmt(r.created_at)}
</td>
</tr>
))}
</tbody>
</table>
</div>
)}
</Surface>
</main>
</div>
);
}