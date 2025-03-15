/**
 * Validates whether a given string is a valid JSON Web Token (JWT).
 *
 * @param token - The string to check if it's a valid JWT.
 * @returns A boolean indicating whether the string is a valid JWT.
 *
 * @example
 * isJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE1MTYyMzkwMjJ9.ZCXogGoSbb6dpzqSfrYtM4qvHmiim3g3b6pO5nQksjc"); // Output: true
 * isJWT("not-a-jwt-token"); // Output: false
 */
export default function isJWT(token: string): boolean {
  // Regular expression to validate JWT structure
  const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/;

  return jwtRegex.test(token);
}
