# Site Anna-Mariam

One-page site, EN / FR / SV. Same stack as site-yoland (Next.js 16, Tailwind 4, Vercel).

## Before launch, fill in

- `lib/content.ts` → `PERSON` block: name, email, LinkedIn, years, city.
- `lib/site.ts` → `SITE_URL` (her domain).
- Cal.com link: set `NEXT_PUBLIC_CAL_URL` in Vercel (Settings → Environment Variables), or leave empty for email only.
- Swedish copy: written by a non-native, she proofreads `sv` in `lib/content.ts`.
- Favicon / OG image: none yet. Add `public/favicon.ico` and an `og.png` (1200×630) when she has a visual identity.

## Run locally

```
npm install
npm run dev
```

## Deploy

1. Create an empty repo on GitHub (e.g. `site-anna`).
2. In this folder:
   ```
   git init
   git add -A
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YolandM/site-anna.git
   git push -u origin main
   ```
3. On vercel.com: Add New → Project → import `site-anna`. Defaults are fine. Deploy.
4. Vercel → Settings → Domains → add her domain, then point the domain's DNS to Vercel as instructed (usually a CNAME on `www` and an A record on the root).
