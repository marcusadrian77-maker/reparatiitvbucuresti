import { LOCATII } from './locatii';
import { SECTOR } from './strazi';

// Retrogradarea străzilor secundare (7 septembrie 2026).
//
// Search Console arăta 732 de pagini „Descoperită – nu este indexată", toate
// pagini de stradă pe care Google nu le accesase niciodată: prea multe adrese
// pentru bugetul de accesare cu crawlere al domeniului. Păstrăm în sitemap doar
// paginile care merită: arterele cu sector alocat în SECTOR, localitățile din
// Ilfov și paginile cu trafic real în ultimele 6 luni (lista de mai jos).
// Restul rămân pe site pentru vizitatori, dar ies din sitemap și primesc
// noindex, follow — linkurile lor interne continuă să transmită valoare.
//
// Ca să readuci o stradă în index: adaug-o în PASTRATE (sau dă-i sector în SECTOR).
export const PASTRATE: Set<string> = new Set([
  'baneasa-2', 'bd-bucurestii-noi', 'bd-dacia', 'bd-petrila',
  'bucegi', 'caierului', 'caraiman', 'carpati',
  'ceasornicului', 'ceremusului', 'cisnadie', 'clabucet',
  'dridu', 'drum-plaiu-nucului', 'durau', 'eminescu-mihai',
  'halta-grivita', 'harghita', 'iancului', 'int-gadinti',
  'int-sterie-radu', 'int-tudor-stefan', 'ionescu-emanoil', 'jimbolia',
  'lipscani', 'mihai-viteazul', 'moliere-jean-baptiste-dramaturg', 'mosilor',
  'muncii', 'murfatlar', 'oltenitei', 'pajura',
  'pechea', 'petrescu-serban-lt-av', 'piata-romana', 'piata-universitatii',
  'pipera', 'poiana-codrului', 'pta-botescu-haralambie-dr', 'putul-lui-zamfir',
  'razelor', 'reparatii-tv-bulevardul-pierre-de-coubertin', 'sacele', 'sanatescu-stefan-mr-av',
  'stefan-cel-mare', 'tarnaveni', 'timpuri-noi', 'vatra-luminoasa',
  'vitan',
]);

// Derivat: tot ce nu e arteră cu sector, localitate Ilfov sau pagină păstrată.
export const SECUNDARE: Set<string> = new Set(
  LOCATII
    .filter(([slug, nume]) => !SECTOR[slug] && !PASTRATE.has(slug) && !nume.includes('Ilfov'))
    .map(([slug]) => slug)
);
