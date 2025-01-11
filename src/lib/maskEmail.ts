/**
 * Masks an email address for privacy by replacing part of the email with asterisks.
 *
 * The function preserves the first character, the domain, and the `@` symbol,
 * while masking the rest of the email's username.
 *
 * @param email - The email address to mask.
 * @returns The masked email address.
 *
 * @example
 * maskEmail('test@example.com'); // "t***@example.com"
 * maskEmail('johndoe@gmail.com'); // "j******@gmail.com"
 */

export function maskEmail(email: string): string {
  if (!email.includes("@")) {
    throw new Error("Invalid email format");
  }

  const [username, domain] = email.split("@");
  if (username.length < 2) {
    throw new Error("Email username must have at least two characters");
  }

  const maskedUsername = username.charAt(0) + "*".repeat(username.length - 1);
  return `${maskedUsername}@${domain}`;
}
