// projects.js
// Centralized data source for all projects

export const projects = [
  {
    id: 'ivi-catering',
    title: 'IVI Catering',
    tagline: 'Website for a catering company — React frontend + headless WordPress',
    description:
      'IVI Catering is my first project built for a real client. The goal was to create a modern, fast website where the client can manage content independently, without needing a developer.',
    role:
      'Solo build — from initial design and frontend code, through headless CMS setup, to production deployment and domain configuration.',
    tech: ['React', 'React Router', 'JavaScript', 'CSS', 'WordPress (headless)', 'EmailJS', 'Vercel'],
    highlights: [
      'Headless WordPress on cms.ivi.hr as content source, React frontend fetching data via REST API',
      'Contact form with EmailJS integration — service sends emails directly from the frontend, no custom backend needed',
      'Full production configuration: DNS, SSL, CORS between frontend and CMS domains',
      'Vercel deployment with automatic builds from GitHub repository',
    ],
    liveUrl: 'https://ivi.hr',
    githubUrl: null,
    imageUrl: '/images/ivi-catering.png',
  },
  {
    id: 'vucast',
    title: 'VuCast',
    tagline: 'Weather forecast — React SPA with OpenWeatherMap API',
    description:
      'VuCast is a weather application that fetches current weather and a 5-day forecast for any city worldwide. The project started as practice in integrating a third-party REST API, transforming data, and working with the browser Geolocation API. The name is a reference to Vukovar, the city I\'m closest to.',
    role:
      'Solo build — from design and components to API integration and production deployment.',
    tech: ['React 19', 'Vite', 'Tailwind CSS v4', 'JavaScript', 'OpenWeatherMap API', 'Vercel'],
    highlights: [
      'Two API endpoints (/weather and /forecast) called in parallel via Promise.all for better performance',
      'Data transformation utility — grouping 40 three-hour intervals into 5 daily summaries with representative icon and min/max temperature',
      'Browser Geolocation API for "use my location" feature with permission handling',
      'Dynamic gradient background that changes based on current weather and time of day',
      'Toggle between °C and °F with automatic data refresh',
      'Secure API key handling through Vite environment variables',
    ],
    liveUrl: 'https://vucast.vercel.app',
    githubUrl: 'https://github.com/kresimircina/vucast',
    imageUrl: '/images/vucast.png',
  },
];