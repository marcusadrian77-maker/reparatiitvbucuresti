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
