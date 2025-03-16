import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
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