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
          bg: '#F7F8FA',
          surface: '#FFFFFF',
          text: '#0A0A0A',
          'text-secondary': '#475569',
          accent: '#1E293B',
          'accent-hover': '#0F172A',
          border: '#E2E8F0',
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
