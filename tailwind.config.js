/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'phone': '350px', // Small phones
      'xs': '480px',    // Extra small devices (phones)
      'sm': '640px',    // Small devices (landscape phones)
      'md': '768px',    // Medium devices (tablets)
      'lg': '1024px',   // Large devices (desktop)
      'xl': '1200px',   // Extra large devices (large desktop) - Navigation switches here
      '2xl': '1536px',  // 2X large devices (larger desktop)
    },
    extend: {
      fontFamily: {
        'sans': ['var(--font-teko)', 'Teko', 'Helvetica', 'Arial', 'sans-serif'],
        'teko': ['var(--font-teko)', 'Teko', 'Helvetica', 'Arial', 'sans-serif'],
        'secondary': ['Calibri', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'container': '1186px', // Max width do container principal
      },
    },
  },
  plugins: [],
}
