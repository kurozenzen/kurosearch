import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
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
		}
	}
};

export default config;
