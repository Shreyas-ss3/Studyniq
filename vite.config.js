import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // Prevents Rolldown from choking on your backend Node libraries
      external: [
        'express',
        'cors',
        'dotenv',
        'stripe',
        'path',
        'fs'
      ]
    }
  },
  optimizeDeps: {
    // Keeps Vite's crawl tool focused exclusively on frontend targets
    exclude: ['express', 'cors', 'dotenv', 'stripe']
  }
});