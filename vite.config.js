import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dist from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'vite-project/dist',
  plugins: [react()],
})
