/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#bce0ff',
          300: '#8ed0ff',
          400: '#59b4ff',
          500: '#3292ff',
          600: '#1b72f5',
          700: '#155ada',
          800: '#1749b0',
          900: '#183f8a',
          950: '#07152f'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(50, 146, 255, 0.18)',
        soft: '0 18px 80px rgba(2, 6, 23, 0.14)'
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(148, 163, 184, .12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, .12) 1px, transparent 1px)',
        radial: 'radial-gradient(circle at top left, rgba(50,146,255,.28), transparent 32rem), radial-gradient(circle at bottom right, rgba(14,165,233,.16), transparent 28rem)'
      }
    }
  },
  plugins: []
};
