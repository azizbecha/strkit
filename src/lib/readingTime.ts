/**
 * Estimates the reading time for a given text.
 * Assumes an average reading speed of 200 words per minute.
 *
 * @param text - The text to analyze.
 * @param wordsPerMinute - (Optional) The average reading speed in words per minute (default is 200).
 * @returns An object containing the total reading time in minutes and seconds.
 *
 * @example
 * readingTime("This is a sample text.");
 * // Output: { minutes: 0, seconds: 1 }
 *
 * @example
 * readingTime("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 250);
 * // Output: { minutes: 0, seconds: 2 }
 */
export function readingTime(
  text: string,
  wordsPerMinute: number = 200
): { minutes: number; seconds: number } {
  // Count the total number of words in the text
  const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;

  // Calculate total reading time in minutes
  const totalMinutes = wordCount / wordsPerMinute;

  // Convert minutes into integer minutes and remaining seconds
  const minutes = Math.floor(totalMinutes);
  const seconds = Math.round((totalMinutes - minutes) * 60);

  return { minutes, seconds };
}
