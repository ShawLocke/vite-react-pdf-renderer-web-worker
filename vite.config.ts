import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const reactPlugin = react();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactPlugin],
  worker: {
    // plugins: [reactPlugin], // 224mx-todo: is this needed?
    format: 'es',
  },
  // 224mx-todo: how to configure?
  // build: {
  //   rollupOptions: {
  //     external: '/@react-refresh',
  //   },
  // },
});
