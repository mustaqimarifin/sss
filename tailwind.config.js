const colors = require('tailwindcss/colors');

const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

const mono = [
  'ui-monospace',
  'SFMono-Regular',
  'Menlo',
  'Monaco',
  'Consolas',
  'Liberation Mono',
  'Courier New',
  'monospace'
];
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './layouts/**/*.tsx',
    './supabase/**/*.{jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#fff',
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        'gray-150': '#EEEFF2',
        'gray-1000': '#050505',
        black: '#050505',
        'design-details': '#458886',
        'design-details-light': '#EEF3F3',
        'design-details-dark': '#273F3F',
        'hacker-news': '#FF965A',
        twitter: '#479BEA',
        current: 'currentColor',
        'blue-opaque': 'rgb(13 42 148 / 18%)',
        gray: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111'
        }
      },
      boxShadow: {
        xs: '0 1px 2px 0px rgba(0,0,0,0.03)',
        subtle: '0 4px 32px rgba(0,0,0,0.03)',
        cardHover:
          '0 4px 4.1px rgba(0, 0, 0, 0.012),0 4.9px 5.8px rgba(0, 0, 0, 0.018),0 6.3px 8.4px rgba(0, 0, 0, 0.029),0 8.8px 12.9px rgba(0, 0, 0, 0.05),0 15px 23px rgba(0, 0, 0, 0.11)'
      },
      animation: {
        modalEnter: 'modal-enter 200ms cubic-bezier(0.16, 1, 0.3, 1)'
      },
      keyframes: {
        'modal-enter': {
          '0%': { opacity: 0, transform: 'translate(-50%, -50%) scale(.96)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
        }
      },
      spacing: {
        '9/16': '56.25%',
        '2px': '2px'
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem'
      },
      height: {
        'screen-35': '35vh'
      },
      minHeight: {
        14: '3.5rem',
        36: '9rem'
      },
      minWidth: {
        sm: '24rem',
        sidebar: '28rem',
        '1/5': '20%'
      },
      maxWidth: {
        '60-ch': '60ch',
        '1/4': '25%'
      },
      translate: {
        'screen-1/4': '25%'
      },
      transitionDuration: {
        325: '325ms'
      },
      fontSize: {
        xxs: '.625rem'
      },
      strokeWidth: {
        1.5: '1.5',
        2.5: '2.5'
      },
      zIndex: {
        '-1': -1
      },
      lineClamp: {
        10: 10
      }
    },
    fontFamily: {
      sans: ['Franklin', ...fontFamily.sans],
      mono: mono
    },

    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.gray.700'),
          a: {
            color: theme('colors.blue.500'),
            '&:hover': {
              color: theme('colors.blue.700')
            },
            code: { color: theme('colors.blue.400') }
          },
          'h2,h3,h4': {
            'scroll-margin-top': spacing[32]
          },
          thead: {
            borderBottomColor: theme('colors.gray.200')
          },
          code: { color: theme('colors.pink.500') },
          'blockquote p:first-of-type::before': false,
          'blockquote p:last-of-type::after': false
        }
      },
      dark: {
        css: {
          color: theme('colors.gray.200'),
          a: {
            color: theme('colors.blue.400'),
            '&:hover': {
              color: theme('colors.blue.600')
            },
            code: { color: theme('colors.blue.400') }
          },
          blockquote: {
            borderLeftColor: theme('colors.gray.700'),
            color: theme('colors.gray.300')
          },
          'h2,h3,h4': {
            color: theme('colors.gray.100'),
            'scroll-margin-top': spacing[32]
          },
          hr: { borderColor: theme('colors.gray.700') },
          ol: {
            li: {
              '&:before': { color: theme('colors.gray.500') }
            }
          },
          ul: {
            li: {
              '&:before': { backgroundColor: theme('colors.gray.500') }
            }
          },
          strong: { color: theme('colors.gray.100') },
          thead: {
            th: {
              color: theme('colors.gray.100')
            },
            borderBottomColor: theme('colors.gray.600')
          },
          tbody: {
            tr: {
              borderBottomColor: theme('colors.gray.700')
            }
          }
        }
      }
    })
  },

  variants: {
    typography: ['dark']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ]
};
