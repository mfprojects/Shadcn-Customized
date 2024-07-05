import type { Config } from 'tailwindcss';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      xsplus: '486px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2048px',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      maxHeight: {
        '600': '37.5rem',
        '800': '50rem',
      },
      padding: {
        'xsplus:py-8': 'padding-bottom: 2em, padding-top: 2em',
      },
      boxShadow: {
        'custom-lg':
          '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1), 0 0 0 0 rgb(0 0 0 / 0) inset',
        'custom-md':
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-field': '0px 4px 6px rgba(0, 0, 0, 0.1)',
        't-lg':
          '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 0px 0px 0px rgba(0, 0, 0, 0.05)',
        't-md':
          '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        highlight: '0 0 15px rgba(129, 140, 248, 0.5)',
        highlight2: '0 0 15px rgba(20, 66, 114, 0.5)',
      },
      backgroundImage: {
        'background-gradient':
          'linear-gradient(to top, #051937, #06162f, #071227, #060e1f, #020817)',
        'background-gradient-component':
          'linear-gradient(to top, #0b1529, #0b1529, #0f1f3c, #13284f, #193264)',
        'background-gradient-component-small':
          'linear-gradient(to top, #020817, #0b1529, #0f1f3c, #13284f, #193264)',
        'background-gradient-component-reverse':
          'linear-gradient(to bottom, #0b1529, #0b1529, #0f1f3c, #13284f, #193264)',
        'background-gradient-component-reverse-small':
          'linear-gradient(to bottom, #020817, #0b1529, #0f1f3c, #13284f, #193264)',
        backgradient:
          'linear-gradient(to top, #020817, #081124, #081832, #071e40, #06244f, #062552, #052755, #052858, #052450, #052148, #051d40, #051a38)',
      },
      lineHeight: {
        '12': '3.6em',
      },
      colors: {
        color60: '#082043',
        color30: '#8769E8',
        color10: '#4A9DF3',
        bgcolor: '#d4dfed',
        mainColor: '#020817',
        textColor: '#cae9fb',
        borderColor: '#7A6BF2',
        componentColor: '#465373',
        navColorLight: '#072C63',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        navbar: '#051937',
        h1custom: '#F2F2F2',
        h1underline: '#38B5F8',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        none: '0',
        sm: 'calc(var(--radius) - 4px)',
        md: '0.375rem',
        lg: '0.5rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
