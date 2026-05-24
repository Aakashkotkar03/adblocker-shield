# AdBlocker Shield — Website

Official website for the **AdBlocker Shield** Chrome extension.

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/index.html` | Landing page with CTA |
| Privacy Policy | `/privacy.html` | Zero-data-collection privacy policy |
| Terms of Service | `/terms.html` | Terms of use |
| Support | `/support.html` | FAQ + contact form |

## Deployment to GitHub Pages

### Option 1: Automatic (recommended)

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Under "Source" select **Deploy from a branch**
4. Select `main` branch, `/ (root)` folder
5. Click **Save**
6. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`

### Option 2: Custom Domain

1. Add a `CNAME` file with your domain (e.g. `adblocker-shield.com`)
2. Point your domain's DNS to GitHub Pages IPs
3. Enable HTTPS in repository Settings → Pages

---

## Before Deploying — Replace Placeholder Links

Search for `href="#"` in all HTML files and replace with your real Chrome Web Store URL:

```
<!-- ← CHROME STORE LINK: Replace # with your Chrome Web Store URL -->
<a href="https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID" ...>
```

Files to update:
- `index.html` — 3 CTA buttons (`#navCta`, `#heroCta`, `#ctaMain`) + footer
- `privacy.html` — nav CTA + footer
- `terms.html` — nav CTA + footer
- `support.html` — nav CTA + footer
- `404.html` — nav CTA

---

## Tech Stack

- Pure HTML + CSS + vanilla JavaScript
- No frameworks, no build tools, no dependencies
- Fonts loaded from Google Fonts CDN
- Works offline after initial load (fonts cached)

## Contact

**certifypro.technology@gmail.com**

© 2025 AdBlocker Shield
