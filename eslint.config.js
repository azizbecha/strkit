const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierConfig = require('eslint-config-prettier');
const globals = require('globals');
module.exports = [
  {
    files: ['src/**/*.js', 'src/**/*.ts'],
    ignores: ['dist/**'],
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      parser: tsParser,
      globals: {
        ...globals.node, // Node.js globals (replaces env.node)
        ...globals.es2021, // ES2021 globals (replaces env.es2021)
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];