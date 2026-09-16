# Site Anna-Mariam

One-page site in English, French and Swedish. Next.js + Tailwind, hosted on Vercel,
content edited through Keystatic.

## For Anna-Mariam: editing the site

Go to **https://www.annamariamosterlind.com/keystatic** and sign in with GitHub.

- **Website → English / Français / Svenska**: every piece of text on the page, one language at a time. Changing the English page does not change the French one, so edit all three when a wording changes.
- **Details → Contact details**: name, email, LinkedIn, and the Cal.com booking link. These are shared across the three languages.

Click **Save** when done. The site updates itself about two minutes later.
Nothing can break the page: if a field is left empty, that line simply disappears.

The client logos are not in the editor. Adding or removing one needs the logo file, so ask Yoland.

## For Yoland: one-time setup

### 1. Install the packages

```
cd ~/site-anna
npm install @keystatic/core @keystatic/next @markdoc/markdoc
```

### 2. Create the GitHub App (Keystatic does it for you)

```
npm run dev
```

Open http://127.0.0.1:3000/keystatic and follow the wizard:

- Sign in with GitHub.
- When asked for the deployed URL, enter `https://www.annamariamosterlind.com`.
- Choose **Create GitHub App**, pick a name (e.g. `anna-mariam-site`).
- Grant it access to the `YolandM/site-anna` repository.

It writes a `.env` file with four values. That file stays out of git.

### 3. Copy those four values into Vercel

Project → Settings → Environment Variables, one entry per line of `.env`:

- `KEYSTATIC_GITHUB_CLIENT_ID`
- `KEYSTATIC_GITHUB_CLIENT_SECRET`
- `KEYSTATIC_SECRET`
- `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`

Then redeploy.

### 4. Give her access

GitHub → repo `site-anna` → Settings → Collaborators → add her GitHub account with
**Write** access. She needs write access for Save to work.

## Where things live

- `content/en.yaml`, `fr.yaml`, `sv.yaml` — the page copy, one file per language.
- `content/settings.yaml` — name, email, LinkedIn, Cal.com link.
- `keystatic.config.ts` — the shape of the editing form.
- `lib/content.ts` — reads those files at build time.
- `components/LogoRow.tsx` + `public/logos/` — the client logos.

## Run locally

```
npm install
npm run dev
```
