"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Earth from "./Earth";
import Lights from "./Lights";
import SceneStars from "./Stars";
import Environment from "./Environment";
import FloatingCubes from "./FloatingCubes";
import OrbitRings from "./OrbitRings";
import NetworkNodes from "./NetworkNodes";
import FlightArcs from "./FlightArcs";
import CargoPlane from "./CargoPlane";

export default function HeroScene() {
  return (
    <div className="h-162.5 w-full">
     <Canvas
  camera={{
    position: [0, 0, 6],
    fov: 40,
  }}
>

    <mesh scale={0.05}>
    <sphereGeometry args={[1.5,64,64]} />

    <meshBasicMaterial
        color="#B9FFFF"
        transparent
        opacity={0.12}
    />
</mesh>
        <Environment />

        <Lights />

        <SceneStars />

        <Earth />


<OrbitRings />
   
   <FlightArcs />

<NetworkNodes />

<FloatingCubes />


<CargoPlane />

        <OrbitControls
          enableZoom={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}