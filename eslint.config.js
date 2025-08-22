import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
	js.configs.recommended,
	{
		files: ['**/*.{js,ts,mjs}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2022
			},
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2017
			}
		},
		plugins: {
			'@typescript-eslint': ts
		},
		rules: {
			...ts.configs.recommended.rules,
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			],
			'no-undef': 'off'
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser,
				sourceType: 'module',
				ecmaVersion: 2022,
				extraFileExtensions: ['.svelte']
			},
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		plugins: {
			svelte,
			'@typescript-eslint': ts
		},
		rules: {
			...svelte.configs.recommended.rules,
			...ts.configs.recommended.rules,
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			],
			'no-undef': 'off'
		}
	},
	prettier,
	{
		ignores: ['build/', '.svelte-kit/', 'dist/', 'node_modules/', '*.d.ts']
	}
];
