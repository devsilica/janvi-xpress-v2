"use client";

import { Float } from "@react-three/drei";

const nodes = [
  [0, 2.0, 0],
  [1.8, 1.1, 0.6],
  [-1.9, 0.9, -0.4],
  [2.1, -0.5, 0.3],
  [-1.6, -1.5, 0.5],
  [0.5, -2.0, -0.3],
  [1.2, 1.8, -0.5],
  [-2.0, 0.1, 0.2],
];

export default function NetworkNodes() {
  return (
    <>
      {nodes.map((position, index) => (
        <Float
          key={index}
          speed={1.5}
          floatIntensity={0.5}
          rotationIntensity={0}
        >
          <mesh position={position as [number, number, number]}>
            <sphereGeometry args={[0.05, 16, 16]} />

            <meshBasicMaterial
              color="#B8FFFF"
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}