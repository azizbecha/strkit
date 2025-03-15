/**
 * Extracts all hashtags from a given string.
 *
 * @param str - The input string to extract hashtags from.
 * @returns An array of hashtags found in the string.
 *
 * @example
 * extractHashtags("Loving #JavaScript and #TypeScript!"); // Output: ["#JavaScript", "#TypeScript"]
 * extractHashtags("No hashtags here!"); // Output: []
 * extractHashtags("#100DaysOfCode is trending!"); // Output: ["#100DaysOfCode"]
 */
export default function extractHashtags(str: string): string[] {
  const hashtagRegex = /#\w+/g;
  const matches = str.match(hashtagRegex);
  return matches ? matches : [];
}
