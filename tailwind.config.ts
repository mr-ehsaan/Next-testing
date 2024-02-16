import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      fuchsia: '#6950E5',
      alabaster: '#FAFAFA',
      gray: {
        '400': '#D9D9D9',
        '600': '#666666',
        '900': '#999999',
      },
      purple: '#5341D9',
      blue: '#4033CC',
      dark: '#090705',
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
    },

    container: { screens: { xl: '1248px' }, center: true },
    extend: {
      opacity: {
        '4': '0.04',
        '6': '0.06',
        '8': '0.08',
      },
      fontSize: {
        'k-xs': '0.9375rem',
        'k-sm': '1.1875rem',
        'k-md': '1.3125rem',
        'k-xl': '1.75rem',
        'k-2xl': '2rem',
        'k-3xl': '2.75rem',
        'k-4xl': '3.25rem',
      },
      fontFamily: {
        roboto: 'var(--font-roboto)',
        'source-sans': 'var(--font-source-sans)',
        'source-serif': 'var(--font-source-serif)',
      },
      boxShadow: {
        'border-type': '0 0 0 1px var(--tw-shadow-color)',
        '3xl': '0px 4px 40px 0px ',
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            focus: '#5341D9',
            primary: '#5341D9',
            default: { foreground: '#090705' },
            danger: {
              DEFAULT: '#FF2638',
            },
          },
        },
      },
    }),
  ],
};
export default config;
