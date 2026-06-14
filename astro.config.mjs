import { defineConfig } from 'astro/config';
// PREVIEW pe GitHub Pages (project page). La go-live: base:'/', site:'https://www.reparatiitvbucuresti.ro'
export default defineConfig({
  site: 'https://marcusadrian77-maker.github.io',
  base: '/reparatiitvbucuresti/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
