# SmartGym Web

Landing page and legal documents (Privacy Policy & Terms of Service) for the **SmartGym** fitness app.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), hosted on GitHub Pages.

**Live URL:** https://heybaldur.github.io/smartgym-web/

---

## Stack

- **Framework:** Astro 4.x (static output)
- **Styling:** Tailwind CSS v3 + Typography plugin
- **Hosting:** GitHub Pages (free)
- **CI/CD:** GitHub Actions (auto-deploy on push to `main`)

---

## Development

```bash
npm install
npm run dev      # http://localhost:4321/smartgym-web/
npm run build    # builds to ./dist
npm run preview  # preview production build locally
```

---

## Deploy

Push to `main` — GitHub Actions does the rest.

The workflow (`.github/workflows/deploy.yml`):
1. Checks out the repo
2. Installs dependencies (`npm ci`)
3. Builds with Astro (`npm run build`)
4. Deploys the `./dist` folder to GitHub Pages

**First-time setup (do this once in GitHub):**
1. Create the repo `smartgym-web` as **public** at github.com/heybaldur
2. Go to **Settings → Pages → Source → GitHub Actions**
3. Push to `main` to trigger the first deploy

---

## Adding Screenshots

Drop `.png` or `.webp` files into `public/screenshots/`:

```
public/screenshots/hero.png        ← used in Hero section
public/screenshots/feature-1.png   ← optional extras
```

The hero image is referenced in `src/components/Hero.astro`. If the file doesn't exist, a placeholder is shown automatically.

---

## Updating Privacy Policy or Terms of Service

Edit the markdown files in `src/content/`:

```
src/content/privacy/en.md   ← English
src/content/privacy/es.md   ← Spanish
src/content/privacy/pl.md   ← Polish

src/content/terms/en.md
src/content/terms/es.md
src/content/terms/pl.md
```

After editing, push to `main` — the site rebuilds and redeploys automatically.

---

## URLs

| Page | URL |
|------|-----|
| Landing | https://heybaldur.github.io/smartgym-web/ |
| Privacy Policy | https://heybaldur.github.io/smartgym-web/privacy |
| Terms of Service | https://heybaldur.github.io/smartgym-web/terms |

---

## Contact

**SmartGym Labs** — contact.smartgymapp@gmail.com
