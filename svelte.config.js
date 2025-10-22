import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import * as child_process from 'node:child_process';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({ strict: true }),
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
					'sha256-OkhWme9R0KBn9/HhayIdrq4L0tupV+XoB9Z6NlRtT8g=',
					'sha256-QQcRtQ7ld24zg8Aw+N4rSSUV74xluhui+0R1h02Axi4='
				],
				'connect-src': [
					'self',
					'https://apis.google.com',
					'https://*.rule34.xxx',
					'https://*.googleapis.com',
					'https://*.google-analytics.com',
					'https://api.github.com',
					'https://rule34-api.netlify.app',
					'https://*.ingest.us.sentry.io'
				],
				'img-src': [
					'self',
					'data:',
					'https://*.rule34.xxx',
					'https://*.googleusercontent.com',
					'https://www.googletagmanager.com'
				],
				'media-src': ['self', 'https://*.rule34.xxx'],
				'frame-src': ['https://r34-react.firebaseapp.com']
			}
		}
	}
};

export default config;
