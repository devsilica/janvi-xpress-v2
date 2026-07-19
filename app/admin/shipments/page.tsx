import { createClient } from "@supabase/supabase-js";
import ShipmentTable from "@/components/admin/ShipmentTable";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL is missing");
}

if (!serviceRoleKey) {
  throw new Error("SUPABASE_SERVICE_ROLE_KEY is missing");
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

export default async function ShipmentsPage() {
  const { data, error } = await supabase
    .from("shipping_requests")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase Error:", error);

    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6">
        <h2 className="text-xl font-semibold text-red-700">
          Failed to load shipments
        </h2>

        <p className="mt-2 text-red-600">
          {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Shipments
        </h1>

        <p className="mt-2 text-slate-500">
          Manage all customer shipments.
        </p>
      </div>

      <ShipmentTable shipments={data ?? []} />
    </div>
  );
}