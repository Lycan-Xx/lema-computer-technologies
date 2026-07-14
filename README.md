# LEMA — Frontend Landing Page

This repository contains the single-page landing site for LEMA Computer Technology — a Tailwind-based static HTML site showcasing services, products, and contact information.

## Summary

- Purpose: Present LEMA's services (repairs, security, solar, networking, parts) and capture leads via a contact form.
- Tech: Plain HTML, Tailwind CDN, Lucide icons, small vanilla JS for UI interactions.

## Recommended Project Structure

Split the single `index.html` into manageable parts for easier maintenance and future growth:

```
lema/
├─ index.html                # Root entry (or generated from templates)
├─ README.md
├─ package.json (optional)   # For tooling (Tailwind, build, dev server)
├─ public/                   # Static assets that are served as-is
│  ├─ favicon.ico
│  └─ images/
│     └─ (hero, products, logos, etc.)
├─ src/                      # Source files when using simple templating or build
│  ├─ partials/
│  │  ├─ header.html         # Nav + mobile menu
│  │  ├─ footer.html
│  │  └─ hero.html
│  ├─ styles/
│  │  └─ main.css            # Extracted custom CSS (animations, utilities)
│  └─ scripts/
│     └─ main.js             # All DOM logic (menu, form, toasts, reveal)
└─ dist/ (or public/)         # Built output (if using a build step)
```

Notes:
- Keep the original `index.html` as an assembled output (or the template served by your build/dev server).
- Move long inline CSS into `src/styles/main.css` so it's easier to edit and version.
- Move JS behavior into `src/scripts/main.js` and initialize Lucide and observers there.
- Store images in `public/images` and reference them with relative paths.

## How to split the current `index.html`

1. Extract the <head> (meta, fonts, tailwind config) into a template partial used by pages.
2. Move the large <style> block into `src/styles/main.css`, keeping only critical inline styles if needed for first paint.
3. Move the bottom <script> into `src/scripts/main.js` and import or bundle it.
4. Break major sections into partials: `hero`, `services`, `why-us`, `products`, `process`, `testimonials`, `contact`, `footer`.
5. Use a simple templating approach (EJS, Nunjucks) or a static site tool (Eleventy, Vite + HTML, or a minimal Node script) to assemble the final `index.html`.

## Local development (quick)

Use any static server. Examples:

```bash
# Using Python 3 built-in server (from the project root)
python -m http.server 3000

# Or using `live-server` (npm)
npx live-server --port=3000
```

Open http://localhost:3000 in your browser.

## Optional: Add a simple npm toolchain

If you plan to manage Tailwind properly or add post-processing, create `package.json` and install tooling:

```bash
npm init -y
npm install -D tailwindcss postcss autoprefixer concurrently live-server
npx tailwindcss init
```

Set up a basic `tailwind.config.js` and a build script to compile `src/styles/main.css` to `dist/styles.css` for production.

## Recommended JS module split

- `menu.js` — mobile menu open/close and body scroll lock
- `reveal.js` — intersection observer for `.reveal` elements
- `form.js` — contact form handling, validation, toast
- `icons.js` — lucide initialization

Bundle or import these into `src/scripts/main.js`.

## Accessibility & Performance tips

- Add meaningful alt text to all images.
- Defer non-critical scripts and use `loading="lazy"` on images.
- Move large third-party scripts to be loaded async or via CDN leverage with Subresource Integrity when available.
- Use semantic HTML (landmark elements, headings in order) to help screen readers.

## Future migration ideas

- Convert to a component-based framework (React/Vite) if you need dynamic content or a dashboard.
- Use Eleventy/11ty or Hugo for a fast static-site templating approach without full SPA complexity.

## Contact

For changes, edit the appropriate partial in `src/partials` and re-run your build (if any). If you want, I can scaffold the `src/` layout and move the CSS/JS into separate files.

---

Generated from the provided `index.html` content.
