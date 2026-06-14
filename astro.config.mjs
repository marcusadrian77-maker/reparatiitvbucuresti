import { defineConfig } from 'astro/config';
// GO-LIVE pe domeniul oficial
export default defineConfig({
  site: 'https://www.reparatiitvbucuresti.ro',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
