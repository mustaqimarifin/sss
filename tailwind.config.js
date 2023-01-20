//import forms from '@tailwindcss/forms';
//import lineClamp from '@tailwindcss/line-clamp';
//import typography from '@tailwindcss/typography';
const colors = require('tailwindcss/colors');

const { fontFamily } = require('tailwindcss/defaultTheme');

const mono = [
  'sfmono',
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
  experimental: {
    optimizeUniversalDefaults: true
  },
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
            color: theme('colors.primary.500'),
            '&:hover': {
              color: `${theme('colors.primary.600')} !important`
            },
            code: { color: theme('colors.primary.400') }
          },
          h1: {
            fontWeight: '700',
            letterSpacing: theme('letterSpacing.tight'),
            color: theme('colors.gray.900')
          },
          h2: {
            fontWeight: '700',
            letterSpacing: theme('letterSpacing.tight'),
            color: theme('colors.gray.900')
          },
          h3: {
            fontWeight: '600',
            color: theme('colors.gray.900')
          },
          'h4,h5,h6': {
            color: theme('colors.gray.900')
          },
          pre: {
            backgroundColor: theme('colors.gray.100')
          },
          code: {
            color: theme('colors.pink.500'),
            backgroundColor: theme('colors.gray.100'),
            paddingLeft: '4px',
            paddingRight: '4px',
            paddingTop: '2px',
            paddingBottom: '2px',
            borderRadius: '0.25rem'
          },
          'code::before': {
            content: 'none'
          },
          'code::after': {
            content: 'none'
          },
          details: {
            backgroundColor: theme('colors.gray.100'),
            paddingLeft: '4px',
            paddingRight: '4px',
            paddingTop: '2px',
            paddingBottom: '2px',
            borderRadius: '0.25rem'
          },
          hr: { borderColor: theme('colors.gray.200') },
          'ol li::marker': {
            fontWeight: '600',
            color: theme('colors.gray.500')
          },
          'ul li::marker': {
            backgroundColor: theme('colors.gray.500')
          },
          strong: { color: theme('colors.gray.600') },
          blockquote: {
            color: theme('colors.gray.900'),
            borderLeftColor: theme('colors.gray.200')
          }
        }
      },
      dark: {
        css: {
          color: theme('colors.gray.300'),
          a: {
            color: theme('colors.primary.500'),
            '&:hover': {
              color: `${theme('colors.primary.400')} !important`
            },
            code: { color: theme('colors.primary.400') }
          },
          h1: {
            fontWeight: '700',
            letterSpacing: theme('letterSpacing.tight'),
            color: theme('colors.gray.100')
          },
          h2: {
            fontWeight: '700',
            letterSpacing: theme('letterSpacing.tight'),
            color: theme('colors.gray.100')
          },
          h3: {
            fontWeight: '600',
            color: theme('colors.gray.100')
          },
          'h4,h5,h6': {
            color: theme('colors.gray.100')
          },
          pre: {
            backgroundColor: theme('colors.gray.800')
          },
          code: {
            backgroundColor: theme('colors.gray.800')
          },
          details: {
            backgroundColor: theme('colors.gray.800')
          },
          hr: { borderColor: theme('colors.gray.700') },
          'ol li::marker': {
            fontWeight: '600',
            color: theme('colors.gray.400')
          },
          'ul li::marker': {
            backgroundColor: theme('colors.gray.400')
          },
          strong: { color: theme('colors.gray.100') },
          thead: {
            th: {
              color: theme('colors.gray.100')
            }
          },
          tbody: {
            tr: {
              borderBottomColor: theme('colors.gray.700')
            }
          },
          blockquote: {
            color: theme('colors.gray.100'),
            borderLeftColor: theme('colors.gray.700')
          }
        }
      }
    })
  },

  variants: {
    typography: ['dark']
  },
  // plugins: [typography, forms, lineClamp]
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ]
};
