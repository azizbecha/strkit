/**
 * Truncates a string to a specified length (default: 50), optionally appending an ellipsis (`...`) or a custom suffix.
 *
 * If the string length exceeds the specified `maxLength`, it is truncated to fit within the limit,
 * including the suffix if provided.
 *
 * @param str - The string to truncate.
 * @param maxLength - The maximum length of the truncated string, including the suffix. Defaults to `50`.
 * @param suffix - A string to append to the truncated string. Defaults to `'...'`.
 * @returns The truncated string with the suffix if truncation was applied, or the original string if no truncation was needed.
 *
 * @example
 * truncate('Hello, world!', 5); // "He..."
 * truncate('TypeScript is great', 10, '...'); // "TypeSc..."
 * truncate('Short', 10); // "Short" (no truncation)
 * truncate('A very long string that needs truncating', undefined); // "A very long string that needs trunc..."
 */
export function truncate(
  str: string,
  maxLength: number = 50,
  suffix: string = "..."
): string {
  if (maxLength <= 0) {
    throw new Error("maxLength must be greater than 0");
  }

  if (str.length <= maxLength) {
    return str;
  }

  const truncatedLength = maxLength - suffix.length;
  if (truncatedLength <= 0) {
    throw new Error("maxLength is too short to include the suffix");
  }

  return str.slice(0, truncatedLength) + suffix;
}
