import { sentrySvelteKit } from '@sentry/sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import adapterStatic from '@sveltejs/adapter-static';
import * as child_process from 'node:child_process';

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
		plugins: [
			sveltekit({
				adapter: adapterStatic({ strict: true }),
				paths: {
					base: ''
				},
				appDir: 'app',
				version: {
					name: child_process.execSync('git rev-parse HEAD').toString().trim().substring(0, 7)
				},
				csp: {
					mode: 'auto',
					directives: {
						'worker-src': ['self', 'blob:'],
						'default-src': ['self'],
						'style-src': ['self', 'unsafe-inline'],
						'script-src': [
							'self',
							'https://apis.google.com',
							'https://www.googletagmanager.com',
							'https://accounts.google.com/gsi/client',
							'sha256-pTmTJ6+DVlqs0UGB55hsliAwnxZn1WdjWP7thCFcr+A=' // INIT: theme
						],
						'connect-src': [
							'self',
							'https://apis.google.com',
							'https://*.rule34.xxx',
							'https://*.googleapis.com',
							'https://*.google-analytics.com',
							'https://api.github.com',
							'https://rule34-api.netlify.app',
							'https://rule-34-api-vercel.vercel.app',
							'rule-34-api.shirozenzen.workers.dev',
							'https://*.ingest.us.sentry.io',
							'https://www.google.com/images/cleardot.gif'
						],
						'img-src': [
							'self',
							'data:',
							'https://*.rule34.xxx',
							'https://*.googleusercontent.com',
							'https://www.googletagmanager.com'
						],
						'media-src': ['self', 'https://*.rule34.xxx'],
						'frame-src': [
							'https://r34-react.firebaseapp.com',
							'https://rule34.xxx',
							'https://content.googleapis.com'
						]
					}
				}
			}),
			...plugins
		],
		test: {
			globals: true,
			environment: 'jsdom',
			include: ['src/**/*.{test,spec}.{js,ts}']
		}
	};
});
