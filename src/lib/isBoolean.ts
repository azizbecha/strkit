/**
 * Checks if a value is a valid boolean or a string representation of a boolean.
 *
 * The function recognizes the following boolean representations:
 * - `true`, `false` (boolean values)
 * - `"true"`, `"false"` (string values)
 * - `"yes"`, `"no"` (string values)
 * - `1`, `0` (numeric values)
 *
 * @param value - The value to check.
 * @returns A boolean indicating whether the value is a valid boolean or a recognized string representation of a boolean.
 *
 * @example
 * isBoolean(true); // Output: true
 * isBoolean("true"); // Output: true
 * isBoolean("yes"); // Output: true
 * isBoolean(1); // Output: true
 * isBoolean("no"); // Output: true
 * isBoolean("random"); // Output: false
 */
export function isBoolean(value: any): boolean {
  const truthyValues = ["true", "yes", "1", true];
  const falsyValues = ["false", "no", "0", false];

  return truthyValues.includes(value) || falsyValues.includes(value);
}
