/**
 * Inverts the case of each character in the input string.
 * Uppercase characters are converted to lowercase, and lowercase characters are converted to uppercase.
 * Non-alphabetical characters remain unchanged.
 *
 * @param input - The input string to invert case.
 * @returns A new string with inverted case for each character.
 *
 * @example
 * // Invert case of a simple string
 * invertCase("Hello World!"); // "hELLO wORLD!"
 *
 * @example
 * // Handle mixed case and non-alphabetical characters
 * invertCase("123aBc#"); // "123AbC#"
 */
export default function invertCase(input: string): string {
  return input
    .split('')
    .map((char) => {
      if (char === char.toLowerCase()) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join('');
}
