import { useMemo } from "react";

import { COLORS, GLOBE } from "../constants";

export function useGlobe() {
  return useMemo(
    () => ({
      globe: {
        radius: GLOBE.radius,
        rotationSpeed: GLOBE.rotationSpeed,
        atmosphereScale: GLOBE.atmosphereScale,
        cloudScale: GLOBE.cloudScale,
      },

      camera: {
        position: [0, 0, 6] as [number, number, number],
        fov: 40,
      },

      routes: {
        airAltitude: 1.2,
        seaAltitude: 0.4,
        segments: 100,
      },

      colors: {
        primary: COLORS.primary,
        atmosphere: COLORS.atmosphere,
        routeAir: COLORS.routeAir,
        routeSea: COLORS.routeSea,
        city: COLORS.city,
        cityGlow: COLORS.cityGlow,
      },
    }),
    []
  );
}