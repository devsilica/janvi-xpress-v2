import * as THREE from "three";

/**
 * Converts latitude and longitude to a Vector3
 * positioned on the surface of a sphere.
 *
 * @param latitude Latitude in degrees
 * @param longitude Longitude in degrees
 * @param radius Globe radius
 */

export function latLngToVector3(
  latitude: number,
  longitude: number,
  radius: number
): THREE.Vector3 {
  const phi = (90 - latitude) * (Math.PI / 180);
  const theta = (longitude + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}