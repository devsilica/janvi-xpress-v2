// ======================================================
// JANVI XPRESS GLOBE ENGINE
// Global Logistics Configuration
// ======================================================

export interface GlobeHub {
  id: string;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  type:
    | "Head Office"
    | "Air Hub"
    | "Sea Hub"
    | "Distribution Hub";
}

export interface GlobeRoute {
  id: string;
  from: string;
  to: string;
  transport: "air" | "sea";
}

export const HUBS: GlobeHub[] = [
  {
    id: "lagos",
    name: "Lagos",
    country: "Nigeria",
    latitude: 6.5244,
    longitude: 3.3792,
    type: "Head Office",
  },

  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    latitude: 51.5072,
    longitude: -0.1276,
    type: "Air Hub",
  },

  {
    id: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    latitude: 25.2048,
    longitude: 55.2708,
    type: "Air Hub",
  },

  {
    id: "guangzhou",
    name: "Guangzhou",
    country: "China",
    latitude: 23.1291,
    longitude: 113.2644,
    type: "Sea Hub",
  },
];

export const ROUTES: GlobeRoute[] = [
  {
    id: "lagos-london-air",
    from: "lagos",
    to: "london",
    transport: "air",
  },

  {
    id: "lagos-dubai-air",
    from: "lagos",
    to: "dubai",
    transport: "air",
  },

  {
    id: "lagos-guangzhou-sea",
    from: "lagos",
    to: "guangzhou",
    transport: "sea",
  },
];

export const GLOBE = {
  radius: 2,

  rotationSpeed: 0.0008,

  atmosphereScale: 1.05,

  cloudScale: 1.02,
};

export const COLORS = {
  primary: "#0E9AA7",

  atmosphere: "#4FD1FF",

  routeAir: "#00E5FF",

  routeSea: "#2563EB",

  city: "#FFFFFF",

  cityGlow: "#00E5FF",
};