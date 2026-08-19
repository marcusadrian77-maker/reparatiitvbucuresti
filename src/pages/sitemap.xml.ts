import { SITE } from '../data/site';
import { LOCATII } from '../data/locatii';
import { CANONIC } from '../data/strazi';
import { ARTICOLE_1 } from '../data/articole-1';
import { ARTICOLE_2 } from '../data/articole-2';
import { ARTICOLE_3 } from '../data/articole-3';

// URL-uri care NU trebuie să apară în sitemap: sunt redirecționate în astro.config.mjs
// (Astro generează pentru ele o pagină cu meta refresh + noindex).
const EXCLUSE = new Set([
  'reparatii-tv-sector-1', 'reparatii-tv-sector-2', 'reparatii-tv-sector-3',
  'reparatii-tv-sector-4', 'reparatii-tv-sector-5', 'reparatii-tv-sector-6',
  'reparatii-tv', 'best-buget-tv', 'cel-mai-bun-raport-calitate-pret-la-un-tv-high-end', 'regele-imaginii',
]);

const PRIORITATE: Record<string, string> = {
  '': '1.0',
  'preturi-reparatii-tv': '0.9', 'contact': '0.9', 'sectoare': '0.9',
  'reparatii-televizoare-samsung': '0.9', 'reparatii-televizoare-lg': '0.9',
  'reparatii-televizoare-sector-1': '0.9', 'reparatii-televizoare-sector-2': '0.9',
  'reparatii-televizoare-sector-3': '0.9', 'reparatii-televizoare-sector-4': '0.9',
  'reparatii-televizoare-sector-5': '0.9', 'reparatii-televizoare-sector-6': '0.9',
  'despre-noi': '0.7', 'cum-decurge-procesul-de-reparatie': '0.7',
  'zone-deservite-strazi-bucuresti': '0.7', 'reparatii-tv': '0.7', 'reparatii-televizoare': '0.7',
};

export async function GET() {
  const base = SITE.domeniu.replace(/\/$/, '');
  const fixed = [
    '', 'despre-noi', 'preturi-reparatii-tv', 'cum-decurge-procesul-de-reparatie', 'contact',
    'sectoare', 'zone-deservite-strazi-bucuresti', 'reparatii-televizoare',
    'reparatii-televizoare-samsung', 'reparatii-televizoare-lg',
    'reparatii-televizoare-sector-1', 'reparatii-televizoare-sector-2', 'reparatii-televizoare-sector-3',
    'reparatii-televizoare-sector-4', 'reparatii-televizoare-sector-5', 'reparatii-televizoare-sector-6',
  ];
  const arts = [...ARTICOLE_1, ...ARTICOLE_2, ...ARTICOLE_3].map(a => a.s);
  const locs = LOCATII.map(([s]) => s);

  const vazut = new Set<string>();
  const all = [...fixed, ...locs, ...arts].filter(s => {
    if (EXCLUSE.has(s) || CANONIC[s] || vazut.has(s)) return false;
    vazut.add(s);
    return true;
  });

  const urls = all.map(s => {
    const loc = `${base}/${s ? s + '/' : ''}`;
    const pr = PRIORITATE[s] || '0.5';
    return `<url><loc>${loc}</loc><priority>${pr}</priority></url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
