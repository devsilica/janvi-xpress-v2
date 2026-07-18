"use client";

import { GLOBE } from "./constants";

export default function Atmosphere() {
  return (
    <mesh scale={1.08}>
      <sphereGeometry args={[GLOBE.radius, 64, 64]} />

      <meshBasicMaterial
        color="#4FD1FF"
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}