import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      boxShadow: {
        custom: '0 5px 30px rgb(164,69,237)',
      },
      backgroundImage: {
        'icon-search': "url('/public/icon-search.png')",
      },
      fontSize: {
        'custom-heading-l': '64px',
        'custom-heading-l-mobile': '32px',
        'custom-heading-m': '24px',
        'custom-heading-s': '20px',
        'custom-body-m': '18px',
        'custom-body-s': '14px',
      },
      lineHeight: {
        'custom-line-heading-l': '77px',
        'custom-line-heading-m': '29px',
        'custom-line-heading-s': '24px',
        'custom-line-body-m': '24px',
        'custom-line-body-s': '17px',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-lora)'],
        mono: ['var(--font-inconsolata)'],
      },
      colors: {
        primary: {
          F4: '#F4F4F4',
          E9: '#E9E9E9',
          '75': '#757575',
          '3A': '#3A3A3A',
          '2D': '#2D2D2D',
          '1F': '#1F1F1F',
          '05': '#050505',
          '97': '#979797',
          purple: '#A445ED',
          orange: '#FF5252',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
