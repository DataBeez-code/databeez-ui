const colors = require('tailwindcss/colors')

// Colore da variabile CSS RGB (definita in globals.css, light e .dark), con supporto all'opacità
const token = (name) => `rgb(var(--color-${name}) / <alpha-value>)`

// Un tono di stato: bg-success (pieno), text-success-fg, bg-success-bg, border-success-border
const statusTone = (name) => ({
  DEFAULT: token(name),
  fg: token(`${name}-fg`),
  bg: token(`${name}-bg`),
  border: token(`${name}-border`),
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    spacing: {
      0: '0',
      px: '1px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    extend: {
      colors: {
        gray: colors.gray,
        // Scala amber (primary-50…900) invariata, più i token tematizzati light/dark
        primary: {
          ...colors.amber,
          DEFAULT: token('primary'),
          hover: token('primary-hover'),
          light: token('primary-light'),
          fg: token('primary-fg'),
        },

        // CSS-variable based semantic tokens (light/dark mode via .dark class)
        base: token('bg-base'),
        surface: token('bg-surface'),
        subtle: token('bg-subtle'),
        // Grigio più marcato di subtle. Non "muted": collide con i token shadcn (beegraph)
        // e con bg-muted già usato senza effetto in swarm.
        emphasis: token('bg-emphasis'),
        border: {
          DEFAULT: token('border'),
          strong: token('border-strong'),
        },
        'text-base': token('text-base'),
        'text-muted': token('text-muted'),
        'text-subtle': token('text-subtle'),

        // Toni di stato: <tono> pieno, -fg testo, -bg sfondo tenue, -border
        info: statusTone('info'),
        accent: statusTone('accent'),

        // Variazioni (Delta, trend di StatCard): la polarità la decide il componente
        trend: {
          positive: token('trend-positive'),
          negative: token('trend-negative'),
          neutral: token('trend-neutral'),
        },

        // Rischio / score: stessi nomi di beemap (text-risk-low, bg-risk-low-bg, …)
        risk: Object.fromEntries(
          ['na', 'low', 'med', 'high', 'very-high'].flatMap((level) => [
            [level, token(`risk-${level}`)],
            [`${level}-bg`, token(`risk-${level}-bg`)],
            // testo sul -bg con contrasto AA (text-risk-<livello> è la tinta piena, per pallini e barre)
            [`${level}-fg`, token(`risk-${level}-fg`)],
          ])
        ),

        // Brand aliases
        'databeez-primary': colors.amber[500],
        'databeez-secondary': colors.amber[300],
        'databeez-accent': colors.amber[600],
        'databeez-dark': colors.gray[900],
        'databeez-light': colors.gray[50],
        'databeez-success': '#10b981',

        // Category colors
        'category-top': colors.amber[500],
        'category-base': colors.blue[500],
        'category-vertical': colors.emerald[500],

        // Toni di stato: token tematizzati più la scala statica 50/500/900 storica (retrocompatibile)
        success: {
          ...statusTone('success'),
          50: '#ecfdf5',
          500: '#10b981',
          900: '#064e3b',
        },
        warning: {
          ...statusTone('warning'),
          50: '#fffbeb',
          500: colors.amber[500],
          900: '#78350f',
        },
        error: {
          ...statusTone('error'),
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626', // pulsante destructive: testo bianco a 4,8:1 (AA)
          700: '#b91c1c', // hover del pulsante destructive
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'Consolas', 'monospace'],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        databeez: '0 4px 14px 0 rgba(245, 158, 11, 0.15)',
        'databeez-lg': '0 10px 25px 0 rgba(245, 158, 11, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
