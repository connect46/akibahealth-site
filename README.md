# Akiba Health website

Marketing site for Akiba Health (akibahealth.com), the adaptive forecasting and supply planning platform for global health.
Next.js 16 (App Router), React 19, plain CSS. Built as a fully static site (`output: "export"`), hosted on Netlify.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site written to ./out
```

## Edit content

- **All copy** (problems, workflow steps, stats, roadmap, tiers, team, contact): `lib/content.ts`
- **Demo link**: `DEMO_URL` in `lib/content.ts`
- **Styles and colors**: `app/globals.css` (color tokens at the top in `:root`, dark-mode set below)
- **Screenshots and headshots**: `public/img/`
- **Interactive workflow tabs**: `app/components/WorkflowExplorer.tsx`

## Deploy (Netlify)

Netlify builds from the `main` branch using `netlify.toml` (build `npm run build`, publish `out`).
Every push to `main` redeploys the site.

Custom domain DNS (at iwantmyname):

| Host | Type | Value |
|------|------|-------|
| `@` (akibahealth.com) | A | `75.2.60.5` |
| `www` | CNAME | `<your-site-name>.netlify.app` |

## Notes

- Funding/ask content is intentionally kept out of the site; it lives only in the pitch deck.
- Product screenshots are March 2026 captures of the prototype (Kenya demo data). Replace with fresh captures when available.
- Abhijit's headshot is 100×100 px; swap in a higher-resolution photo.
