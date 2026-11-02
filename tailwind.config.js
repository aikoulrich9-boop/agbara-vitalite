/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agbara: {
          bg: '#1a0f0a',
          dark: '#120905',
          card: '#2a1911',
          cardDark: '#1f120c',
          cardHover: '#331e15',
          gold: '#d9a441',
          goldLight: '#f5c46b',
          goldDark: '#b88528',
          goldMuted: 'rgba(217, 164, 65, 0.18)',
          txt: '#f3e8d8',
          mut: '#b9a58c',
          border: '#5a3b1c',
          borderLight: '#6b4520',
          wa: '#25D366',
        },
      },
      fontFamily: {
        serif: ['Georgia', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Georgia', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
