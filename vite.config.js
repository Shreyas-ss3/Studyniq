import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Prevents Rolldown from scanning backend tools during initial module scanning
    exclude: ['express', 'cors', 'dotenv', 'stripe']
  },
  build: {
    rolldownOptions: {
      // Hard externalizes node specific modules from production browser bundles
      external: [
        'express',
        'cors',
        'dotenv',
        'stripe',
        /^node:.*/ // Ignores any core node bindings
      ]
    }
  }
});