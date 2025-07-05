import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Make sure you have 'path' imported if you're using it for alias

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Your base path for deployment to a subdirectory (like GitHub Pages)
  base: '/awesome-portfolio/',
  resolve: {
    alias: {
      // This is helpful if you use absolute imports like import '@/components/MyComponent'
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist', // The directory where your built files will be placed
    emptyOutDir: true, // Cleans the 'dist' folder before each build
    // You typically don't need rollupOptions.input when using type="module" in index.html
    // as Vite automatically detects it.
  }
});