import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Treat uwc-* as custom elements (pass-through to web components)
          isCustomElement: (tag) => tag.startsWith('uwc-'),
        },
      },
    }),
    dts({
      include: ['src'],
      exclude: ['src/demo'],
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UwckitCodeVue',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['vue', '@uwckit/code-core'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    sourcemap: true,
    minify: false,
  },
  server: {
    port: 3003,
    open: '/index.html',
  },
});
