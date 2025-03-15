/**
 * Converts degrees to radians.
 * Accepts both numbers and numeric strings.
 * @param degrees - The angle in degrees (number or numeric string).
 * @returns The angle in radians.
 * @throws Error if the input is not a valid number.
 * @example
 * toRadians(180); // Output: 3.14159...
 */
export default function toRadians(degrees: number | string): number {
  const parsedDegrees =
    typeof degrees === 'string' ? parseFloat(degrees) : degrees;

  if (isNaN(parsedDegrees)) {
    throw new Error(
      'Invalid input: degrees must be a number or a numeric string.'
    );
  }

  return parsedDegrees * (Math.PI / 180);
}
