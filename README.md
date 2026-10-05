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

## Interest form (Netlify Forms)

- The "Register interest" form (`app/components/InterestForm.tsx`) posts to Netlify Forms. Netlify registers it from
  `public/__forms.html` at deploy time; keep field names in both files in sync.
- Spam protection: a hidden honeypot field (`company_website`). Netlify drops any submission that fills it.
- Submissions appear in Netlify under **Forms → interest**. Set up email alerts in **Project configuration → Notifications → Emails and webhooks → Form submission notifications**.
- Make sure **Form detection** is enabled (Netlify → Forms). Netlify only detects forms on deploys made after it's turned on.
