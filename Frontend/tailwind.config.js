/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
      extend: {
        keyframes: {
          slideDown: {
            '0%': { transform: 'translateY(-10px)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          },
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          }
        },
        animation: {
          slideDown: 'slideDown 0.3s ease-out',
          fadeIn: 'fadeIn 0.2s ease-out'
        }
      },
    },
    plugins: [require("daisyui")],
  };