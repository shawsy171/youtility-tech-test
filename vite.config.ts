import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')
const root = __dirname;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001
  },
  resolve: {
    alias: {
      '@services': path.resolve(__dirname, './src/services'),
      '@components': path.resolve(__dirname, './src/components')
    }, 
  },
  plugins: [react()]
})
