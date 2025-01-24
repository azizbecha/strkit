/**
 * compareVersion compares two version strings and returns:
 * 0 if both versions are equal,
 * 1 if v1 is greater than v2,
 * -1 if v2 is greater than v1.
 *
 * @param v1 The first version string (e.g., "1.2.3").
 * @param v2 The second version string (e.g., "1.2.4").
 * @returns 0 if both versions are equal, 1 if v1 > v2, -1 if v2 > v1.
 * @example
 * compareVersion("1.2.3", "1.2.4"); // returns -1
 * compareVersion("1.2.3", "1.2.3"); // returns 0
 * compareVersion("1.2.4", "1.2.3"); // returns 1
 */
export function compareVersion(v1: string, v2: string): number {
  const v1Parts = v1.split(".").map(Number); // Split version into parts and convert to numbers.
  const v2Parts = v2.split(".").map(Number); // Do the same for v2.

  // Pad the shorter version with zeroes to make them the same length.
  const length = Math.max(v1Parts.length, v2Parts.length);
  while (v1Parts.length < length) v1Parts.push(0);
  while (v2Parts.length < length) v2Parts.push(0);

  // Compare each part.
  for (let i = 0; i < length; i++) {
    if (v1Parts[i] > v2Parts[i]) {
      return 1; // v1 is greater.
    } else if (v1Parts[i] < v2Parts[i]) {
      return -1; // v2 is greater.
    }
  }

  return 0; // Both versions are equal.
}
