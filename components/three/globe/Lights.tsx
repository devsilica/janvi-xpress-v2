"use client";

export default function Lights() {
  return (
    <>
      {/* Global Ambient Light */}
      <ambientLight intensity={0.6} />

      {/* Main Sun Light */}
      <directionalLight
        position={[5, 3, 5]}
        intensity={2}
        color="#ffffff"
      />

      {/* Cyan Rim Light */}
      <directionalLight
        position={[-5, 2, -5]}
        intensity={1}
        color="#4FD1FF"
      />

      {/* Top Fill Light */}
      <pointLight
        position={[0, 6, 0]}
        intensity={1.5}
        color="#B9FFFF"
      />

      {/* Bottom Glow */}
      <pointLight
        position={[0, -6, 0]}
        intensity={0.5}
        color="#0E9AA7"
      />
    </>
  );
}