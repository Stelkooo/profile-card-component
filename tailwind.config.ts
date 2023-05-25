import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-cyan': 'hsl(185, 75%, 39%)',
        'very-dark-desaturated-blue': 'hsl(229, 23%, 23%)',
        'dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'light-gray': 'hsla(228, 9%, 92%, 1)',
      },
      maxWidth: {
        xs: '327px',
      },
      boxShadow: {
        profile: '0px 50px 100px -20px rgba(8, 70, 94, 0.504835)',
      },
    },
  },
  plugins: [],
} satisfies Config;
