// Blocuri de conținut pentru paginile de locație. Sunt combinate deterministic
// (pe baza slug-ului) astfel încât fiecare pagină să aibă text propriu.

export const INTRO: ((n: string, t: string) => string)[] = [
  (n, t) => `Dacă televizorul dumneavoastră de pe ${n} s-a defectat, nu trebuie să îl cărați nicăieri. Venim noi, cu trusa completă și cu piesele de schimb uzuale în mașină, și în cele mai multe cazuri rezolvăm problema pe loc, în fața dumneavoastră.`,
  (n, t) => `Reparăm televizoare la domiciliu pe ${n} de peste zece ani. Diagnosticarea și deplasarea sunt gratuite, iar dacă televizorul nu poate fi reparat sau nu merită reparat, vă spunem asta din prima și nu plătiți nimic.`,
  (n, t) => `Service TV la domiciliu pe ${n}: sunați dimineața, ajungem de regulă în aceeași zi. Lucrăm pe loc, la dumneavoastră acasă, cu stație de lipit, osciloscop și programator de memorie — nu luăm televizorul în atelier decât dacă defecțiunea chiar o cere.`,
  (n, t) => `Pe ${n} intervenim rapid, fără costuri de transport și fără avans. Verificăm televizorul, vă comunicăm defecțiunea și prețul exact înainte să începem, iar plata se face doar după ce aparatul funcționează.`,
  (n, t) => `Televizor stricat pe ${n}? Ne deplasăm gratuit, diagnosticăm gratuit și reparăm la fața locului: surse de alimentare, baretele LED de iluminare, plăci T-CON, plăci principale și probleme de software Smart TV.`,
  (n, t) => `Oferim reparații de televizoare la domiciliu pentru locuitorii de pe ${n}. Reparăm orice diagonală și orice tehnologie — LED, OLED, QLED, Mini-LED — indiferent de marcă, cu garanție scrisă între 6 și 12 luni.`,
  (n, t) => `Un televizor care nu mai pornește sau care are ecranul negru se repară, în majoritatea cazurilor, mult mai ieftin decât costă unul nou. Pe ${n} venim să îl verificăm gratuit și vă spunem sincer dacă merită.`,
  (n, t) => `Serviciul nostru acoperă integral ${n} și zonele învecinate. Programul obișnuit de intervenții este între 10:00 și 19:00, de luni până vineri, iar pentru urgențe ne putem organiza și în afara acestui interval.`,
];

export const PROBLEME: [string, string][] = [
  ['Televizorul nu pornește deloc', 'Cel mai frecvent defect. De obicei este sursa de alimentare — condensatori umflați, siguranță arsă sau tranzistor de comutație defect. Se rezolvă prin înlocuirea componentelor, nu a întregii plăci.'],
  ['LED-ul de stare clipește', 'Un cod de eroare transmis de placa principală. Numărăm clipirile, identificăm modulul care raportează eroarea și reparăm exact acolo.'],
  ['Sunet există, imaginea lipsește', 'Semnul clasic de backlight ars. Deschidem panoul, testăm baretele LED cu sursă externă și înlocuim doar baretele defecte.'],
  ['Ecran negru cu lanternă vizibil', 'Dacă imaginea se vede când luminați ecranul cu lanterna, iluminarea de fundal este de vină, nu panoul — o reparație accesibilă.'],
  ['Linii verticale sau orizontale', 'Provin de la placa T-CON sau de la contactul cu panoul. Refacem lipiturile sau înlocuim placa T-CON.'],
  ['Pete întunecate sau colorate', 'Difuzorul optic sau lentilele LED s-au deplasat ori s-au îngălbenit. Se corectează prin repoziționare și înlocuirea pieselor arse.'],
  ['Imaginea se stinge după câteva minute', 'Protecția sursei intră în funcțiune din cauza unui consum anormal. Măsurăm tensiunile pe fiecare linie și găsim consumatorul defect.'],
  ['Nu are sunet sau sunetul este distorsionat', 'Amplificatorul audio de pe placa principală sau difuzoarele. Ambele se pot înlocui la domiciliu.'],
  ['Se blochează la sigla de pornire', 'Memoria eMMC are sectoare corupte. Rescriem firmware-ul original cu programator dedicat — nu se rezolvă cu resetare din meniu.'],
  ['Smart TV-ul nu se mai conectează', 'Modul Wi-Fi defect, firmware vechi sau memorie plină. Verificăm în această ordine și rezolvăm cauza reală.'],
  ['Aplicațiile pornesc greu sau se închid', 'Memoria internă este plină sau firmware-ul este corupt. Curățăm, actualizăm și, la nevoie, rescriem software-ul.'],
  ['Telecomanda nu mai răspunde', 'Poate fi receptorul IR din televizor, nu telecomanda. Testăm ambele înainte să înlocuim ceva.'],
  ['Porturile HDMI nu mai funcționează', 'Circuitul de intrare este ars, de regulă după o supratensiune. Se înlocuiesc componentele de protecție și, uneori, mufa.'],
  ['Televizorul pornește și se oprește singur', 'Sursă instabilă sau condensatori la limita capacității. Îi înlocuim pe toți cei suspecți, nu doar pe cel evident stricat.'],
  ['Miros de ars sau zgomot de la carcasă', 'Opriți imediat televizorul din priză și sunați-ne. Este un defect care se poate agrava rapid.'],
  ['Imaginea are culori greșite sau inversate', 'Placa principală sau conexiunea LVDS către panou. Refacem contactul și verificăm semnalul.'],
];

export const PRETURI: [string, string][] = [
  ['Diagnosticare la domiciliu', 'gratuită'],
  ['Deplasare în București și Ilfov', 'gratuită'],
  ['Reparație sau înlocuire sursă de alimentare', '150 – 350 lei'],
  ['Reparare / înlocuire backlight LED', '100 – 280 lei'],
  ['Reparație placă T-CON', '120 – 300 lei'],
  ['Reparație sau înlocuire placă principală', '200 – 500 lei'],
  ['Service software Smart TV / rescriere firmware', '50 – 150 lei'],
  ['Reparație circuit audio sau difuzoare', '80 – 200 lei'],
  ['Curățare internă și service general', '60 – 120 lei'],
];

export const PASI: [string, string][] = [
  ['Sunați sau scrieți pe WhatsApp', 'Ne spuneți marca, diagonala și ce face televizorul. Din descriere ne facem deja o idee despre piesele necesare.'],
  ['Stabilim ora vizitei', 'De regulă în aceeași zi sau a doua zi, într-un interval convenit cu dumneavoastră.'],
  ['Diagnosticăm gratuit, la fața locului', 'Deschidem aparatul, măsurăm și identificăm defectul. Vă arătăm concret ce s-a stricat.'],
  ['Vă comunicăm prețul înainte de reparație', 'Prețul final, nu o estimare care crește pe parcurs. Dumneavoastră decideți dacă mergem mai departe.'],
  ['Reparăm și testăm împreună', 'Lăsăm televizorul să funcționeze și verificăm imaginea, sunetul și conexiunile înainte să plecăm.'],
  ['Primiți garanție scrisă', 'Între 6 și 12 luni, în funcție de tipul intervenției și de piesele folosite.'],
];

export const FAQ: [string, (n: string) => string][] = [
  ['Cât costă deplasarea?', n => `Nimic. Deplasarea pe ${n} și în restul Bucureștiului și Ilfovului este gratuită, la fel și diagnosticarea. Plătiți doar reparația, dacă alegeți să o facem.`],
  ['În cât timp ajungeți?', n => `De obicei în aceeași zi, dacă sunați până în jurul prânzului. Pentru ${n} ne încadrăm în intervalul orar pe care îl stabilim la telefon.`],
  ['Reparați televizorul acasă la mine?', n => `Da, în peste 90% din cazuri reparația se face pe loc, pe ${n}. Doar defecțiunile care cer echipamente de atelier — de exemplu anumite lucrări pe panou — necesită transportul aparatului.`],
  ['Ce garanție ofer­iți?', n => `Între 6 și 12 luni, în funcție de intervenție și de piesele montate. Garanția este scrisă și acoperă atât piesa, cât și manopera.`],
  ['Ce mărci reparați?', n => `Samsung, LG, Sony, Philips, Panasonic, Horizon, TCL, Hisense, Sharp, Toshiba, Vestel, Grundig și practic orice altă marcă întâlnită pe piața din România.`],
  ['Merită reparat un televizor mai vechi?', n => `Depinde de costul piesei raportat la valoarea aparatului. Vă spunem sincer când reparația nu merită — nu insistăm pentru o lucrare care nu are sens economic.`],
  ['Ce se întâmplă dacă nu poate fi reparat?', n => `Nu plătiți nimic. Diagnosticarea rămâne gratuită chiar dacă defecțiunea este una care nu se poate remedia rentabil.`],
  ['Aveți piese pe stoc?', n => `Pentru defecțiunile frecvente — surse, barete LED, condensatori, mufe — da, le avem în mașină. Piesele specifice unui model anume se comandă și ajung, de regulă, în una-două zile.`],
  ['Pot plăti cu cardul?', n => `Da, acceptăm și numerar, și card. Emitem document fiscal pentru fiecare intervenție.`],
  ['Reparați și televizoare OLED sau QLED?', n => `Da. Lucrăm curent pe OLED, QLED, Mini-LED și Smart TV de toate generațiile, inclusiv modele de 75 și 85 de inch.`],
];

export const MARCI = [
  ['Samsung', 'reparatii-televizoare-samsung/'], ['LG', 'reparatii-televizoare-lg/'],
  ['Sony', 'reparatii-televizoare-sony/'], ['Philips', 'reparatii-televizoare-philips/'],
  ['Panasonic', 'reparatii-tv-panasonic/'], ['Horizon', 'reparatii-televizoare-horizon/'],
];

export const DETALII: ((n: string) => string)[] = [
  n => `Diagnosticarea pe ${n} o facem în fața dumneavoastră: deschidem aparatul, măsurăm tensiunile și vă arătăm componenta defectă. Abia după aceea vorbim despre preț, iar prețul comunicat este cel final.`,
  n => `Cele mai multe televizoare aduse în discuție pe ${n} nu au nevoie de piese scumpe. Un condensator, o siguranță sau o baretă LED costă puțin — costisitoare este doar înlocuirea panoului, iar aceea o recomandăm rar.`,
  n => `Lucrăm cu folie de protecție pe mobilă și strângem după noi. Pe ${n} intrăm în casele oamenilor și tratăm asta ca atare — fără mizerie, fără surprize la plată.`,
  n => `Dacă televizorul de pe ${n} este încă în garanția producătorului, vă spunem înainte să atingem ceva. O reparație neautorizată ar anula garanția, iar asta nu este în interesul dumneavoastră.`,
  n => `Pentru intervențiile de pe ${n} folosim piese noi, nu recuperate. Baretele LED, condensatorii și circuitele integrate provin de la furnizori cu care lucrăm de ani de zile.`,
  n => `Un televizor reparat corect mai funcționează, de regulă, încă mulți ani. Pe ${n} am revenit rareori la același aparat pentru aceeași defecțiune — și, dacă se întâmplă în perioada de garanție, intervenția este gratuită.`,
  n => `Programarea pentru ${n} se face telefonic sau pe WhatsApp. Este util să ne trimiteți o poză cu eticheta din spatele televizorului — de acolo aflăm modelul exact și venim cu piesa potrivită.`,
  n => `Nu percepem taxă de urgență și nu avem tarif diferit în weekend pentru zona ${n}. Prețul unei reparații depinde doar de piesa înlocuită și de manoperă.`,
];
