import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          shopify: ['@shopify/hydrogen-react']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@shopify/hydrogen-react'],
    exclude: ['@shopify/shopify-api']
  }
});