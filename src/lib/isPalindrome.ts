/**
 * Checks if a given string is a palindrome.
 * A string is considered a palindrome if it reads the same backward as forward,
 * ignoring case, spaces, and non-alphanumeric characters.
 *
 * @param str - The string to check.
 * @returns True if the string is a palindrome, false otherwise.
 *
 * @example
 * isPalindrome("A man, a plan, a canal: Panama"); // Output: true
 * isPalindrome("hello"); // Output: false
 */
export default function isPalindrome(str: string): boolean {
  // Normalize the string: remove non-alphanumeric characters, convert to lowercase
  const normalized = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the normalized string to its reverse
  return normalized === normalized.split('').reverse().join('');
}
