import { SITE } from '../data/site';
import { LOCATII } from '../data/locatii';
import { ARTICOLE_1 } from '../data/articole-1';
import { ARTICOLE_2 } from '../data/articole-2';
import { ARTICOLE_3 } from '../data/articole-3';
export async function GET() {
  const base = SITE.domeniu.replace(/\/$/, '');
  const fixed = ['', 'despre-noi', 'preturi-reparatii-tv', 'reparatii-televizoare-samsung', 'reparatii-televizoare-lg', 'cum-decurge-procesul-de-reparatie', 'reparatii-televizoare-sector-6', 'contact', 'reparatii-tv', 'reparatii-televizoare'];
  const arts = [...ARTICOLE_1, ...ARTICOLE_2, ...ARTICOLE_3].map(a => a.s);
  const locs = LOCATII.map(([s]) => s);
  const all = [...fixed, ...locs, ...arts];
  const urls = all.map(s => `<url><loc>${base}/${s ? s + '/' : ''}</loc></url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
