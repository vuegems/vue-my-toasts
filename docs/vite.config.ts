import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['vue-demi', '@vueuse/motion'],
  },
  resolve: {
    alias: [
      {
        find: 'vue-my-toasts',
        replacement: resolve(__dirname, '../src/index.ts'),
      },
    ],
  },
})
