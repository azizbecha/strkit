/**
 * Converts a string to a URL-friendly slug.
 * 
 * @param str - The string to convert to slug
 * @returns A URL-friendly slug string
 * 
 * @example
 * toSlug('Hello World!'); // "hello-world"
 * toSlug('This is a TEST'); // "this-is-a-test"
 */
export default function toSlug(str: string): string {
    return str
      .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/-+/g, '-'); // Replace multiple - with single -
}
