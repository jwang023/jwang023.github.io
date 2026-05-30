# Jinxin Wang Academic Website

Static personal academic/research website built with Next.js, TypeScript, and Tailwind CSS.

## Edit Content

Most reusable content lives in:

```text
src/data/profile.ts
```

Update this file to change the name, email, education, and publication. The current website URL is a placeholder.

## Profile Photo

The Home page reads the profile image path from `src/data/profile.ts`:

```ts
portraitUrl: "/profile.jpg"
```

To use a real photo, add it to `public/`, for example `public/profile.jpg`, then update `portraitUrl` to `/profile.jpg`. The Home page also includes a local photo picker so you can preview an image in the browser before replacing the static file.

## Plog Media

Add photos or videos to:

```text
public/plog
```

Supported file types are `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, and `.mp4`. After adding media, run `npm run build` or restart the local dev server so the Plog page can pick them up.

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

The production output is generated in `out/` because `next.config.ts` uses `output: "export"`.

## Deployment

This site is configured for static hosting and is not tied to any currently authenticated account. You can push it to your own GitHub repository and deploy it with GitHub Pages.

### GitHub Pages

This repository includes `.github/workflows/deploy.yml`. After you push the site to your own GitHub repository:

1. Go to the repository on GitHub.
2. Open **Settings** > **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to the `main` branch.
5. GitHub Actions will build the site and publish the generated `out/` directory.

For a user website, create a repository named `<your-username>.github.io`. For example, if your GitHub username is `jwang023`, the repository would be `jwang023.github.io`.

For a project website at `https://<your-username>.github.io/<repository-name>/`, set this repository variable before building:

```text
NEXT_PUBLIC_BASE_PATH=/<repository-name>
```

Other static hosts can also serve the generated `out/` directory, including Vercel static output, Netlify, Cloudflare Pages, or a university web server.

## Pages

- Home
- Brief CV
- Publications
- Plog
- Contact

Education is displayed on the Brief CV page. Photos and videos are displayed on the Plog page. The current preprint is displayed on the Publications page.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export, no backend
