/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // 'serif' será nuestra fuente elegante (Cormorant)
        serif: ['"Cormorant Garamond"', 'serif'],
        // 'sans' será nuestra fuente limpia (Montserrat)
        sans: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        // Una paleta de colores personalizada y sofisticada
        brand: {
          dark: '#1a1918',   // Un "casi negro" cálido (Carbón)
          muted: '#8c8680',  // Taupe / Gris piedra
          cream: '#f4f1ea',  // Blanco roto / Papel
          rose: '#d4a3a3',   // Rosa antiguo / Palo de rosa (elegante, no chicle)
        }
      }
    },
  },
  plugins: [],
}