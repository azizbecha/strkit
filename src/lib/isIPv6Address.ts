/**
 * Validates whether a given string is a valid IPv6 address.
 *
 * @param str - The string to check if it's a valid IPv6 address.
 * @returns A boolean indicating whether the string is a valid IPv6 address.
 *
 * @example
 * isIPv6Address("2001:0db8:85a3:0000:0000:8a2e:0370:7334"); // Output: true
 * isIPv6Address("::1"); // Output: true
 * isIPv6Address("not-an-ipv6"); // Output: false
 */
export default function isIPv6Address(str: string): boolean {
  const ipv6Regex =
    /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::(?:[0-9a-fA-F]{1,4}:){0,7}[0-9a-fA-F]{1,4}$|^(?:[0-9a-fA-F]{1,4}:){1,7}:$/;
  return ipv6Regex.test(str);
}
