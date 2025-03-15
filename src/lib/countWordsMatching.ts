/**
 * Counts the number of words in the given text that match a specified pattern.
 *
 * @param text - The input text to search within.
 * @param pattern - The pattern to match words against (RegExp or string).
 * @returns The number of words that match the given pattern.
 *
 * @example
 * // Using a regular expression to count words starting with "a"
 * countWordsMatching("apple banana apricot avocado", /^a/); // 3
 *
 * @example
 * // Using a string to count exact matches
 * countWordsMatching("apple banana apple apricot", "apple"); // 2
 */
export default function countWordsMatching(
  text: string,
  pattern: RegExp | string
): number {
  // Split the text into words based on whitespace and punctuation
  const words = text.split(/\s+/);

  // Convert string pattern to RegExp if necessary
  const regex =
    typeof pattern === 'string' ? new RegExp(`^${pattern}$`) : pattern;

  // Count words matching the pattern
  return words.filter((word) => regex.test(word)).length;
}
