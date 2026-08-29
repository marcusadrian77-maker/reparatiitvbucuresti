// Curățare și îmbogățire pentru paginile migrate din vechiul WordPress.

/** Imaginile din /wp-content/ nu mai există (404) — se elimină complet. */
export function curataHtml(html: string): string {
  let h = html;
  // figure care conține o imagine wp-content
  h = h.replace(/<figure\b[^>]*>[\s\S]*?<\/figure>/gi, m => (/wp-content/i.test(m) ? '' : m));
  // linkuri către fișiere wp-content — se despachetează, se păstrează textul
  h = h.replace(/<a\b[^>]*href="[^"]*wp-content[^"]*"[^>]*>([\s\S]*?)<\/a>/gi, '$1');
  // imagini wp-content rămase
  h = h.replace(/<img\b[^>]*wp-content[^>]*>/gi, '');
  // H1 duplicat (pagina are deja H1 în hero)
  h = h.replace(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi, '<h2>$1</h2>');
  // http -> https pe linkurile proprii
  h = h.replace(/http:\/\/www\.reparatiitvbucuresti\.ro/gi, 'https://www.reparatiitvbucuresti.ro');
  // figure goale rămase
  h = h.replace(/<figure\b[^>]*>\s*<\/figure>/gi, '');
  return h;
}

const MARCI: [RegExp, string, string][] = [
  [/samsung/i, 'Samsung', 'reparatii-televizoare-samsung'],
  [/\blg\b/i, 'LG', 'reparatii-televizoare-lg'],
  [/sony|bravia/i, 'Sony', 'reparatii-televizoare-sony'],
  [/philips|ambilight/i, 'Philips', 'reparatii-televizoare-philips'],
  [/panasonic|viera/i, 'Panasonic', 'reparatii-tv-panasonic'],
  [/horizon/i, 'Horizon', 'reparatii-televizoare-horizon'],
];

export type InfoArticol = {
  marca: string | null;
  slugMarca: string | null;
  model: string | null;
  eModel: boolean;
  eLegal: boolean;
  titlu: string;
  descriere: string;
};


/** Titluri și descrieri scrise manual, acolo unde scurtarea automată ar produce duplicate. */
const TITLU_MANUAL: Record<string, string> = {
  'resetarea-din-fabrica-si-instrumente-de-autodiagnosticare-pe-televizorul-samsung-partea-i':
    'Resetare din fabrică și autodiagnosticare Samsung – I',
  'resetarea-din-fabrica-si-instrumente-de-autodiagnosticare-pe-televizorul-samsung-partea-ii':
    'Resetare din fabrică și autodiagnosticare Samsung – II',
};
const DESC_MANUAL: Record<string, string> = {
  'resetarea-din-fabrica-si-instrumente-de-autodiagnosticare-pe-televizorul-samsung-partea-i':
    'Cum resetezi din fabrică un televizor Samsung și cum folosești testul de rețea și Smart Hub. Partea I din ghidul de autodiagnosticare.',
  'resetarea-din-fabrica-si-instrumente-de-autodiagnosticare-pe-televizorul-samsung-partea-ii':
    'Testul de imagine și resetarea setărilor de imagine pe televizoarele Samsung. Partea a II-a din ghidul de autodiagnosticare.',
};

const LEGAL = new Set(['gdpr-si-anpc', 'politica-de-cookies', 'termeni-si-conditii', 'politica-de-confidentialitate', 'contact']);

/** Extrage marca și codul de model dintr-un titlu de tip „Reparatii Televizor LED Philips 43PFS5302/12". */
export function infoArticol(slug: string, titluBrut: string, descBruta: string): InfoArticol {
  const eLegal = LEGAL.has(slug);
  let marca: string | null = null, slugMarca: string | null = null;
  for (const [re, nume, sl] of MARCI) if (re.test(titluBrut) || re.test(slug)) { marca = nume; slugMarca = sl; break; }

  // codul de model: ultimul token care conține cifre și litere (ex. 43PFS5302/12, KD-65A1, TX-55GZ1500)
  const tokens = titluBrut.split(/\s+/);
  let model: string | null = null;
  for (let i = tokens.length - 1; i >= 0; i--) {
    const t = tokens[i].replace(/[.,]$/, '');
    if (/\d/.test(t) && /[A-Za-z]/.test(t) && t.length >= 4) { model = t; break; }
  }
  const eModel = !!(marca && model && /reparatii-televizor/i.test(slug));

  let titlu: string;
  if (eModel) {
    titlu = `Reparații TV ${marca} ${model} – Service la Domiciliu`;
    if (titlu.length > 62) titlu = `Reparații TV ${marca} ${model} București`;
    if (titlu.length > 62) titlu = `Reparații TV ${marca} ${model}`;
  } else if (eLegal) {
    titlu = `${titluBrut} | Reparații TV București`;
  } else {
    titlu = `${titluBrut} – Reparații TV București`;
    if (titlu.length < 36) titlu = `${titluBrut} – Ghid Smart TV | Reparații TV București`;
    if (titlu.length > 62) titlu = titluBrut;
    if (titlu.length > 62) titlu = titlu.slice(0, 59).replace(/\s+\S*$/, '') + '…';
  }

  let descriere = (descBruta || '').replace(/\s*\.\.\.$/, '').trim();
  if (eModel) {
    descriere = `Reparăm televizoare ${marca} ${model} la domiciliu în București și Ilfov. Diagnosticare și deplasare gratuite, reparație pe loc, garanție 6–12 luni.`;
  } else if (descriere.length < 60) {
    descriere = `${titluBrut} — service televizoare la domiciliu în București și Ilfov. Diagnosticare și deplasare gratuite, garanție 6–12 luni.`;
  }
  if (descriere.length > 158) descriere = descriere.slice(0, 155).replace(/\s+\S*$/, '') + '.';

  if (TITLU_MANUAL[slug]) titlu = TITLU_MANUAL[slug];
  if (DESC_MANUAL[slug]) descriere = DESC_MANUAL[slug];

  return { marca, slugMarca, model, eModel, eLegal, titlu, descriere };
}
