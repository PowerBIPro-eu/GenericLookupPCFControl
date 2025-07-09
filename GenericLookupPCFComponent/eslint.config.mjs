import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  // Ignore patterns - must be first
  {
    ignores: [
      'webpack.config.js',
      'eslint.config.mjs',
      '*.config.js',
      '*.config.mjs',
      'node_modules/',
      'dist/',
      'build/',
      '.vscode/',
      '*.xml'  // Ignore XML files - handled by XML Tools
    ]
  },
  { files: ['**/*.{js,mjs,cjs,ts}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts}'], languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  prettierPlugin,
  {
    linterOptions: {
      reportUnusedDisableDirectives: false,
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'prettier/prettier': 'error',
    },
  },
]);
