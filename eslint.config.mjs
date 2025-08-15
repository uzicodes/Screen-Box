import { defineConfig } from 'eslint-kit';
export default defineConfig({
	extends: [
		'next/core-web-vitals',
		'plugin:@typescript-eslint/recommended',
		'plugin:tailwindcss/recommended',
	],
	plugins: ['@typescript-eslint', 'tailwindcss'],
	rules: {},
});
