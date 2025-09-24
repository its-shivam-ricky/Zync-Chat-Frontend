import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { Component } from 'lucide-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  
})
