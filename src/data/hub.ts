// Hub-uri de conținut: listele care leagă între ele paginile migrate din vechiul WordPress.
// Fără aceste liste, o parte din pagini rămân „orfane" — există în sitemap, dar niciun link intern nu duce la ele.
import { ARTICOLE_1 } from './articole-1';
import { ARTICOLE_2 } from './articole-2';
import { ARTICOLE_3 } from './articole-3';
import { LOCATII } from './locatii';
import { PAGINI_PROPRII } from './branduri';

export type Articol = { s: string; t: string; d: string; h: string };

export const ARTICOLE: Articol[] = [...ARTICOLE_1, ...ARTICOLE_2, ...ARTICOLE_3];

/** Pagini de stradă sau de zonă migrate ca articole: apar în hubul de zone, nu în dicționar. */
export const ZONE_ARTICOL = [
  'bd-alexandru-ioan-cuza',
  'bd-averescu-alexandru-maresal',
  'campeanu-alexandru-mr',
  'cernat-alexandru-g-ral',
  'constantinescu-alexandru',
  'deparateanu-alexandru',
  'faclie-alexandru-erou',
  'int-alexandrescu-grigore',
  'lapusneanu-alexandru',
  'maica-alexandra',
  'pta-lahovari-alexandru',
  'puskin-alexandr-sergheevici-poet',
  'serbanescu-alexandru-cpt-av',
  'xenopol-d-alexandru',
  'reparatii-televizoare-bd-hristo-botev',
  'reparatii-televizoare-bd-nicolae-grigorescu',
  'reparatii-televizoare-bd-regina-elisabeta',
  'reparatii-televizoare-bd-theodor-pallady',
  'reparatii-televizoare-cartier-tei',
  'reparatii-televizoare-militari',
  'reparatii-televizoare-bucuresti',
];

/** Paginile care sunt ele însele hub-uri (listele lor se generează, nu se scriu de mână). */
export const HUBURI = new Set(['blog', 'lista-tv-sony']);

/** Pagini legale — linkuite din subsol. */
export const LEGAL_SLUGS = [
  'termeni-si-conditii',
  'politica-de-confidentialitate',
  'politica-de-cookies',
  'gdpr-si-anpc',
];

/** Pagini de servicii conexe (console) — linkuite din subsol. */
export const SERVICII_EXTRA: [string, string][] = [
  ['reparatii-console-playstation', 'Reparații console PlayStation'],
  ['reparatii-console-xbox', 'Reparații console Xbox'],
  ['reparatii-console-nintendo', 'Reparații console Nintendo'],
  ['mentenanta-console', 'Mentenanță console gaming'],
];

const LOC = new Set(LOCATII.map(([s]) => s));
const ZONE = new Set(ZONE_ARTICOL);
const LEGAL = new Set(LEGAL_SLUGS);
const SERV = new Set(SERVICII_EXTRA.map(([s]) => s));

const eModelSlug = (s: string) => /^reparatii-televizor-/.test(s);

/** Curăță titlul brut al unui articol pentru afișare în liste. */
export const titluScurt = (t: string) =>
  String(t).replace(/\s*[–—-]\s*Reparatii TV Bucuresti\s*$/i, '').trim();

/** Dicționarul TV: toate ghidurile și explicațiile migrate, fără modele, zone, legale sau servicii. */
export const GLOSAR = ARTICOLE
  .filter(a => !LOC.has(a.s) && !ZONE.has(a.s) && !LEGAL.has(a.s) && !SERV.has(a.s)
    && !PAGINI_PROPRII.has(a.s) && !HUBURI.has(a.s) && !eModelSlug(a.s))
  .map(a => ({ s: a.s, t: titluScurt(a.t) }))
  .sort((a, b) => a.t.localeCompare(b.t, 'ro'));

/** Toate modelele unei mărci, în ordine alfabetică. */
export function modeleMarca(re: RegExp) {
  return ARTICOLE
    .filter(a => eModelSlug(a.s) && re.test(a.t))
    .map(a => ({ s: a.s, t: titluScurt(a.t).replace(/^Reparatii\s+Televizor\s+/i, '').replace(/^Reparatii\s+/i, '') }))
    .sort((a, b) => a.t.localeCompare(b.t, 'ro'));
}

/** Lista de modele afișată pe paginile-hub `lista-tv-*`. */
export const LISTE_MODELE: Record<string, { titlu: string; re: RegExp; brand: string }> = {
  'lista-tv-sony': { titlu: 'Modele Sony pe care le reparăm', re: /sony|bravia/i, brand: 'reparatii-televizoare-sony' },
};

/** Pentru o pagină de marcă, hub-ul cu lista completă de modele (dacă există). */
export function hubModele(brandSlug: string) {
  const k = Object.keys(LISTE_MODELE).find(x => LISTE_MODELE[x].brand === brandSlug);
  return k ? { slug: k, ...LISTE_MODELE[k] } : null;
}

/** Regexul care identifică modelele fiecărei mărci, după titlul articolului. */
export const MODELE_MARCA: Record<string, RegExp> = {
  'reparatii-televizoare-samsung': /samsung/i,
  'reparatii-televizoare-lg': /\blg\b/i,
  'reparatii-televizoare-sony': /sony|bravia/i,
  'reparatii-televizoare-philips': /philips|ambilight/i,
  'reparatii-tv-panasonic': /panasonic|viera/i,
  'reparatii-televizoare-horizon': /horizon/i,
};
