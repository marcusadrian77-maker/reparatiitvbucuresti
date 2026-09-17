import { ARTICOLE_1 } from './articole-1';
import { ARTICOLE_2 } from './articole-2';
import { ARTICOLE_3 } from './articole-3';

// Retrogradarea paginilor de model de televizor (17 septembrie 2026).
//
// Aceeași măsură aplicată străzilor secundare pe 7 septembrie, din același motiv.
// Search Console: din cele 473 de URL-uri din sitemap, 141 erau pagini de model
// (30%). În ultimele 6 luni doar 34 dintre ele au apărut vreodată în căutări, cu
// 8 clicuri și 217 afișări din 2.589 de clicuri ale site-ului — 0,3%. Pentru
// comparație, o singură pagină de stradă (bd-bucurestii-noi) are 36 de clicuri.
// Bugetul de accesare cu crawlere se ducea pe pagini care nu convertesc, în
// dauna paginilor de stradă și de sector, care convertesc la 15–25% CTR.
//
// Păstrăm în sitemap modelele cu trafic real (cel puțin un clic sau cel puțin 3
// afișări în 6 luni). Restul rămân pe site pentru vizitatori și pentru linkurile
// interne, dar ies din sitemap și primesc noindex, follow.
//
// Ca să readuci un model în index: adaugă-i slugul în PASTRATE_MODELE.
export const PASTRATE_MODELE: Set<string> = new Set([
  'reparatii-televizor-curbat-smart-android-sony-bravia-kd-65sd8505',
  'reparatii-televizor-led-lg-32lj500u',
  'reparatii-televizor-led-panasonic-viera-tx-40es510',
  'reparatii-televizor-led-panasonic-viera-tx-55fx750b',
  'reparatii-televizor-led-philips-32pht4203-12',
  'reparatii-televizor-led-philips-43pft4203-12',
  'reparatii-televizor-led-philips-43pus6551-12',
  'reparatii-televizor-led-philips-55pus7181-12',
  'reparatii-televizor-led-philips-55pus8602-12',
  'reparatii-televizor-led-philips-65pus8102-12',
  'reparatii-televizor-oled-philips-55pos9002-12',
  'reparatii-televizor-smart-android-3d-slim-sony-bravia-kd-55xd9305',
  'reparatii-televizor-smart-android-led-4k-sony-bravia-kd-100zd9',
  'reparatii-televizor-smart-android-led-sony-bravia-kd-55xf9005',
  'reparatii-televizor-smart-led-lg-32lj610v',
  'reparatii-televizor-smart-led-lg-49sk8500pla',
  'reparatii-televizor-smart-led-lg-75sk8100pla',
  'reparatii-televizor-smart-lg-oled77g7v',
]);

// Derivat: orice pagină de model care nu e în lista de mai sus.
export const MODELE_SECUNDARE: Set<string> = new Set(
  [...ARTICOLE_1, ...ARTICOLE_2, ...ARTICOLE_3]
    .map(a => a.s)
    .filter(s => /^reparatii-televizor(-|$)/.test(s) && !PASTRATE_MODELE.has(s))
);
