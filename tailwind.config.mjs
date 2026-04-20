/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-headings': '#34d399',
            '--tw-prose-links': '#34d399',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-counters': '#6ee7b7',
            '--tw-prose-bullets': '#6ee7b7',
            '--tw-prose-hr': 'rgba(255,255,255,0.1)',
            '--tw-prose-th-borders': 'rgba(255,255,255,0.15)',
            '--tw-prose-td-borders': 'rgba(255,255,255,0.08)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
