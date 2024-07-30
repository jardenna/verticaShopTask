import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    eslint(),
  ],
  server: {
    port: 3000,
    open: true,
  },
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: './build',
  },
});
