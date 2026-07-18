"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const links = [

  {
    name: "Shipments",
    href: "/admin/shipments",
    icon: Package,
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-[#0E9AA7] text-white">

      <div className="border-b border-white/20 p-8">

        <h1 className="text-3xl font-bold">
          Janvi Xpress
        </h1>

        <p className="mt-1 text-sm text-white/70">
          Admin Dashboard
        </p>

      </div>

      <nav className="space-y-2 p-5">

        {links.map((link) => {

          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-4 rounded-xl px-5 py-4 transition

              ${
                pathname === link.href
                  ? "bg-white text-[#0E9AA7]"
                  : "hover:bg-white/10"
              }`}
            >
              <Icon size={22} />

              {link.name}
            </Link>
          );
        })}

      </nav>

  

    </aside>
  );
}