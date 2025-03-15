/**
 * Checks if a string is a valid JSON format.
 *
 * @param str - The string to check.
 * @returns A boolean indicating whether the string is valid JSON.
 *
 * @example
 * isJSON('{"name": "John", "age": 30}'); // Output: true
 * isJSON('{name: John, age: 30}'); // Output: false
 * isJSON('random string'); // Output: false
 */
export default function isJSON(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}
