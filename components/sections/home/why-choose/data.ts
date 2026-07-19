export type FeatureIcon =
  | "shield"
  | "zap"
  | "globe"
  | "map"
  | "headset"
  | "badge";

export interface Feature {
  icon: FeatureIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "shield",
    title: "Secure Cargo Handling",
    description:
      "Every shipment is handled with maximum care and professional safety standards.",
  },
  {
    icon: "zap",
    title: "Fast & Reliable Delivery",
    description:
      "Efficient air and sea freight services with dependable transit times.",
  },
  {
    icon: "globe",
    title: "Global Logistics Network",
    description:
      "Worldwide freight solutions through trusted international logistics partners.",
  },
  {
    icon: "map",
    title: "Real-Time Tracking",
    description:
      "Monitor your shipment throughout every stage of its journey.",
  },
  {
    icon: "headset",
    title: "Dedicated Customer Support",
    description:
      "Our logistics experts are available to assist you whenever you need help.",
  },
  {
    icon: "badge",
    title: "Transparent Pricing",
    description:
      "Competitive pricing with clear quotations and no hidden charges.",
  },
];