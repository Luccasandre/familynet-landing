/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        fn: { dark: '#031a0e', deep: '#052e16', emerald: '#10b981', neon: '#39ff14', black: '#020805' },
      },
      fontFamily: { display: ['Barlow Condensed', 'Impact', 'sans-serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
      boxShadow: { neon: '0 0 24px rgba(57,255,20,.45)', neonlg: '0 0 48px rgba(57,255,20,.55)' },
    },
  },
  plugins: [],
}
