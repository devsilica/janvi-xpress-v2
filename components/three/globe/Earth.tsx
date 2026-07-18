"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { GLOBE } from "./constants";

export default function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!earthRef.current) return;

    earthRef.current.rotation.y +=
      GLOBE.rotationSpeed;
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry
        args={[GLOBE.radius, 128, 128]}
      />

      <meshStandardMaterial
        color="#0E9AA7"
        wireframe
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}