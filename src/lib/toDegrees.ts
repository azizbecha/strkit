/**
 * Converts radians to degrees.
 * @param radians - The value in radians to be converted. Can be a number or a string.
 * @returns The value in degrees.
 */
export function toDegrees(radians: number | string): number {
  const rad = typeof radians === "string" ? parseFloat(radians) : radians;
  return rad * (180 / Math.PI);
}
