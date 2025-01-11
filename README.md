
# strkit

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
npm install strkit
```

---

## Usage

### CommonJS

```javascript
const { isEmail, truncate } = require('strkit');

console.log(isEmail('test@example.com')); // true
console.log(truncate('This is a very long string', 10)); // 'This is a...'
```

### ES6

```javascript
import { isEmail, truncate } from 'strkit';

console.log(isEmail('test@example.com')); // true
console.log(truncate('This is a very long string', 10)); // 'This is a...'
```

---

## Available Functions

### `isEmail(email: string): boolean`

Validates if the given string is a valid email address.

```typescript
isEmail('test@example.com'); // true
isEmail('invalid-email'); // false
```

### `isURL(url: string): boolean`

Validates if the given string is a valid URL.

```typescript
isURL('https://www.example.com'); // true
isURL('invalid-url'); // false
```

### `truncate(str: string, maxLength: number = 50, suffix: string = '...'): string`

Truncates the string to the specified `maxLength` and appends the specified `suffix`. Defaults to a maximum length of 50 characters and an ellipsis (`...`).

```typescript
truncate('This is a very long string', 10); // 'This is a...'
```

### `capitalize(str: string): string`

Capitalizes the first letter of each word in the string.

```typescript
capitalize('hello world'); // 'Hello World'
```

### `removeSpaces(str: string): string`

Removes all whitespace from the string.

```typescript
removeSpaces('  Hello   World   '); // 'HelloWorld'
```

### `reverse(str: string): string`

Reverses the string.

```typescript
reverse('hello'); // 'olleh'
```

---

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