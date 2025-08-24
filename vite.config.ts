import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

const plugins =
	process.env.NODE_ENV === 'production'
		? [
				sentrySvelteKit({
					sourceMapsUploadOptions: {
						org: 'kurozenzen',
						project: 'kurosearch'
					}
				})
			]
		: [];

export default defineConfig({
	plugins: [sveltekit(), ...plugins],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
