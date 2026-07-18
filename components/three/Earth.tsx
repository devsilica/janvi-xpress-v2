"use client";

import { useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

export default function Earth() {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={group}>
      {/* Main Globe */}
      <mesh>
        <sphereGeometry args={[1.6, 128, 128]} />
        <meshPhysicalMaterial
          color="#0E9AA7"
          roughness={0.3}
          metalness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.15}
        />
      </mesh>

      {/* Wireframe */}
      <mesh scale={1.015}>
        <sphereGeometry args={[1.6, 48, 48]} />
        <meshBasicMaterial
          color="#7EE7F2"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>

      {/* Atmosphere Glow */}
      <mesh scale={1.08}>
        <sphereGeometry args={[1.6, 64, 64]} />
        <meshBasicMaterial
          color="#6EE7F9"
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}