"use client";

import { Stars } from "@react-three/drei";

export default function SceneStars() {
  return (
    <Stars
      radius={80}
      depth={50}
      count={4000}
      factor={5}
      saturation={0}
      fade
      speed={1}
    />
  );
}