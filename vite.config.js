import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // 👈 coincide con el nombre exacto de tu repo
  build: {
    outDir: 'docs'
  }
})

