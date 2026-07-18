import DashboardCards from "./DashboardCards";
import Link from "next/link";

type Shipment = {
  id: string;
  reference_code: string;
  full_name: string;
  sender_phone: string;
  receiver_name: string;
  destination_country: string;
  service_type: string;
  weight: string;
  status: string;
  created_at: string;
};

function statusColor(status: string) {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-700";

    case "Contacted":
      return "bg-blue-100 text-blue-700";

    case "Confirmed":
      return "bg-indigo-100 text-indigo-700";

    case "Dispatched":
      return "bg-purple-100 text-purple-700";

    case "In Transit":
      return "bg-green-100 text-green-700";

    case "Delivered":
      return "bg-emerald-100 text-emerald-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function ShipmentTable({
  shipments,
}: {
  shipments: Shipment[];
}) {
  const stats = {
    total: shipments.length,
    pending: shipments.filter(
      (shipment) => shipment.status === "Pending"
    ).length,
    transit: shipments.filter(
      (shipment) => shipment.status === "In Transit"
    ).length,
    delivered: shipments.filter(
      (shipment) => shipment.status === "Delivered"
    ).length,
  };

  return (
    <div className="space-y-6">
      {/* Dashboard Cards */}
      <DashboardCards stats={stats} />

      {/* Shipment Table */}
      <div className="overflow-hidden rounded-3xl bg-white shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-6 py-4 text-left">Tracking</th>
                <th className="px-6 py-4 text-left">Customer</th>
                <th className="px-6 py-4 text-left">Phone</th>
                <th className="px-6 py-4 text-left">Receiver</th>
                <th className="px-6 py-4 text-left">Destination</th>
                <th className="px-6 py-4 text-left">Service</th>
                <th className="px-6 py-4 text-left">Weight</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Created</th>
                <th className="px-6 py-4 text-center">View</th>
                <th className="px-6 py-4 text-center">Waybill</th>
              </tr>
            </thead>

            <tbody>
              {shipments.map((shipment) => (
                <tr
                  key={shipment.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="px-6 py-5 font-bold">
                    {shipment.reference_code}
                  </td>

                  <td className="px-6 py-5">
                    {shipment.full_name}
                  </td>

                  <td className="px-6 py-5">
                    {shipment.sender_phone}
                  </td>

                  <td className="px-6 py-5">
                    {shipment.receiver_name}
                  </td>

                  <td className="px-6 py-5">
                    {shipment.destination_country}
                  </td>

                  <td className="px-6 py-5">
                    {shipment.service_type}
                  </td>

                  <td className="px-6 py-5">
                    {shipment.weight} KG
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${statusColor(
                        shipment.status
                      )}`}
                    >
                      {shipment.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    {new Date(
                      shipment.created_at
                    ).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-5 text-center">
                    <Link
                      href={`/admin/shipments/${shipment.id}`}
                      className="rounded-xl bg-[#0E9AA7] px-4 py-2 text-white transition hover:bg-[#0c8793]"
                    >
                      View
                    </Link>
                  </td>

                  <td className="px-6 py-5 text-center">
                    <Link
                      href={`/admin/shipments/${shipment.id}/waybill`}
                      className="rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-black"
                    >
                      Waybill
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}