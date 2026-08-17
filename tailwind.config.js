export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: {
    preflight: false,
    container: false,
  },
  theme: {
    extend: {
      colors: {
        accent: 'var(--first-color)',
        title: 'var(--title-color)',
        muted: 'var(--text-color)',
        surface: 'var(--container-color)',
        page: 'var(--body-color)',
        line: 'var(--border-color)',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      maxWidth: {
        content: '1080px',
      },
      boxShadow: {
        card: 'var(--card-shadow)',
      },
      animation: {
        shine: 'cardShine 0.9s ease-out',
      },
      keyframes: {
        cardShine: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
      },
    },
  },
  plugins: [],
}
