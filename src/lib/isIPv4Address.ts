/**
 * Validates whether a given string is a valid IPv4 address.
 *
 * @param str - The string to check if it's a valid IPv4 address.
 * @returns A boolean indicating whether the string is a valid IPv4 address.
 *
 * @example
 * isIPv4Address("192.168.1.1"); // Output: true
 * isIPv4Address("256.256.256.256"); // Output: false
 * isIPv4Address("not-an-ip"); // Output: false
 */
export default function isIPv4Address(str: string): boolean {
  const ipv4Regex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipv4Regex.test(str);
}
