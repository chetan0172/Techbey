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
          react: ['react', 'react-dom'],
          vendor: ['@supabase/supabase-js', 'react-helmet-async', 'react-hot-toast', 'lucide-react']
        }
      }
    }
  },
  server: {
    host: true,
    port: 5173
  }
});