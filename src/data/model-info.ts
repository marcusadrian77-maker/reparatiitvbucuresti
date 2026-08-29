// Conținut diferențiat pentru paginile de model.
// Paginile migrate din WordPress aveau ~180 de cuvinte proprii, aproape identice între ele
// (similaritate Jaccard mediană 0,47). Aici derivăm din datele reale ale fiecărui aparat —
// diagonală, an, platformă software, tip de panou — text care chiar diferă de la un model la altul.

export type SpecModel = {
  diagonala: number | null;      // inch
  cm: number | null;
  an: number | null;
  platforma: string | null;      // webOS, Android TV, Tizen, Google TV, VIDAA, Smart TV
  panou: string | null;          // IPS, VA, OLED, QLED
  rezolutie: string | null;
  tridimensional: boolean | null;
};

const PLATFORME: [RegExp, string][] = [
  [/google\s*tv/i, 'Google TV'],
  [/android\s*tv/i, 'Android TV'],
  [/webos/i, 'webOS'],
  [/tizen/i, 'Tizen'],
  [/vidaa/i, 'VIDAA'],
  [/smart\s*tv/i, 'Smart TV'],
];

/** Diagonala se citește din codul de model: 43PFS5302/12, TX-58DX750, KD-65A1, 75UJ675V. */
export function diagonalaDinCod(cod: string | null): number | null {
  if (!cod) return null;
  const candidati = [...String(cod).matchAll(/(\d{2,3})/g)].map(m => parseInt(m[1], 10));
  for (const n of candidati) if (n >= 19 && n <= 110) return n;
  return null;
}

export function specModel(cod: string | null, html: string): SpecModel {
  const t = String(html).replace(/<[^>]+>/g, ' ');
  const an = (t.match(/Generatia:?\s*(\d{4})/i) || [])[1];
  const cm = (t.match(/Diagonala\s+(\d+)\s*cm/i) || [])[1];
  const panou = (t.match(/Panou\s+(IPS|VA|OLED|QLED|TN)\b/i) || [])[1];
  const rez = (t.match(/Rezolutie\s+(\d{3,4}\s*x\s*\d{3,4})/i) || [])[1];
  const d3 = (t.match(/Functie 3D\s+(DA|NU)/i) || [])[1];
  let platforma: string | null = null;
  for (const [re, nume] of PLATFORME) if (re.test(t)) { platforma = nume; break; }
  let diagonala = diagonalaDinCod(cod);
  if (!diagonala && cm) diagonala = Math.round(parseInt(cm, 10) / 2.54);
  return {
    diagonala,
    cm: cm ? parseInt(cm, 10) : (diagonala ? Math.round(diagonala * 2.54) : null),
    an: an ? parseInt(an, 10) : null,
    platforma,
    panou: panou ? panou.toUpperCase() : null,
    rezolutie: rez ? rez.replace(/\s+/g, ' ') : null,
    tridimensional: d3 ? /da/i.test(d3) : null,
  };
}

/** Profilul de defecte după vechimea aparatului. */
export function textVechime(an: number | null, marca: string, cod: string): string | null {
  if (!an) return null;
  const varsta = new Date().getFullYear() - an;
  if (varsta <= 4) {
    return `Un ${marca} ${cod} din ${an} este încă un aparat tânăr, iar defecțiunile pe care le vedem la această generație sunt aproape întotdeauna electronice punctuale, nu uzură: porturi HDMI arse după o supratensiune, module Wi-Fi care cedează, blocaje de software după o actualizare întreruptă. Baretele LED și sursa de alimentare rareori dau probleme sub cinci ani, așa că înainte de a schimba piese verificăm alimentarea din priză, cablurile și starea firmware-ului.`;
  }
  if (varsta <= 8) {
    return `La ${varsta} ani, un ${marca} ${cod} intră exact în intervalul în care apar primele defecțiuni de uzură. Condensatorii din sursa de alimentare sunt primii care se degradează — televizorul pornește greu, intră în standby singur sau nu mai pornește deloc. Urmează baretele LED de iluminare, care își pierd din luminozitate neuniform și dau ecran închis sau pete. Ambele sunt reparații de rutină pentru generația din ${an} și se rezolvă de regulă la domiciliu, în aceeași vizită.`;
  }
  return `Un ${marca} ${cod} din ${an} are peste ${varsta} ani, iar la această vârstă defecțiunile sunt rareori singulare. Cel mai des găsim barete LED îmbătrânite și condensatori uscați în sursă, uneori împreună. Memoria internă poate avea sectoare obosite, iar aparatul rămâne blocat la sigla de pornire — se rezolvă prin rescrierea firmware-ului, nu prin schimbarea plăcii. Vă spunem sincer, după diagnosticare, dacă reparația se justifică sau dacă aparatul a ajuns la capătul duratei de viață utile.`;
}

/** Ce înseamnă diagonala pentru desfășurarea reparației. */
export function textDiagonala(d: number | null, marca: string): string | null {
  if (!d) return null;
  if (d <= 32) {
    return `Cu diagonala de ${d} inch, aparatul este ușor de manevrat: îl demontăm și îl remontăm pe loc, fără ajutor suplimentar, iar iluminarea are de regulă două-trei barete LED scurte, ceea ce face înlocuirea rapidă și ieftină. Reversul este economic: la această diagonală, o defecțiune de panou nu se mai justifică financiar, pentru că panoul costă cât un televizor nou. Pentru sursă, backlight sau placă principală reparația rămâne clar avantajoasă.`;
  }
  if (d <= 49) {
    return `La ${d} inch, televizorul se poate demonta în siguranță la domiciliu de un singur tehnician, așa că majoritatea intervențiilor se termină la prima vizită. Iluminarea are de obicei patru-șase barete LED, iar înlocuirea lor este una dintre reparațiile pe care le facem cel mai des la această diagonală. Costul unei reparații de sursă sau de backlight reprezintă, de regulă, sub un sfert din prețul unui aparat nou echivalent.`;
  }
  if (d <= 58) {
    return `La ${d} inch intrăm în categoria la care panoul devine sensibil la manevrare — îl demontăm pe orizontală, pe o suprafață pregătită, și lucrăm în doi când situația o cere. Iluminarea are de regulă opt-douăsprezece barete LED, iar la înlocuire schimbăm setul complet, nu doar bareta arsă, ca să evităm diferențele de luminozitate. Reparația se justifică aproape întotdeauna la această diagonală, inclusiv intervențiile mai complexe pe placa T-CON.`;
  }
  if (d <= 65) {
    return `Un ${marca} de ${d} inch este un aparat greu și fragil la manevrare, așa că demontarea se face în doi, cu panoul așezat orizontal. Iluminarea are frecvent peste douăsprezece barete LED și, la modelele cu local dimming, mai multe zone de comandă — motiv pentru care diagnosticarea corectă contează mai mult decât la diagonalele mici. La această categorie reparația rămâne net avantajoasă: chiar și o intervenție complexă costă o fracțiune din prețul unui înlocuitor.`;
  }
  return `La ${d} inch vorbim despre un aparat de dimensiuni mari, pe care nu îl mișcăm decât în doi și numai când este strict necesar — de aceea încercăm să rezolvăm cât mai mult la domiciliu, fără transport. Sistemul de iluminare are multe barete și, adesea, control pe zone, iar plăcile sunt specifice acestei clase de diagonală. Economic, reparația este cea mai justificată dintre toate categoriile: prețul unui televizor nou de ${d} inch depășește de multe ori costul oricărei intervenții pe electronică.`;
}

/** Particularități ale platformei software. */
export function textPlatforma(p: string | null, marca: string, cod: string): string | null {
  if (!p) return null;
  const T: Record<string, string> = {
    'webOS': `Interfața webOS a acestui ${marca} ${cod} își are propriile simptome: aplicații care se închid singure, magazin de aplicații care nu se mai încarcă sau telecomandă Magic Remote care nu se mai asociază. În majoritatea cazurilor cauza este memoria internă plină sau un firmware rămas la o versiune veche, nu o defecțiune de placă — se rezolvă printr-o resetare corectă și o actualizare făcută în ordine.`,
    'Android TV': `Fiind un aparat pe Android TV, ${marca} ${cod} poate dezvolta probleme tipice acestei platforme: pornire foarte lentă, aplicații care crapă la deschidere, Google Play care nu răspunde sau blocaj la ecranul de pornire după o actualizare. De cele mai multe ori vinovată este partiția de sistem plină ori o actualizare aplicată incomplet, iar remedierea înseamnă reinstalarea firmware-ului, nu înlocuirea plăcii principale.`,
    'Google TV': `Pe Google TV, defecțiunile aparente sunt frecvent software: profil de utilizator corupt, aplicații care nu pornesc, recomandări blocate la încărcare sau televizor care repornește în buclă. Le separăm întotdeauna de problemele hardware înainte de a propune orice piesă — o reinstalare curată a sistemului rezolvă o bună parte dintre simptomele cu care suntem chemați la ${marca} ${cod}.`,
    'Tizen': `Sistemul Tizen are simptome caracteristice: Smart Hub care nu se încarcă, aplicații care se închid imediat după deschidere sau televizor blocat la logo. La ${marca} ${cod} verificăm întâi dacă este vorba despre software — o resetare a Smart Hub și o actualizare completă — și abia apoi ne uităm la memoria internă, care este a doua cauză ca frecvență.`,
    'VIDAA': `Platforma VIDAA dă cel mai des probleme de conectare la rețea și aplicații care nu pornesc. La ${marca} ${cod} verificăm modulul Wi-Fi și starea firmware-ului înainte de orice intervenție pe placă — multe dintre situațiile raportate ca „televizor defect" se rezolvă la nivel de software.`,
    'Smart TV': `Partea de Smart TV a acestui ${marca} ${cod} poate da singură impresia unui aparat defect: aplicații care nu se deschid, conectare la rețea intermitentă sau meniuri care răspund cu întârziere. Le tratăm ca pe o categorie separată de diagnosticare, pentru că se rezolvă prin software în majoritatea cazurilor, fără costul unei piese.`,
  };
  return T[p] || null;
}

/** Ce spune tipul de panou despre defecțiunile de imagine. */
export function textPanou(panou: string | null): string | null {
  if (!panou) return null;
  const T: Record<string, string> = {
    'IPS': 'Panoul IPS oferă unghiuri largi de vizionare, dar are un negru mai deschis și este sensibil la defectele de iluminare: o baretă LED slăbită se vede imediat ca o zonă mai luminoasă în colț sau pe margine. Când primim reclamații de „pete pe ecran" la un panou IPS, cauza este aproape întotdeauna iluminarea, nu panoul propriu-zis.',
    'VA': 'Panoul VA are contrast bun și negru adânc, dar semnalează altfel defecțiunile: primele simptome sunt de regulă benzi verticale sau o zonă întunecată care nu se mai luminează. Aici diferențiem cu atenție între o placă T-CON defectă — reparabilă — și o problemă de panou, care de obicei nu se justifică economic.',
    'OLED': 'Fiind un panou OLED, nu are iluminare de fundal, deci defecțiunile de tip „ecran negru cu backlight" nu se aplică. În schimb apar probleme specifice: pixeli stinși, imagine remanentă după utilizare intensă cu conținut static și, mai des decât s-ar crede, defecțiuni ale plăcii de alimentare a panoului. Intervențiile pe OLED cer mai multă precizie, dar cele electronice rămân perfect fezabile.',
    'QLED': 'Panoul QLED este tot un LCD cu iluminare LED, doar că are un strat suplimentar cu puncte cuantice. Practic asta înseamnă că defecțiunile de iluminare rămân cele mai frecvente, iar o baretă arsă se manifestă ca zonă întunecată sau ca diferență de culoare. Se repară prin înlocuirea setului de barete, nu a panoului.',
    'TN': 'Panoul TN are timpi de răspuns buni, dar unghiuri de vizionare înguste și o sensibilitate mai mare la defectele de contact ale cablurilor flexibile către panou — de aici liniile verticale care apar și dispar la mișcarea aparatului.',
  };
  return T[panou] || null;
}
