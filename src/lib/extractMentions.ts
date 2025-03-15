/**
 * Extracts all mentions from a given string.
 *
 * @param str - The input string to extract mentions from.
 * @returns An array of mentions found in the string.
 *
 * @example
 * extractMentions("Hello @user1 and @user2!"); // Output: ["@user1", "@user2"]
 * extractMentions("No mentions here!"); // Output: []
 * extractMentions("@admin please check this."); // Output: ["@admin"]
 */
export default function extractMentions(str: string): string[] {
  const mentionRegex = /@\w+/g;
  const matches = str.match(mentionRegex);
  return matches ? matches : [];
}
