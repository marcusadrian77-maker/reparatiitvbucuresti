// Conținut scris separat pentru zonele pe care Google le-a citit și nu le-a indexat
// (raport „Accesată cu crawlere – nu este indexată", oct. 2026). Textul de aici e propriu
// fiecărei pagini și se afișează după introducerea generală a paginii de zonă.
export interface ZonaUnica {
  eticheta?: string;
  titlu?: string;
  descriere?: string;
  sectiuni: [string, string[]][];
}

export const ZONE_UNICE: Record<string, ZonaUnica> = {
  'lipscani': {
    titlu: 'Reparații TV Strada Lipscani, Centrul Vechi – la domiciliu',
    descriere: 'Reparații televizoare pe Strada Lipscani: apartamente din clădirile vechi, apartamente în regim hotelier și localuri. Deplasare și diagnosticare gratuite.',
    sectiuni: [
      ['Ce înseamnă o intervenție pe Lipscani', [
        'Strada Lipscani e pietonală, iar mașina nu ajunge până la ușă. Parcăm la marginea Centrului Vechi și venim pe jos cu trusa: stație de lipit, multimetru, programator de memorie și piesele probabile pentru defectul descris la telefon. De aceea vă rugăm să ne spuneți dinainte modelul televizorului — ne ajută să nu facem drumul de două ori.',
        'Clădirile de pe Lipscani sunt vechi, cu scări înguste și de cele mai multe ori fără lift. Un televizor de 55 sau 65 de inch se coboară greu pe asemenea scări, așa că încercăm aproape întotdeauna să reparăm pe loc. Doar când defectul cere bancul din atelierul din Militari îl luăm cu noi, ambalat, și îl aducem înapoi montat.',
      ]],
      ['Apartamente în regim hotelier și localuri', [
        'O bună parte din apartamentele de deasupra magazinelor de pe Lipscani se închiriază pe zile. Pentru proprietari contează să nu piardă o rezervare din cauza unui televizor care nu pornește, așa că stabilim ora împreună, de obicei între două sejururi, și vă spunem din prima dacă reparația se poate face pe loc.',
        'La baruri și restaurante televizorul stă de multe ori pornit ore întregi și se strică mai des sursa sau iluminarea din spatele ecranului. Putem veni înainte de program, ca intervenția să nu deranjeze clienții. Pentru zona din jur vedeți și pagina despre <a href="/centrul-istoric/">reparații TV în Centrul Istoric</a>.',
      ]],
    ],
  },
  'aviatiei': {
    titlu: 'Reparații TV Aviației, Sector 1 – service la domiciliu',
    descriere: 'Reparații televizoare în cartierul Aviației, Sector 1: blocuri vechi și ansambluri noi, televizoare mari montate pe perete. Deplasare și diagnosticare gratuite.',
    sectiuni: [
      ['Aviației: blocuri vechi și ansambluri noi', [
        'Cartierul Aviației are două fețe: blocurile construite înainte de 1990 și ansamblurile rezidențiale ridicate în ultimii ani. În blocurile vechi întâlnim televizoare LED de 7–10 ani, cu sursa sau benzile de leduri obosite. În apartamentele noi, cele mai multe sunt televizoare de 55–75 de inch, OLED sau QLED, montate pe perete.',
        'Un televizor mare montat pe perete se repară de regulă tot acolo: îl coborâm de pe suport, lucrăm pe o masă sau pe pătura pe care o aducem, apoi îl remontăm. Dacă e nevoie de atelier, îl transportăm noi, fără cost.',
      ]],
      ['Acces în ansamblurile rezidențiale', [
        'În multe ansambluri din Aviației accesul se face prin recepție sau prin parcarea subterană. Spuneți-ne la programare numele ansamblului și dacă trebuie anunțat cineva la poartă — câștigăm timp și nu vă mai sunăm de la barieră.',
        'Atelierul nostru e în Militari, la celălalt capăt al orașului, așa că pentru Aviației programăm intervenția pe un interval clar, ținând cont de traficul de dimineață și de seară. Deplasarea rămâne gratuită, ca în tot Sectorul 1.',
      ]],
    ],
  },
  'cotroceni': {
    titlu: 'Reparații TV Cotroceni, Sector 5 – la domiciliu sau în atelier',
    descriere: 'Reparații televizoare în Cotroceni: case vechi, apartamente de student, vile interbelice. La 10–15 minute de atelierul din Militari. Diagnosticare gratuită.',
    sectiuni: [
      ['Cotroceni, aproape de atelier', [
        'Dintre cartierele din centru, Cotroceni e cel mai apropiat de atelierul nostru din Militari: pe Bulevardul Geniului sau pe Iuliu Maniu ajungem de regulă în 10–15 minute. De aceea aici putem veni și la intervenții scurte, fără să aștepte nimeni o zi întreagă.',
        'Dacă televizorul e mic sau mediu și preferați să nu așteptați acasă, îl puteți aduce chiar dumneavoastră la atelier — drumul e scurt, iar diagnosticarea se face pe loc, cât stați la noi. Detalii despre drum și parcare găsiți pe pagina <a href="/cum-ajungeti-la-atelier/">cum ajungeți la atelier</a>.',
      ]],
      ['Case vechi și apartamente de închiriat', [
        'Mare parte din Cotroceni înseamnă case și vile ridicate între cele două războaie, cu instalații electrice refăcute de mai multe ori. Când un televizor de aici moare brusc, verificăm întâi priza și împământarea — o sursă arsă din cauza unei instalații obosite se strică din nou dacă nu reparăm și cauza.',
        'Spre Politehnică și Universitatea de Medicină sunt multe apartamente închiriate studenților. Pentru proprietarii care nu locuiesc în București ne putem înțelege la telefon: venim cu chiriașul acasă, vă trimitem pe WhatsApp poza cu defectul și devizul, iar reparația începe doar după ce o aprobați. Condițiile generale sunt pe pagina <a href="/reparatii-tv-sector-5/">reparații TV Sector 5</a>.',
      ]],
    ],
  },
  'bucurestii-noi': {
    eticheta: 'Bucureștii Noi',
    titlu: 'Reparații TV Bucureștii Noi, Sector 1 – service la domiciliu',
    descriere: 'Reparații televizoare în Bucureștii Noi: blocurile de pe bulevard și casele spre Străulești și Chitila. Venim acasă, deplasare și diagnosticare gratuite.',
    sectiuni: [
      ['De la bulevard până spre Străulești', [
        'Bucureștii Noi e un cartier lung, care pornește de la Piața Victoriei a Muncii și se întinde spre Chitila și Străulești. Pe bulevard sunt mai ales blocuri; pe străzile din spate, spre Parcul Bazilescu și mai departe, predomină casele cu curte. Venim în ambele zone, cu aceleași condiții.',
        'Din Militari ajungem pe la Giulești și Chitilei, așa că programăm vizitele din Bucureștii Noi de obicei la prânz, când drumul e mai liber. Spuneți-ne la telefon dacă locuiți într-o casă cu poartă închisă sau cu câine în curte — ne ajută să intrăm fără să vă scoatem din casă de două ori.',
      ]],
      ['Televizoare în case cu mai multe camere', [
        'În casele din zonă găsim des două sau trei televizoare, cumpărate în ani diferiți. Dacă tot venim pentru unul, ne putem uita și la celelalte și vă spunem dacă vreunul dă semne că va ceda — un led care clipește sau o imagine care pornește greu.',
        'Pe ultima porțiune, spre Străulești și Chitila, vin pe același stâlp mai multe gospodării. După o furtună, când se ard deodată mai multe televizoare pe stradă, ne puteți chema pentru toate o dată. Pentru zona vecină vedeți și <a href="/damaroaia/">reparații TV în Dămăroaia</a>.',
      ]],
    ],
  },
  'berceni': {
    titlu: 'Reparații TV Berceni, Sector 4 – reparăm pe loc, la etaj',
    descriere: 'Reparații televizoare în Berceni: blocuri înalte cu lift mic, televizoare mari reparate direct în apartament. Deplasare și diagnosticare gratuite.',
    sectiuni: [
      ['Blocuri înalte, lifturi mici', [
        'Berceni e unul dintre cele mai mari cartiere de blocuri din București, de la Piața Sudului și Brâncoveanu până la Apărătorii Patriei și Oltenița. Multe blocuri au zece etaje și lifturi în care un televizor de 50 de inch sau mai mare nu încape decât pus pe diagonală, dacă încape.',
        'Tocmai de aceea în Berceni facem aproape toate reparațiile direct în apartament: desfacem capacul din spate pe o pătură, schimbăm piesa și testăm pe loc. Pentru defectele care cer atelierul, ambalăm televizorul în folie și carton și îl coborâm cu grijă pe scări.',
      ]],
      ['Când ajungem și ce ne spuneți la telefon', [
        'Venim din Militari pe Splaiul Independenței sau pe Calea Rahovei, așa că pentru Berceni dăm de obicei un interval de o oră, nu o oră fixă. Cu metroul M2 aproape, se întâmplă des să ne cheme cineva pentru părinți, care locuiesc aici — putem lucra cu ei acasă și vă trimitem devizul pe telefon.',
        'Ca să venim cu piesa potrivită, spuneți-ne modelul de pe eticheta din spate și ce face televizorul: nu pornește, are sunet fără imagine sau se stinge singur. Condițiile pentru tot sectorul sunt pe pagina <a href="/reparatii-tv-sector-4/">reparații TV Sector 4</a>.',
      ]],
    ],
  },
  'baneasa-2': {
    eticheta: 'Băneasa',
    titlu: 'Reparații TV Băneasa, Sector 1 – case, vile și ansambluri noi',
    descriere: 'Reparații televizoare în Băneasa: case și vile lângă pădure, ansambluri noi pe Șoseaua București-Ploiești. Venim la domiciliu, diagnosticare gratuită.',
    sectiuni: [
      ['Băneasa, între pădure și șosea', [
        'Băneasa înseamnă mai multe lucruri deodată: vilele de lângă pădure, străzile cu case din spatele fostului aeroport și ansamblurile noi ridicate de-a lungul Șoselei București-Ploiești. Pe toate le acoperim, iar deplasarea e gratuită ca în tot Sectorul 1.',
        'În case întâlnim adesea televizoare montate în locuri greu accesibile — deasupra șemineului, într-un living cu tavan înalt sau pe un braț articulat. Spuneți-ne dinainte cum e montat, ca să venim pregătiți să coborâm ecranul fără să riscăm nici televizorul, nici peretele.',
      ]],
      ['Sisteme mai complicate decât un singur televizor', [
        'În multe case din Băneasa televizorul e legat de un receiver audio, un soundbar sau un sistem de boxe în tavan. Când „nu merge televizorul", uneori de fapt nu merge legătura HDMI dintre aparate. Verificăm întregul lanț înainte să spunem că trebuie schimbată o piesă.',
        'Pentru ansamblurile noi de pe Șoseaua București-Ploiești, spuneți-ne la programare dacă intrarea se face pe bază de cod sau prin recepție. Zona vecină, cu blocuri și ansambluri mai vechi, are pagina ei: <a href="/aviatiei/">reparații TV în Aviației</a>.',
      ]],
    ],
  },
  'piata-universitatii': {
    eticheta: 'Piața Universității',
    titlu: 'Reparații TV Piața Universității – apartamente, birouri, săli',
    descriere: 'Reparații televizoare în zona Piața Universității: blocuri interbelice pe Magheru și Bălcescu, birouri și săli de ședințe. Deplasare și diagnosticare gratuite.',
    sectiuni: [
      ['Blocurile de pe Magheru și Bălcescu', [
        'În jurul Pieței Universității majoritatea apartamentelor sunt în blocurile înalte de pe Bulevardul Magheru, Bălcescu și Brătianu, construite în anii 1930–1960, cu lifturi vechi și holuri înguste. Reparăm pe loc ori de câte ori se poate, ca să nu fie nevoie să coborâm televizorul prin scara blocului.',
        'Mulți dintre clienții de aici au moștenit apartamentul, uneori cu tot cu un televizor vechi de 10–12 ani. Prima întrebare e mereu dacă merită reparat. Vă spunem sincer după diagnosticare: dacă reparația se apropie de prețul unui televizor nou, vă recomandăm să nu o faceți.',
      ]],
      ['Birouri, săli de ședințe, cabinete', [
        'Zona e plină de birouri, cabinete medicale și săli de ședințe în care televizorul sau monitorul mare e folosit pentru prezentări. Acolo contează mai ales ora: putem veni dimineața devreme sau după program, iar factura o emitem pe firmă.',
        'Pentru apartamentele din partea veche a orașului, spre Lipscani, citiți și pagina <a href="/centrul-istoric/">reparații TV în Centrul Istoric</a>; pentru condițiile pe sector, <a href="/reparatii-tv-sector-1/">reparații TV Sector 1</a>.',
      ]],
    ],
  },
  'centrul-istoric': {
    eticheta: 'Centrul Istoric',
    titlu: 'Reparații TV Centrul Istoric (Centrul Vechi), Sector 3',
    descriere: 'Reparații televizoare în Centrul Istoric al Bucureștiului: apartamente vechi, apartamente închiriate pe zile, baruri și hoteluri mici. Deplasare gratuită.',
    sectiuni: [
      ['Centrul Istoric, stradă cu stradă', [
        'Lucrăm pe toate străzile Centrului Vechi: Smârdan, Gabroveni, Covaci, Șelari, Franceză, Stavropoleos, Blănari, precum și pe Lipscani. Cea mai mare parte e zonă pietonală, cu acces auto restricționat, iar parcarea e rară, așa că venim pe jos de la marginea zonei, cu sculele și piesele în geantă.',
        'Clădirile sunt vechi și au de multe ori instalații electrice refăcute pe bucăți. O priză care încălzește sau o prelungitoare supraîncărcată poate strica o sursă de televizor la fel de sigur ca o furtună. Când găsim așa ceva, vă spunem, ca să nu se repete defectul după reparație.',
      ]],
      ['Pentru proprietari, administratori și localuri', [
        'Multe apartamente din Centrul Istoric sunt închiriate pe zile, iar un administrator are adesea mai multe deodată. Putem verifica mai multe televizoare la aceeași vizită și vă dăm devizul pentru fiecare înainte de orice intervenție.',
        'Pentru baruri, cafenele și hoteluri mici stabilim ora înainte de program sau în intervalul cel mai liniștit. Detalii despre o singură stradă găsiți pe pagina <a href="/lipscani/">reparații TV pe Strada Lipscani</a>, iar condițiile generale pe <a href="/reparatii-tv-sector-3/">reparații TV Sector 3</a>.',
      ]],
    ],
  },
};
