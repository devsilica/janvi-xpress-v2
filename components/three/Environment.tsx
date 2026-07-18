"use client";

export default function Environment() {
  return (
    <>
      <color attach="background" args={["#f8faf9"]} />
      <fog attach="fog" args={["#f8faf9", 8, 20]} />
    </>
  );
}