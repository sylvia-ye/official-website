import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from '@rollup/plugin-inject'

// 简化配置，保留核心功能
export default defineConfig({
  base: '/official-website/',
  plugins: [
    vue(),
    inject({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    port: 5173,
    open: true
  }
})

