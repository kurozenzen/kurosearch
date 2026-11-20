import { sentrySvelteKit } from '@sentry/sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
	const plugins =
		mode === 'production'
			? [
					sentrySvelteKit({
						sourcemaps: {
							upload: true
						},
						telemetry: false
					})
				]
			: [];
	return {
		plugins: [sveltekit(), ...plugins],
		test: {
			globals: true,
			environment: 'jsdom',
			include: ['src/**/*.{test,spec}.{js,ts}']
		}
	};
});
