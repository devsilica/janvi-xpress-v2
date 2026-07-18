"use client";

import { Float } from "@react-three/drei";

const cubes = [
  [3.0, 1.8, 0],
  [-3.2, 1.2, 0.6],
  [2.5, -2.1, 0.5],
  [-2.8, -1.6, -0.4],
  [0.2, 3.1, 0],
  [0.6, -3.2, 0],
  [3.2, -0.2, 0],
  [-3.3, 0.3, 0],
  [2.4, 2.6, -0.5],
  [-2.2, 2.7, 0.4],
];

export default function FloatingCubes() {
  return (
    <>
      {cubes.map((position, index) => (
        <Float
          key={index}
          speed={2}
          rotationIntensity={2}
          floatIntensity={2}
        >
          <mesh position={position as [number, number, number]}>
            <boxGeometry args={[0.22, 0.22, 0.22]} />

            <meshStandardMaterial
              color="#14B8C4"
              emissive="#14B8C4"
              emissiveIntensity={0.4}
              metalness={0.8}
              roughness={0.15}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}