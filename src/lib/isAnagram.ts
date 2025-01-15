/**
 * Checks if two strings are anagrams of each other.
 * Two strings are considered anagrams if they contain the same characters
 * in the same frequency, but arranged in any order.
 *
 * @param str1 - The first string.
 * @param str2 - The second string.
 * @returns True if the two strings are anagrams, false otherwise.
 *
 * @example
 * isAnagram("listen", "silent"); // Output: true
 * isAnagram("hello", "world"); // Output: false
 */
export function isAnagram(str1: string, str2: string): boolean {
  // Helper function to sort and normalize the string
  const normalize = (str: string): string =>
    str
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");

  // Compare the normalized versions of the strings
  return normalize(str1) === normalize(str2);
}
