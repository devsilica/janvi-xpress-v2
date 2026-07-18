import { createClient } from "@supabase/supabase-js";
import ShipmentTable from "@/components/admin/ShipmentTable";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function ShipmentsPage() {
  const { data } = await supabase
    .from("shipping_requests")
    .select("*")
    .order("created_at", { ascending: false });

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

      <ShipmentTable shipments={data || []} />

    </div>
  );
}