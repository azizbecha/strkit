/**
 * Checks whether a given string contains an emoji.
 *
 * @param str - The string to check for emojis.
 * @returns A boolean indicating whether the string contains an emoji.
 *
 * @example
 * isEmoji("😊"); // Output: true
 * isEmoji("hello"); // Output: false
 * isEmoji("👋 hello!"); // Output: true
 */
export function isEmoji(str: string): boolean {
  // Emoji regex pattern (matches most emojis)
  const emojiRegex = /[\p{Emoji}\u200d\u20e3\u25aa\u2b06\ufe0f]/gu;

  return emojiRegex.test(str);
}
