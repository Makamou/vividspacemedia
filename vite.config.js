import { defineConfig } from 'vite'

// Standalone HTML build — no React plugin needed
export default defineConfig({
  base: '/vividspacemedia/',
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
})
