import {
  siAngular,
  siApachekafka,
  siCloudinary,
  siDocker,
  siFlutter,
  siGithub,
  siHibernate,
  siJenkins,
  siJunit5,
  siKubernetes,
  siMariadb,
  siNestjs,
  siNextdotjs,
  siOpenjdk,
  siPostgresql,
  siPrisma,
  siReact,
  siRiotgames,
  siSelenium,
  siSonarqubeserver,
  siSpringboot,
  siStripe,
  siTailwindcss,
  siTwitch,
  siTypescript,
} from 'simple-icons';

export interface IconDef {
  title: string;
  path: string;
  /** Color de marca; algunos se aclaran para que se vean sobre fondo oscuro. */
  color: string;
}

const brand = (i: { title: string; path: string; hex: string }, color?: string): IconDef => ({
  title: i.title,
  path: i.path,
  color: color ?? `#${i.hex}`,
});

export const icons: Record<string, IconDef> = {
  java: brand(siOpenjdk, '#f89820'),
  springboot: brand(siSpringboot),
  hibernate: brand(siHibernate, '#bcae79'),
  nestjs: brand(siNestjs),
  angular: brand(siAngular, '#e23237'),
  typescript: brand(siTypescript),
  react: brand(siReact),
  flutter: brand(siFlutter),
  nextjs: brand(siNextdotjs, '#ffffff'),
  postgresql: brand(siPostgresql, '#699eca'),
  mariadb: brand(siMariadb, '#c49a6c'),
  kafka: brand(siApachekafka, '#ffffff'),
  prisma: brand(siPrisma, '#ffffff'),
  tailwind: brand(siTailwindcss),
  docker: brand(siDocker),
  kubernetes: brand(siKubernetes),
  jenkins: brand(siJenkins, '#e6b84d'),
  sonarqube: brand(siSonarqubeserver, '#4e9bcd'),
  junit: brand(siJunit5),
  selenium: brand(siSelenium),
  stripe: brand(siStripe),
  cloudinary: brand(siCloudinary, '#5b8def'),
  riot: brand(siRiotgames, '#eb0029'),
  twitch: brand(siTwitch, '#a970ff'),
  github: brand(siGithub, '#ffffff'),
  // LinkedIn ya no está en simple-icons: logo propio simplificado
  linkedin: {
    title: 'LinkedIn',
    color: '#0a66c2',
    path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z',
  },
};

// Nombres más cortos para mostrar
icons.java.title = 'Java';
icons.sonarqube.title = 'SonarQube';
icons.junit.title = 'JUnit';
icons.kafka.title = 'Kafka';
