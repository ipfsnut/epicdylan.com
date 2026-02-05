/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#F8F6F1',
          surface: '#FFFFFF',
          text: '#1C1917',
          'text-secondary': '#57534E',
          accent: '#0E6B5E',
          'accent-hover': '#0A5549',
          border: '#D6D3CC',
        }
      },
      animation: {
        'gradient': 'gradient 6s ease infinite',
        'border-spin': 'border-spin 3s ease infinite',
      },
      keyframes: {
        'gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'border-spin': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        }
      },
      fontFamily: {
        'display': ['Newsreader', 'Georgia', 'serif'],
        'body': ['Outfit', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}
