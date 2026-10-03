import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        try {
          fs.copyFileSync(
            path.resolve(__dirname, 'dist/index.html'),
            path.resolve(__dirname, 'dist/404.html')
          );
        } catch (e) {
          console.error('Failed to copy index.html to 404.html', e);
        }
      }
    }
  ],
  base: process.env.NODE_ENV === 'production' ? '/lucky-/' : '/',
  server: {
    port: 5173,
    open: true
  }
});
