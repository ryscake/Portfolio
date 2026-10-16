# Krystal Margareth Villanueva — Portfolio

A complete, responsive portfolio built with React, TypeScript, Vite, Tailwind CSS, Motion for React, Lucide React, and React Hook Form. Fonts are bundled locally. The default theme uses black, graphite, white, and restrained crimson accents.

## Run locally

Use a current Node.js LTS release (Node 24 is used for this workspace).

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite. If you are using this original Windows workspace without a system Node installation, run `..\start-portfolio.cmd` instead; it uses the workspace's portable runtime and works with the default Windows PowerShell execution policy. Add `build`, `lint`, `typecheck`, or `preview` after the command to run a different task.

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

`build` produces the deployable static site in `dist/`.

## Edit content

All personal content is in **`src/data/portfolioData.ts`**. Change names, biography paragraphs, roles, email, social links, project descriptions, education, and credentials there. Layouts are in `src/sections/`, reusable elements are in `src/components/`, hooks are in `src/hooks/`, and design tokens and responsive styles are in `src/styles/index.css`.

Only supplied personal and academic information is presented. No project technology stacks, repository links, demo links, employment history, or certificate verification links have been invented.

### Add your portrait

1. Put an optimized WebP or JPEG in `public/images/`, such as `krystal.webp`.
2. Set `portfolio.portrait` to `'/images/krystal.webp'`.

The portrait replaces the abstract KV monogram automatically. Aim for an image at least 600 × 750 pixels. The frame crops with `object-fit: cover`; adjust `.portrait-image` in the stylesheet if needed.

### Add your résumé

Put the actual PDF at:

```text
public/resume/Villanueva_Krystal_Margareth_Resume.pdf
```

Both Download Resume controls activate automatically after the file is available. The app checks the PDF signature, so a host's HTML fallback cannot activate a broken download. Missing files keep the buttons disabled with a clear explanation. If you change the filename, also change `portfolio.resume`.

### Add project screenshots and links

Put real images in `public/projects/`. On each entry in `projects`, set:

```ts
image: '/projects/smart-rescue.webp',
imageAlt: 'A specific description of the actual screenshot',
```

These replace the clearly labeled concept placeholders in both the cards and dialogs. Add `githubUrl`, `demoUrl`, or `technologies` only when confirmed. Optional external actions render only when their corresponding URL is configured. Set `portfolio.github` to your actual GitHub profile to activate the social icon.

### Add certificates

Put supplied certificate files in `public/certificates/` and set `certificate` on the corresponding `credentials` entry, or set `url` to a verified credential page. The credential action then appears. Courses and training badges are labeled separately; the Cisco course has no invented completion date.

## Contact form

The form validates required fields, email format, and message length. Submission opens the visitor's email application with the subject and message filled in. **Visitors must send the email from their email app.** The website never claims delivery. If an email app is not configured, the public email link remains available. There is no backend, secret key, tracking, or storage of contact form data.

## Accessibility and interactions

The site includes a skip link, semantic landmarks, visible focus styles, labeled inputs and validation messages, an accessible mobile navigation, active section navigation, reduced-motion support, native modal dialogs with Escape and focus restoration, scroll progress, and Back to Top links. Placeholder artwork is distinct from project screenshots. There is no fabricated portrait or active link to an absent résumé.

## Deployment

### Vercel

Import **this application directory**, select the Vite framework preset, use `npm run build`, and publish `dist`. `vercel.json` supplies these defaults. If importing the parent workspace as a repository, set Root Directory to `krystal-portfolio`.

### Netlify

Import this directory with build command `npm run build` and publish directory `dist`. `netlify.toml` includes those settings and immutable caching for hashed assets. If the repository root is the parent workspace, set the base directory to `krystal-portfolio`.

No SPA rewrite is required: section navigation uses URL fragments and details use dialogs. Keeping missing assets as 404 responses is intentional.

### Metadata

Update `index.html` if you change the title or description. `public/favicon.svg` is the KV favicon, and `public/images/social-card.png` is the Open Graph preview. For a custom domain, use its absolute URL for `og:image` and add an `og:url` meta tag. The first Sites deployment is private to the owner; use Vercel or Netlify for a public recruiter-facing deployment, or explicitly change the Site's audience through its hosting controls.

## Asset folders

- `public/images/` — portrait and social preview
- `public/projects/` — real project screenshots
- `public/certificates/` — real certificate files
- `public/resume/` — the supplied PDF

Keep private information and unpublished credentials out of this public static directory.

## Verification

Verified in headless Google Chrome at 320, 390, 768, 1024, and 1440 px widths without horizontal page overflow. Browser checks cover all three project dialogs, Escape and focus restoration, mobile navigation, active section navigation, required-field and email validation, and disabled/enabled résumé behavior. Automated axe checks found no WCAG A/AA violations in the tested desktop, mobile, and project-dialog states. This is an automated check, not a complete manual accessibility audit. No real email was sent, and the fixture used to test résumé activation is not included as a résumé file.
