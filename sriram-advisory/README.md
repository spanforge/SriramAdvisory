# Sriram Advisory

A single static page introducing Think Sriram, AInternals, and Adoptrivo. No runtime dependencies, browser JavaScript, backend, analytics, or external fonts.

## Local preview

Run `npm run dev` and open http://localhost:3000. Node.js 20 or newer is required; no installation is needed. Set `PORT` to change the port.

## Build and deploy

Run `npm run build`. Upload the contents of `dist/` to your static hosting provider. Use `sriram-advisory` as the project root if your host checks out the parent repository. Build command: `npm run build`. Publish directory: `dist`.

Configure the host to serve sriramadvisory.com with a valid TLS certificate and redirect HTTP to HTTPS. TLS is a hosting setting; it is not enabled by local HTML. Keep unknown URLs as 404 responses rather than rewriting legacy routes to this page.

## Content and brand assets

Edit `index.html` for copy and `styles.css` for layout. The supplied original PNGs are preserved in this directory. The page uses 720 × 720 WebP derivatives in `assets/`, resized and compressed from those PNGs without cropping, recoloring, or recreating the artwork. Slogans embedded in the approved artwork are preserved.

The footer intentionally uses the requested 2026 year. All three initiatives link to their supplied HTTPS website addresses. The header introduction uses two lines on wide screens and wraps naturally on smaller devices.

The favicon uses the site's text initials, not a replacement initiative logo. `assets/social-preview.png` is a 1200 by 630 sharing card composed from the three approved images. Sharing metadata uses the production domain; previews become publicly fetchable after deployment.

## Browser verification

`node scripts/check-browser.mjs` uses an installed Chrome instance started with `--remote-debugging-port=9223`. It checks the local site on port 3002 at 320, 375, 768, 1024, 1099, 1100, and 1440 CSS pixels, including overflow, image loading, button sizes, desktop alignment, visible keyboard focus, and reflow equivalent to a 1440px display at 200% zoom. It also regenerates the social sharing card and saves screenshots and measurements under ignored `.qa/`. The desktop layout begins at 1100px.
