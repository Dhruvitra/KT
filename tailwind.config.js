/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f7fb',
          100: '#e6eef8',
          200: '#cfe0f1',
          300: '#9fb9dd',
          400: '#5a86bb',
          500: '#2c5282',
          600: '#25436d',
          700: '#1d3351',
          800: '#17293f',
          900: '#0f2130',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
      },
    },
  },
  plugins: [],
}
