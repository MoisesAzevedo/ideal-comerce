/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '350px',       // Dispositivos muito pequenos
      'phone': '480px',    // Breakpoint customizado para dispositivos móveis
      'sm700': '700px',    // Breakpoint customizado para 700px
      'tablet': '768px',   // Tablets
      'desktop': '1024px', // Desktop pequeno
      'lg': '1050px',      // Laptops
      'wide': '1250px',    // Desktop médio
      'xl': '1280px',      // Desktops
      '2xl': '1536px',     // Telas grandes
    },
    extend: {
      fontFamily: {
        'teko': ['Teko', 'Helvetica', 'Arial', 'sans-serif'],
        'secondary': ['Calibri', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'container': '1185px', // Container máximo do projeto
      },
    },
  },
  plugins: [],
};
