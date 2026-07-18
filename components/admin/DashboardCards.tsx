import {
  Package,
  Truck,
  CheckCircle,
  Clock,
} from "lucide-react";

type Props = {
  stats: {
    total: number;
    pending: number;
    transit: number;
    delivered: number;
  };
};

export default function DashboardCards({
  stats,
}: Props) {
  const cards = [
    {
      title: "Total Shipments",
      value: stats.total,
      icon: Package,
      color: "bg-cyan-100 text-cyan-700",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: Clock,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "In Transit",
      value: stats.transit,
      icon: Truck,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Delivered",
      value: stats.delivered,
      icon: CheckCircle,
      color: "bg-emerald-100 text-emerald-700",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                  {card.value}
                </h2>
              </div>

              <div
                className={`rounded-2xl p-4 ${card.color}`}
              >
                <Icon size={30} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}