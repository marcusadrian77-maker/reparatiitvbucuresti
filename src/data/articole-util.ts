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
    if (titlu.length > 68) titlu = `Reparații TV ${marca} ${model} București`;
  } else if (eLegal) {
    titlu = `${titluBrut} | Reparații TV București`;
  } else {
    titlu = `${titluBrut} – Reparații TV București`;
    if (titlu.length > 68) titlu = titluBrut;
    if (titlu.length > 68) titlu = titlu.slice(0, 65).replace(/\s+\S*$/, '') + '…';
  }

  let descriere = (descBruta || '').replace(/\s*\.\.\.$/, '').trim();
  if (eModel) {
    descriere = `Reparăm televizoare ${marca} ${model} la domiciliu în București și Ilfov. Diagnosticare și deplasare gratuite, reparație pe loc, garanție 6–12 luni.`;
  } else if (descriere.length < 60) {
    descriere = `${titluBrut} — service televizoare la domiciliu în București și Ilfov. Diagnosticare și deplasare gratuite, garanție 6–12 luni.`;
  }
  if (descriere.length > 158) descriere = descriere.slice(0, 155).replace(/\s+\S*$/, '') + '.';

  return { marca, slugMarca, model, eModel, eLegal, titlu, descriere };
}
