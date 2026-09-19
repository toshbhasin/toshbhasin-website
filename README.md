# Tosh Bhasin — personal website

A simple, fast, no-build static site. No servers, no databases, no monthly fees required.

## What's in here

```
index.html                          Home
about.html                          About
approach.html                       Approach
work.html                           Work (cream/paper theme)
writing.html                        Writing (article list)
contact.html                        Contact
articles/ai-maturity-roadmap.html   Sample article
style.css                           Shared styling — dark theme + cream "paper" theme
assets/portrait.jpg                 Headshot
```

## Design

- Dark editorial theme (Home, About top, Approach, Writing, Contact) with a warm cream break for the Work page and About's "career evolution" section — matching the Canva design reference.
- Accent color: rose/pink (`--accent` in style.css).
- Headline font: Playfair Display. Body/UI font: IBM Plex Sans.
- All colors, spacing, and type live as CSS variables at the top of `style.css` — change once, applies everywhere.

## Hosting

This is deployed via GitHub Pages with a custom domain (toshbhasin.me). To update:
1. Delete everything in the repo except `CNAME`.
2. Upload this entire `site` folder's contents in one drag (including the `articles` and `assets` subfolders) via "Add file → Upload files".
3. Commit — GitHub Pages rebuilds automatically.

## Adding a new article

1. Copy `articles/ai-maturity-roadmap.html`, rename it.
2. Edit the `<title>`, `<h1>`, date, and body.
3. Add a matching `<a class="article-row">` block to `writing.html`.
