/**
 * Decodes a percent-encoded URL or string back to its original form.
 * Converts percent-encoded characters into their actual representation.
 *
 * @param url - The encoded URL or string to decode.
 * @returns The decoded URL.
 *
 * @example
 * decodeURL("https%3A%2F%2Fexample.com%2Fquery%3Fname%3DJohn%20Doe%26age%3D25");
 * // Output: "https://example.com/query?name=John Doe&age=25"
 */
export default function decodeURL(url: string): string {
  return decodeURIComponent(url);
}
