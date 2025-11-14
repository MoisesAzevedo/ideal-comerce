/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '350px',       // Dispositivos muito pequenos
      'phone': '480px',    // Breakpoint customizado para dispositivos móveis
      'tablet': '768px',   // Tablets
      'lg': '1050px',      // Laptops
      'xl': '1280px',      // Desktops
      '2xl': '1536px',     // Telas grandes
    },
    extend: {
      fontFamily: {
        'teko': ['Teko', 'Helvetica', 'Arial', 'sans-serif'],
        'secondary': ['Calibri', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px', // Container máximo do projeto
      },
    },
  },
  plugins: [],
}
