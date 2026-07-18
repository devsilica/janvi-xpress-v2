"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

import { GLOBE } from "./constants";

export default function Clouds() {
  const cloudsRef = useRef<THREE.Mesh>(null);

  const cloudMap = useTexture(
    "/textures/earth_clouds.png"
  );

  useFrame(() => {
    if (!cloudsRef.current) return;

    cloudsRef.current.rotation.y += 0.001;
  });

  return (
    <mesh
      ref={cloudsRef}
      scale={GLOBE.cloudScale}
    >
      <sphereGeometry
        args={[GLOBE.radius, 64, 64]}
      />

      <meshPhongMaterial
        map={cloudMap}
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </mesh>
  );
}