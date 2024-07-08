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
        gridbg:
          "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 2000 1400%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cmask id=%22b%22 x=%220%22 y=%220%22 width=%222000%22 height=%221400%22%3E%3Cpath fill=%22url(%23a)%22 d=%22M0 0h2000v1400H0z%22%2F%3E%3C%2Fmask%3E%3Cpath fill=%22%23082043%22 d=%22M0 0h2000v1400H0z%22%2F%3E%3Cg style=%22transform-origin:center center%22 stroke=%22%234a9df3c4%22 stroke-width=%222%22 mask=%22url(%23b)%22%3E%3Cpath fill=%22%234a9df335%22 d=%22M0 0h100v100H0z%22%2F%3E%3Cpath fill=%22none%22 d=%22M100 0h100v100H100z%22%2F%3E%3Cpath fill=%22%234a9df35b%22 d=%22M200 0h100v100H200z%22%2F%3E%3Cpath fill=%22none%22 d=%22M300 0h100v100H300z%22%2F%3E%3Cpath fill=%22%234a9df302%22 d=%22M400 0h100v100H400z%22%2F%3E%3Cpath fill=%22%234a9df320%22 d=%22M500 0h100v100H500z%22%2F%3E%3Cpath fill=%22none%22 d=%22M600 0h100v100H600zM700 0h100v100H700zM800 0h100v100H800zM900 0h100v100H900zM1000 0h100v100h-100zM1100 0h100v100h-100zM1200 0h100v100h-100zM1300 0h100v100h-100zM1400 0h100v100h-100zM1500 0h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df361%22 d=%22M1600 0h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df378%22 d=%22M1700 0h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1800 0h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df361%22 d=%22M1900 0h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df359%22 d=%22M0 100h100v100H0z%22%2F%3E%3Cpath fill=%22%234a9df315%22 d=%22M100 100h100v100H100z%22%2F%3E%3Cpath fill=%22%234a9df396%22 d=%22M200 100h100v100H200z%22%2F%3E%3Cpath fill=%22none%22 d=%22M300 100h100v100H300z%22%2F%3E%3Cpath fill=%22%234a9df38f%22 d=%22M400 100h100v100H400z%22%2F%3E%3Cpath fill=%22%234a9df306%22 d=%22M500 100h100v100H500z%22%2F%3E%3Cpath fill=%22%234a9df395%22 d=%22M600 100h100v100H600z%22%2F%3E%3Cpath fill=%22%234a9df312%22 d=%22M700 100h100v100H700z%22%2F%3E%3Cpath fill=%22none%22 d=%22M800 100h100v100H800z%22%2F%3E%3Cpath fill=%22%234a9df344%22 d=%22M900 100h100v100H900z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1000 100h100v100h-100zM1100 100h100v100h-100zM1200 100h100v100h-100zM1300 100h100v100h-100zM1400 100h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df34d%22 d=%22M1500 100h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df3b2%22 d=%22M1600 100h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df312%22 d=%22M1700 100h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1800 100h100v100h-100zM1900 100h100v100h-100zM0 200h100v100H0zM100 200h100v100H100zM200 200h100v100H200z%22%2F%3E%3Cpath fill=%22%234a9df301%22 d=%22M300 200h100v100H300z%22%2F%3E%3Cpath fill=%22none%22 d=%22M400 200h100v100H400zM500 200h100v100H500zM600 200h100v100H600zM700 200h100v100H700zM800 200h100v100H800zM900 200h100v100H900z%22%2F%3E%3Cpath fill=%22%234a9df379%22 d=%22M1000 200h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1100 200h100v100h-100zM1200 200h100v100h-100zM1300 200h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df388%22 d=%22M1400 200h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1500 200h100v100h-100zM1600 200h100v100h-100zM1700 200h100v100h-100zM1800 200h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df38a%22 d=%22M1900 200h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M0 300h100v100H0zM100 300h100v100H100zM200 300h100v100H200zM300 300h100v100H300zM400 300h100v100H400z%22%2F%3E%3Cpath fill=%22%234a9df35d%22 d=%22M500 300h100v100H500z%22%2F%3E%3Cpath fill=%22none%22 d=%22M600 300h100v100H600zM700 300h100v100H700z%22%2F%3E%3Cpath fill=%22%234a9df3be%22 d=%22M800 300h100v100H800z%22%2F%3E%3Cpath fill=%22none%22 d=%22M900 300h100v100H900zM1000 300h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df3a0%22 d=%22M1100 300h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1200 300h100v100h-100zM1300 300h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df320%22 d=%22M1400 300h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df325%22 d=%22M1500 300h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1600 300h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df329%22 d=%22M1700 300h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1800 300h100v100h-100zM1900 300h100v100h-100zM0 400h100v100H0zM100 400h100v100H100zM200 400h100v100H200zM300 400h100v100H300z%22%2F%3E%3Cpath fill=%22%234a9df353%22 d=%22M400 400h100v100H400z%22%2F%3E%3Cpath fill=%22%234a9df301%22 d=%22M500 400h100v100H500z%22%2F%3E%3Cpath fill=%22%234a9df38e%22 d=%22M600 400h100v100H600z%22%2F%3E%3Cpath fill=%22%234a9df354%22 d=%22M700 400h100v100H700z%22%2F%3E%3Cpath fill=%22%234a9df393%22 d=%22M800 400h100v100H800z%22%2F%3E%3Cpath fill=%22none%22 d=%22M900 400h100v100H900zM1000 400h100v100h-100zM1100 400h100v100h-100zM1200 400h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df30f%22 d=%22M1300 400h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df38d%22 d=%22M1400 400h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df337%22 d=%22M1500 400h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df329%22 d=%22M1600 400h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1700 400h100v100h-100zM1800 400h100v100h-100zM1900 400h100v100h-100zM0 500h100v100H0zM100 500h100v100H100z%22%2F%3E%3Cpath fill=%22%234a9df38b%22 d=%22M200 500h100v100H200z%22%2F%3E%3Cpath fill=%22%234a9df344%22 d=%22M300 500h100v100H300z%22%2F%3E%3Cpath fill=%22%234a9df340%22 d=%22M400 500h100v100H400z%22%2F%3E%3Cpath fill=%22none%22 d=%22M500 500h100v100H500z%22%2F%3E%3Cpath fill=%22%234a9df3b7%22 d=%22M600 500h100v100H600z%22%2F%3E%3Cpath fill=%22%234a9df355%22 d=%22M700 500h100v100H700z%22%2F%3E%3Cpath fill=%22none%22 d=%22M800 500h100v100H800z%22%2F%3E%3Cpath fill=%22%234a9df37e%22 d=%22M900 500h100v100H900z%22%2F%3E%3Cpath fill=%22%234a9df3b7%22 d=%22M1000 500h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df3ae%22 d=%22M1100 500h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1200 500h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df303%22 d=%22M1300 500h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1400 500h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df310%22 d=%22M1500 500h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1600 500h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df367%22 d=%22M1700 500h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1800 500h100v100h-100zM1900 500h100v100h-100zM0 600h100v100H0z%22%2F%3E%3Cpath fill=%22%234a9df369%22 d=%22M100 600h100v100H100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M200 600h100v100H200z%22%2F%3E%3Cpath fill=%22%234a9df394%22 d=%22M300 600h100v100H300z%22%2F%3E%3Cpath fill=%22none%22 d=%22M400 600h100v100H400zM500 600h100v100H500zM600 600h100v100H600z%22%2F%3E%3Cpath fill=%22%234a9df346%22 d=%22M700 600h100v100H700z%22%2F%3E%3Cpath fill=%22%234a9df325%22 d=%22M800 600h100v100H800z%22%2F%3E%3Cpath fill=%22none%22 d=%22M900 600h100v100H900zM1000 600h100v100h-100zM1100 600h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df318%22 d=%22M1200 600h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1300 600h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df34a%22 d=%22M1400 600h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1500 600h100v100h-100zM1600 600h100v100h-100zM1700 600h100v100h-100zM1800 600h100v100h-100zM1900 600h100v100h-100zM0 700h100v100H0zM100 700h100v100H100z%22%2F%3E%3Cpath fill=%22%234a9df31b%22 d=%22M200 700h100v100H200z%22%2F%3E%3Cpath fill=%22none%22 d=%22M300 700h100v100H300zM400 700h100v100H400zM500 700h100v100H500z%22%2F%3E%3Cpath fill=%22%234a9df329%22 d=%22M600 700h100v100H600z%22%2F%3E%3Cpath fill=%22none%22 d=%22M700 700h100v100H700zM800 700h100v100H800zM900 700h100v100H900z%22%2F%3E%3Cpath fill=%22%234a9df313%22 d=%22M1000 700h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1100 700h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df348%22 d=%22M1200 700h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df363%22 d=%22M1300 700h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df375%22 d=%22M1400 700h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1500 700h100v100h-100zM1600 700h100v100h-100zM1700 700h100v100h-100zM1800 700h100v100h-100zM1900 700h100v100h-100zM0 800h100v100H0zM100 800h100v100H100zM200 800h100v100H200z%22%2F%3E%3Cpath fill=%22%234a9df313%22 d=%22M300 800h100v100H300z%22%2F%3E%3Cpath fill=%22none%22 d=%22M400 800h100v100H400zM500 800h100v100H500z%22%2F%3E%3Cpath fill=%22%234a9df385%22 d=%22M600 800h100v100H600z%22%2F%3E%3Cpath fill=%22none%22 d=%22M700 800h100v100H700zM800 800h100v100H800zM900 800h100v100H900zM1000 800h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df38d%22 d=%22M1100 800h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1200 800h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df39e%22 d=%22M1300 800h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df3b6%22 d=%22M1400 800h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1500 800h100v100h-100zM1600 800h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df3b5%22 d=%22M1700 800h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df34f%22 d=%22M1800 800h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1900 800h100v100h-100zM0 900h100v100H0z%22%2F%3E%3Cpath fill=%22%234a9df39a%22 d=%22M100 900h100v100H100z%22%2F%3E%3Cpath fill=%22%234a9df391%22 d=%22M200 900h100v100H200z%22%2F%3E%3Cpath fill=%22none%22 d=%22M300 900h100v100H300z%22%2F%3E%3Cpath fill=%22%234a9df308%22 d=%22M400 900h100v100H400z%22%2F%3E%3Cpath fill=%22none%22 d=%22M500 900h100v100H500z%22%2F%3E%3Cpath fill=%22%234a9df31c%22 d=%22M600 900h100v100H600z%22%2F%3E%3Cpath fill=%22none%22 d=%22M700 900h100v100H700zM800 900h100v100H800zM900 900h100v100H900zM1000 900h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df32a%22 d=%22M1100 900h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1200 900h100v100h-100zM1300 900h100v100h-100zM1400 900h100v100h-100zM1500 900h100v100h-100zM1600 900h100v100h-100zM1700 900h100v100h-100zM1800 900h100v100h-100zM1900 900h100v100h-100zM0 1000h100v100H0z%22%2F%3E%3Cpath fill=%22%234a9df334%22 d=%22M100 1000h100v100H100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M200 1000h100v100H200z%22%2F%3E%3Cpath fill=%22%234a9df308%22 d=%22M300 1000h100v100H300z%22%2F%3E%3Cpath fill=%22%234a9df35c%22 d=%22M400 1000h100v100H400z%22%2F%3E%3Cpath fill=%22%234a9df312%22 d=%22M500 1000h100v100H500z%22%2F%3E%3Cpath fill=%22%234a9df359%22 d=%22M600 1000h100v100H600z%22%2F%3E%3Cpath fill=%22%234a9df384%22 d=%22M700 1000h100v100H700z%22%2F%3E%3Cpath fill=%22none%22 d=%22M800 1000h100v100H800zM900 1000h100v100H900zM1000 1000h100v100h-100zM1100 1000h100v100h-100zM1200 1000h100v100h-100zM1300 1000h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df315%22 d=%22M1400 1000h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1500 1000h100v100h-100zM1600 1000h100v100h-100zM1700 1000h100v100h-100zM1800 1000h100v100h-100zM1900 1000h100v100h-100zM0 1100h100v100H0zM100 1100h100v100H100zM200 1100h100v100H200zM300 1100h100v100H300zM400 1100h100v100H400zM500 1100h100v100H500z%22%2F%3E%3Cpath fill=%22%234a9df376%22 d=%22M600 1100h100v100H600z%22%2F%3E%3Cpath fill=%22none%22 d=%22M700 1100h100v100H700zM800 1100h100v100H800zM900 1100h100v100H900z%22%2F%3E%3Cpath fill=%22%234a9df399%22 d=%22M1000 1100h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1100 1100h100v100h-100zM1200 1100h100v100h-100zM1300 1100h100v100h-100zM1400 1100h100v100h-100zM1500 1100h100v100h-100zM1600 1100h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df3a9%22 d=%22M1700 1100h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df34e%22 d=%22M1800 1100h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df300%22 d=%22M1900 1100h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M0 1200h100v100H0zM100 1200h100v100H100z%22%2F%3E%3Cpath fill=%22%234a9df392%22 d=%22M200 1200h100v100H200z%22%2F%3E%3Cpath fill=%22%234a9df3af%22 d=%22M300 1200h100v100H300z%22%2F%3E%3Cpath fill=%22%234a9df371%22 d=%22M400 1200h100v100H400z%22%2F%3E%3Cpath fill=%22none%22 d=%22M500 1200h100v100H500zM600 1200h100v100H600zM700 1200h100v100H700zM800 1200h100v100H800z%22%2F%3E%3Cpath fill=%22%234a9df338%22 d=%22M900 1200h100v100H900z%22%2F%3E%3Cpath fill=%22%234a9df3a5%22 d=%22M1000 1200h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df3af%22 d=%22M1100 1200h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1200 1200h100v100h-100zM1300 1200h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df371%22 d=%22M1400 1200h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df395%22 d=%22M1500 1200h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1600 1200h100v100h-100zM1700 1200h100v100h-100zM1800 1200h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df32a%22 d=%22M1900 1200h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M0 1300h100v100H0z%22%2F%3E%3Cpath fill=%22%234a9df3b4%22 d=%22M100 1300h100v100H100z%22%2F%3E%3Cpath fill=%22%234a9df339%22 d=%22M200 1300h100v100H200z%22%2F%3E%3Cpath fill=%22%234a9df32d%22 d=%22M300 1300h100v100H300z%22%2F%3E%3Cpath fill=%22none%22 d=%22M400 1300h100v100H400zM500 1300h100v100H500z%22%2F%3E%3Cpath fill=%22%234a9df38e%22 d=%22M600 1300h100v100H600z%22%2F%3E%3Cpath fill=%22none%22 d=%22M700 1300h100v100H700zM800 1300h100v100H800z%22%2F%3E%3Cpath fill=%22%234a9df306%22 d=%22M900 1300h100v100H900z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1000 1300h100v100h-100zM1100 1300h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df365%22 d=%22M1200 1300h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df326%22 d=%22M1300 1300h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1400 1300h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df32e%22 d=%22M1500 1300h100v100h-100z%22%2F%3E%3Cpath fill=%22none%22 d=%22M1600 1300h100v100h-100zM1700 1300h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df362%22 d=%22M1800 1300h100v100h-100z%22%2F%3E%3Cpath fill=%22%234a9df31e%22 d=%22M1900 1300h100v100h-100z%22%2F%3E%3C%2Fg%3E%3Cpath fill=%22%23f3f3f3%22 filter=%22url(%23c)%22 opacity=%22.8%22 d=%22M0 0h2000v1400H0z%22%2F%3E%3Cdefs%3E%3CradialGradient id=%22a%22%3E%3Cstop offset=%2250%25%22 stop-color=%22%23fff%22 stop-opacity=%220%22%2F%3E%3Cstop offset=%221%22 stop-color=%22%23fff%22 stop-opacity=%22.5%22%2F%3E%3C%2FradialGradient%3E%3Cfilter id=%22c%22 x=%22-800%22 y=%22-560%22 width=%222800%22 height=%221960%22 filterUnits=%22userSpaceOnUse%22 primitiveUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22linearRGB%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.115%22 numOctaves=%224%22 seed=%2215%22 stitchTiles=%22no-stitch%22 x=%220%22 y=%220%22 width=%222000%22 height=%221400%22 result=%22turbulence%22%2F%3E%3CfeSpecularLighting surfaceScale=%2210%22 specularConstant=%22.19%22 specularExponent=%2220%22 lighting-color=%22%23fff%22 x=%220%22 y=%220%22 width=%222000%22 height=%221400%22 in=%22turbulence%22 result=%22specularLighting%22%3E%3CfeDistantLight azimuth=%223%22 elevation=%22100%22%2F%3E%3C%2FfeSpecularLighting%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')",
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
        color30: '#9172f2',
        color10: '#4A9DF3',
        bgcolor: '#edf2f7',
        highlightColor: '#606d98',
        mainColor: '#020817',
        textColor: '#cae9fb',
        textColor2: '#EAECE8',
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
        nyyale: '#193F6F',
        oxfordblue: '#061D3F',
        nyorange: '#F1A66C',
        nyorange2: '#DC732F',
        nyblalys: '#13345F',
        nylysgra: '#13345F',

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
    variants: {
      extend: {
        transform: ['hover', 'focus'],
        transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
