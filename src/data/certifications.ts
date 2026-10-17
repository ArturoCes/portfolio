import type { Lang } from './content';

// Cursos y certificaciones. Cada uno enlaza a su verificación oficial (o al PDF si la entidad no tiene).
// Para añadir uno nuevo basta con añadir una entrada aquí.

export type CertCategory = 'qa' | 'backend' | 'frontend' | 'cloud' | 'data' | 'languages';

export interface Cert {
  title: string;
  issuer: keyof typeof issuers;
  date: string; // AAAA-MM-DD
  hours?: number;
  url: string;
  category: CertCategory;
  featured?: boolean;
  /** Nota corta destacada, por ejemplo la nota de un examen. */
  badge?: Record<Lang, string>;
}

export const issuers = {
  udemy: { name: 'Udemy', short: 'U', color: '#a435f0' },
  openwebinars: { name: 'OpenWebinars', short: 'OW', color: '#1f8fff' },
  tau: { name: 'Test Automation University', short: 'TAU', color: '#00a3a1' },
  efset: { name: 'EF SET', short: 'EF', color: '#0d73c9' },
  desafio: { name: 'Desafío Latam', short: 'DL', color: '#f36f21' },
};

export const categories: { id: CertCategory; label: Record<Lang, string> }[] = [
  { id: 'qa', label: { es: 'Testing y QA', en: 'Testing & QA' } },
  { id: 'backend', label: { es: 'Backend', en: 'Backend' } },
  { id: 'frontend', label: { es: 'Frontend y móvil', en: 'Frontend & mobile' } },
  { id: 'cloud', label: { es: 'Cloud y herramientas', en: 'Cloud & tools' } },
  { id: 'data', label: { es: 'Datos y Python', en: 'Data & Python' } },
  { id: 'languages', label: { es: 'Idiomas', en: 'Languages' } },
];

const ow = (code: string) => `https://openwebinars.net/cert/${code}`;
const tau = (id: string) => `https://testautomationu.applitools.com/certificate/?id=${id}`;
const udemy = (id: string) => `https://ude.my/${id}`;

export const certifications: Cert[] = [
  // Idiomas
  {
    title: 'EF SET English Certificate',
    issuer: 'efset',
    date: '2025-01-08',
    url: 'https://cert.efset.org/es/TS7ecX',
    category: 'languages',
    featured: true,
    badge: { es: 'C1 Avanzado · 62/100', en: 'C1 Advanced · 62/100' },
  },
  {
    title: 'English for Developers & IT Professionals',
    issuer: 'desafio',
    date: '2024-09-03',
    url: '/certificados/desafio-latam-english-for-developers.pdf',
    category: 'languages',
  },

  // Cloud y herramientas
  { title: 'Amazon AWS al completo', issuer: 'udemy', date: '2024-02-26', hours: 45.5, url: udemy('UC-ff85505c-76e8-4238-8c0b-379cb5f5552c'), category: 'cloud', featured: true },
  { title: 'Bases de Git y GitHub', issuer: 'desafio', date: '2024-09-03', url: '/certificados/desafio-latam-git-github.pdf', category: 'cloud' },
  { title: 'Curso de Odoo', issuer: 'openwebinars', date: '2023-03-02', hours: 10, url: ow('4gAe'), category: 'cloud' },
  { title: 'Curso de Figma', issuer: 'openwebinars', date: '2022-10-14', hours: 4, url: ow('5DmdK'), category: 'cloud' },

  // Frontend y móvil
  { title: 'Angular: De cero a experto', issuer: 'udemy', date: '2026-04-28', hours: 33.5, url: udemy('UC-f9d7ddb9-1cfa-4cb0-8f02-9d3fa3c26438'), category: 'frontend', featured: true },
  { title: 'Flutter desde cero: guía completa con arquitectura limpia', issuer: 'udemy', date: '2024-02-25', hours: 87, url: udemy('UC-b72aed8c-8b93-4e5f-9968-3e1220bd46fa'), category: 'frontend', featured: true },
  { title: 'Curso de Firebase y Angular', issuer: 'openwebinars', date: '2022-11-24', hours: 6, url: ow('PMGXD'), category: 'frontend' },
  { title: 'Curso de Angular 11 para principiantes', issuer: 'openwebinars', date: '2022-11-07', hours: 8, url: ow('mY9dZ'), category: 'frontend' },
  { title: 'Curso de Programación Orientada a Objetos con Dart', issuer: 'openwebinars', date: '2023-02-09', hours: 4, url: ow('W264'), category: 'frontend' },
  { title: 'Curso de Primeros pasos en Dart', issuer: 'openwebinars', date: '2023-01-24', hours: 8, url: ow('LJoP'), category: 'frontend' },

  // Testing y QA
  { title: 'Selenium con Java y Cucumber: el curso definitivo', issuer: 'udemy', date: '2024-06-10', hours: 9.5, url: udemy('UC-40a6c0f0-ee0e-4d7f-b92d-83cd1b54ecb7'), category: 'qa', featured: true },
  { title: 'Test Automation in DevOps', issuer: 'tau', date: '2024-03-21', hours: 1, url: tau('6ed15ca5'), category: 'qa' },
  { title: 'Cucumber with Java', issuer: 'tau', date: '2024-03-20', hours: 1, url: tau('0a4d6aaa'), category: 'qa' },
  { title: 'Continuous Integration with Jenkins', issuer: 'tau', date: '2024-03-20', hours: 1.5, url: tau('62b7e7ae'), category: 'qa' },
  { title: 'Automating your API tests with REST Assured', issuer: 'tau', date: '2024-03-12', hours: 1, url: tau('154c09ee'), category: 'qa', featured: true },
  { title: 'Selenium WebDriver with Java', issuer: 'tau', date: '2024-03-12', hours: 3.5, url: tau('2a6d7416'), category: 'qa' },
  { title: 'Exploring Service APIs through Test Automation', issuer: 'tau', date: '2024-03-12', hours: 1.5, url: tau('2aee7bb1'), category: 'qa' },
  { title: 'Curso de introducción al testing', issuer: 'openwebinars', date: '2023-03-05', hours: 6, url: ow('pfWE'), category: 'qa' },
  { title: 'Curso de pruebas unitarias con Mockito', issuer: 'openwebinars', date: '2023-03-05', hours: 5, url: ow('Oyyi'), category: 'qa' },
  { title: 'Curso de Testing en Java con JUnit 5', issuer: 'openwebinars', date: '2023-03-05', hours: 5, url: ow('yxUx'), category: 'qa' },
  { title: 'Testing avanzado con JUnit 5', issuer: 'openwebinars', date: '2023-03-05', hours: 1, url: ow('PJOc'), category: 'qa' },

  // Backend
  { title: 'Laboratorio de gestión de errores en una API REST con Spring Boot', issuer: 'openwebinars', date: '2023-01-29', hours: 4, url: ow('NLV7'), category: 'backend' },
  { title: 'Laboratorio de validación de datos en tu API REST con Spring Boot', issuer: 'openwebinars', date: '2023-01-28', hours: 4, url: ow('3UyV'), category: 'backend' },
  { title: 'Curso de Django (versión 2017)', issuer: 'openwebinars', date: '2023-01-21', hours: 14, url: ow('mE7e'), category: 'backend' },
  { title: 'Laboratorio de Fundamentos de NestJS', issuer: 'openwebinars', date: '2022-11-18', hours: 6, url: ow('AKn9K'), category: 'backend' },
  { title: 'Curso Creación de APIs con FastAPI', issuer: 'openwebinars', date: '2022-11-04', hours: 5, url: ow('QM1zb'), category: 'backend' },

  // Datos y Python
  { title: 'Curso de NumPy con Python', issuer: 'openwebinars', date: '2023-02-15', hours: 9, url: ow('Gal6'), category: 'data' },
  { title: 'Curso de tratamiento de datos con Pandas en Python', issuer: 'openwebinars', date: '2023-01-26', hours: 8, url: ow('oZWN'), category: 'data' },
  { title: 'Curso de tratamiento de datos con Pandas y NumPy', issuer: 'openwebinars', date: '2022-12-08', hours: 3, url: ow('Gl1wY'), category: 'data' },
  { title: 'Python desde cero', issuer: 'openwebinars', date: '2022-10-08', hours: 12, url: ow('n1M0P'), category: 'data' },
];

export const totalHours = Math.round(certifications.reduce((sum, c) => sum + (c.hours ?? 0), 0));

/** Más recientes primero. */
export const byDate = [...certifications].sort((a, b) => b.date.localeCompare(a.date));

export function formatDate(date: string, lang: Lang): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', {
    month: 'short',
    year: 'numeric',
  });
}
