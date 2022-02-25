import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vanillaExtractPlugin()],
  server: {
    open: true,
    proxy: {
      // 选项写法
      '/api': {
        target: 'https://www.v2ex.com/',
        changeOrigin: true
      }
    },
    cors:true
  }
})
