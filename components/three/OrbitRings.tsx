"use client";

import { Torus } from "@react-three/drei";

export default function OrbitRings() {
  return (
    <>
      {/* Ring 1 */}
      <Torus args={[2.2, 0.01, 16, 100]} rotation={[Math.PI / 2.5, 0, 0]}>
        <meshBasicMaterial
          color="#6EE7F9"
          transparent
          opacity={0.35}
        />
      </Torus>

      {/* Ring 2 */}
      <Torus args={[2.35, 0.01, 16, 100]} rotation={[0.8, 0.8, 0]}>
        <meshBasicMaterial
          color="#6EE7F9"
          transparent
          opacity={0.25}
        />
      </Torus>

      {/* Ring 3 */}
      <Torus args={[2.5, 0.01, 16, 100]} rotation={[0, 1.2, 0.8]}>
        <meshBasicMaterial
          color="#6EE7F9"
          transparent
          opacity={0.2}
        />
      </Torus>
    </>
  );
}