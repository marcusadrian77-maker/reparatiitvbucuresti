// Utilitare pentru normalizarea numelor de străzi din nomenclatorul stradal
// și pentru generarea de conținut diferențiat pe paginile de locație.

const TIP_DIN_SLUG: [RegExp, string][] = [
  [/^bd-|^bulevardul-/, 'Bulevardul'],
  [/^sos-|^soseaua-/, 'Șoseaua'],
  [/^cal-|^calea-/, 'Calea'],
  [/^pta-|^piata-/, 'Piața'],
  [/^int-|^intrarea-/, 'Intrarea'],
  [/^drum-|^drumul-/, 'Drumul'],
  [/^aleea-/, 'Aleea'],
  [/^splaiul-/, 'Splaiul'],
];

const TIP_DIN_NUME: [RegExp, string][] = [
  [/^bd\.?\s+/i, 'Bulevardul'],
  [/^bulevardul\s+/i, 'Bulevardul'],
  [/^sos\.?\s+/i, 'Șoseaua'],
  [/^soseaua\s+/i, 'Șoseaua'],
  [/^cal\.?\s+/i, 'Calea'],
  [/^calea\s+/i, 'Calea'],
  [/^pta\.?\s+/i, 'Piața'],
  [/^piata\s+/i, 'Piața'],
  [/^int\.?\s+/i, 'Intrarea'],
  [/^intrarea\s+/i, 'Intrarea'],
  [/^drum\s+|^drumul\s+/i, 'Drumul'],
  [/^aleea\s+/i, 'Aleea'],
  [/^str\.?\s+|^strada\s+/i, 'Strada'],
];

// Grade / titluri păstrate și scrise complet, în fața numelui
const GRADE: Record<string, string> = {
  'slt': 'Sublocotenent', 'lt': 'Locotenent', 'cpt': 'Căpitan', 'mr': 'Maior',
  'col': 'Colonel', 'g-ral': 'General', 'gral': 'General', 'amiral': 'Amiral',
  'serg': 'Sergent', 'cap': 'Caporal', 'sold': 'Soldat', 'av': 'aviator',
  'ing': 'inginer', 'dr': 'doctor', 'prof': 'profesor', 'arh': 'arhitect',
  'medic': 'doctor', 'lt-col': 'Locotenent-colonel',
};
// Descriptori de ocupație — nu apar în numele oficial al străzii, se elimină
const DESCRIPTORI = new Set([
  'pictor', 'scriitor', 'poet', 'poeta', 'poetă', 'actor', 'actrita', 'sociolog',
  'dramaturg', 'ist', 'istoric', 'comp', 'compozitor', 'erou', 'postmortem', 'jr',
]);

// Prenume frecvente în nomenclatorul stradal bucureștean (pentru inversarea
// formatului „Nume Prenume" din registru în forma naturală „Prenume Nume")
const PRENUME = new Set(`alexandru anastasie anda andrei anton arthur artur aurel augustin axinte
barbu benjamin camil carol cecilia charles christian ciprian constantin corneliu costache cristian
daniel david dimitrie dinicu dionisie dragos duiliu dumitru ecaterina edgar eliza elena emanoil emil
emile eremia ermil ernest eugen eugene francisc frosa gavriil george georges gheorghe grigore
haralambie hariclea henri horia iacob ian iani ie ilie ioan iodine ion ionel iordache iosif iulia
iuliu ivan jean johannes leonida lev louis ludwig luigi marcel maria marin matei mihai mihail mircea
naum nicolae niculae nikolai octav octavian pandele panait paraschiva pavel petre petru radu raducu
romeo sava sergiu serban smaranda stanislav stefan stephan teodor teodosie theodor toma traian tudor
valter vasile victor virgil zaharia`.trim().split(/\s+/));

const HONORIFICE = new Set(['sfantul','sfanta','sfintii','sfintele','doamna','domnita','regina','regele',
  'maica','popa','popa-nan','mitropolitul','mitropolit','episcopul','parintele','printul','principesa',
  'imparatul','banul','logofatul','vornicul','pitarul','clucereasa','uricariul','diaconul','macarie',
  'mihai','stefan','petru','neagoe','bogdan','radu','matei','vlad','constantin','alexandru','carol','ferdinand']);

const LEGATURI = new Set(['de', 'cu', 'lui', 'si', 'și', 'cel', 'la', 'din', 'al', 'ale', 'a']);

const fara = (x: string) => x.toLowerCase()
  .replace(/[ăâà]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't');

/** Localități din Ilfov — nu sunt străzi, sunt comune/orașe. */
export const ILFOV = new Set(['reparatii-tv-cernica','reparatii-tv-1-decembrie','reparatii-tv-balotesti',
  'reparatii-tv-tunari','reparatii-tv-magurele','reparatii-tv-bragadiru','reparatii-tv-chiajna',
  'reparatii-tv-otopeni','reparatii-tv-buftea','reparatii-tv-pantelimon','reparatii-tv-popesti-leordeni',
  'reparatii-tv-voluntari','ilfov']);

/** Cartiere și zone — nu primesc prefixul „Strada". */
export const ZONE = new Set(['drumul-taberei','berceni','militari','crangasi','giulesti','dristor','titan',
  'colentina','pantelimon','tei','obor','aviatiei','aviatorilor','baneasa','dorobanti','domenii','cotroceni',
  'ferentari','rahova','dudesti','damaroaia','bucurestii-noi','centrul-istoric','centrul-civic','dealul-spirii',
  'balta-alba','trapezului','ozana','salajan','herastrau','primaverii','vacaresti','tineretului','pajurei',
  'jandarmeriei','13-septembrie','buzesti','polona','modrogan','baicului','vatra-luminoasa','ghencea',
  'reparatii-tv-cartier-ion-creanga','reparatii-tv-cartier-baicului','reparatii-tv-vatra-luminoasa']);

export type NumeLoc = { tip: string; nume: string; full: string; kind: 'strada' | 'zona' | 'ilfov' };

/** Transformă numele brut din registru într-un nume de arteră lizibil și căutabil. */
export function numeLoc(slug: string, numeRaw: string): NumeLoc {
  let nume = String(numeRaw).trim();

  nume = nume.replace(/^Repara[țt]ii\s+Televizoare\s+/i, '').replace(/^Repara[țt]ii\s+TV\s+(pe\s+)?/i, '')
             .replace(/\s*[–—-]\s*Sector\s*\d.*$/i, '').replace(/\s*[–—-]\s*Ilfov\s*$/i, '')
             .replace(/\s*\(S\d\)\s*$/i, '').replace(/\s+la\s+domiciliu\s*$/i, '').trim();

  if (ILFOV.has(slug)) return { tip: '', nume, full: nume, kind: 'ilfov' };

  let tip = '';
  for (const [re, t] of TIP_DIN_NUME) if (re.test(fara(nume))) {
    tip = t;
    const m = fara(nume).match(re)!;
    nume = nume.slice(m[0].length).trim();
    break;
  }
  if (!tip) for (const [re, t] of TIP_DIN_SLUG) if (re.test(slug)) { tip = t; break; }

  let toate = nume.split(/\s+/).filter(Boolean);
  if (!toate.length) return { tip: '', nume: numeRaw, full: numeRaw, kind: 'zona' };

  const grade: string[] = [];
  while (toate.length > 1) {
    const ultim = fara(toate[toate.length - 1]).replace(/[.,]/g, '');
    if (DESCRIPTORI.has(ultim)) { toate.pop(); continue; }
    if (GRADE[ultim]) { grade.unshift(GRADE[ultim]); toate.pop(); continue; }
    break;
  }

  const areLegaturi = toate.some(t => LEGATURI.has(fara(t)));
  const primulEHonorific = HONORIFICE.has(fara(toate[0]));
  if (toate.length >= 2 && !areLegaturi && !primulEHonorific) {
    const ultim = toate[toate.length - 1];
    if (PRENUME.has(fara(ultim))) {
      const rest = toate.slice(0, -1).filter(t => t.length > 1 || /^[IVX]+$/.test(t));
      toate = [ultim, ...rest];
    }
  }

  let grad = grade.join(' ');
  if (grad) grad = grad.charAt(0).toUpperCase() + grad.slice(1) + ' ';
  const baza = (grad + toate.join(' ')).replace(/\s+/g, ' ').trim();

  if (!tip && (ZONE.has(slug) || !baza)) return { tip: '', nume: baza || numeRaw, full: baza || numeRaw, kind: 'zona' };
  if (!tip) tip = 'Strada';
  return { tip, nume: baza, full: (tip + ' ' + baza).trim(), kind: 'strada' };
}

/** Compatibilitate: doar șirul complet. */
export function numeStrada(slug: string, numeRaw: string): string {
  return numeLoc(slug, numeRaw).full;
}

/** Sectorul, acolo unde este cunoscut cu certitudine. Nicio valoare nu este ghicită. */
export const SECTOR: Record<string, number> = {
  // ——— Sector 1 ———
  'cal-victoriei': 1, 'calea-victoriei': 1, 'reparatii-tv-calea-victoriei': 1,
  'bd-aviatorilor': 1, 'reparatii-tv-bulevardul-aviatorilor': 1, 'aviatorilor': 1,
  'bd-mihalache-ion': 1, 'reparatii-tv-bulevardul-ion-mihalache': 1,
  'cal-dorobanti': 1, 'pta-dorobanti': 1, 'dorobanti': 1, 'reparatii-tv-calea-dorobantilor-sector1': 1,
  'bd-lascar-catargiu': 1, 'reparatii-tv-bulevardul-laskar-catargiu': 1,
  'sos-kiseleff-pavel-dimitrievici-g-ral': 1, 'bd-banul-manta': 1, 'cal-grivitei': 1,
  'sos-bucuresti-ploiesti': 1, 'bd-poligrafiei': 1, 'sos-straulesti': 1, 'int-straulesti': 1,
  'sos-odaii': 1, 'sos-chitilei': 1, 'sos-bucuresti-targoviste': 1, 'sos-nordului': 1,
  'reparatii-tv-soseaua-nordului': 1, 'sos-pipera': 1, 'sos-ionescu-sisesti-gheorghe': 1,
  'pta-victoriei': 1, 'pta-romana': 1, 'pta-presei-libere': 1, 'pta-charles-de-gaulles': 1,
  'pta-gara-de-nord': 1, 'pta-gara-baneasa': 1, 'pta-buzesti': 1, 'buzesti': 1, 'pta-amzei': 1,
  'piata-amzei': 1, 'int-amzei': 1, 'biserica-amzei': 1, 'pta-1-mai': 1, 'pta-montreal': 1,
  'bd-primaverii': 1, 'reparatii-tv-bulevardul-primaverii': 1, 'primaverii': 1,
  'bd-prezan-constantin': 1, 'bd-expozitiei': 1, 'bd-ficusului': 1, 'bd-marasti': 1,
  'bd-ion-ionescu-de-la-brad': 1, 'bd-golescu-dinicu': 1, 'bd-iancu-de-hunedoara': 1,
  'reparatii-tv-bulevardul-iancu-de-hunedoara': 1, 'bd-mircea-eliade': 1,
  'cal-floreasca': 1, 'reparatii-tv-calea-floreasca': 1, 'scoala-floreasca': 1,
  'aleea-alexandru': 1, 'reparatii-tv-aleea-alexandru': 1, 'modrogan': 1, 'polona': 1,
  'herastrau': 1, 'int-scoala-herastrau': 1, 'aviatiei': 1, 'baneasa': 1, 'domenii': 1,
  'bucurestii-noi': 1, 'damaroaia': 1, 'pajurei': 1, 'jandarmeriei': 1, 'clucerului': 1,
  'sfintii-voievozi': 1, 'pta-sfintii-voievozi': 1, 'berzei': 1, 'occidentului': 1,
  'transilvaniei': 1, 'general-berthelot': 1, 'stirbei-voda': 1, 'int-stirbei-voda': 1,
  'bd-schitu-magureanu': 1, 'luterana': 1, 'bd-magheru-gheorghe': 1, 'bd-balcescu-nicolae': 1,
  'sos-titulescu-nicolae': 1, 'monetariei': 1, 'sipotul-fantanelor': 1, 'bd-duca-d-gheorghe-ing': 1,
  // ——— Sector 2 ———
  'bulevardul-lacul-tei': 2, 'reparatii-tv-bulevardul-ghica-tei': 2, 'colentina': 2,
  'sos-stefan-cel-mare': 2, 'bulevardul-ferdinand-i': 2, 'bulevardul-basarabia': 2,
  'reparatii-tv-bulevardul-carol-i': 2, 'reparatii-tv-bulevardul-pache-protopopescu': 2,
  'sos-iancului': 2, 'reparatii-tv-soseaua-mihai-bravu': 2, 'bulevardul-chisinau': 2,
  'reparatii-tv-strada-barbu-vacarescu': 2, 'reparatii-tv-dimitrie-pompeiu': 2,
  'reparatii-tv-piata-foisorul-de-foc': 2, 'reparatii-tv-vatra-luminoasa': 2,
  'reparatii-tv-soseaua-fundeni': 2, 'reparatii-tv-soseaua-vergului': 2,
  'reparatii-tv-soseaua-morarilor': 2, 'reparatii-tv-soseaua-electronicii': 2,
  'reparatii-tv-soseaua-andronache': 2, 'reparatii-tv-soseaua-fabrica-de-glucoza': 2,
  'reparatii-tv-soseaua-dobroesti': 2, 'reparatii-tv-soseaua-gherase': 2,
  'reparatii-tv-cartier-baicului': 2, 'reparatii-tv-piata-gheorghe-cantacuzino': 2,
  'reparatii-tv-piata-sfantul-stefan': 2, 'reparatii-tv-piata-nicolae-c-dabija': 2,
  'reparatii-tv-bulevardul-energeticienilor': 2, 'tei': 2, 'obor': 2, 'pantelimon': 2,
  // ——— Sector 3 ———
  'reparatii-tv-bulevardul-unirii-s3': 3, 'reparatii-tv-bulevardul-decebal': 3,
  'reparatii-tv-bulevardul-camil-ressu': 3, 'reparatii-tv-calea-vitan': 3,
  'reparatii-tv-calea-dudesti': 3, 'dudesti': 3, 'reparatii-tv-bulevardul-corneliu-coposu': 3,
  'reparatii-tv-bulevardul-burebista': 3, 'reparatii-tv-bulevardul-1-decembrie-1918': 3,
  'reparatii-tv-strada-matei-basarab': 3, 'reparatii-tv-bulevardul-ion-c-bratianu': 3,
  'reparatii-tv-bulevardul-octavian-goga': 3, 'reparatii-tv-bd-mircea-voda': 3,
  'reparatii-tv-bd-ramnicu-sarat': 3, 'reparatii-tv-cartier-ion-creanga': 3,
  'reparatii-televizoare-bd-nicolae-grigorescu': 3, 'reparatii-televizoare-bd-theodor-pallady': 3,
  'reparatii-televizoare-bd-hristo-botev': 3, 'trapezului': 3, 'balta-alba': 3, 'salajan': 3,
  'ozana': 3, 'dristor': 3, 'centrul-istoric': 3, 'centrul-civic': 3, 'titan': 3,
  // ——— Sector 4 ———
  'reparatii-tv-bulevardul-tineretului': 4, 'reparatii-tv-bulevardul-dimitrie-cantemir': 4,
  'reparatii-tv-soseaua-oltenitei': 4, 'reparatii-tv-calea-vacaresti': 4,
  'reparatii-tv-bulevardul-metalurgiei': 4, 'reparatii-tv-calea-serban-voda': 4,
  'berceni': 4, 'tineretului': 4, 'vacaresti': 4, 'bd-oaspetilor': 4,
  // ——— Sector 5 ———
  'reparatii-tv-calea-rahova': 5, 'reparatii-tv-calea-13-septembrie': 5, '13-septembrie': 5,
  'reparatii-tv-bulevardul-tudor-vladimirescu': 5, 'reparatii-tv-bulevardul-libertatii': 5,
  'reparatii-tv-bulevardul-timisoara-s5': 5, 'reparatii-tv-bulevardul-independentei': 5,
  'reparatii-tv-bulevardul-gheorghe-doja': 5, 'cal-rahovei': 5, 'ferentari': 5,
  'cotroceni': 5, 'dealul-spirii': 5, 'rahova': 5,
  // ——— Sector 6 ———
  'reparatii-tv-bulevardul-iuliu-maniu': 6, 'reparatii-tv-bulevardul-timisoara': 6,
  'reparatii-tv-calea-crangasi': 6, 'crangasi': 6, 'reparatii-tv-calea-giulesti': 6,
  'reparatii-tv-bulevardul-ghencea': 6, 'reparatii-tv-soseaua-virtutii': 6,
  'reparatii-tv-bulevardul-constructorilor': 6, 'reparatii-tv-bulevardul-preciziei': 6,
  'reparatii-tv-bulevardul-vasile-milea': 6, 'reparatii-tv-calea-plevnei': 6,
  'cal-plevnei': 6, 'drumul-taberei': 6, 'militari': 6, 'giulesti': 6,
  'bd-luptatorilor': 6, 'bd-gloriei': 6, 'bd-laminorului': 6,
};

export const CARTIERE_SECTOR: Record<number, string[]> = {
