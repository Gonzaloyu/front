import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Usamos una forma más moderna de encontrar la ruta
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'MiLibreriaAuth',
      fileName: 'mi-libreria-auth'
    },
    rollupOptions: {
      external: ['vue', '@auth0/auth0-vue'],
      output: {
        globals: {
          vue: 'Vue',
          '@auth0/auth0-vue': 'Auth0'
        }
      }
    }
  }
});