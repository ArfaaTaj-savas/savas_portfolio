import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',  // App Router (pages are inside `app/`)
    './components/**/*.{js,ts,jsx,tsx,mdx}',  // Reusable components
    './constants/**/*.{js,ts,jsx,tsx,mdx}', // Extra files that might contain Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1', // Custom Tailwind colors
        secondary: '#EC4899',
        dark: '#111827',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure you have Inter installed
      },
    },
  },
  plugins: [],
};



export default config;
