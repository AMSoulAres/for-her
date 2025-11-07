import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Ao publicar em raiz (ex.: http://localhost:8080/) usamos base "/".
  // Antes estava "/for-her", o que fazia os assets serem referenciados em
  // /for-her/..., causando 404 quando o servidor servia na raiz.
  base: "/",
  server: {
    mimeTypes: {
      'application/javascript': ['js'],
    },
  },
})
