/**
 * Rounds a number to the specified number of decimal places.
 * @param num - The number to round.
 * @param decimalPlaces - The number of decimal places to round to. Defaults to 0.
 * @returns The rounded number.
 * @example
 * roundTo(1.2345, 2); // 1.23
 * roundTo(1.6789, 0); // 2
 * roundTo(123.456, 1); // 123.5
 */
export function roundTo(num: number, decimalPlaces: number = 0): number {
  const factor = 10 ** decimalPlaces;
  return Math.round(num * factor) / factor;
}
