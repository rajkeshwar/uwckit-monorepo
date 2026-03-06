import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    angular({
      // Point this to your actual tsconfig file
      tsconfig: resolve(__dirname, 'tsconfig.app.json'), 
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
      name: 'UwckitCodeAngular',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: [
        '@angular/core',
        '@angular/common',
        '@uwckit/code-core',
        'rxjs',
        'zone.js',
      ],
    },
    sourcemap: true,
    minify: false,
  },
  server: {
    port: 3002,
    open: '/index.html',
  },
});