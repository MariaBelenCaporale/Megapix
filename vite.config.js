import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@images': '/src/images',
      '@fonts': 'src/fonts'
    }
  },
  server: {
    port: 3000,
    strictPort: true,
    origin: "http://0.0.0.0:3000",
  },
})
