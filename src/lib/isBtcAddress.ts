/**
 * Validates whether a given string is a valid Bitcoin address.
 *
 * @param address - The string to check if it's a valid Bitcoin address.
 * @returns A boolean indicating whether the string is a valid Bitcoin address.
 *
 * @example
 * isBtcAddress("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"); // Output: true
 * isBtcAddress("not-a-bitcoin-address"); // Output: false
 */
export function isBtcAddress(address: string): boolean {
  // Regular expression to validate Bitcoin addresses (P2PKH, P2SH, and Bech32 formats)
  const btcAddressRegex =
    /^(1|3)[a-km-zA-HJ-NP-Z1-9]{25,34}$|^(bc1)[a-zA-HJ-NP-Z0-9]{39,59}$/;

  return btcAddressRegex.test(address);
}
