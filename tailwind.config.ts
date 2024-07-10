import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
      backgroundImage: {
        bgparticle: "url('/imgs/bgpat.png')",
        bgparticleLight: "url('/imgs/bgpat_new.png')",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        inter: ['var(--font-inter)'],
      },
      maxHeight: {
        '600': '37.5rem',
        '800': '50rem',
      },
      padding: {
        'xsplus:py-8': 'padding-bottom: 2em, padding-top: 2em',
      },
      boxShadow: {
        highlight: '0 0 15px rgba(129, 140, 248, 0.5)',
        highlight2: '0 0 15px rgba(20, 66, 114, 0.5)',
      },
      lineHeight: {
        '12': '3.6em',
      },
      colors: {
        secondary: '#CADCFC',
        primary: '#00246B',
        accent: '#FFA500',
        textDark: '#333333',
        textLight: '#EAECE8',
        borderColor: '#7A6BF2',
        componentColor: '#465373',
        navColorLight: '#072C63',
        highlightColor: '#606d98',
        mainColor: '#020817',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        navbar: '#051937',
        h1custom: '#F2F2F2',
        h1underline: '#38B5F8',
        oxfordblue: '#061D3F',
        nyorange: '#F1A66C',
        nyorange2: '#DC732F',
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
      backdropFilter: {
        none: 'none',
        blur: 'blur(20px)',
      },
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
      },
    },
    variants: {
      extend: {
        transform: ['hover', 'focus'],
        transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
        backgroundColor: ['hover'],
        textColor: ['hover'],
        backdropFilter: ['responsive'],
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'), // Add this line to use backdrop-filter in Tailwind
    require('tailwindcss-animate'),
  ],
};

export default config;
