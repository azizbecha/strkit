/**
 * Generates a random number between two values (inclusive).
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns A random number between min and max.
 * @example
 * randomBetween(1, 10); // Random number between 1 and 10
 * randomBetween(0, 1); // Random number between 0 and 1
 */
export function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
