export type Brand = {
  slug: string;
  nume: string;
  titlu: string;
  descriere: string;
  intro: string;
  context: string;
  serii: string;
  defecte: [string, string][];
  serii_lista: string[];
  faq: [string, string][];
};

export const BRANDURI: Record<string, Brand> = {
  samsung: {
    slug: 'reparatii-televizoare-samsung',
    nume: 'Samsung',
    titlu: 'Reparații TV Samsung București – Service la Domiciliu',
    descriere: 'Service televizoare Samsung la domiciliu în București și Ilfov: QLED, Neo QLED, Crystal UHD, The Frame. Diagnosticare și deplasare gratuite, garanție 6–12 luni.',
    intro: 'Samsung este marca pe care o vedem cel mai des în casele din București, iar asta ne-a dat timp să învățăm foarte bine cum se strică. Cele mai multe apeluri sunt pentru televizoare care nu mai pornesc, pentru ecrane negre cu sunet prezent și pentru aparate blocate la sigla de pornire — trei defecțiuni pe care le rezolvăm, de regulă, la prima vizită și fără să scoatem televizorul din casă.',
    context: 'Lucrăm pe toată gama Samsung din ultimii cincisprezece ani: seriile Crystal UHD (AU, BU, CU, DU), QLED (Q6, Q7, Q8, Q9), Neo QLED (QN85, QN90, QN95), The Frame, The Serif și modelele Full HD mai vechi din seriile J, K, M și N.',
    serii: 'Seriile Samsung pe care intervenim curent',
    serii_lista: ['Crystal UHD — AU7000, AU8000, BU8000, CU7000, CU8000, DU7000', 'QLED — Q60, Q65, Q70, Q80, Q90 (toate generațiile)', 'Neo QLED — QN85, QN90, QN95, QN800, QN900', 'The Frame — LS03 toate generațiile', 'The Serif, The Sero, The Terrace', 'Serii mai vechi — J5200, K5500, M5500, N5300, NU7100, RU7100'],
    defecte: [
      ['Nu pornește, LED-ul roșu clipește', 'Aproape întotdeauna sursa de alimentare. Condensatorii de pe linia de standby cedează primii. Se înlocuiesc componentele, nu placa întreagă — reparație de 45–90 de minute.'],
      ['Ecran negru, sunetul se aude', 'Baretele LED de iluminare s-au ars. Pe modelele Samsung de 43–65 de inch este cea mai frecventă defecțiune după 5–7 ani. Înlocuim doar baretele afectate.'],
      ['Blocat la logo-ul Samsung', 'Memoria eMMC are sectoare corupte. Nu se rezolvă cu resetare din meniu — rescriem firmware-ul original cu programator dedicat.'],
      ['Smart Hub nu se încarcă / aplicații care crapă', 'Firmware vechi sau memorie internă plină. Curățăm, actualizăm și, dacă e nevoie, reinstalăm software-ul complet.'],
      ['Linii verticale pe QLED', 'Placa T-CON sau contactul cu panoul. Refacem lipiturile sau înlocuim placa T-CON — mult mai ieftin decât panoul.'],
      ['One Connect Box defect', 'Pe modelele QLED și The Frame, cutia externă poate ceda separat de televizor. O reparăm sau o înlocuim, fără să atingem panoul.'],
      ['Nu recunoaște telecomanda', 'Receptorul IR sau modulul Bluetooth de pe placa principală. Testăm întâi telecomanda, ca să nu schimbăm degeaba componente.'],
      ['Porturi HDMI arse', 'Tipic după o supratensiune din rețea. Se reface circuitul de intrare, fără schimbarea plăcii principale.'],
    ],
    faq: [
      ['Reparați și televizoare Samsung aflate în garanție?', 'Vă recomandăm să apelați mai întâi la service-ul autorizat, pentru că o intervenție externă anulează garanția producătorului. Vă spunem asta din prima, înainte să atingem aparatul.'],
      ['Cât costă înlocuirea baretelor LED la un Samsung de 55"?', 'Între 100 și 280 de lei, manoperă inclusă, în funcție de câte barete sunt afectate și de model. Prețul exact îl aflați după diagnosticarea gratuită.'],
      ['Aveți piese pentru modele Samsung mai vechi?', 'Pentru surse, barete LED și componente de placă, da. Panourile pentru modele scoase din producție sunt greu de găsit și, de obicei, nu merită economic.'],
      ['Reparați The Frame montat pe perete?', 'Da. Îl demontăm și îl remontăm noi, fără cost suplimentar.'],
    ],
  },
  lg: {
    slug: 'reparatii-televizoare-lg',
    nume: 'LG',
    titlu: 'Reparații TV LG București – Service OLED și NanoCell la Domiciliu',
    descriere: 'Service televizoare LG la domiciliu în București și Ilfov: OLED, NanoCell, QNED, UHD. Diagnosticare și deplasare gratuite, reparație pe loc, garanție 6–12 luni.',
    intro: 'LG este a doua marcă ca frecvență în intervențiile noastre și prima când vine vorba de OLED. Panourile OLED sunt excelente, dar electronica din jurul lor — sursa, placa principală, modulul de alimentare al panoului — se defectează la fel ca la orice alt televizor. Vestea bună este că majoritatea acestor defecțiuni se repară, iar costul este o fracțiune din prețul unui OLED nou.',
    context: 'Intervenim pe toate seriile LG din ultimii ani: OLED (B, C, G, A, Z), QNED, NanoCell (NANO75–NANO99), UHD (UP, UQ, UR) și modelele mai vechi din seriile LJ, UJ, UK și UM.',
    serii: 'Seriile LG pe care intervenim curent',
    serii_lista: ['OLED — seria C (C1, C2, C3, C4), seria B, seria G, seria A, seria Z', 'QNED — QNED80, QNED85, QNED90, MiniLED', 'NanoCell — NANO75, NANO80, NANO86, NANO90, NANO99', 'UHD — UP75, UP78, UQ75, UQ80, UR78, UR80', 'Serii mai vechi — LJ, UJ, UK, UM, SM'],
    defecte: [
      ['OLED care nu mai pornește', 'De obicei sursa sau modulul de alimentare al panoului. Ambele se repară la domiciliu, fără atingerea panoului OLED.'],
      ['Imagine remanentă (burn-in) pe OLED', 'Rulăm rutina de compensare a pixelilor din meniul de service. Dacă remanența este permanentă, vă spunem sincer — panoul nu se repară, se înlocuiește, iar asta rareori merită.'],
      ['Ecran negru pe NanoCell și UHD', 'Baretele LED de iluminare. Le înlocuim doar pe cele arse, cu piese noi.'],
      ['webOS blocat sau aplicații care nu pornesc', 'Reinstalăm sau actualizăm firmware-ul. Pe modelele mai vechi eliberăm și memoria internă, care se umple cu timpul.'],
      ['Linii orizontale sau benzi colorate', 'Placa T-CON sau conexiunea LVDS. Refacem contactul sau înlocuim placa.'],
      ['Se oprește singur după câteva minute', 'Protecția sursei intră în funcțiune. Măsurăm fiecare linie de tensiune și găsim consumatorul defect.'],
      ['Magic Remote nu mai funcționează', 'Modulul Bluetooth de pe placa principală sau reasocierea telecomenzii. Testăm ambele variante.'],
      ['Sunet lipsă sau distorsionat', 'Amplificatorul audio de pe placa principală ori difuzoarele. Se înlocuiesc la domiciliu.'],
    ],
    faq: [
      ['Se poate repara un panou OLED zgâriat sau spart?', 'Nu. Panoul OLED nu se repară, iar înlocuirea lui costă, de obicei, mai mult decât un televizor nou. Vă spunem asta imediat, ca să nu pierdeți timp.'],
      ['Cât costă o reparație de sursă la un LG OLED?', 'Între 150 și 350 de lei pentru sursă, manoperă inclusă. Prețul final se stabilește după diagnosticarea gratuită.'],
      ['Reparați televizoare LG cu burn-in?', 'Putem rula rutinele de compensare, care ajută în cazurile ușoare. Burn-in-ul avansat este permanent și nu are soluție de reparație.'],
      ['Ajungeți în aceeași zi?', 'De regulă da, dacă sunați în prima parte a zilei. Deplasarea în București și Ilfov este gratuită.'],
    ],
  },
  sony: {
    slug: 'reparatii-televizoare-sony',
    nume: 'Sony',
    titlu: 'Reparații TV Sony București – Service Bravia la Domiciliu',
    descriere: 'Service televizoare Sony Bravia la domiciliu în București și Ilfov: OLED, LED 4K, Android TV, Google TV. Deplasare și diagnosticare gratuite, garanție 6–12 luni.',
    intro: 'Televizoarele Sony Bravia sunt construite solid și ajung rar la service înainte de a împlini șapte-opt ani. Când ajung, cauzele sunt aproape mereu aceleași: sursa de alimentare, baretele de iluminare sau software-ul Android TV, care pe generațiile mai vechi devine lent și instabil. Toate trei se rezolvă la domiciliu.',
    context: 'Lucrăm pe seriile Bravia XR, A (OLED), X (LED 4K), W și R, atât pe modelele cu Android TV, cât și pe cele mai noi cu Google TV.',
    serii: 'Seriile Sony pe care intervenim curent',
    serii_lista: ['Bravia XR — A80, A90, A95 (OLED), X90, X92, X95 (LED)', 'Bravia OLED — AF, AG, A8, A9, A1', 'Bravia LED 4K — XE, XF, XG, XH, X80, X85', 'Modele mai vechi — seriile W, R, KDL Full HD', 'Android TV și Google TV, toate generațiile'],
    defecte: [
      ['Android TV lent sau blocat', 'Pe generațiile 2015–2019, memoria internă se umple și sistemul devine inutilizabil. Curățăm, actualizăm firmware-ul și, la nevoie, reinstalăm software-ul.'],
      ['Nu pornește, LED-ul clipește de un anumit număr de ori', 'Sony folosește coduri de eroare prin clipiri. Le numărăm, identificăm modulul care raportează problema și reparăm exact acolo.'],
      ['Ecran negru cu sunet prezent', 'Baretele LED sau driverul de backlight. Testăm cu sursă externă înainte de a înlocui ceva.'],
      ['Imagine cu pete sau zone mai închise', 'Difuzorul optic sau lentilele LED s-au deplasat. Se corectează prin repoziționare și înlocuirea pieselor arse.'],
      ['Nu se conectează la Wi-Fi', 'Modul Wi-Fi defect sau firmware vechi. Verificăm în această ordine.'],
      ['Sunet fără imagine pe OLED Bravia', 'Placa principală sau conexiunea către panou. Reparabil fără înlocuirea panoului în majoritatea cazurilor.'],
      ['Porturi HDMI care nu mai răspund', 'Circuitul de intrare ars după o supratensiune. Se reface fără schimbarea plăcii.'],
      ['Se repornește singur în buclă', 'Sursă instabilă sau firmware corupt. Diagnosticăm ambele înainte de a interveni.'],
    ],
    faq: [
      ['Reparați și modele Sony Bravia foarte vechi?', 'Da, atât timp cât piesele necesare încă se găsesc. Pentru modelele scoase din producție vă spunem din prima dacă merită.'],
      ['Android TV-ul meu Sony e foarte lent. Se rezolvă?', 'De cele mai multe ori, da — prin curățarea memoriei și actualizarea sau reinstalarea firmware-ului. Este o intervenție care nu necesită piese.'],
      ['Cât durează o reparație Sony la domiciliu?', 'Între o oră și două ore, în funcție de defecțiune. Rareori este nevoie să luăm aparatul în atelier.'],
      ['Veniți în tot Bucureștiul?', 'În toate cele șase sectoare și în localitățile din Ilfov, fără taxă de deplasare.'],
    ],
  },
  philips: {
    slug: 'reparatii-televizoare-philips',
    nume: 'Philips',
    titlu: 'Reparații TV Philips București – Service Ambilight la Domiciliu',
    descriere: 'Service televizoare Philips la domiciliu în București și Ilfov: Ambilight, OLED, LED 4K, Android TV. Deplasare și diagnosticare gratuite, garanție 6–12 luni.',
    intro: 'Philips are o particularitate pe care alte mărci nu o au: sistemul Ambilight, cu LED-uri pe spatele carcasei. Este o sursă suplimentară de defecțiuni — module Ambilight care nu mai luminează, culori greșite pe o latură — dar și una dintre cele mai satisfăcătoare reparații, pentru că se rezolvă rapid și diferența se vede imediat.',
    context: 'Intervenim pe seriile PUS, PFS, PFT, POS și OLED, cu și fără Ambilight, inclusiv pe modelele cu Android TV și Google TV.',
    serii: 'Seriile Philips pe care intervenim curent',
    serii_lista: ['OLED — OLED705, OLED754, OLED805, OLED806, OLED856, POS9002', 'LED 4K — PUS6xxx, PUS7xxx, PUS8xxx, PUS9xxx', 'Full HD — PFS4xxx, PFS5xxx, PFT4xxx, PFT5xxx', 'Serii americane — PFL5603, PFL5704, PFL5901', 'Ambilight — 2, 3 și 4 laturi, toate generațiile'],
    defecte: [
      ['Ambilight nu mai luminează sau are culori greșite', 'Modulul Ambilight sau driverul de LED. Se înlocuiește separat, fără să atingem panoul principal.'],
      ['Televizorul nu pornește', 'Sursa de alimentare — condensatori umflați sau tranzistor de comutație. Reparație clasică, de sub două ore.'],
      ['Ecran negru cu sunet', 'Baretele LED de iluminare arse. Le înlocuim doar pe cele defecte.'],
      ['Android TV blocat sau aplicații care nu pornesc', 'Firmware corupt sau memorie plină. Reinstalăm software-ul original.'],
      ['Linii pe ecran', 'Placa T-CON sau contactul cu panoul. Refacem lipiturile sau înlocuim placa.'],
      ['Nu răspunde la telecomandă', 'Receptorul IR din televizor, nu neapărat telecomanda. Testăm ambele.'],
      ['Sunet distorsionat sau lipsă', 'Amplificatorul audio de pe placa principală sau difuzoarele.'],
      ['Se închide singur', 'Protecția sursei sau setarea de oprire automată. Verificăm întâi setările, apoi electronica.'],
    ],
    faq: [
      ['Se repară sistemul Ambilight separat?', 'Da. Modulul Ambilight este independent de restul electronicii și se poate înlocui fără intervenție pe panou.'],
      ['Aveți piese pentru Philips seria PUS?', 'Pentru surse, barete LED și componente uzuale, da. Piesele specifice unui model se comandă și ajung în una-două zile.'],
      ['Reparați și televizoare Philips OLED?', 'Da, atât electronica, cât și problemele de software. Panoul OLED în sine nu se repară.'],
      ['Diagnosticarea costă ceva?', 'Nu. Diagnosticarea și deplasarea sunt gratuite, în tot Bucureștiul și Ilfovul.'],
    ],
  },
  panasonic: {
    slug: 'reparatii-tv-panasonic',
    nume: 'Panasonic',
    titlu: 'Reparații TV Panasonic București – Service Viera la Domiciliu',
    descriere: 'Service televizoare Panasonic Viera la domiciliu în București și Ilfov: OLED, LED 4K, plasmă. Deplasare și diagnosticare gratuite, garanție 6–12 luni.',
    intro: 'Panasonic are în București un parc de televizoare relativ vechi, dar foarte bine construite — inclusiv plasme Viera care încă funcționează după cincisprezece ani. Sunt aparate care merită reparate: electronica este accesibilă, piesele se găsesc, iar calitatea imaginii rămâne bună chiar și la modelele din urmă cu un deceniu.',
    context: 'Lucrăm pe seriile Viera (TX-, DX, ES, EX, FX, GX, GZ, HZ, LZ), pe modelele OLED și pe plasmele mai vechi, acolo unde piesele încă permit o reparație rezonabilă.',
    serii: 'Seriile Panasonic pe care intervenim curent',
    serii_lista: ['OLED — GZ1000, GZ1500, HZ980, HZ1500, LZ980, LZ1500', 'LED 4K — DX600, DX650, DX750, DX780, EX600, EX700, EX730, EX780', 'LED 4K recent — FX700, FX740, FX750, GX700, GX800, GX820', 'Full HD — ES400, ES500, ES510, ES513', 'Plasme Viera — seriile ST, GT, VT, ZT'],
    defecte: [
      ['Plasmă care nu mai pornește', 'De regulă placa SC sau SS. Se repară dacă piesele se găsesc — și, la o plasmă Viera bună, de obicei merită.'],
      ['LED care nu pornește', 'Sursa de alimentare. Înlocuim condensatorii degradați și verificăm întreaga linie.'],
      ['Ecran negru cu sunet prezent', 'Baretele LED de iluminare. Cea mai frecventă defecțiune pe seriile DX și EX.'],
      ['Imagine cu pete sau zone închise', 'Difuzorul optic deplasat sau lentile LED arse. Se corectează la domiciliu.'],
      ['Sistemul se blochează la pornire', 'Memorie eMMC coruptă. Rescriem firmware-ul cu programator dedicat.'],
      ['Linii verticale', 'Placa T-CON sau contactul cu panoul.'],
      ['Nu se mai conectează la rețea', 'Modul Wi-Fi sau firmware vechi. Verificăm și actualizăm.'],
      ['Sunet slab sau lipsă', 'Modul audio sau difuzoare. Ambele se înlocuiesc pe loc.'],
    ],
    faq: [
      ['Merită reparată o plasmă Panasonic veche?', 'Deseori da, pentru că imaginea rămâne foarte bună și piesele de electronică se găsesc. Dacă panoul e afectat, nu — și vă spunem direct.'],
      ['Găsiți piese pentru serii Viera scoase din producție?', 'Pentru componente de sursă și barete LED, în general da. Pentru plăci specifice, verificăm disponibilitatea înainte să promitem ceva.'],
      ['Cât costă diagnosticarea?', 'Nimic. Diagnosticarea și deplasarea sunt gratuite în București și Ilfov.'],
      ['Reparați la domiciliu sau luați televizorul?', 'În peste 90% din cazuri, la domiciliu. Doar lucrările care cer echipament de atelier necesită transport.'],
    ],
  },
  horizon: {
    slug: 'reparatii-televizoare-horizon',
    nume: 'Horizon',
    titlu: 'Reparații TV Horizon București – Service la Domiciliu',
    descriere: 'Service televizoare Horizon la domiciliu în București și Ilfov: Smart TV, LED, 4K UHD. Deplasare și diagnosticare gratuite, reparație pe loc, garanție 6–12 luni.',
    intro: 'Horizon este o marcă prezentă în multe locuințe din București, cu televizoare accesibile ca preț și, tocmai de aceea, cu o întrebare care apare des: merită reparat? Răspunsul este de obicei da, pentru că defecțiunile tipice — sursa și baretele de iluminare — costă mult mai puțin decât un aparat nou de aceeași diagonală.',
    context: 'Intervenim pe toate liniile Horizon: Smart TV cu Android, modele 4K UHD, Full HD și HD Ready, de la 24 până la 65 de inch.',
    serii: 'Modele Horizon pe care intervenim curent',
    serii_lista: ['Smart TV Android — seriile 4K UHD și Full HD', '4K UHD — diagonale 43, 50, 55, 58, 65 inch', 'Full HD — 32, 40, 43 inch', 'HD Ready — 24, 28, 32 inch', 'Modele mai vechi, non-smart'],
    defecte: [
      ['Nu pornește deloc', 'Sursa de alimentare. Este defecțiunea numărul unu la Horizon și, totodată, una dintre cele mai ieftine reparații.'],
      ['Ecran negru, se aude sunetul', 'Baretele LED s-au ars. Le înlocuim pe cele defecte, cu piese noi.'],
      ['Se oprește singur după câteva minute', 'Condensatori la limita capacității în sursă. Îi înlocuim pe toți cei suspecți.'],
      ['Smart TV lent sau blocat', 'Memorie plină sau firmware vechi. Curățăm și actualizăm.'],
      ['Imagine cu linii sau pete', 'Placa T-CON sau difuzorul optic deplasat.'],
      ['Nu răspunde la telecomandă', 'Receptor IR sau telecomandă. Testăm ambele înainte să schimbăm ceva.'],
      ['Fără sunet', 'Modulul audio de pe placa principală sau difuzoarele.'],
      ['Nu prinde canale sau nu se conectează', 'Tuner sau modul de rețea. Verificăm și setările, care sunt adesea cauza reală.'],
    ],
    faq: [
      ['Merită reparat un televizor Horizon ieftin?', 'În majoritatea cazurilor da: o reparație de sursă sau de barete LED costă semnificativ mai puțin decât un aparat nou. Dacă nu merită, vă spunem.'],
      ['Găsiți piese pentru Horizon?', 'Da, componentele uzuale sunt disponibile. Horizon folosește platforme comune, ceea ce ne ușurează munca.'],
      ['Ce garanție primesc?', 'Între 6 și 12 luni, în funcție de intervenție și de piesele montate, cu document scris.'],
      ['Veniți și în Ilfov?', 'Da, în toate localitățile din jurul Bucureștiului, fără cost suplimentar de deplasare.'],
    ],
  },
};

export const LISTA_BRANDURI = Object.values(BRANDURI);

/** Slug-uri care au fișier .astro propriu — excluse din ruta dinamică [slug]. */
export const PAGINI_PROPRII = new Set([
  'reparatii-televizoare-samsung', 'reparatii-televizoare-lg', 'reparatii-televizoare-sony',
  'reparatii-televizoare-philips', 'reparatii-tv-panasonic', 'reparatii-televizoare-horizon',
  'reparatii-televizoare-sector-1', 'reparatii-televizoare-sector-2', 'reparatii-televizoare-sector-3',
  'reparatii-televizoare-sector-4', 'reparatii-televizoare-sector-5', 'reparatii-televizoare-sector-6',
]);
