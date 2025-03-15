/**
 * Validates whether a given string is a valid URL.
 *
 * This function attempts to create a new `URL` object from the input string.
 * If the input is not a valid URL, it throws an error and returns `false`.
 *
 * @param url - The string to validate as a URL.
 * @returns `true` if the string is a valid URL, otherwise `false`.
 *
 * @example
 * isURL('https://example.com'); // true
 * isURL('not-a-url'); // false
 */

export default function isURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
