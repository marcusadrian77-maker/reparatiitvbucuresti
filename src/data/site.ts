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
];

export const SCHEMA_LOCALBUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'ElectronicsStore',
  name: 'Reparatii TV Bucuresti — Service Televizoare',
  url: 'https://www.reparatiitvbucuresti.ro/',
  telephone: '+40720667800',
  email: 'reparatielectronice@yahoo.com',
  priceRange: '$$',
  areaServed: ['București', 'Ilfov'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '10:00',
    closes: '19:00',
  },
};
