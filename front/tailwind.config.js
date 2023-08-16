/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '36': '36px',
        '18': '18px',
        '16': '16px',
        '12': '12px'
      },
      maxWidth: {
        '290': '290px'
      },
      width: {
        '600': '600px',
        '300': '300px'
      },
      height: {
        '300': '300px',
        '160': '160px'
      }
    },
    keyframes: {
      fade: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' }
      }
    },
    animation: {
      'myFade': 'fade 1s'
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

