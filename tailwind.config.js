/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1a1a1a',
          secondary: '#2d2d2d',
          accent: '#3a3a3a',
          text: '#ffffff',
          muted: '#a0a0a0',
          border: '#404040'
        }
      }
    },
  },
  plugins: [],
}