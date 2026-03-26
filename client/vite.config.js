import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/", // 🔥 critical for Vercel deployment

  plugins: [react()],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // ✅ ONLY for local development
        changeOrigin: true,
        secure: false,
      }
    }
  }
})