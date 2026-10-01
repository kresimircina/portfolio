// projects.js
// Centralizirana baza podataka o projektima

export const projects = [
  {
    id: 'ivi-catering',
    title: 'IVI Catering',
    tagline: 'Web stranica za catering tvrtku — React frontend + headless WordPress',
    description:
      'IVI Catering je moja prva izrada web stranice za pravog klijenta. Cilj je bio napraviti modernu i brzu web stranicu kojom klijent može samostalno upravljati sadržajem bez razvijača.',
    role:
      'Samostalna izrada — od inicijalnog dizajna i frontend koda, preko postavljanja headless CMS-a, do produkcijskog deploymenta i konfiguracije domene.',
    tech: ['React', 'React Router', 'JavaScript', 'CSS', 'WordPress (headless)', 'EmailJS', 'Vercel'],
    highlights: [
      'Headless WordPress na cms.ivi.hr kao izvor sadržaja, React frontend povlači podatke preko REST API-ja',
      'Kontakt forma s EmailJS integracijom — servis šalje mailove direktno iz frontenda, bez potrebe za vlastitim backendom',
      'Kompletna produkcijska konfiguracija: DNS, SSL, CORS između frontend i CMS domene',
      'Deployment na Vercel s automatskim buildom iz GitHub repozitorija',
    ],
    liveUrl: 'https://ivi.hr',
    githubUrl: null, // privatni repo za klijenta
    imageUrl: '/images/ivi-catering.png',
  },
  {
    id: 'vucast',
    title: 'VuCast',
    tagline: 'Vremenska prognoza — React SPA s OpenWeatherMap API-jem',
    description:
      'VuCast je weather aplikacija koja dohvaća trenutno vrijeme i 5-dnevnu prognozu za bilo koji grad na svijetu. Projekt je nastao kao vježba integracije vanjskog REST API-ja, transformacije podataka i rada s browser Geolocation API-jem. Naziv je referenca na Vukovar, grad kojem gravitiram.',
    role:
      'Samostalna izrada — od dizajna, komponenata, API integracije do produkcijskog deploymenta.',
    tech: ['React 19', 'Vite', 'Tailwind CSS v4', 'JavaScript', 'OpenWeatherMap API', 'Vercel'],
    highlights: [
      'Dva API endpoint-a (/weather i /forecast) pozvana paralelno kroz Promise.all za bolje performanse',
      'Data transformation utility — grupiranje 40 3-satnih intervala u 5 dnevnih sažetaka s reprezentativnom ikonom i min/max temperaturom',
      'Browser Geolocation API za "koristi moju lokaciju" funkcionalnost s permission handlingom',
      'Dinamična gradient pozadina koja se mijenja ovisno o trenutnom vremenu i dobu dana',
      'Toggle između °C i °F s automatskim osvježavanjem podataka',
      'Sigurno rukovanje API ključem kroz Vite environment variables',
    ],
    liveUrl: 'https://vucast.vercel.app',
    githubUrl: 'https://github.com/kresimircina/vucast',
    imageUrl: '/images/vucast.png',
  },
];