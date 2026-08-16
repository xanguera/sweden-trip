# Sweden 2026 — Family Trip Site

A private, password-gated website for the family trip to Stockholm, 11–25 August 2026. Built from the trip planning doc: day-by-day schedule, a map, place links, and a photo viewer for each day.

## Enabling the site (GitHub Pages)

1. On GitHub, go to **Settings → Pages** for this repo.
2. Under **Build and deployment**, set **Source** to "Deploy from a branch".
3. Pick the branch this was merged into (e.g. `main`) and folder `/ (root)`.
4. Save. GitHub will give you a URL like `https://xanguera.github.io/sweden-trip/` within a minute or two.

No build step is needed — it's a static site (`index.html` + `css/` + `js/`).

## The password

The password is **`Anguera`** (capital A), set in `js/app.js` near the top:

```js
const PASSWORD = "Anguera";
```

**Important caveat:** this is a plain client-side check, not real security. Because GitHub Pages only serves static files (no server-side code), anyone who opens the page source or browser dev tools can read the password directly out of `app.js`. This is fine for keeping the page off search engines and casual visitors (the page also sets `noindex, nofollow`), but don't put anything on this site you wouldn't want a determined stranger to see. Once entered, the password is remembered in the browser's `localStorage` so you won't be asked again on that device — tap the 🔒 icon top-right to lock it again.

If you ever want to change the password, edit that one line and push.

## Adding photos

The site has a "Photos from this day" section on every day, driven by each day's `photos` object in `js/data.js`:

```js
photos: { album: "", images: [] }
```

Two ways to populate it, and you can use either or both:

1. **Direct photo grid + lightbox (recommended for "click to enlarge").** Add direct image URLs to the `images` array, e.g.:
   ```js
   photos: {
     album: "",
     images: [
       "https://lh3.googleusercontent.com/....",
       "photos/day-02/eclipse-1.jpg"
     ]
   }
   ```
   These can be:
   - **Photos hosted in this repo.** Drop files into `photos/day-02/`, etc., and reference them as relative paths like `photos/day-02/img1.jpg`.
   - **Direct-linked Google Photos URLs.** Open a photo in Google Photos → the three-dot menu → "Open in new tab", right-click the image → "Copy image address". That gives a direct `lh3.googleusercontent.com` link you can hotlink. Note these links can occasionally expire/rotate, so hosting the files in `photos/` is more durable for a page you'll want working long-term.

2. **A link to the full Google Photos album.** Set `album` to a shared album URL (Google Photos → album → Share → "Create link"). This renders as an "Open full album in Google Photos ↗" button above the grid — handy if you don't want to pick individual photos for every day.

Clicking any thumbnail opens a full-screen viewer with next/prev arrows (swipe or click) and closes with Esc or the ✕ — works on both mobile and desktop.

## Editing the itinerary

All content lives in `js/data.js` — one JS object per day with `schedule` (the time/activity table), `info` (the "what to know" / kids / did-you-know write-ups), and `places` (for the map pins and the linked photo/website cards). It's plain data, no build step — edit, save, commit, push, and GitHub Pages picks it up automatically within a minute or two.

Each place can have:
- `wiki`: a Wikipedia article title — the site fetches that page's thumbnail image live from Wikipedia at runtime (no need to host or hotlink an image yourself).
- `url`: the attraction's official website.
- `lat` / `lng`: coordinates used for the map pin.

## A note on accuracy

Official website links (museum sites, restaurants, etc.) were filled in from general knowledge and **have not been individually verified** in this session (outbound network access was restricted while building this). Worth a quick click-through before you rely on them, especially for booking links — the day-by-day facts, prices and times come directly from your planning doc.

## Tech notes

- No dependencies beyond [Leaflet](https://leafletjs.com/) (map) and the public Wikipedia REST API (place photos), both loaded from CDN — the site needs an internet connection to show the map and photos, same as any normal webpage.
- Pure HTML/CSS/vanilla JS, no build step, no backend.
