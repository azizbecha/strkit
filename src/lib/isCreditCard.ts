/**
 * Validates whether a given string is a valid credit card number using the Luhn algorithm.
 *
 * @param str - The string to check if it's a valid credit card number.
 * @returns A boolean indicating whether the string is a valid credit card number.
 *
 * @example
 * isCreditCard("4111111111111111"); // Output: true
 * isCreditCard("1234567812345670"); // Output: false
 * isCreditCard("not-a-credit-card"); // Output: false
 */
export default function isCreditCard(str: string): boolean {
  // Remove non-numeric characters
  const cleaned = str.replace(/\D/g, '');

  // Check if the string contains only digits and has a valid length
  if (!/^\d{13,19}$/.test(cleaned)) {
    return false;
  }

  // Apply the Luhn algorithm to check for a valid credit card number
  let sum = 0;
  let shouldDouble = false;

  // Start from the rightmost digit
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i));

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9; // Subtract 9 if the doubled value is greater than 9
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  // A valid credit card number will result in a sum divisible by 10
  return sum % 10 === 0;
}
