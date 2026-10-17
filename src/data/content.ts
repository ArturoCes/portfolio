// Todo el contenido del portfolio en un sitio, en español e inglés.
// Para cambiar textos, proyectos o experiencia solo hay que tocar este fichero.

export type Lang = 'es' | 'en';

export interface Project {
  slug: string;
  name: string;
  tagline: Record<Lang, string>;
  description: Record<Lang, string>;
  highlights: Record<Lang, string[]>;
  image: string;
  /** Animación corta del proyecto en uso (se muestra al pasar el ratón y en la ficha). */
  gif?: string;
  gallery?: string[];
  /** Cifras destacadas: valor y descripción. */
  metrics: { value: string; label: Record<Lang, string> }[];
  tech: string[]; // claves de icons.ts
  links: { label: Record<Lang, string>; href: string; kind: 'demo' | 'code' | 'docs' }[];
  status?: Record<Lang, string>;
  privateCode?: boolean;
}

export const profile = {
  name: 'Arturo Céspedes Pedrazas',
  shortName: 'Arturo',
  location: { es: 'Sevilla, España', en: 'Seville, Spain' },
  email: 'arturoc200212@gmail.com',
  github: 'https://github.com/ArturoCes',
  linkedin: 'https://www.linkedin.com/in/arturoces',
  cv: { es: '/Arturo_Cespedes_Pedrazas_CV_ES.pdf', en: '/Arturo_Cespedes_Pedrazas_CV_EN.pdf' },
  startYear: 2023,
  startMonth: 3,
};

export const ui = {
  es: {
    title: 'Arturo Céspedes · Desarrollador Full Stack Senior',
    description:
      'Portfolio de Arturo Céspedes Pedrazas, desarrollador Full Stack Senior en Sevilla: Java, Spring Boot, Angular y Flutter.',
    welcome: 'Bienvenido',
    hello: '¡Hola! Soy',
    role: 'desarrollador Full Stack Senior',
    intro:
      'especializado en Java, Spring Boot y Angular. Me gusta construir productos completos: desde la API y la base de datos hasta la app que usa la gente.',
    now: 'Ahora mismo soy desarrollador Senior en Metrica, donde desarrollo y optimizo aplicaciones empresariales, y en mi tiempo libre lanzo proyectos propios que están en producción.',
    available: 'Abierto a nuevas oportunidades',
    downloadCv: 'Descargar CV',
    writeMe: 'Escríbeme',
    experience: 'Experiencia',
    present: 'Actualidad',
    projects: 'Proyectos',
    projectsHint: 'Todos están publicados y se pueden probar.',
    tech: 'Tecnologías',
    education: 'Formación',
    languages: 'Idiomas',
    contact: 'Contacto',
    contactText: '¿Tienes un proyecto o una vacante? Hablemos.',
    copy: 'Copiar email',
    copied: '¡Copiado!',
    years: 'años de experiencia',
    companies: 'empresas',
    liveProjects: 'proyectos en producción',
    details: 'Ver detalles',
    demo: 'Demo',
    code: 'Código',
    privateCode: 'Código privado',
    back: 'Volver al inicio',
    highlights: 'Lo más destacado',
    stack: 'Tecnologías',
    footer: 'Hecho con Astro y Tailwind por',
    langSwitch: 'English',
    langHref: '/en/',
  },
  en: {
    title: 'Arturo Céspedes · Senior Full Stack Developer',
    description:
      'Portfolio of Arturo Céspedes Pedrazas, Senior Full Stack Developer based in Seville: Java, Spring Boot, Angular and Flutter.',
    welcome: 'Welcome',
    hello: "Hi! I'm",
    role: 'a Senior Full Stack Developer',
    intro:
      'specialised in Java, Spring Boot and Angular. I enjoy building complete products: from the API and the database to the app people actually use.',
    now: 'I’m currently a Senior Developer at Metrica, building and optimising enterprise applications, and in my spare time I ship my own projects to production.',
    available: 'Open to new opportunities',
    downloadCv: 'Download CV',
    writeMe: 'Email me',
    experience: 'Experience',
    present: 'Present',
    projects: 'Projects',
    projectsHint: 'All of them are live and ready to try.',
    tech: 'Tech stack',
    education: 'Education',
    languages: 'Languages',
    contact: 'Contact',
    contactText: 'Got a project or an opening? Let’s talk.',
    copy: 'Copy email',
    copied: 'Copied!',
    years: 'years of experience',
    companies: 'companies',
    liveProjects: 'projects in production',
    details: 'View details',
    demo: 'Demo',
    code: 'Code',
    privateCode: 'Private code',
    back: 'Back to home',
    highlights: 'Highlights',
    stack: 'Tech stack',
    footer: 'Built with Astro and Tailwind by',
    langSwitch: 'Español',
    langHref: '/',
  },
};

export const experience = [
  {
    company: 'Metrica',
    role: { es: 'Desarrollador Full Stack Senior', en: 'Senior Full Stack Developer' },
    from: { es: 'Feb 2025', en: 'Feb 2025' },
    to: null,
    summary: {
      es: 'Sistema de notificación de incidencias para aseguradoras: sincronización dinámica de entidades en Angular y backend Java optimizado con Spring Boot y MyBatis.',
      en: 'Incident notification system for insurers: dynamic entity sync in Angular and an optimised Java backend with Spring Boot and MyBatis.',
    },
  },
  {
    company: 'Virtual Desk',
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    from: { es: 'Jul 2024', en: 'Jul 2024' },
    to: { es: 'Feb 2025', en: 'Feb 2025' },
    summary: {
      es: 'Aplicación clave para un ministerio: nuevas funcionalidades, automatización de registros y mejoras de escalabilidad.',
      en: 'Key application for a government ministry: new features, automated registrations and scalability improvements.',
    },
  },
  {
    company: 'Alten',
    role: { es: 'QA Engineer · Automatización', en: 'QA Engineer · Automation' },
    from: { es: 'Mar 2024', en: 'Mar 2024' },
    to: { es: 'Jul 2024', en: 'Jul 2024' },
    summary: {
      es: 'Tests automatizados con Selenium y JUnit para una plataforma de reservas hoteleras: −15 % de validación manual.',
      en: 'Automated Selenium and JUnit tests for a hotel booking platform: −15% manual validation time.',
    },
  },
  {
    company: 'MTP',
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    from: { es: 'Mar 2023', en: 'Mar 2023' },
    to: { es: 'Feb 2024', en: 'Feb 2024' },
    summary: {
      es: 'Componentes reutilizables y mejoras de interfaz en una aplicación interna (Java 17, Spring Boot, Angular, Docker, Kubernetes).',
      en: 'Reusable components and UI improvements for an internal application (Java 17, Spring Boot, Angular, Docker, Kubernetes).',
    },
  },
];

export const projects: Project[] = [
  {
    slug: 'animanga',
    name: 'Animanga',
    tagline: {
      es: 'Tienda de manga: API, panel de administración y app',
      en: 'Manga store: API, admin panel and app',
    },
    description: {
      es: 'Mi proyecto de fin de grado, reconstruido de cero: una tienda de manga completa con tres aplicaciones que comparten una API REST.',
      en: 'My final degree project, rebuilt from scratch: a complete manga store made of three apps sharing one REST API.',
    },
    highlights: {
      es: [
        'API en Spring Boot 4 con JWT, refresh tokens con rotación y límite de intentos de login.',
        'Pedidos con control de stock concurrente: nunca se vende más de lo que hay.',
        'Búsqueda de un manga a partir de una foto de su portada (hash perceptual + color).',
        'Lector de avance como un tomo real: giro de página 3D, orden japonés y doble página.',
        'Panel de administración en Angular con estadísticas, pedidos y moderación de reseñas.',
        '51 tests de integración y CI en GitHub Actions que genera el APK de Android.',
      ],
      en: [
        'Spring Boot 4 API with JWT, rotating refresh tokens and login rate limiting.',
        'Orders with concurrent stock control: it never sells more than it has.',
        'Find a manga from a photo of its cover (perceptual hash + colour histogram).',
        'Preview reader that feels like a real volume: 3D page turn, Japanese order and two-page spreads.',
        'Angular admin panel with stats, orders and review moderation.',
        '51 integration tests and a GitHub Actions pipeline that builds the Android APK.',
      ],
    },
    image: '/projects/animanga.jpg',
    gif: '/projects/animanga.gif',
    metrics: [
      { value: '3', label: { es: 'aplicaciones conectadas', en: 'connected apps' } },
      { value: '59', label: { es: 'endpoints REST', en: 'REST endpoints' } },
      { value: '51', label: { es: 'tests de integración', en: 'integration tests' } },
    ],
    gallery: ['/projects/animanga.jpg', '/projects/animanga-admin.jpg'],
    tech: ['springboot', 'java', 'angular', 'flutter', 'postgresql', 'docker'],
    links: [
      { label: { es: 'Tienda', en: 'Store' }, href: 'https://animanga-tienda.netlify.app', kind: 'demo' },
      { label: { es: 'Panel', en: 'Admin' }, href: 'https://animangav5.netlify.app', kind: 'demo' },
      { label: { es: 'Código', en: 'Code' }, href: 'https://github.com/ArturoCes/ANIMANGA-V5', kind: 'code' },
      { label: { es: 'API', en: 'API' }, href: 'https://animanga-api-x7ot.onrender.com/swagger-ui.html', kind: 'docs' },
    ],
    status: { es: 'TFG · 2021 → rehecho en 2026', en: 'Degree project · 2021 → rebuilt in 2026' },
  },
  {
    slug: 'black-stones',
    name: 'Black Stones',
    tagline: {
      es: 'E-commerce real de ropa alternativa en Bolivia',
      en: 'Real e-commerce for alternative clothing in Bolivia',
    },
    description: {
      es: 'Tienda online en producción para una marca de ropa gótica y metalera de Cochabamba, con pagos, envíos y gestión completa.',
      en: 'A live online store for a gothic and metal clothing brand from Cochabamba, with payments, shipping and full management.',
    },
    highlights: {
      es: [
        'Frontend en Angular 21 y backend en Spring Boot 3.5 con Spring Security y JWT.',
        'Pago por QR bancario (Bolivia) y Stripe preparado para otros países.',
        'Probador virtual con IA: el cliente ve cómo le queda la camiseta.',
        'Imágenes optimizadas con Cloudinary y emails transaccionales con Brevo.',
        'Base de datos PostgreSQL en Supabase y despliegue en Vercel y Render.',
      ],
      en: [
        'Angular 21 frontend and Spring Boot 3.5 backend with Spring Security and JWT.',
        'Bank QR payments (Bolivia) and Stripe ready for other countries.',
        'AI virtual try-on: customers can see how the T-shirt looks on them.',
        'Images optimised with Cloudinary and transactional emails with Brevo.',
        'PostgreSQL on Supabase, deployed on Vercel and Render.',
      ],
    },
    image: '/projects/blackstones.jpg',
    gif: '/projects/blackstones.gif',
    metrics: [
      { value: '2', label: { es: 'métodos de pago (QR y tarjeta)', en: 'payment methods (QR and card)' } },
      { value: 'IA', label: { es: 'probador virtual', en: 'virtual try-on' } },
      { value: 'ES/EN', label: { es: 'tienda bilingüe', en: 'bilingual store' } },
    ],
    tech: ['angular', 'springboot', 'postgresql', 'stripe', 'cloudinary'],
    links: [{ label: { es: 'Tienda', en: 'Store' }, href: 'https://ecommerce-frontend-pied-nu.vercel.app', kind: 'demo' }],
    status: { es: 'En producción · cliente real', en: 'In production · real client' },
    privateCode: true,
  },
  {
    slug: 'soloq-tracker',
    name: 'SoloQ Tracker',
    tagline: {
      es: 'Clasificación en directo de un reto de League of Legends',
      en: 'Live leaderboard for a League of Legends challenge',
    },
    description: {
      es: 'Seguimiento no oficial del SoloQ Challenge para un streamer: clasificación, estadísticas y overlay para el directo.',
      en: 'Unofficial tracker of the SoloQ Challenge for a streamer: leaderboard, stats and a live stream overlay.',
    },
    highlights: {
      es: [
        'Datos en tiempo real de más de 60 jugadores con la API oficial de Riot Games.',
        'Detección de quién está en directo con la API de Twitch.',
        'Dashboard con premios del día, rachas, KDA y comparador de jugadores.',
        'Overlay para OBS y exportación de la clasificación como imagen.',
        'Next.js 16, TypeScript, Prisma 7 y PostgreSQL, desplegado en Vercel.',
      ],
      en: [
        'Real-time data for 60+ players through the official Riot Games API.',
        'Live status of every streamer through the Twitch API.',
        'Dashboard with daily awards, streaks, KDA and a player comparator.',
        'OBS overlay and leaderboard export as an image.',
        'Next.js 16, TypeScript, Prisma 7 and PostgreSQL, deployed on Vercel.',
      ],
    },
    image: '/projects/soloq.jpg',
    gif: '/projects/soloq.gif',
    metrics: [
      { value: '67', label: { es: 'jugadores en seguimiento', en: 'players tracked' } },
      { value: '2', label: { es: 'APIs oficiales (Riot y Twitch)', en: 'official APIs (Riot & Twitch)' } },
      { value: 'OBS', label: { es: 'overlay para el directo', en: 'live stream overlay' } },
    ],
    tech: ['nextjs', 'typescript', 'prisma', 'postgresql', 'tailwind', 'riot', 'twitch'],
    links: [
      { label: { es: 'Web', en: 'Website' }, href: 'https://soloq-tracker-arturoces-projects.vercel.app', kind: 'demo' },
      { label: { es: 'Código', en: 'Code' }, href: 'https://github.com/ArturoCes/soloq-tracker', kind: 'code' },
    ],
    status: { es: 'En producción · no oficial', en: 'In production · unofficial' },
  },
];

export const skills = [
  { group: { es: 'Backend', en: 'Backend' }, items: ['java', 'springboot', 'hibernate', 'nestjs'] },
  { group: { es: 'Frontend', en: 'Frontend' }, items: ['angular', 'typescript', 'react', 'flutter'] },
  { group: { es: 'Datos', en: 'Data' }, items: ['postgresql', 'mariadb', 'kafka'] },
  { group: { es: 'DevOps y calidad', en: 'DevOps & quality' }, items: ['docker', 'kubernetes', 'jenkins', 'sonarqube', 'junit', 'selenium'] },
];

export const education = {
  title: {
    es: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    en: 'Higher Technician Degree in Multi-Platform Application Development',
  },
  school: 'Salesianos de San Pedro · Sevilla',
  year: '2023',
};

export const languages = [
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' }, value: 100 },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'B2 · Intermedio alto', en: 'B2 · Upper-intermediate' }, value: 70 },
];

export function yearsOfExperience(now = new Date()): number {
  const months = (now.getFullYear() - profile.startYear) * 12 + (now.getMonth() + 1 - profile.startMonth);
  return Math.floor(months / 12);
}
