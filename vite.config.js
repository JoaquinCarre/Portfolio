import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // 👈 muy importante: nombre exacto del repo entre barras. Más adelante, si pongo un dominio propio (ej: midominio.com), puedo volver a dejarlo en / ó borrar esta propiedad.
})

