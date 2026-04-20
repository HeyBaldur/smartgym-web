import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://heybaldur.github.io',
  base: isProd ? '/smartgym-web' : '/',
  integrations: [
    tailwind(),
  ],
  output: 'static',
});
