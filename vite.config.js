import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Nexora/',  // ✔ Leading & trailing slash is critical
  plugins: [react()]
})