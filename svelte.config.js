import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import * as child_process from 'node:child_process';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: ''
		},
		appDir: 'app',
		version: {
			name: child_process.execSync('git rev-parse HEAD').toString().trim().substring(0, 7)
		},
		csp: {
			mode: 'hash',
			directives: {
				'default-src': ['self'],
				'style-src': ['self', 'unsafe-inline'],
				'script-src': [
					'self',
					'https://apis.google.com',
					'https://www.googletagmanager.com',
					'sha256-51fKcXgBxMbTyZzP+VnzmnhFOLZ64S73BpdPcaakIR0=',
					'sha256-WzU0zYiNe3qRp3XlJtEt/mWMUNNFRK0WkIy73ZU4dIM='
				],
				'connect-src': [
					'self',
					'https://apis.google.com',
					'https://rule34.xxx',
					'https://*.rule34.xxx',
					'https://*.googleapis.com',
					'https://*.google-analytics.com',
					'https://api.github.com',
					'https://rule34-api.netlify.app'
				],
				'img-src': [
					'self',
					'https://rule34.xxx',
					'https://*.rule34.xxx',
					'https://*.googleusercontent.com',
					'https://www.googletagmanager.com'
				],
				'media-src': ['self', 'https://rule34.xxx', 'https://*.rule34.xxx'],
				'frame-src': ['https://r34-react.firebaseapp.com']
			}
		}
	}
};

export default config;
