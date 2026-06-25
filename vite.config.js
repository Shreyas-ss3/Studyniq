import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // Force the builder to only optimize the React frontend entry point
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      // Completely shield the browser bundler from reading server architecture
      external: [
        'express',
        'cors',
        'dotenv',
        'stripe',
        '@stripe/stripe-js',
        'firebase',
        'firebase/app',
        'firebase/auth',
        'firebase/firestore',
        'path',
        'fs'
      ]
    }
  },
  optimizeDeps: {
    // Blocks Vite from looking at non-frontend dependencies in your package.json
    disabled: true,
    exclude: ['express', 'cors', 'dotenv', 'stripe']
  }
});