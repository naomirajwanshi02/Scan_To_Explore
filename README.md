# Scan to Explore: one link, many things to explore

One web link for one NFC tag. It opens the camera and asks you to scan a picture:

- **Pagoda picture** → [Pagoda](https://github.com/naomirajwanshi02/Pagoda)
- **Shrine picture** → [Shinto Shrine](https://github.com/naomirajwanshi02/Shinto_Shrine)
- **Ramen picture** → [Ramen Anatomy](https://github.com/naomirajwanshi02/Ramen_Anatomy)
- **Sushi picture** → [Sushi Explore](https://github.com/naomirajwanshi02/sushi-ar-explore)

This hub holds **no models or notes**. It only recognises the picture and redirects to that project's
own live page, so each project stays independently editable: change and push it in its own repo and the
hub serves the new version (GitHub Pages refreshes in about a minute).

| File | What it is |
|---|---|
| `index.html`, `js/app.js`, `js/scan.js` | Camera permission, scanner, redirect |
| `js/explorables.js` | The list (name, page URL, picture, index in `targets.mind`) |
| `targets.mind` | All four pictures compiled together (0 Pagoda, 1 Shrine, 2 Ramen, 3 Sushi) |
| `tools/make-target.html`, `tools/serve.ps1` | Rebuild `targets.mind` from the live pictures |

**Only if a project's picture changes, or one is added:** edit `js/explorables.js`, run `tools/serve.ps1`,
open `http://localhost:8138/tools/make-target.html?build=1`, then commit `targets.mind`.
Changes to a project's model, parts or look need nothing here.

Phones need HTTPS for the camera (GitHub Pages provides it).
