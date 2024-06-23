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
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '100px',
        lg: '1024px',
      },
    },
    extend: {
      boxShadow: {
        'custom-lg':
          '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1), 0 0 0 0 rgb(0 0 0 / 0) inset',
        'custom-md':
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-field': '0px 4px 6px rgba(0, 0, 0, 0.1)',
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
      },
      lineHeight: {
        '12': '3.6em',
      },
      colors: {
        mainColor: '#020817',
        componentColor: '#465373',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        navbar: '#051937',
        h1custom: '#F2F2F2',
        h1underline: '#003054',
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
