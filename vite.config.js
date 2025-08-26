import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/MI-PORTFOLIO/', // 👈 poné acá el nombre de tu repo
  build: {
    outDir: 'docs'
  }
})

