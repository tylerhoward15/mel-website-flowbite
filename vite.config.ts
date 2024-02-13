import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 100,
        compressionLevel: 9,
        palette: true,
      },
      jpeg: {
        quality: 20,
      },
      jpg: {
        quality: 20,
      },
    }),
  ],
})
