/**
 * Formats a number into a more readable string with suffixes like K, M, B, etc.
 *
 * Converts:
 * - Numbers in the thousands (e.g., 1200 → "1.2k")
 * - Numbers in the millions (e.g., 1200000 → "1.2M")
 * - Numbers in the billions (e.g., 1200000000 → "1.2B")
 *
 * Numbers below 1000 remain unchanged.
 *
 * @param num - The number to format.
 * @param digits - The number of decimal places to display (default is 1).
 * @returns A string representing the formatted number.
 *
 * @example
 * formatNumber(1200); // Output: "1.2k"
 * formatNumber(1200000); // Output: "1.2M"
 * formatNumber(999); // Output: "999"
 */
export const formatNumber = (num: number, digits: number = 1): string => {
  // If the number is less than 1000, return it as is
  if (num < 1000) {
    return `${num}`;
  }

  const base = Math.floor(Math.log(Math.abs(num)) / Math.log(1000)); // Determine the base (k, M, B)
  const suffix = "kmb"[base - 1]; // Get the corresponding suffix (k, M, B)

  // Calculate the abbreviated number with specified decimal places
  const abbrev = (num / 1000 ** base).toFixed(digits);

  return abbrev.endsWith(".") ? abbrev.slice(0, -1) + suffix : abbrev + suffix;
};
