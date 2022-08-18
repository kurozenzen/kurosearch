import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'KuroSearch',
        short_name: 'KuroSearch',
        description: 'Rule34 browsing re-imagined.',
        theme_color: '#000000',
        background_color: '#000000',
        icons: [
          {
            src: 'ks-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'ks-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'ks-512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  base: '/',
})
