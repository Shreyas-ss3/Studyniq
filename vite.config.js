import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  
  // Forces Vite/Rolldown to strictly isolate the browser build parameters
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      // Safely flag all Node backend frameworks as fully external
      external: [
        'express',
        'cors',
        'dotenv',
        'stripe',
        '@stripe/stripe-js'
      ]
    }
  },

  // Completely shields backend dependency trees from pre-bundler crawling
  optimizeDeps: {
    entries: ['index.html'],
    exclude: ['express', 'cors', 'dotenv', 'stripe']
  }
});