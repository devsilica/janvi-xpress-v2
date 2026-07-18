import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import DownloadWaybill from "@/components/pdf/DownloadWaybill";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function WaybillPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data } = await supabase
    .from("shipping_requests")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) {
    return (
      <div className="p-10">
        Shipment not found.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">

      <Link
        href={`/admin/shipments/${id}`}
        className="font-semibold text-[#0E9AA7]"
      >
        ← Back
      </Link>

      <div className="rounded-3xl bg-white p-10 shadow-xl">

        <div className="border-b pb-8 text-center">

          <h1 className="text-5xl font-bold text-[#0E9AA7]">
            JANVI XPRESS
          </h1>

          <p className="mt-3 text-xl text-slate-500">
            Shipment Waybill
          </p>

        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">

          <div>

            <h2 className="mb-4 text-xl font-bold">
              Sender
            </h2>

            <div className="space-y-2">

              <p><strong>Name:</strong> {data.full_name}</p>

              <p><strong>Phone:</strong> {data.sender_phone}</p>

              <p><strong>Email:</strong> {data.sender_email}</p>

            </div>

          </div>

          <div>

            <h2 className="mb-4 text-xl font-bold">
              Receiver
            </h2>

            <div className="space-y-2">

              <p><strong>Name:</strong> {data.receiver_name}</p>

              <p><strong>Phone:</strong> {data.receiver_phone}</p>

              <p><strong>Email:</strong> {data.receiver_email}</p>

              <p><strong>Postal Code:</strong> {data.receiver_postal_code}</p>

              <p><strong>Address:</strong> {data.receiver_address}</p>

            </div>

          </div>

        </div>

        <div className="mt-10 rounded-2xl bg-slate-50 p-8">

          <h2 className="mb-6 text-2xl font-bold">
            Shipment Details
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <p><strong>Tracking Code:</strong> {data.reference_code}</p>

            <p><strong>Status:</strong> {data.status}</p>

            <p><strong>Service:</strong> {data.service_type}</p>

            <p><strong>Package:</strong> {data.package_type}</p>

            <p><strong>Weight:</strong> {data.weight} KG</p>

            <p><strong>Destination:</strong> {data.destination_country}</p>

            <p><strong>Pickup:</strong> {data.pickup_location}</p>

            <p><strong>Created:</strong> {new Date(data.created_at).toLocaleDateString()}</p>

          </div>

        </div>

        <div className="mt-10 flex justify-end">

     <a
  href={`/api/waybill/${data.reference_code}`}
  className="rounded-xl bg-[#0E9AA7] px-8 py-4 text-lg font-semibold text-white hover:bg-[#0b808b]"
>
  Download PDF
</a>

        </div>

      </div>

    </div>
  );
}