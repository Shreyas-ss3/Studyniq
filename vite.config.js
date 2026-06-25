import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // This forces the bundler to ignore backend modules that break in the browser
      external: [
        'express',
        'cors',
        'dotenv',
        'stripe',
        'firebase/app',
        'firebase/auth',
        'firebase/firestore'
      ]
    }
  }
});