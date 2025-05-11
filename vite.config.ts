import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/mini-store-frontend/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
