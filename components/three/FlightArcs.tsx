"use client";

import { Line } from "@react-three/drei";
import { useMemo } from "react";

export default function FlightArcs() {
  const arcs = useMemo(
    () => [
      [
        [-1.8, 0.6, 0],
        [0, 2.4, 0.8],
        [1.9, 0.4, 0],
      ],
      [
        [-1.4, -0.8, 0],
        [0, -2.2, 0.6],
        [1.6, -0.4, 0],
      ],
      [
        [-1.8, 1.4, -0.3],
        [0, 0.8, 2],
        [1.7, 1.2, -0.2],
      ],
    ],
    []
  );

  return (
    <>
      {arcs.map((points, index) => (
        <Line
          key={index}
          points={points}
          color="#7EE7F2"
          lineWidth={1.2}
          transparent
          opacity={0.45}
        />
      ))}
    </>
  );
}