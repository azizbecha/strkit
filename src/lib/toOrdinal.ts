/**
 * Converts a number into its ordinal form as a string (e.g., 1 → "1st", 2 → "2nd").
 *
 * @param num - The number to convert to its ordinal form.
 * @returns The ordinal form of the number as a string.
 *
 * @example
 * toOrdinal(1); // Output: "1st"
 * toOrdinal(2); // Output: "2nd"
 * toOrdinal(3); // Output: "3rd"
 * toOrdinal(11); // Output: "11th"
 * toOrdinal(101); // Output: "101st"
 */
export function toOrdinal(num: number): string {
  const absNum = Math.abs(num);
  const suffix =
    absNum % 100 >= 11 && absNum % 100 <= 13
      ? "th"
      : absNum % 10 === 1
      ? "st"
      : absNum % 10 === 2
      ? "nd"
      : absNum % 10 === 3
      ? "rd"
      : "th";

  return `${num}${suffix}`;
}
