/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".form-input": {
          "@apply w-full mb-5 p-3 rounded bg-slate-500 text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-500 focus:bg-slate-600":
            {},
        },
        ".login-button": {
          "@apply bg-gradient-to-bl from-purple-500 to-fuchsia-700 text-slate-200 px-5 py-3 rounded-lg w-full transition-all duration-500 hover:opacity-80":
            {},
        },
      });
    },
  ],
};
