/**
 * Encodes a URL or a string to ensure it is safe for use in a URL.
 * Converts special characters into their percent-encoded representations.
 *
 * @param url - The string or URL to encode.
 * @returns The encoded URL.
 *
 * @example
 * encodeURL("https://example.com/query?name=John Doe&age=25");
 * // Output: "https://example.com/query?name=John%20Doe&age=25"
 */
export function encodeURL(url: string): string {
  return encodeURIComponent(url);
}
