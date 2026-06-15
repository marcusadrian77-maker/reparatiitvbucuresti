import { defineConfig } from 'astro/config';
// GO-LIVE pe domeniul oficial
export default defineConfig({
  site: 'https://www.reparatiitvbucuresti.ro',
  trailingSlash: 'always',
  build: { format: 'directory' },
  redirects: {
    // URL-uri vechi WordPress cu prefix /ilfov/ -> structura noua (plat)
    '/ilfov/reparatii-tv-cernica/': '/reparatii-tv-cernica/',
    '/ilfov/reparatii-tv-1-decembrie/': '/reparatii-tv-1-decembrie/',
    '/ilfov/reparatii-tv-balotesti/': '/reparatii-tv-balotesti/',
    '/ilfov/reparatii-tv-tunari/': '/reparatii-tv-tunari/',
    '/ilfov/reparatii-tv-magurele/': '/reparatii-tv-magurele/',
    '/ilfov/reparatii-tv-bragadiru/': '/reparatii-tv-bragadiru/',
    '/ilfov/reparatii-tv-chiajna/': '/reparatii-tv-chiajna/',
    '/ilfov/reparatii-tv-otopeni/': '/reparatii-tv-otopeni/',
    '/ilfov/reparatii-tv-buftea/': '/reparatii-tv-buftea/',
    '/ilfov/reparatii-tv-pantelimon/': '/reparatii-tv-pantelimon/',
    '/ilfov/reparatii-tv-popesti-leordeni/': '/reparatii-tv-popesti-leordeni/',
    '/ilfov/reparatii-tv-voluntari/': '/reparatii-tv-voluntari/',
    // Articole vechi fara echivalent migrat -> pagina principala
    '/best-buget-tv/': '/',
    '/cel-mai-bun-raport-calitate-pret-la-un-tv-high-end/': '/',
    '/regele-imaginii/': '/',
  },
});
