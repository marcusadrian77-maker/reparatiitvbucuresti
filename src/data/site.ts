export const BASE = import.meta.env.BASE_URL; // '/reparatiitvbucuresti/' in preview, '/' la go-live
export const u = (p: string) => (BASE + String(p).replace(/^\//, ''));

export const SITE = {
  nume: 'Reparatii TV Bucuresti',
  firma: 'Reparatii TV Bucuresti',
  domeniu: 'https://www.reparatiitvbucuresti.ro',
  telefon: '0765.461.357',
  telefonHref: 'tel:+40765461357',
  telefon2: '0720.667.800',
  telefon2Href: 'tel:+40720667800',
  whatsapp: 'https://wa.me/40765461357',
  email: 'reparatielectronice@yahoo.com',
  adresaScurta: 'București și Ilfov',
  strada: 'Str. Moinești',
  codPostal: '061231',
  program: 'Luni–Vineri: 10:00–19:00',
  zonaDomiciliu: 'București și Ilfov',
};

// Nota și numărul de recenzii din Profilul de Companie Google (verificate pe 7 sep 2026).
// Se actualizează manual; cifrele trebuie să rămână identice cu cele afișate pe Google,
// altfel aggregateRating din schema devine un semnal fals.
export const RECENZII = {
  nota: 4.9,
  numar: 76,
  profil: 'https://www.google.com/maps?cid=3284667601974338277',
};

export const NAV_BRANDURI = [
  { href: u('reparatii-televizoare-samsung/'), label: 'Samsung' },
  { href: u('reparatii-televizoare-lg/'), label: 'LG' },
  { href: u('reparatii-televizoare-sony/'), label: 'Sony' },
  { href: u('reparatii-televizoare-philips/'), label: 'Philips' },
  { href: u('reparatii-tv-panasonic/'), label: 'Panasonic' },
  { href: u('reparatii-televizoare-horizon/'), label: 'Horizon' },
]

export const NAV_SECTOARE = [
  { href: u('reparatii-tv-sector-1/'), label: 'Sector 1' },
  { href: u('reparatii-tv-sector-2/'), label: 'Sector 2' },
  { href: u('reparatii-tv-sector-3/'), label: 'Sector 3' },
  { href: u('reparatii-tv-sector-4/'), label: 'Sector 4' },
  { href: u('reparatii-tv-sector-5/'), label: 'Sector 5' },
  { href: u('reparatii-tv-sector-6/'), label: 'Sector 6' },
];

export const STRAZI_PRINCIPALE: Record<string, string[]> = {
  '1': ['Calea Victoriei','Bulevardul Aviatorilor','Bulevardul Ion Mihalache','Calea Dorobanți','Bulevardul Lascăr Catargiu','Șoseaua Kiseleff','Bulevardul Banu Manta','Calea Griviței','Șoseaua București-Ploiești','Bulevardul Poligrafiei'],
  '2': ['Bulevardul Lacul Tei','Șoseaua Colentina','Șoseaua Ștefan cel Mare','Bulevardul Ferdinand I','Bulevardul Basarabia','Șoseaua Pantelimon','Șoseaua Mihai Bravu','Bulevardul Chișinău','Calea Moșilor','Bulevardul Pache Protopopescu'],
  '3': ['Bulevardul Unirii','Bulevardul Decebal','Bulevardul Camil Ressu','Bulevardul Nicolae Grigorescu','Calea Vitan','Calea Călărașilor','Bulevardul Theodor Pallady','Bulevardul 1 Decembrie 1918','Strada Matei Basarab','Bulevardul Burebista'],
  '4': ['Bulevardul Tineretului','Bulevardul Dimitrie Cantemir','Șoseaua Olteniței','Șoseaua Berceni','Bulevardul Gheorghe Șincai','Calea Văcărești','Bulevardul Constantin Brâncoveanu','Bulevardul Metalurgiei','Bulevardul Alexandru Obregia'],
  '5': ['Calea Rahovei','Calea 13 Septembrie','Șoseaua Panduri','Bulevardul Tudor Vladimirescu','Calea Ferentari','Bulevardul Eroii Sanitari','Strada Sebastian','Bulevardul Pieptănari','Șoseaua Alexandriei','Șoseaua Sălaj'],
  '6': ['Bulevardul Iuliu Maniu','Bulevardul Timișoara','Drumul Taberei','Calea Crângași','Calea Giulești','Bulevardul Ghencea','Șoseaua Virtuții','Bulevardul Constructorilor','Bulevardul Preciziei','Bulevardul Uverturii'],
};

export const SCHEMA_LOCALBUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'ElectronicsStore',
  '@id': 'https://www.reparatiitvbucuresti.ro/#business',
  name: 'Reparatii TV Bucuresti — Service Televizoare',
  legalName: 'MARCUS ELECTRONICS SRL',
  alternateName: ['Marcus Electronics', 'Reparatii TV Bucuresti'],
  taxID: '18426506',
  vatID: 'RO18426506',
  foundingDate: '2006-02-27',
  identifier: { '@type': 'PropertyValue', propertyID: 'Nr. Registrul Comerțului', value: 'J40/3220/2006' },
  description: 'Service televizoare la domiciliu în București și Ilfov. Reparăm LED, OLED, QLED și Smart TV, orice marcă. Diagnosticare și deplasare gratuită, garanție 6–12 luni.',
  url: 'https://www.reparatiitvbucuresti.ro/',
  telephone: '+40765461357',
  email: 'reparatielectronice@yahoo.com',
  image: 'https://www.reparatiitvbucuresti.ro/img/og-default.jpg',
  priceRange: '$$',
  currenciesAccepted: 'RON',
  paymentAccepted: 'Cash, Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Str. Moinești 7',
    postalCode: '061231',
    addressLocality: 'București',
    addressRegion: 'București',
    addressCountry: 'RO',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 44.4318013, longitude: 26.0191044 },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '76',
    bestRating: '5',
    worstRating: '1',
  },
  areaServed: [
    { '@type': 'City', name: 'București' },
    { '@type': 'AdministrativeArea', name: 'Sector 1, București' },
    { '@type': 'AdministrativeArea', name: 'Sector 2, București' },
    { '@type': 'AdministrativeArea', name: 'Sector 3, București' },
    { '@type': 'AdministrativeArea', name: 'Sector 4, București' },
    { '@type': 'AdministrativeArea', name: 'Sector 5, București' },
    { '@type': 'AdministrativeArea', name: 'Sector 6, București' },
    { '@type': 'AdministrativeArea', name: 'Județul Ilfov' },
    { '@type': 'City', name: 'Voluntari' },
    { '@type': 'City', name: 'Popești-Leordeni' },
    { '@type': 'City', name: 'Otopeni' },
    { '@type': 'City', name: 'Pantelimon' },
    { '@type': 'City', name: 'Bragadiru' },
    { '@type': 'City', name: 'Chiajna' },
    { '@type': 'City', name: 'Buftea' },
    { '@type': 'City', name: 'Măgurele' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '10:00',
    closes: '19:00',
  },
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+40765461357', contactType: 'customer service', areaServed: 'RO', availableLanguage: 'ro' },
    { '@type': 'ContactPoint', telephone: '+40720667800', contactType: 'customer service', areaServed: 'RO', availableLanguage: 'ro' },
  ],
  sameAs: [
    'https://www.google.com/maps?cid=3284667601974338277',
    'https://www.google.com/maps?cid=8478287421888488271',
    'https://www.reparatiielectronice.ro/',
    'https://www.facebook.com/profile.php?id=61595637197218',
    'https://listafirme.ro/marcus-electronics-srl-18426506/',
  ],
  subjectOf: {
    '@type': 'NewsArticle',
    headline: 'Doctor de gadgeturi: cât te costă să-ți repari electronicele',
    url: 'https://evz.ro/doctor-de-gadgeturi-cat-te-costa-sa-ti-repari-electronicele-925023.html',
    datePublished: '2011-03-28',
    publisher: { '@type': 'Organization', name: 'Evenimentul Zilei' },
  },
};

export const OFERTE: [string, number, number, string][] = [
  ['Diagnosticare la domiciliu', 0, 0, 'Identificarea defecțiunii, fără costuri și fără obligații'],
  ['Înlocuire sursă de alimentare', 230, 530, 'Cea mai frecventă defecțiune. Garanție 12 luni'],
  ['Înlocuire placă principală (main board)', 300, 750, 'Diagnoză completă și programare. Garanție 12 luni'],
  ['Reparare backlight / benzi LED', 250, 1000, 'Ecran negru cu sunet prezent. Garanție 6 luni'],
  ['Reparare placă T-CON', 180, 450, 'Dungi pe ecran, imagine parțială. Garanție 6 luni'],
  ['Înlocuire panou LCD/OLED', 750, 2250, 'Depinde de diagonală și model. Garanție 12 luni'],
  ['Reparare circuit audio', 120, 300, 'Amplificator, difuzoare, cablu flex. Garanție 6 luni'],
  ['Service software / Smart TV', 80, 230, 'Resetare, update firmware, Wi-Fi. Garanție 3 luni'],
  ['Curățare internă și service general', 90, 180, 'Condensatori, pastă termică. Garanție 3 luni'],
];

export const SCHEMA_OFERTE = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Prețuri reparații televizoare București',
  url: 'https://www.reparatiitvbucuresti.ro/preturi-reparatii-tv/',
  provider: { '@id': 'https://www.reparatiitvbucuresti.ro/#business' },
  itemListElement: OFERTE.map(([nume, min, max, desc], i) => ({
    '@type': 'Offer',
    position: i + 1,
    name: nume,
    description: desc,
    priceCurrency: 'RON',
    availability: 'https://schema.org/InStock',
    areaServed: [{ '@type': 'City', name: 'București' }, { '@type': 'AdministrativeArea', name: 'Județul Ilfov' }],
    itemOffered: { '@type': 'Service', name: nume, serviceType: 'Reparații televizoare', provider: { '@id': 'https://www.reparatiitvbucuresti.ro/#business' } },
    ...(min === 0 && max === 0
      ? { price: '0', priceSpecification: { '@type': 'PriceSpecification', price: '0', priceCurrency: 'RON' } }
      : { priceSpecification: { '@type': 'PriceSpecification', minPrice: String(min), maxPrice: String(max), priceCurrency: 'RON', valueAddedTaxIncluded: true } }),
  })),
};
