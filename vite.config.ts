import { fileURLToPath, resolve, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '$src': resolve(__dirname, 'public')
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',  // Normal Vue app entry point
        game: 'game.html' // Standalone game entry point
      }
    }
  }
})
