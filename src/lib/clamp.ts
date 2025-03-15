/**
 * Clamps a number between a minimum and maximum value.
 * @param value - The number to clamp.
 * @param min - The minimum allowed value.
 * @param max - The maximum allowed value.
 * @returns The clamped value.
 * @example
 * clamp(15, 0, 10); // 10
 * clamp(-5, 0, 10); // 0
 * clamp(5, 0, 10); // 5
 */
export default function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
