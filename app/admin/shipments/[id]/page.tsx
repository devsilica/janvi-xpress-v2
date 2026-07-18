import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const statuses = [
  "Pending",
  "Contacted",
  "Confirmed",
  "Dispatched",
  "In Transit",
  "Delivered",
];

export default async function ShipmentDetails({
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
      <div className="rounded-3xl bg-white p-10">
        Shipment not found.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <Link
        href="/admin/shipments"
        className="text-[#0E9AA7] font-semibold"
      >
        ← Back to Shipments
      </Link>

      <div className="rounded-3xl bg-white p-8 shadow">

        <h1 className="text-4xl font-bold">
          Shipment Details
        </h1>

        <p className="mt-2 text-slate-500">
          {data.reference_code}
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl bg-white p-8 shadow">

          <h2 className="mb-6 text-2xl font-bold">
            Sender
          </h2>

          <div className="space-y-4">

            <p>
              <strong>Name:</strong> {data.full_name}
            </p>

            <p>
              <strong>Phone:</strong> {data.sender_phone}
            </p>

            <p>
              <strong>Email:</strong> {data.sender_email}
            </p>

          </div>

        </div>
<div className="rounded-3xl bg-white p-8 shadow">

  <h2 className="mb-6 text-2xl font-bold">
    Receiver
  </h2>

  <div className="space-y-4">

    <p>
      <strong>Name:</strong> {data.receiver_name}
    </p>

    <p>
      <strong>Phone:</strong> {data.receiver_phone}
    </p>

    <p>
      <strong>Email:</strong> {data.receiver_email}
    </p>

    <p>
      <strong>Postal Code:</strong> {data.receiver_postal_code}
    </p>

    <p>
      <strong>Address:</strong> {data.receiver_address}
    </p>

  </div>

</div>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl bg-white p-8 shadow">

          <h2 className="mb-6 text-2xl font-bold">
            Shipment
          </h2>
<div className="space-y-4">

  <p>
    <strong>Tracking Code:</strong> {data.reference_code}
  </p>

  <p>
    <strong>Service Type:</strong> {data.service_type}
  </p>

  <p>
    <strong>Package Type:</strong> {data.package_type}
  </p>

  <p>
    <strong>Weight:</strong> {data.weight} KG
  </p>

  <p>
    <strong>Destination:</strong> {data.destination_country}
  </p>

  <p>
    <strong>Status:</strong> {data.status}
  </p>

  <p>
    <strong>Created:</strong>{" "}
    {new Date(data.created_at).toLocaleString()}
  </p>

</div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow">

          <h2 className="mb-6 text-2xl font-bold">
            Update Status
          </h2>

          <form
            action={`/api/admin/update-status`}
            method="POST"
            className="space-y-6"
          >

            <input
              type="hidden"
              name="id"
              value={data.id}
            />

            <select
              name="status"
              defaultValue={data.status}
              className="w-full rounded-xl border p-4"
            >

              {statuses.map((status) => (
                <option
                  key={status}
                  value={status}
                >
                  {status}
                </option>
              ))}

            </select>

            <button
              className="w-full rounded-xl bg-[#0E9AA7] py-4 font-semibold text-white"
            >
              Save Status
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}