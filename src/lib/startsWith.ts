/**
 * Checks if a string starts with the specified prefix.
 *
 * @param str - The string to check.
 * @param prefix - The prefix to check for.
 * @returns A boolean indicating whether the string starts with the specified prefix.
 *
 * @example
 * startsWith("hello world", "hello"); // Output: true
 * startsWith("hello world", "world"); // Output: false
 */
export default function startsWith(str: string, prefix: string): boolean {
  return str.indexOf(prefix) === 0;
}
