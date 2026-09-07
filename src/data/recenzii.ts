// Recenzii reale din Profilul de Companie Google (cid 3284667601974338277),
// culese pe 7 septembrie 2026. Textul e cel scris de client — s-au adăugat
// doar diacriticele lipsă, fără nicio altă schimbare de conținut.
// NU se marchează cu schema Review: Google interzice markup-ul pentru recenzii
// preluate de pe alte platforme. Nota generală stă în aggregateRating din site.ts.
// Ca să adaugi una nouă, copiaz-o din profil exact așa cum a scris-o clientul.

export type Recenzie = { autor: string; cand: string; text: string };

export const RECENZII_CLIENTI: Recenzie[] = [
  {
    autor: 'Cristian Lăcătușiu',
    cand: 'februarie 2026',
    text: 'Dacă vreți o reparație despre care alții au spus că este imposibilă, apelați cu încredere. Ei readuc la viață orice TV, laptop etc.',
  },
  {
    autor: 'Andrei Rareș',
    cand: 'mai 2026',
    text: '5/5 cea mai bună locație de a vă repara televizoarele/consolele. Am fost cu un TV și a fost gata într-o zi, sunt foarte mulțumit.',
  },
  {
    autor: 'Eugen Serdaru',
    cand: 'februarie 2026',
    text: 'Mulțumit de reparațiile făcute, chiar și cu ridicare de la domiciliu.',
  },
  {
    autor: 'Cătălin Schmit',
    cand: 'martie 2026',
    text: 'Oameni deosebiți, foarte serioși, profesioniști adevărați! Mi-au reparat la perfecție tot ce le-am dus…',
  },
  {
    autor: 'Alexia Doniga',
    cand: 'martie 2026',
    text: 'Servicii super, foarte rapizi și buni la preț.',
  },
  {
    autor: 'Alin Plopeanu',
    cand: 'februarie 2026',
    text: 'Seriozitate, profesionalism, orientat către client, corect, rapid, recomand cu încredere!',
  },
];
