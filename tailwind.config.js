/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenline: {
          dark: '#0D4A36',
          emerald: '#126649',
          mint: '#10B981',
          cream: '#F6F4EE',
          charcoal: '#1E2522',
          gold: '#E5A93C'
        }
      }
    },
  },
  plugins: [],
}
