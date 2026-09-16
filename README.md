# Tosh Bhasin — personal website

A simple, fast, no-build static site. No servers, no databases, no monthly fees required.

## What's in here

```
index.html                          Homepage
writing.html                        Full articles list
articles/ai-maturity-roadmap.html   Sample article
style.css                           Shared styling for every page
```

## Get it online (free, ~5 minutes)

**Option A — Netlify (easiest)**
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. You'll get a live URL immediately. Add a custom domain later from Netlify's dashboard if you want one (e.g. toshbhasin.com).

**Option B — GitHub Pages (free, ties to your GitHub profile)**
1. Create a new GitHub repository, e.g. `tosh-bhasin-site`.
2. Upload all these files to it (or `git push`).
3. In the repo, go to Settings → Pages → set source to the `main` branch.
4. Your site will be live at `https://<your-username>.github.io/tosh-bhasin-site/`.

**Option C — Vercel**
1. Go to https://vercel.com/new
2. Import the folder as a project (no framework needed — select "Other").
3. Deploy.

## How to add a new article

1. Copy `articles/ai-maturity-roadmap.html` and rename it, e.g. `articles/my-new-post.html`.
2. Edit the `<title>`, the `<h1>`, the date, and the body paragraphs.
3. Open `writing.html` and `index.html`, and add a new block right above the existing article entry:

```html
<a class="article-row" href="articles/my-new-post.html">
  <div class="a-date">Month Year</div>
  <h3>Your headline</h3>
  <p class="a-dek">One-sentence summary of the piece.</p>
  <span class="tag">Topic tag</span>
</a>
```

That's it — no CMS, no rebuild step. Just edit HTML and re-upload (or `git push` if using GitHub Pages).

## Customizing

All colors, fonts, and spacing live in `style.css` as CSS variables at the top of the file (`:root { ... }`). Change a value there and it updates across every page.

## Notes

- The site currently uses placeholder social/contact info pulled from your resume (email, LinkedIn, Noida location). Update the `#contact` section in `index.html` if anything changes.
- Fonts (Fraunces + IBM Plex Sans) load from Google Fonts via a `<link>` tag in each page's `<head>` — no local font files needed, works offline-to-online as long as you keep those lines.
