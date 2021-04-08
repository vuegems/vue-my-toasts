import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'demo/',
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: 'vue-my-toasts',
        replacement: resolve(__dirname, './src/index.ts'),
      },
    ],
  },
})
