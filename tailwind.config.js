/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'banner': 'url(/src/assets/images/banner-bg.svg)',
        'banner1': 'url(/src/assets/images/footer_bg.svg)'
      }
    },
  },
  plugins: [],
}

