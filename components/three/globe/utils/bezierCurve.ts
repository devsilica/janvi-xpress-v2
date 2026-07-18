import * as THREE from "three";

/**
 * Creates a curved arc between two points on the globe.
 *
 * Used for:
 * - Flight Routes
 * - Sea Routes
 * - Shipment Animation
 * - Plane Paths
 */

export function createBezierCurve(
  start: THREE.Vector3,
  end: THREE.Vector3,
  altitude = 0.8
) {
  const mid = new THREE.Vector3()
    .addVectors(start, end)
    .multiplyScalar(0.5);

  const distance = start.distanceTo(end);

  mid.normalize().multiplyScalar(
    mid.length() + altitude + distance * 0.1
  );

  return new THREE.QuadraticBezierCurve3(
    start,
    mid,
    end
  );
}