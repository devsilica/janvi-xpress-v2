export type ServiceIcon =
  | "plane"
  | "ship"
  | "globe"
  | "warehouse"
  | "shopping"
  | "shield";

export interface Service {
  icon: ServiceIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: "plane",
    title: "Air Cargo",
    description:
      "Fast, secure, and reliable air freight solutions for international and domestic shipments.",
  },
  {
    icon: "ship",
    title: "Sea Cargo",
    description:
      "Affordable ocean freight services for containerized, bulk, and commercial cargo worldwide.",
  },
  {
    icon: "globe",
    title: "Import & Export",
    description:
      "Complete import and export solutions by air and sea with seamless international logistics.",
  },
  {
    icon: "warehouse",
    title: "Warehousing",
    description:
      "Safe, organized, and secure warehousing solutions for short-term and long-term cargo storage.",
  },
  {
    icon: "shopping",
    title: "Procurement",
    description:
      "Professional sourcing and procurement services from trusted suppliers worldwide.",
  },
  {
    icon: "shield",
    title: "Customs Clearance",
    description:
      "Expert customs clearance and documentation services to ensure smooth cargo movement.",
  },
];