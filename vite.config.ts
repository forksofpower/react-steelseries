import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'react-steelseries',
      formats: ['es', 'umd'],
      fileName: format => `react-steelseries.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'steelseries'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          steelseries: 'steelseries',
        },
      },
    },
  },
});
