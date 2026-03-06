import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    dts({
      include: ['src'],
      exclude: ['src/demo'],
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UwckitCodeCore',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['lit', 'lit/decorators.js', 'lit/directives/class-map.js'],
      output: {
        globals: {
          lit: 'Lit',
        },
      },
    },
    sourcemap: true,
    minify: false,
  },
  server: {
    port: 3001,
    open: '/index.html',
  },
  root: '.',
});
