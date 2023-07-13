import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    })
  ],
  server: {
    open: true,
    host: '0.0.0.0',
    port: 4000
  },
  optimizeDeps: {
    include: ['ckeditor5-custom-build/build/ckeditor']
  },
  build: {
    commonjsOptions: {
      include: ['ckeditor5-custom-build/build/ckeditor']
    }
  }
});
