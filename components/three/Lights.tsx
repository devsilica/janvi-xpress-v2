"use client";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={1.4} />

      <directionalLight
        position={[5, 5, 4]}
        intensity={3}
        color="#ffffff"
      />

      <pointLight
        position={[-6, -3, 5]}
        intensity={1.5}
        color="#7EE7F2"
      />

      <pointLight
        position={[0, 5, -5]}
        intensity={1}
        color="#ffffff"
      />
    </>
  );
}