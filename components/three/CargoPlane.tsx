"use client";

import { useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

export default function CargoPlane() {
  const planeRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!planeRef.current) return;

    const t = clock.elapsedTime * 0.4;

    const radius = 2.8;

    planeRef.current.position.x = Math.cos(t) * radius;
    planeRef.current.position.z = Math.sin(t) * radius;
    planeRef.current.position.y = Math.sin(t * 2) * 0.35;

    // Make plane face direction of travel
    planeRef.current.rotation.y = -t + Math.PI / 2;
  });

  return (
    <group ref={planeRef}>
      {/* Body */}
      <mesh>
        <boxGeometry args={[0.28, 0.05, 0.05]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Wings */}
      <mesh>
        <boxGeometry args={[0.05, 0.01, 0.35]} />
        <meshStandardMaterial color="#14B8C4" />
      </mesh>

      {/* Tail */}
      <mesh position={[-0.12, 0.05, 0]}>
        <boxGeometry args={[0.03, 0.08, 0.02]} />
        <meshStandardMaterial color="#14B8C4" />
      </mesh>
    </group>
  );
}