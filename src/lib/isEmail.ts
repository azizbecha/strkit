/**
 * Validates whether a given string is a valid email address.
 *
 * This function uses a regular expression to check if the input string
 * adheres to the standard email address format (e.g., "user@example.com").
 *
 * @param email - The string to validate as an email address.
 * @returns `true` if the string is a valid email, otherwise `false`.
 *
 * @example
 * isEmail('test@example.com'); // true
 * isEmail('not-an-email'); // false
 */

export function isEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
