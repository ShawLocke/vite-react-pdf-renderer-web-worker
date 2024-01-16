import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const reactPlugin = react();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactPlugin],
  worker: {
    // plugins: [reactPlugin], // 224mx-note: this is not needed, validated by deploying to vercel, cloudflare pages, Render
    format: 'es',
  },
  // 224mx-may-todo: how to configure to ignore react-refresh when building, below setting dees not work
  // build: {
  //   rollupOptions: {
  //     external: 'react-refresh',
  //   },
  // },
});
