import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  server: {
    host: true,
    port: 5173,
  },
  base: '/portfolio/',
  plugins: [react()],
})
