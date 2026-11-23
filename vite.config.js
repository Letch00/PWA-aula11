import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Suppress deprecation warnings from Bootstrap
        silenceDeprecations: ['global-builtin', 'import'],
        quietDeps: true,
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/socket.io': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        ws: true, //Enable websocket proxying
      }
    }
  },
  build: {
    outDir: 'build', // CRA's default build output
  },
});
