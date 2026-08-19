// Conținut propriu pentru fiecare sector. Nimic nu se repetă între sectoare.

export type Sector = {
  nr: number;
  slug: string;
  titlu: string;
  descriere: string;
  intro: string;
  context: string;
  cartiere: string[];
  artere: string[];
  specific: string;
  interventii: [string, string][];
  faq: [string, string][];
};

const comun: [string, string][] = [];

export const SECTOARE: Record<number, Sector> = {
  1: {
    nr: 1,
    slug: 'reparatii-televizoare-sector-1',
    titlu: 'Reparații TV Sector 1 – Service Televizoare la Domiciliu',
    descriere: 'Service TV la domiciliu în Sectorul 1: Aviației, Dorobanți, Floreasca, Băneasa, Primăverii. Deplasare și diagnosticare gratuite, garanție 6–12 luni.',
    intro: 'Sectorul 1 este zona în care avem cele mai multe intervenții pe televizoare de generație recentă — OLED și QLED de diagonală mare, montate pe perete în apartamente și case din Primăverii, Floreasca, Aviației și Pipera. Sunt aparate scumpe, la care o reparație corectă costă o fracțiune din prețul unui înlocuitor, iar demontarea de pe suport cere două persoane și atenție la panou.',
    context: 'Acoperim tot sectorul, de la Piața Victoriei și Calea Victoriei până la Băneasa și Otopeni, trecând prin Bucureștii Noi, Dămăroaia și Grivița. Traficul de pe Kiseleff și Aviatorilor ne face să programăm de obicei intervențiile din nordul sectorului dimineața devreme sau după ora 15:00.',
    cartiere: ['Aviației', 'Aviatorilor', 'Băneasa', 'Dorobanți', 'Floreasca', 'Primăverii', 'Pipera', 'Domenii', 'Bucureștii Noi', 'Dămăroaia', 'Grivița', 'Herăstrău', 'Gara de Nord'],
    artere: ['Calea Victoriei', 'Bulevardul Aviatorilor', 'Bulevardul Ion Mihalache', 'Calea Dorobanți', 'Bulevardul Lascăr Catargiu', 'Șoseaua Kiseleff', 'Bulevardul Banu Manta', 'Calea Griviței', 'Șoseaua București–Ploiești', 'Bulevardul Poligrafiei', 'Șoseaua Nordului', 'Șoseaua Pipera'],
    specific: 'Pe televizoarele OLED montate pe perete, cea mai frecventă solicitare din Sector 1 nu este o defecțiune de panou, ci o problemă de sursă sau de placă principală — se repară pe loc, fără să dăm aparatul jos, dacă spațiul din spate permite accesul la capac.',
    interventii: [
      ['OLED și QLED de diagonală mare', 'Lucrăm curent pe modele de 65, 75 și 85 de inch. Demontarea de pe suportul de perete o facem noi, cu grijă la panou.'],
      ['Sisteme cu soundbar și home cinema', 'Multe probleme raportate ca „nu are sunet" vin de la conexiunea eARC sau de la setările de ieșire audio, nu de la televizor.'],
      ['Televizoare din case și vile', 'Intervenim și la aparate montate în living-uri înalte sau în zone greu accesibile — venim pregătiți cu scară.'],
      ['Instalări și reconfigurări', 'Montaj pe perete, calibrare imagine, reconectare la rețea și aplicații după o reparație sau o mutare.'],
    ],
    faq: [
      ['Reparați televizoare montate pe perete fără să le dați jos?', 'Dacă în spatele aparatului rămâne spațiu de lucru, da. Altfel îl demontăm noi și îl remontăm după reparație, fără cost suplimentar.'],
      ['Veniți și în Pipera sau Băneasa?', 'Da, ambele intră în zona de deplasare gratuită, la fel ca restul Sectorului 1 și localitățile limitrofe din Ilfov.'],
      ['Cât durează o reparație de sursă?', 'În mod obișnuit între 45 de minute și o oră și jumătate, la dumneavoastră acasă.'],
    ],
  },
  2: {
    nr: 2,
    slug: 'reparatii-televizoare-sector-2',
    titlu: 'Reparații TV Sector 2 – Service Televizoare la Domiciliu',
    descriere: 'Service TV la domiciliu în Sectorul 2: Colentina, Tei, Pantelimon, Iancului, Obor. Deplasare și diagnosticare gratuite, garanție 6–12 luni.',
    intro: 'Sectorul 2 are un fond locativ foarte amestecat — blocuri de patru etaje pe Colentina și Pantelimon, case pe Vatra Luminoasă, ansambluri noi pe Barbu Văcărescu și Dimitrie Pompeiu. Pe măsură ce vechimea aparatelor crește, cresc și defecțiunile de sursă și de backlight, care sunt exact tipul de reparație care se face rapid și ieftin la domiciliu.',
    context: 'Ne deplasăm pe toată lungimea Șoselei Colentina și a Șoselei Pantelimon, pe Bulevardul Lacul Tei, pe Iancului, Mihai Bravu, Ferdinand și Basarabia, până la limita cu Fundeni și Dobroești.',
    cartiere: ['Colentina', 'Tei', 'Pantelimon', 'Iancului', 'Obor', 'Vatra Luminoasă', 'Fundeni', 'Baicului', 'Ștefan cel Mare', 'Doamna Ghica', 'Floreasca-Barbu Văcărescu', 'Plumbuita'],
    artere: ['Șoseaua Colentina', 'Șoseaua Pantelimon', 'Bulevardul Lacul Tei', 'Șoseaua Ștefan cel Mare', 'Bulevardul Ferdinand I', 'Bulevardul Basarabia', 'Șoseaua Iancului', 'Șoseaua Mihai Bravu', 'Bulevardul Chișinău', 'Bulevardul Pache Protopopescu', 'Strada Barbu Văcărescu', 'Bulevardul Dimitrie Pompeiu'],
    specific: 'În blocurile vechi din Colentina și Pantelimon vedem des televizoare afectate de variații de tensiune — condensatori umflați în sursă. Este o reparație de rutină pentru noi și, dacă tot deschidem aparatul, înlocuim toți condensatorii aflați la limită, nu doar pe cel care a cedat.',
    interventii: [
      ['Surse afectate de variații de tensiune', 'Înlocuim condensatorii degradați și verificăm întreaga linie de alimentare, ca defecțiunea să nu revină peste câteva luni.'],
      ['Backlight ars pe televizoare de 5–10 ani', 'Cea mai frecventă cauză de ecran negru cu sunet prezent. Înlocuim baretele LED defecte.'],
      ['Smart TV blocate la pornire', 'Rescriem memoria eMMC cu programator dedicat, când resetarea din meniu nu mai ajută.'],
      ['Televizoare din ansambluri noi', 'Pe Barbu Văcărescu și Dimitrie Pompeiu intervenim și pe modele recente, aflate încă în garanție extinsă — vă spunem când e mai bine să apelați la producător.'],
    ],
    faq: [
      ['Ajungeți și în zona Fundeni sau Dobroești?', 'Da. Limita de est a Sectorului 2 și localitățile lipite de ea intră în aria de deplasare gratuită.'],
      ['Televizorul meu are 8 ani. Mai merită reparat?', 'Dacă defectul este sursa sau backlight-ul, aproape întotdeauna da. Dacă este panoul, de regulă nu — și vă spunem asta direct.'],
      ['Puteți veni după ora 18:00?', 'Programul obișnuit este 10:00–19:00, dar pentru Sectorul 2 ne putem organiza și mai târziu, dacă ne anunțați din timp.'],
    ],
  },
  3: {
    nr: 3,
    slug: 'reparatii-televizoare-sector-3',
    titlu: 'Reparații TV Sector 3 – Service Televizoare la Domiciliu',
    descriere: 'Service TV la domiciliu în Sectorul 3: Titan, Dristor, Vitan, Unirii, Centrul Vechi. Deplasare și diagnosticare gratuite, garanție 6–12 luni.',
    intro: 'Sectorul 3 este cel mai populat din București și, implicit, sectorul din care primim cele mai multe solicitări. Zona Titan–Dristor–Balta Albă este densă, cu blocuri construite în aceeași perioadă și cu televizoare de vârste apropiate — vedem defecțiuni care se repetă de la un apartament la altul, ceea ce ne permite să venim cu piesele potrivite din prima.',
    context: 'Acoperim de la Piața Unirii și Centrul Vechi până la Theodor Pallady și limita cu Pantelimon: Vitan, Dudești, Dristor, Titan, Balta Albă, Trapezului, Nicolae Grigorescu, Camil Ressu, Decebal și Unirii.',
    cartiere: ['Titan', 'Dristor', 'Vitan', 'Centrul Vechi', 'Dudești', 'Balta Albă', 'Trapezului', 'Nicolae Grigorescu', 'Unirii', 'Theodor Pallady', 'Muncii', 'Ozana', 'Salajan'],
    artere: ['Bulevardul Unirii', 'Bulevardul Decebal', 'Bulevardul Camil Ressu', 'Bulevardul Nicolae Grigorescu', 'Calea Vitan', 'Calea Călărașilor', 'Bulevardul Theodor Pallady', 'Bulevardul 1 Decembrie 1918', 'Strada Matei Basarab', 'Bulevardul Burebista', 'Calea Dudești', 'Bulevardul Corneliu Coposu'],
    specific: 'În Titan și Balta Albă întâlnim foarte des televizoare LED de 32–43 de inch din generația 2014–2018, la care baretele de iluminare cedează după 6–8 ani de utilizare. Avem baretele uzuale pentru aceste modele pe stoc, așa că reparația se termină, de regulă, la prima vizită.',
    interventii: [
      ['Barete LED pentru modele de 32–43"', 'Piesele frecvente pentru generația 2014–2018 le avem în mașină — reparație terminată la prima vizită.'],
      ['Plăci T-CON pentru linii pe ecran', 'Refacem lipiturile sau înlocuim placa, în funcție de cauza reală a liniilor.'],
      ['Televizoare din locuințe de bloc', 'Lucrăm curat, cu folie de protecție, și lăsăm apartamentul așa cum l-am găsit.'],
      ['Aparate cu porturi HDMI arse', 'După o supratensiune, circuitul de intrare se poate reface fără schimbarea plăcii principale.'],
    ],
    faq: [
      ['Sunteți disponibili în Titan în aceeași zi?', 'De obicei da. Titan și Dristor sunt zone în care ajungem rapid, mai ales dacă sunați în prima parte a zilei.'],
      ['Aveți piese pentru televizoare mai vechi de 8 ani?', 'Pentru baretele LED și componentele de sursă, da. Piesele de panou pentru modele scoase din producție sunt greu de găsit și vă spunem sincer când nu are rost să căutăm.'],
      ['Reparați și în Centrul Vechi?', 'Da, inclusiv în clădirile fără lift — venim pregătiți.'],
    ],
  },
  4: {
    nr: 4,
    slug: 'reparatii-televizoare-sector-4',
    titlu: 'Reparații TV Sector 4 – Service Televizoare la Domiciliu',
    descriere: 'Service TV la domiciliu în Sectorul 4: Berceni, Tineretului, Văcărești, Olteniței, Giurgiului. Deplasare și diagnosticare gratuite, garanție 6–12 luni.',
    intro: 'Sectorul 4 combină cartiere consolidate — Berceni, Giurgiului, Olteniței — cu ansambluri noi ridicate în ultimii ani în jurul Metalurgiei și al Șoselei Berceni. Asta înseamnă și televizoare vechi, la care intervenim pe sursă și backlight, și aparate recente, la care majoritatea problemelor sunt de software Smart TV și se rezolvă în mai puțin de o oră.',
    context: 'Ne deplasăm de la Piața Unirii și Tineretului până la Șoseaua Berceni și Apărătorii Patriei, acoperind Văcărești, Olteniței, Giurgiului, Timpuri Noi, Brâncoveanu și Metalurgiei.',
    cartiere: ['Berceni', 'Tineretului', 'Văcărești', 'Olteniței', 'Giurgiului', 'Timpuri Noi', 'Apărătorii Patriei', 'Brâncoveanu', 'Metalurgiei', 'Progresul', 'Dimitrie Cantemir'],
    artere: ['Bulevardul Tineretului', 'Bulevardul Dimitrie Cantemir', 'Șoseaua Olteniței', 'Șoseaua Berceni', 'Bulevardul Gheorghe Șincai', 'Calea Văcărești', 'Bulevardul Constantin Brâncoveanu', 'Bulevardul Metalurgiei', 'Bulevardul Alexandru Obregia', 'Calea Șerban Vodă', 'Șoseaua Giurgiului'],
    specific: 'În ansamblurile noi din zona Metalurgiei și Berceni, cele mai multe apeluri sunt pentru televizoare care nu se mai conectează la internet sau care se blochează în aplicații. În jumătate din cazuri cauza este memoria internă plină sau un firmware vechi — se rezolvă pe loc, fără piese de schimb.',
    interventii: [
      ['Smart TV care nu se conectează', 'Verificăm în ordine: modulul Wi-Fi, firmware-ul și memoria internă. Rezolvăm cauza, nu simptomul.'],
      ['Surse și condensatori pe aparate vechi', 'Intervenție clasică pentru televizoarele din blocurile din Berceni și Giurgiului.'],
      ['Configurare după mutare', 'Remontaj, resetare, reconectare la rețea și repornirea aplicațiilor pentru cei care tocmai s-au mutat în ansamblurile noi.'],
      ['Televizoare care se opresc singure', 'Sursă instabilă sau protecție care intră în funcțiune — măsurăm fiecare linie de tensiune înainte să schimbăm ceva.'],
    ],
    faq: [
      ['Veniți în Berceni și în zona Metalurgiei?', 'Da, ambele fac parte din aria de deplasare gratuită, la fel ca tot restul Sectorului 4.'],
      ['Televizorul e nou și nu se mai conectează la Wi-Fi. Îl reparați?', 'Da, și de multe ori fără piese de schimb. Dacă aparatul este încă în garanția producătorului, vă spunem înainte să intervenim.'],
      ['Ajungeți și în Popești-Leordeni?', 'Da, este una dintre localitățile din Ilfov pe care le deservim fără cost suplimentar.'],
    ],
  },
  5: {
    nr: 5,
    slug: 'reparatii-televizoare-sector-5',
    titlu: 'Reparații TV Sector 5 – Service Televizoare la Domiciliu',
    descriere: 'Service TV la domiciliu în Sectorul 5: Rahova, Ferentari, Cotroceni, 13 Septembrie, Panduri. Deplasare și diagnosticare gratuite, garanție 6–12 luni.',
    intro: 'Sectorul 5 se întinde de la Cotroceni și 13 Septembrie, zone cu locuințe bine întreținute și televizoare de gamă medie și înaltă, până la Rahova și Ferentari, unde predomină aparatele mai vechi. Diferența se vede în tipul lucrărilor: în prima zonă lucrăm mai mult pe Smart TV și pe panouri mari, în a doua pe surse, condensatori și iluminare.',
    context: 'Acoperim Calea Rahovei, Calea 13 Septembrie, Șoseaua Panduri, Bulevardul Tudor Vladimirescu, Sebastian, Ferentari, Antiaeriană și zona Ghencea aflată în sector.',
    cartiere: ['Rahova', 'Ferentari', 'Cotroceni', '13 Septembrie', 'Panduri', 'Sebastian', 'Dealul Spirii', 'Antiaeriană', 'Giurgiului', 'Salaj', 'Petre Ispirescu'],
    artere: ['Calea Rahovei', 'Calea 13 Septembrie', 'Șoseaua Panduri', 'Bulevardul Tudor Vladimirescu', 'Calea Ferentari', 'Bulevardul Eroii Sanitari', 'Strada Sebastian', 'Bulevardul Pieptănari', 'Șoseaua Alexandriei', 'Șoseaua Sălaj', 'Bulevardul Libertății'],
    specific: 'În zona Cotroceni și 13 Septembrie ne cheamă des pentru televizoare de peste 55 de inch la care problema pare gravă — ecran complet negru — dar care se dovedește a fi backlight-ul. Testul cu lanterna, pe care îl puteți face și dumneavoastră înainte să sunați, lămurește situația în zece secunde.',
    interventii: [
      ['Backlight pe televizoare mari', 'Dacă imaginea se vede cu lanterna, panoul e bun și reparația e accesibilă.'],
      ['Surse pe aparate din blocuri vechi', 'Rahova, Ferentari și Sebastian — intervenția cea mai frecventă din sector.'],
      ['Probleme de sunet și amplificator audio', 'Reparăm modulul audio de pe placa principală sau înlocuim difuzoarele.'],
      ['Televizoare care nu mai răspund la telecomandă', 'Testăm și telecomanda, și receptorul IR din aparat, înainte să înlocuim ceva.'],
    ],
    faq: [
      ['Cum verific singur dacă e backlight-ul?', 'Porniți televizorul, stingeți lumina din cameră și luminați ecranul de aproape cu lanterna telefonului. Dacă se vede imaginea în umbră, este iluminarea de fundal.'],
      ['Veniți în Ferentari?', 'Da, deservim tot Sectorul 5 fără excepție și fără taxă de deplasare.'],
      ['Emiteți factură?', 'Da, pentru fiecare intervenție. Acceptăm plata în numerar și cu cardul.'],
    ],
  },
  6: {
    nr: 6,
    slug: 'reparatii-televizoare-sector-6',
    titlu: 'Reparații TV Sector 6 – Service Televizoare la Domiciliu',
    descriere: 'Service TV la domiciliu în Sectorul 6: Militari, Drumul Taberei, Crângași, Giulești, Ghencea. Deplasare și diagnosticare gratuite, garanție 6–12 luni.',
    intro: 'Sectorul 6 înseamnă în primul rând Militari și Drumul Taberei — două cartiere mari, cu mii de apartamente și cu un parc de televizoare care acoperă practic toate generațiile din ultimii cincisprezece ani. Ne deplasăm zilnic pe Iuliu Maniu, Timișoara și Drumul Taberei, așa că, dacă sunați dimineața, sunt șanse mari să fim deja în zonă.',
    context: 'Acoperim Militari, Drumul Taberei, Crângași, Giulești, Ghencea, Grozăvești, Regie, Politehnica și Lujerului, până la limita cu Chiajna.',
    cartiere: ['Militari', 'Drumul Taberei', 'Crângași', 'Giulești', 'Ghencea', 'Grozăvești', 'Regie', 'Politehnica', 'Lujerului', 'Plaza', 'Gorjului', 'Valea Cascadelor'],
    artere: ['Bulevardul Iuliu Maniu', 'Bulevardul Timișoara', 'Drumul Taberei', 'Calea Crângași', 'Calea Giulești', 'Bulevardul Ghencea', 'Șoseaua Virtuții', 'Bulevardul Constructorilor', 'Bulevardul Preciziei', 'Bulevardul Uverturii', 'Calea Plevnei', 'Bulevardul Vasile Milea'],
    specific: 'În Drumul Taberei și Militari majoritatea apartamentelor au televizorul montat pe perete, în living. Venim cu tot ce trebuie pentru a-l demonta și remonta în siguranță, iar dacă defecțiunea este pe sursă sau pe placa principală, lucrăm direct pe perete acolo unde spațiul permite.',
    interventii: [
      ['Reparații pe televizoare montate pe perete', 'Demontare și remontare incluse, fără cost suplimentar.'],
      ['Barete LED și panouri de iluminare', 'Cea mai frecventă cauză de ecran negru la aparatele din cartier.'],
      ['Plăci principale și memorie eMMC', 'Rescriem firmware-ul cu programator dedicat, pentru televizoarele blocate la sigla de pornire.'],
      ['Intervenții în aceeași zi', 'Fiind zilnic în zonă, pe Iuliu Maniu și Drumul Taberei ajungem de regulă în câteva ore.'],
    ],
    faq: [
      ['Cât de repede ajungeți în Drumul Taberei?', 'De obicei în aceeași zi, adesea în câteva ore, pentru că avem intervenții zilnice în zonă.'],
      ['Demontați televizorul de pe perete?', 'Da, fără cost suplimentar, și îl remontăm după reparație.'],
      ['Deserviți și Chiajna sau Militari Residence?', 'Da, ambele intră în aria de deplasare gratuită.'],
    ],
  },
};

export const LISTA_SECTOARE = [1, 2, 3, 4, 5, 6];
