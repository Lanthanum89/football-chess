import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg'],
      manifest: {
        name: 'Football Chess',
        short_name: 'Football Chess',
        description: 'Football-themed chess for little champions.',
        theme_color: '#d4edff',
        background_color: '#fff8e7',
        display: 'standalone',
        orientation: 'any',
        // Keep this identity stable: changing it can create a separate installed app.
        // Relative ids resolve against the start_url origin, not the manifest directory.
        id: 'football-chess',
        start_url: './',
        scope: './',
        related_applications: [
          { platform: 'webapp', url: './manifest.webmanifest', id: 'football-chess' },
        ],
        prefer_related_applications: false,
        icons: [{ src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }],
      },
      workbox: { globPatterns: ['**/*.{js,css,html,svg,png,webp,woff2}'] },
    }),
  ],
})

