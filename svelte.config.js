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
					'https://accounts.google.com/gsi/client',
					'sha256-zFJwsT78cLEc6IoppP5St+I79YaQSeWM22vM77yQrfU=',
					'sha256-SIdcyjx0kKrzhwggwrHAeqEMP12zoiLgWxFVA05e/bM='
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
	}
};

export default config;
