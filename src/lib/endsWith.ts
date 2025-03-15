/**
 * Checks if a string ends with the specified suffix.
 *
 * @param str - The string to check.
 * @param suffix - The suffix to check for.
 * @returns A boolean indicating whether the string ends with the specified suffix.
 *
 * @example
 * endsWith("hello world", "world"); // Output: true
 * endsWith("hello world", "hello"); // Output: false
 */
export default function endsWith(str: string, suffix: string): boolean {
  return str.lastIndexOf(suffix) === str.length - suffix.length;
}
