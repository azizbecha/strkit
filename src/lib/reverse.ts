/**
 * Reverses the characters in a given string.
 *
 * This function takes an input string and returns a new string
 * with the characters in reverse order.
 *
 * @param str - The string to reverse.
 * @returns The reversed string.
 *
 * @example
 * reverse('hello'); // "olleh"
 * reverse('12345'); // "54321"
 */

export default function reverse(str: string): string {
  return str.split('').reverse().join('');
}
