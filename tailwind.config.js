const plugin = require('tailwindcss/plugin') // eslint-disable-line

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'grey-20': '#FCFCFD',
        'grey-30': '#EDEEF1',
        'grey-40': '#DDE0E5',
        'grey-60': '#C0C4CB',
        'danger-20': '#E87474',
        'danger-40': '#C85656',
        'danger-60': '#E70000',
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.merri-52-400': {
          'font-size': '3.25rem',
          'font-weight': 400,
          'line-height': 1.256,
          'font-family': 'Merriweather',
        },
        '.merri-52-700': {
          'font-size': '3.25rem',
          'font-weight': 700,
          'line-height': 1.256,
          'font-family': 'Merriweather',
        },
        '.merri-36-700': {
          'font-size': '2.25rem',
          'font-weight': 700,
          'line-height': 1.25,
          'font-family': 'Merriweather',
        },
        '.merri-32-400': {
          'font-size': '2rem',
          'font-weight': 400,
          'line-height': 1.256,
          'font-family': 'Merriweather',
        },
        '.merri-32-700': {
          'font-size': '2rem',
          'font-weight': 700,
          'line-height': 1.256,
          'font-family': 'Merriweather',
        },
        '.merri-30-700': {
          'font-size': '1.875rem',
          'font-weight': 700,
          'line-height': 1.4,
          'font-family': 'Merriweather',
        },
        '.merri-24-700': {
          'font-size': '1.5rem',
          'font-weight': 700,
          'line-height': 1.25,
          'font-family': 'Merriweather',
        },
        '.merri-20-700': {
          'font-size': '1.25rem',
          'font-weight': 700,
          'line-height': 1.4,
          'font-family': 'Merriweather',
        },
        '.inter-32-400': {
          'font-size': '2rem',
          'font-weight': 400,
          'line-height': 0.9375,
          'font-family': 'Inter',
        },
        '.inter-30-700': {
          'font-size': '1.875rem',
          'font-weight': 700,
          'line-height': 1.4,
          'font-family': 'Inter',
        },
        '.inter-24-700': {
          'font-size': '1.5rem',
          'font-weight': 700,
          'line-height': 1.25,
          'font-family': 'Inter',
        },
        '.inter-24-400': {
          'font-size': '1.5rem',
          'font-weight': 400,
          'line-height': 1.5,
          'font-family': 'Inter',
        },
        '.inter-24-500': {
          'font-size': '1.5rem',
          'font-weight': 500,
          'line-height': 1.25,
          'font-family': 'Inter',
        },
        '.inter-20-500': {
          'font-size': '1.25rem',
          'font-weight': 500,
          'line-height': 1.25,
          'font-family': 'Inter',
        },
        '.inter-20-400': {
          'font-size': '1.25rem',
          'font-weight': 400,
          'line-height': 1.5,
          'font-family': 'Inter',
        },
        '.inter-18-700': {
          'font-size': '1.125rem',
          'font-weight': 700,
          'line-height': 1.4,
          'font-family': 'Inter',
        },
        '.inter-18-500': {
          'font-size': '1.125rem',
          'font-weight': 500,
          'line-height': 1.25,
          'font-family': 'Inter',
        },
        '.inter-18-400': {
          'font-size': '1.125rem',
          'font-weight': 400,
          'line-height': 1.5,
          'font-family': 'Inter',
        },
        '.inter-16-700': {
          'font-size': '1rem',
          'font-weight': 700,
          'line-height': 1.25,
          'font-family': 'Inter',
        },
        '.inter-16-500': {
          'font-size': '1rem',
          'font-weight': 500,
          'line-height': 1.25,
          'font-family': 'Inter',
        },
        '.inter-16-400': {
          'font-size': '1rem',
          'font-weight': 400,
          'line-height': 0.9375,
          'font-family': 'Inter',
        },
        '.inter-16-400-alt': {
          'font-size': '1rem',
          'font-weight': 400,
          'line-height': 1.25,
          'font-family': 'Inter',
        },
        '.inter-14-700': {
          'font-size': '0.875rem',
          'font-weight': 700,
          'line-height': 1.5,
          'font-family': 'Inter',
        },
        '.inter-14-400': {
          'font-size': '0.875rem',
          'font-weight': 400,
          'line-height': 1.5,
          'font-family': 'Inter',
        },
        '.inter-14-400-alt': {
          'font-size': '0.875rem',
          'font-weight': 400,
          'line-height': 1.25,
          'font-family': 'Inter',
        },

        '.frosted-glass': {
          '-webkit-backdrop-filter': 'blur(15px)',
          'backdrop-filter': 'blur(15px)',
          'box-shadow': 'inset 0 0 0 200px rgba(255, 255, 255, 0.09)',
          border: '1px solid #ffffff',
        },

        '.main-card-container': {
          'box-shadow': '0px 10px 20px -5px #0a2a690f',
          border: '1px solid #E0E6F7',
        },

        '.one-line-clamp': {
          width: '100%',
          overflow: 'hidden',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': 1,
          display: '-webkit-box',
        },

        '.two-line-clamp': {
          width: '100%',
          overflow: 'hidden',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': 2,
          display: '-webkit-box',
        },

        '.three-line-clamp': {
          width: '100%',
          overflow: 'hidden',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': 3,
          display: '-webkit-box',
        },

        '.content-detail-container': {
          'box-shadow': '0px 0px 15px 0px #0000001f',
        },
        '.shadow-card-large': {
          'box-shadow': '0px 1px 15px 0px #0000001A',
        },
        '.shadow-banner-notif': {
          'box-shadow': '0px 4px 12px 0px #00000040',
        },
        '.shadow-story-card': {
          'box-shadow': '0px 6px 16px 0px #00000014',
        },
      })
    }),
  ],
}
