/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-detail": "url('/src/assets/image/bannerDetail.jpg')",
      },
    },
  },
  plugins: [],
};
