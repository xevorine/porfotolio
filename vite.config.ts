import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Trigger build for renamed repository
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/portofolio/',
});

