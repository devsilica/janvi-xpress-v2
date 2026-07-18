import { createClient } from "@supabase/supabase-js";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const trackingSteps = [
  "Pending",
  "Contacted",
  "Confirmed",
  "Dispatched",
  "In Transit",
  "Delivered",
];


function getStatusColor(status: string) {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-700 border-yellow-300";

    case "Contacted":
      return "bg-blue-100 text-blue-700 border-blue-300";

    case "Confirmed":
      return "bg-indigo-100 text-indigo-700 border-indigo-300";

    case "Dispatched":
      return "bg-purple-100 text-purple-700 border-purple-300";

    case "In Transit":
      return "bg-emerald-100 text-emerald-700 border-emerald-300";

    case "Delivered":
      return "bg-green-100 text-green-700 border-green-300";

    default:
      return "bg-slate-100 text-slate-700 border-slate-300";
  }
}

function getStatusMessage(status: string) {
  switch (status) {
    case "Pending":
      return "Your shipment request has been received and is awaiting processing.";

    case "Contacted":
      return "Our logistics team has contacted you regarding this shipment.";

    case "Confirmed":
      return "Shipment details have been verified and confirmed.";

    case "Dispatched":
      return "Your shipment has left our warehouse.";

    case "In Transit":
      return "Your shipment is currently moving to its destination.";

    case "Delivered":
      return "Shipment delivered successfully.";

    default:
      return "Shipment is currently being processed.";
  }
}
function getTimeline(status: string) {
  const timeline = [
    {
      stage: "Pending",
      icon: "📄",
      message: "Shipment request was successfully created.",
    },
    {
      stage: "Contacted",
      icon: "☎️",
      message: "Customer has been contacted by our logistics team.",
    },
    {
      stage: "Confirmed",
      icon: "✅",
      message: "Shipment details have been verified.",
    },
    {
      stage: "Dispatched",
      icon: "🚚",
      message: "Shipment has left our warehouse.",
    },
    {
      stage: "In Transit",
      icon: "✈️",
      message: "Shipment is currently moving toward its destination.",
    },
    {
      stage: "Delivered",
      icon: "📦",
      message: "Shipment has been successfully delivered.",
    },
  ];

  const currentIndex = trackingSteps.indexOf(status);

  return timeline.map((item, index) => ({
    ...item,
    completed: index <= currentIndex,
  }));
}


export default async function TrackingPage({
  params,
}: {
  params: Promise<{ trackingNumber: string }>;
}) {
  const { trackingNumber } = await params;

  const { data } = await supabase
    .from("shipping_requests")
    .select("*")
    .eq("reference_code", trackingNumber)
    .single();

  if (!data) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl bg-white p-10 text-center shadow">
              <h1 className="text-4xl font-bold">
                Shipment Not Found
              </h1>

              <p className="mt-4 text-slate-600">
                No shipment found for tracking code:
              </p>

              <p className="mt-3 text-2xl font-bold text-red-600">
                {trackingNumber}
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const currentStep =
    trackingSteps.indexOf(data.status);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">


{/* PREMIUM HERO */}

<div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-[#0E9AA7] via-[#118AB2] to-[#1B4965] p-10 text-white shadow-2xl">

  <p className="uppercase tracking-[0.3em] text-white/70">
    Shipment Tracking
  </p>

  <h1 className="mt-3 text-4xl font-bold lg:text-5xl">
    {data.reference_code}
  </h1>

  <p className="mt-4 max-w-2xl text-lg text-white/80">
    {getStatusMessage(data.status)}
  </p>

  <div className="mt-8 flex flex-wrap gap-4">

    <span
      className={`rounded-full border px-6 py-3 text-sm font-bold uppercase tracking-wider ${getStatusColor(
        data.status
      )}`}
    >
      {data.status}
    </span>

    <div className="rounded-full bg-white/20 px-6 py-3 font-semibold backdrop-blur">
      Janvi Xpress
    </div>

  </div>

</div>

          {/* PROGRESS */}

         {/* PREMIUM PROGRESS */}
<div className="mb-8 flex items-center justify-between">
  <div>
    <h2 className="text-2xl font-bold text-slate-900">
      Shipment Progress
    </h2>

    <p className="mt-1 text-slate-500">
      Follow your shipment as it moves through each stage.
    </p>
  </div>

  <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-[#0E9AA7]">
    Live Tracking
  </span>
</div>

<div className="overflow-x-auto">

  <div className="flex min-w-[900px] items-center justify-between">

    {trackingSteps.map((step, index) => {

      const completed = index < currentStep;
      const current = index === currentStep;

      return (

        <div
          key={step}
          className="relative flex flex-1 flex-col items-center"
        >

          {/* Connector */}

          {index !== trackingSteps.length - 1 && (

            <div
              className={`absolute left-1/2 top-7 h-[4px] w-full ${
                completed
                  ? "bg-[#0E9AA7]"
                  : "bg-slate-200"
              }`}
            />

          )}

          {/* Circle */}

          <div
            className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 text-xl transition-all duration-300

            ${
              completed
                ? "border-[#0E9AA7] bg-[#0E9AA7] text-white"
                : current
                ? "border-[#0E9AA7] bg-white text-[#0E9AA7] shadow-lg ring-8 ring-cyan-100"
                : "border-slate-300 bg-white text-slate-400"
            }`}
          >

            {completed ? "✓" : index + 1}

          </div>

          {/* Label */}

          <h3
            className={`mt-5 text-center text-base font-semibold ${
              completed || current
                ? "text-slate-900"
                : "text-slate-400"
            }`}
          >
            {step}
          </h3>

          <p
            className={`mt-2 rounded-full px-3 py-1 text-xs font-medium

            ${
              completed
                ? "bg-green-100 text-green-700"
                : current
                ? "bg-cyan-100 text-[#0E9AA7]"
                : "bg-slate-100 text-slate-500"
            }`}
          >

            {completed
              ? "Completed"
              : current
              ? "Current"
              : "Pending"}

          </p>

        </div>

      );

    })}

  </div>

</div>

    {/* DETAILS */}

          {/* PREMIUM OVERVIEW */}

{/* ================= SHIPMENT JOURNEY ================= */}

<div className="mt-10 rounded-[32px] bg-white p-8 shadow-xl">

  <div className="mb-8 flex items-center justify-between">

    <div>

      <h2 className="text-2xl font-bold">
        Shipment Journey
      </h2>

      <p className="mt-2 text-slate-500">
        Latest shipment events and progress updates.
      </p>

    </div>

    <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-[#0E9AA7]">
      Live Updates
    </span>

  </div>

  <div className="space-y-8">

    {trackingSteps.map((step, index) => {

      const completed = index < currentStep;
      const current = index === currentStep;

      return (

        <div
          key={step}
          className="flex items-start gap-6"
        >

          {/* Timeline */}

          <div className="flex flex-col items-center">

            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full font-bold

              ${
                completed
                  ? "bg-[#0E9AA7] text-white"
                  : current
                  ? "border-4 border-[#0E9AA7] bg-white text-[#0E9AA7]"
                  : "bg-slate-200 text-slate-500"
              }`}
            >

              {completed ? "✓" : index + 1}

            </div>

            {index !== trackingSteps.length - 1 && (

              <div
                className={`mt-2 h-14 w-1 rounded-full

                ${
                  completed
                    ? "bg-[#0E9AA7]"
                    : "bg-slate-200"
                }`}
              />

            )}

          </div>

          {/* Content */}

          <div className="flex-1 rounded-2xl border border-slate-200 p-5">

            <div className="flex items-center justify-between">

              <h3 className="text-lg font-bold">
                {step}
              </h3>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold

                ${
                  completed
                    ? "bg-green-100 text-green-700"
                    : current
                    ? "bg-cyan-100 text-[#0E9AA7]"
                    : "bg-slate-100 text-slate-500"
                }`}
              >

                {completed
                  ? "Completed"
                  : current
                  ? "Current Stage"
                  : "Pending"}

              </span>

            </div>

            <p className="mt-3 text-slate-500">
              {getStatusMessage(step)}
            </p>

            <p className="mt-4 text-sm text-slate-400">

              {completed
                ? "Completed successfully"
                : current
                ? "Shipment is currently at this stage."
                : "Awaiting completion"}

            </p>

          </div>

        </div>

      );

    })}

  </div>

</div>


{/* ================= CURRENT SHIPMENT ================= */}

<div className="mt-10 grid gap-6 lg:grid-cols-2">

  {/* Current Location */}

  <div className="rounded-[32px] bg-white p-8 shadow-xl">

    <div className="flex items-center gap-4">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
        📍
      </div>

      <div>

        <p className="text-sm uppercase tracking-wider text-slate-500">
          Current Location
        </p>

        <h2 className="mt-1 text-2xl font-bold">
  {data.status === "Pending" && "Janvi Xpress Office"}

  {data.status === "Contacted" && "Customer Location"}

  {data.status === "Confirmed" && "Lagos Hub (LOS)"}

  {data.status === "Dispatched" && "Lagos Warehouse"}

  {data.status === "In Transit" &&
    (data.current_location || "In Transit")}

  {data.status === "Delivered" &&
    (data.receiver_address || "Delivered")}
</h2>

      </div>

    </div>

    <div className="mt-8 rounded-2xl bg-slate-50 p-5">

      <p className="font-semibold text-slate-800">
        Current Status
      </p>

     <p className="mt-2 text-slate-600">
  {data.status === "Pending" &&
    "Your shipment request has been received at our office."}

  {data.status === "Contacted" &&
    "Our logistics team has contacted the sender and the shipment is being prepared."}

  {data.status === "Confirmed" &&
    "The shipment has been confirmed and accepted at our Lagos Hub."}

  {data.status === "Dispatched" &&
    "The shipment has left our warehouse and is on its way to the next destination."}

  {data.status === "In Transit" &&
    "The shipment is currently moving between logistics hubs."}

{data.status === "Delivered" &&
  (data.receiver_address
    ? data.receiver_address.length > 35
      ? `${data.receiver_address.slice(0, 35)}...`
      : data.receiver_address
    : "Delivered")}
</p>
    </div>

  </div>


{/* ================= LIVE TRACKING ACTIVITY ================= */}


  {/* Delivery Information */}

  <div className="rounded-[32px] bg-white p-8 shadow-xl">

    <h2 className="text-2xl font-bold">
      Delivery Information
    </h2>

    <div className="mt-8 space-y-6">

      <div className="flex justify-between border-b pb-4">

        <span className="text-slate-500">
          Estimated Delivery
        </span>

        <span className="font-semibold text-[#0E9AA7]">
          {data.estimated_delivery
            ? new Date(
                data.estimated_delivery
              ).toLocaleDateString()
            : "Calculating..."}
        </span>

      </div>

      <div className="flex justify-between border-b pb-4">

        <span className="text-slate-500">
          Last Updated
        </span>

        <span className="font-semibold">
          {new Date(
            data.updated_at || data.created_at
          ).toLocaleString()}
        </span>

      </div>

      <div className="flex justify-between border-b pb-4">

        <span className="text-slate-500">
          Destination
        </span>

        <span className="font-semibold">
          {data.destination_country}
        </span>

      </div>

      <div className="flex justify-between">

        <span className="text-slate-500">
          Current Stage
        </span>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${getStatusColor(
            data.status
          )}`}
        >
          {data.status}
        </span>

      </div>

    </div>

  </div>

</div>
{/* INFORMATION */}

<div className="mt-10 grid gap-8 lg:grid-cols-2">

  {/* SHIPMENT */}

  <div className="rounded-[32px] bg-white p-8 shadow-xl">

    <h2 className="mb-8 text-2xl font-bold">
      Shipment Information
    </h2>

    <div className="space-y-6">

      <div className="flex justify-between border-b pb-4">
        <span className="text-slate-500">
          Tracking Number
        </span>

        <span className="font-bold">
          {data.reference_code}
        </span>
      </div>

      <div className="flex justify-between border-b pb-4">
        <span className="text-slate-500">
          Status
        </span>

        <span
          className={`rounded-full px-4 py-1 text-sm font-semibold ${getStatusColor(
            data.status
          )}`}
        >
          {data.status}
        </span>
      </div>

      <div className="flex justify-between border-b pb-4">
        <span className="text-slate-500">
          Created
        </span>

        <span className="font-semibold">
          {new Date(data.created_at).toLocaleDateString()}
        </span>
      </div>

      <div className="flex justify-between border-b pb-4">
        <span className="text-slate-500">
          Pickup
        </span>

        <span className="font-semibold">
          {data.pickup_location}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-500">
          Destination
        </span>

        <span className="font-semibold">
          {data.destination_country}
        </span>
      </div>

    </div>

  </div>

  {/* CONTACTS */}

  <div className="rounded-[32px] bg-white p-8 shadow-xl">

    <h2 className="mb-8 text-2xl font-bold">
      Sender & Receiver
    </h2>

    <div className="rounded-2xl bg-slate-50 p-6">

      <h3 className="font-bold text-[#0E9AA7]">
        Sender
      </h3>

      <div className="mt-4 space-y-2">

        <p className="font-semibold">
          {data.full_name}
        </p>

        <p className="text-slate-600">
          {data.sender_phone}
        </p>

        <p className="text-slate-600">
          {data.sender_email}
        </p>

      </div>

    </div>

    <div className="mt-6 rounded-2xl bg-slate-50 p-6">

      <h3 className="font-bold text-[#0E9AA7]">
        Receiver
      </h3>

      <div className="mt-4 space-y-2">

        <p className="font-semibold">
          {data.receiver_name}
        </p>

        <p className="text-slate-600">
          {data.receiver_phone}
        </p>

        <p className="text-slate-600">
          {data.receiver_email}
        </p>

        <p className="text-slate-600">
          {data.receiver_address}
        </p>

      </div>

    </div>

    </div>

  </div>

</div>

</main>

<Footer />
</>
);
}