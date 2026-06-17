export const BASE = import.meta.env.BASE_URL; // '/reparatiitvbucuresti/' in preview, '/' la go-live
export const u = (p: string) => (BASE + String(p).replace(/^\//, ''));

export const SITE = {
  nume: 'Reparatii TV Bucuresti',
  firma: 'Reparatii TV Bucuresti',
  domeniu: 'https://www.reparatiitvbucuresti.ro',
  telefon: '0720.667.800',
  telefonHref: 'tel:+40720667800',
  whatsapp: 'https://wa.me/40720667800',
  email: 'reparatielectronice@yahoo.com',
  adresaScurta: 'București și Ilfov',
  program: 'Luni–Vineri: 10:00–19:00',
  zonaDomiciliu: 'București și Ilfov',
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
  { href: u('reparatii-televizoare-sector-1/'), label: 'Sector 1' },
  { href: u('reparatii-televizoare-sector-2/'), label: 'Sector 2' },
  { href: u('reparatii-televizoare-sector-3/'), label: 'Sector 3' },
  { href: u('reparatii-televizoare-sector-4/'), label: 'Sector 4' },
  { href: u('reparatii-televizoare-sector-5/'), label: 'Sector 5' },
  { href: u('reparatii-televizoare-sector-6/'), label: 'Sector 6' },
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
  description: 'Service televizoare la domiciliu în București și Ilfov. Reparăm LED, OLED, QLED și Smart TV, orice marcă. Diagnosticare și deplasare gratuită, garanție 6–12 luni.',
  url: 'https://www.reparatiitvbucuresti.ro/',
  telephone: '+40720667800',
  email: 'reparatielectronice@yahoo.com',
  image: 'https://www.reparatiielectronice.ro/img/tv.jpg',
  priceRange: '$$',
  currenciesAccepted: 'RON',
  paymentAccepted: 'Cash, Card',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'București',
    addressRegion: 'București',
    addressCountry: 'RO',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 44.4268, longitude: 26.1025 },
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
  sameAs: ['https://www.google.com/maps?cid=3284667601974338277'],
};
