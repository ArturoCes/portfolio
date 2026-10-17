# Portfolio · Arturo Céspedes Pedrazas

Portfolio personal estilo *bento grid* hecho con **Astro** y **Tailwind CSS**, en español (`/`) e inglés (`/en/`).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Editar el contenido

Todo el texto (presentación, experiencia, proyectos, tecnologías, formación e idiomas) está en
[`src/data/content.ts`](src/data/content.ts). Las capturas de los proyectos van en `public/projects/`
y el CV en `public/`.

## Despliegue

Es una web estática: vale Netlify, Vercel o GitHub Pages.
En Netlify: *Build command* `npm run build`, *Publish directory* `dist`.
