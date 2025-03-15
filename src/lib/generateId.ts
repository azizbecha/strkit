/**
 * Generates a unique alphanumeric ID of a specified length.
 *
 * @param length - The length of the generated ID (default is 10).
 * @returns A randomly generated alphanumeric ID.
 *
 * @example
 * generateId(); // Output: "a1b2c3d4e5"
 * generateId(16); // Output: "f9g8h7j6k5l4m3n2"
 */
export default function generateId(length: number = 10): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }

  return id;
}
