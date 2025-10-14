import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					// Split large vendor libraries into separate chunks
					if (id.includes('node_modules')) {
						if (id.includes('firebase')) {
							return 'vendor-firebase';
						}
						if (id.includes('svelte')) {
							return 'vendor-svelte';
						}
						return 'vendor';
					}
				}
			}
		},
		// Enable minification and tree-shaking
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: false, // Keep console for debugging
				passes: 2
			}
		}
	},
	plugins: [
		sveltekit(),
		VitePWA({
			strategies: 'generateSW',
			injectRegister: 'auto',
			manifest: {
				name: 'kurosearch',
				short_name: 'kurosearch',
				description: 'Rule34 browsing re-imagined',
				theme_color: '#000',
				background_color: '#000',
				display: 'standalone',
				start_url: '/',
				icons: [
					{
						src: 'icon/ks-maskable-512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable'
					},
					{
						src: 'icon/ks-maskable-384.png',
						sizes: '384x384',
						type: 'image/png',
						purpose: 'maskable'
					},
					{
						src: 'icon/ks-maskable-192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'maskable'
					},
					{
						src: 'icon/ks-maskable-128.png',
						sizes: '128x128',
						type: 'image/png',
						purpose: 'maskable'
					},
					{
						src: 'icon/ks-maskable-96.png',
						sizes: '96x96',
						type: 'image/png',
						purpose: 'maskable'
					},
					{
						src: 'icon/ks-maskable-72.png',
						sizes: '72x72',
						type: 'image/png',
						purpose: 'maskable'
					},
					{
						src: 'icon/ks-maskable-48.png',
						sizes: '48x48',
						type: 'image/png',
						purpose: 'maskable'
					},
					{
						src: 'icon/ks-192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: 'icon/ks-512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any'
					}
				]
			}
		})
	]
});
