/**
 * Capitalizes the first letter of the input string.
 * @param str - The string to capitalize.
 * @returns The string with the first letter capitalized.
 * 
 * @example
 * capitalize('hello'); // 'Hello'
 */

export function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
