import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  cacheDir: '../../node_modules/.vite',
  plugins: [vue()],
})
