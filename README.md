<h1 align="center">strkit</h1>
<p align="center">
  <img src="https://img.shields.io/npm/v/@azizbecha/strkit" alt="npm version">
  <img src="https://img.shields.io/npm/dt/@azizbecha/strkit" alt="npm downloads">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
  <img src="https://img.shields.io/github/last-commit/azizbecha/strkit" alt="GitHub last commit">
  <img src="https://img.shields.io/github/stars/azizbecha/strkit" alt="GitHub stars">
  <img src="https://img.shields.io/github/issues/azizbecha/strkit" alt="GitHub issues">
</p>

`strkit` is a utility library that provides a collection of commonly used string functions in JavaScript/TypeScript. Whether you need to validate emails, convert case styles, trim spaces, or manipulate strings in other ways, `strkit` has got you covered. The goal of this library is to make string handling easier and more efficient across all your projects.

---

## Features

- **String Validation**: Functions like `isEmail` and `isURL` to validate strings.
- **String Manipulation**: Functions for trimming, reversing, truncating, and more.
- **Case Conversion**: Convert strings between different case styles.
- **Easy to Use**: Just import the required function and get started.

---

## Installation

You can install `strkit` as an NPM package:

```bash
npm install @azizbecha/strkit
```

---

## Usage

### CommonJS

```javascript
const { isEmail, truncate } = require("@azizbecha/strkit");

console.log(isEmail("test@example.com")); // true
console.log(truncate("This is a very long string", 10)); // 'This is a...'
```

### ES6

```javascript
import { isEmail, truncate } from "@azizbecha/strkit";

console.log(isEmail("test@example.com")); // true
console.log(truncate("This is a very long string", 10)); // 'This is a...'
```

---

## Functions

| **Function**                 | **Description**                                                                        | **Example Usage**                                                                                                                                            | **Type Signature**                                                       |
| ---------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| **capitalize**               | Capitalizes the first letter of a string.                                              | `capitalize('hello') // 'Hello'`                                                                                                                             | `(str: string) => string`                                                |
| **compareVersion**           | Compares two versions <br /> Returns `0` if equal, `1` if v1 > v2, or `-1` if v2 > v1. | `compareVersion('1.2.0', '1.3.0') // -1`                                                                                                                     | `(v1: string, v2: string) => number`                                     |
| **countWordsMatching**       | Counts the words in a string matching a specific pattern.                              | `countWordsMatching('hello world', /o/) // 2`                                                                                                                | `(str: string, pattern: RegExp) => number`                               |
| **decodeURL**                | Decodes a URL-encoded string.                                                          | `decodeURL('hello%20world') // 'hello world'`                                                                                                                | `(str: string) => string`                                                |
| **diffStrings**              | Compares two strings and returns an array of differences.                              | `diffStrings('hello world', 'hello there'); // [{ type: 'equal', value: 'hello ' }, { type: 'removed', value: 'world' }, { type: 'added', value: 'there' }]` | `(str1: string, str2: string) => [{type, value}}]`                       |
| **encodeURL**                | Encodes a string into a URL-safe format.                                               | `encodeURL('hello world') // 'hello%20world'`                                                                                                                | `(str: string) => string`                                                |
| **endsWith**                 | Checks if a string ends with a given suffix.                                           | `endsWith('hello', 'lo') // true`                                                                                                                            | `(str: string, suffix: string) => boolean`                               |
| **extractHashtags**          | Extracts all hashtags from a string.                                                   | `extractHashtags('#hello #world') // ['#hello', '#world']`                                                                                                   | `(str: string) => string[]`                                              |
| **extractMentions**          | Extracts all mentions (e.g., @username) from a string.                                 | `extractMentions('@user @test') // ['@user', '@test']`                                                                                                       | `(str: string) => string[]`                                              |
| **formatNumber**             | Formats numbers into abbreviated form (e.g., 1.2k).                                    | `formatNumber(1200) // '1.2k'`                                                                                                                               | `(num: number, digits?: number) => string`                               |
| **generateId**               | Generates a random alphanumeric ID.                                                    | `generateId() // 'abc123xyz'`                                                                                                                                | `(length = 15: number) => string`                                        |
| **invertCase**               | Inverts the case of each character in a string.                                        | `invertCase('Hello') // 'hELLO'`                                                                                                                             | `(str: string) => string`                                                |
| **isAnagram**                | Checks if two strings are anagrams.                                                    | `isAnagram('listen', 'silent') // true`                                                                                                                      | `(str1: string, str2: string) => boolean`                                |
| **isBoolean**                | Checks if a value is a boolean-like (e.g., true, "yes", 1).                            | `isBoolean('yes') // true`                                                                                                                                   | `(value: number) => boolean`                                             |
| **isBtcAddress**             | Checks if a string is a valid Bitcoin address.                                         | `isBtcAddress('1A1zP...DivfNa') // true`                                                                                                                     | `(str: string) => boolean`                                               |
| **isCreditCard**             | Checks if a string is a valid credit card number.                                      | `isCreditCard('4111...1111') // true`                                                                                                                        | `(str: string) => boolean`                                               |
| **isEmail**                  | Checks if a string is a valid email address.                                           | `isEmail('test@example.com') // true`                                                                                                                        | `(email: string) => boolean`                                             |
| **isEmoji**                  | Checks if a string contains emojis.                                                    | `isEmoji('😊') // true`                                                                                                                                      | `(str: string) => boolean`                                               |
| **isIPv4Address**            | Checks if a string is a valid IPv4 address.                                            | `isIPv4Address('192.168.0.1') // true`                                                                                                                       | `(str: string) => boolean`                                               |
| **isIPv6Address**            | Checks if a string is a valid IPv6 address.                                            | `isIPv6Address('::1') // true`                                                                                                                               | `(str: string) => boolean`                                               |
| **isJSON**                   | Checks if a string is valid JSON.                                                      | `isJSON('{"key": 42}') // true`                                                                                                                              | `(str: string) => boolean`                                               |
| **isJWT**                    | Checks if a string is a valid JSON Web Token (JWT).                                    | `isJWT('eyJhbGci...') // true`                                                                                                                               | `(str: string) => boolean`                                               |
| **isPalindrome**             | Checks if a string is a palindrome.                                                    | `isPalindrome('racecar') // true`                                                                                                                            | `(str: string) => boolean`                                               |
| **isURL**                    | Checks if a string is a valid URL.                                                     | `isURL('https://example.com'); // true`                                                                                                                      | `(str: string) => boolean`                                               |
| **maskEmail**                | Masks an email address for privacy by replacing part of the email with asterisks..     | `maskEmail('test@example.com'); // "t***@example.com"`                                                                                                       | `(str: string) => string`                                                |
| **readingTime**              | Estimates reading time for a given string.                                             | `readingTime('Lorem ipsum...') // '1 min'`                                                                                                                   | `(str: string, wpm = 200: number) => string`                             |
| **removeSpaces**             | Removes all spaces from a string.                                                      | `removeSpaces('hello world') // 'helloworld'`                                                                                                                | `(str: string) => string`                                                |
| **reverse**                  | Reverses the characters in a given string.                                             | `reverse('hello') // 'olleh'`                                                                                                                                | `(str: string) => string`                                                |
| **startsWith**               | Checks if a string starts with a given prefix.                                         | `startsWith('hello', 'he') // true`                                                                                                                          | `(str: string, prefix: string) => boolean`                               |
| **truncate**                 | Truncates a string to a specific length, appending ellipses if needed.                 | `truncate('hello world', 5) // 'hello...'`                                                                                                                   | `(str: string, maxLength?: number) => string`                            |
| **truncateMiddle**           | Truncates the middle of a string to fit within a length, adding ellipses.              | `truncateMiddle('abcdef', 4) // 'a...f'`                                                                                                                     | `(str: string, maxLength: number) => string`                             |
| **toCamelCase**              | Converts a string to camel case.                                                       | `toCamelCase('hello_world') // 'helloWorld'`                                                                                                                 | `(str: string) => string`                                                |
| **toOrdinal**                | Converts a number to its ordinal form.                                                 | `toOrdinal(1) // '1st'`                                                                                                                                      | `(num: number) => string`                                                |
| **clamp**                    | Clamps a number between a minimum and maximum value.                                   | `clamp(15, 0, 10); // 10`                                                                                                                                    | `(value: number, min: number, max: number) => number`                    |
| **getDistanceBetweenPoints** | Calculates the distance between two points in a 2D plane.                              | `getDistanceBetweenPoints({ lon: 0, lat: 0 }, { lon: 3, lat: 4 }) // 5`                                                                                      | `({ lon: number, lat: number }, { lon: number, lat: number }) => number` |
| **toDegrees**                | Converts radians to degrees.                                                           | `toDegrees(Math.PI) // 180`                                                                                                                                  | `(radians: number) => number`                                            |
| **toRadians**                | Converts degrees to radians.                                                           | `toRadians(180) // Math.PI`                                                                                                                                  | `(degrees: number) => number`                                            |
| **roundTo**                  | Rounds a number to a specified number of decimal places.                               | `roundTo(1.2345, 2) // 1.23`                                                                                                                                 | `(num: number, decimalPlaces: number) => number`                         |
| **randomBetween**            | Generates a random number between a minimum and maximum value.                         | `randomBetween(1, 10) // 7`                                                                                                                                  | `(min: number, max: number) => number`                                   |
| **startsWith**               | Checks if a string starts with a given prefix.                                         | `startsWith('hello', 'he') // true`                                                                                                                          | `(str: string, prefix: string) => boolean`                               |
| **endsWith**                 | Checks if a string ends with a given suffix.                                           | `endsWith('hello', 'lo') // true`                                                                                                                            | `(str: string, suffix: string) => boolean`                               |

## Development

If you'd like to contribute or modify the library, you can clone the repository and run the following commands to build the project:

### 1. Clone the repository

```bash
git clone https://github.com/azizbecha/strkit
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the project

```bash
npm run build
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contributing

Feel free to fork the repository, create an issue, or submit a pull request to contribute improvements or new features.

---

## Acknowledgments

- Thanks to all contributors who make this library possible!

Aziz Becha.
