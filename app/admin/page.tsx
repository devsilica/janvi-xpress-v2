import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

type TrackingStatus =
  | "Pending"
  | "Contacted"
  | "Confirmed"
  | "Dispatched"
  | "In Transit"
  | "Delivered";

const TRACKING_STEPS: TrackingStatus[] = [
  "Pending",
  "Contacted",
  "Confirmed",
  "Dispatched",
  "In Transit",
  "Delivered",
];

const STATUS = {
  Pending: {
    color:
      "bg-yellow-100 text-yellow-700 border-yellow-300",
    message:
      "Your shipment request has been received and is awaiting processing.",
    icon: "📄",
  },

  Contacted: {
    color:
      "bg-blue-100 text-blue-700 border-blue-300",
    message:
      "Our logistics team has contacted you regarding this shipment.",
    icon: "☎️",
  },

  Confirmed: {
    color:
      "bg-indigo-100 text-indigo-700 border-indigo-300",
    message:
      "Shipment details have been verified and confirmed.",
    icon: "✅",
  },

  Dispatched: {
    color:
      "bg-purple-100 text-purple-700 border-purple-300",
    message:
      "Your shipment has left our warehouse.",
    icon: "🚚",
  },

  "In Transit": {
    color:
      "bg-emerald-100 text-emerald-700 border-emerald-300",
    message:
      "Your shipment is currently moving to its destination.",
    icon: "✈️",
  },

  Delivered: {
    color:
      "bg-green-100 text-green-700 border-green-300",
    message:
      "Shipment delivered successfully.",
    icon: "📦",
  },
} as const;

const TIMELINE = [
  {
    stage: "Pending",
    message:
      "Shipment request was successfully created.",
  },

  {
    stage: "Contacted",
    message:
      "Customer has been contacted by our logistics team.",
  },

  {
    stage: "Confirmed",
    message:
      "Shipment details have been verified.",
  },

  {
    stage: "Dispatched",
    message:
      "Shipment has left our warehouse.",
  },

  {
    stage: "In Transit",
    message:
      "Shipment is currently moving toward its destination.",
  },

  {
    stage: "Delivered",
    message:
      "Shipment has been successfully delivered.",
  },
] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

const stagger = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function getStatus(status: string) {
  return (
    STATUS[status as TrackingStatus] ?? {
      color:
        "bg-slate-100 text-slate-700 border-slate-300",

      message:
        "Shipment is currently being processed.",

      icon: "📦",
    }
  );
}

function getTimeline(status: string) {
  const currentIndex = TRACKING_STEPS.indexOf(
    status as TrackingStatus
  );

  return TIMELINE.map((item, index) => ({
    ...item,
    completed: index <= currentIndex,
    icon:
      STATUS[item.stage as TrackingStatus].icon,
  }));
}

function formatDate(date?: string | null) {
  if (!date) return "N/A";

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
  }).format(new Date(date));
}

function formatDateTime(date?: string | null) {
  if (!date) return "N/A";

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

const hoverCard = {
  whileHover: {
    y: -6,
    transition: {
      duration: 0.25,
    },
  },
};