# najeemsakib.com — Live Digital Twin & OT Cybersecurity

Personal/professional site for Najeem Sakib, built with **React + Vite + Tailwind CSS v4 + Three.js** (react-three-fiber).

5 pages: Home (scroll-driven 3D digital-twin zoom), About (bento dashboard + career timeline), Services (3 interactive tabs with a 3D layer stack), Resources, Contact.

## Run locally (VS Code)

Requirements: **Node.js 20+** (https://nodejs.org)

```bash
# 1. open this folder in VS Code, then in the terminal:
npm install

# 2. start the dev server
npm run dev
```

Open http://localhost:5173 in your browser. Edits hot-reload automatically.

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/` — that folder is everything a host needs.

Preview the production build locally with:

```bash
npm run preview
```

## Deploy

### Vercel (recommended — easiest)

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com → **New Project** → import the repo.
3. Vercel auto-detects Vite. Accept the defaults (`npm run build`, output `dist`) and deploy.
4. Add your custom domain (najeemsakib.com) under **Project → Settings → Domains** and update your DNS as Vercel instructs.

Because this is a single-page app with client-side routing, add a `vercel.json` in the project root if deep links (e.g. /services) ever 404:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

(Usually not needed — Vercel handles Vite SPAs automatically.)

### Hostinger (static hosting)

1. Run `npm run build` locally.
2. Upload the **contents** of `dist/` to `public_html/` via Hostinger's File Manager or FTP.
3. For client-side routing, create `public_html/.htaccess` with:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

This makes /about, /services etc. resolve to the app instead of 404ing.

## Project structure

```
src/
  components/     Nav (floating dock), Footer, shared UI primitives
  pages/          Home, About, Services, Resources, Contact
  three/          Three.js scenes (scroll-zoom hero, isometric layer stack)
  data/           All content/data (services layers, timeline, links…)
  hooks/          useClickBlip (nav click sound)
  assets/         Images
```

All booking/social links live in `src/data/links.js` — edit there to change them site-wide.
