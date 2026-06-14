import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png:  { quality: 75 },
      jpg:  { quality: 75 },
      jpeg: { quality: 75 },
      webp: { lossless: false, quality: 80 },
    }),
  ],
  build: {
    minify: 'esbuild',
    // Warn if any single chunk exceeds 500 kB
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'framer-motion';
          }
          if (id.includes('node_modules/react-icons')) {
            return 'icons';
          }
        }
      }
    }
  },
  publicDir: 'public'
})
