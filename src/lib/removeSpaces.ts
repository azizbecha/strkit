/**
 * Removes all spaces from a given string.
 *
 * This function removes all whitespace characters, including spaces,
 * tabs, and newlines, from the input string.
 *
 * @param str - The input string to process.
 * @returns The string with all spaces removed.
 *
 * @example
 * removeSpaces('hello world'); // "helloworld"
 * removeSpaces('  this is   a test   '); // "thisisatest"
 * removeSpaces('\nhello\tworld '); // "helloworld"
 */

export default function removeSpaces(str: string): string {
  return str.replace(/\s+/g, '');
}
