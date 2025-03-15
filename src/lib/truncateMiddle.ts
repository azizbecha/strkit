/**
 * Truncates the middle of a string and replaces it with an ellipsis (...).
 *
 * @param str - The input string to truncate.
 * @param maxLength - The maximum length of the truncated string (default is 10).
 * @returns The truncated string with the middle replaced by ellipsis if necessary.
 *
 * @example
 * truncateMiddle("HelloWorld", 5); // Output: "He...ld"
 * truncateMiddle("JavaScript", 15); // Output: "JavaScript" (unchanged)
 */
export default function truncateMiddle(str: string, maxLength: number = 10): string {
  if (str.length <= maxLength) {
    return str;
  }

  const halfLength = Math.floor((maxLength - 3) / 2);
  const start = str.slice(0, halfLength);
  const end = str.slice(-halfLength);

  return `${start}...${end}`;
}
