# Plan: Fix Broken Image Reference & Asset Audit

## 1. Overview & Goal
Audit all image paths in `app.js` and `index.html` against actual image assets in `assets/images/` to resolve broken images and ensure 100% of product images, carousel photos, and thumbnails load flawlessly.

---

## 2. Changes to Execute

### 1. Path Fixes (`app.js`)
- [ ] Fix `alawar_madara` cover image path from `assets/images/alawar_madara.jpg` to `assets/images/alewar_madara.jpg`.
- [ ] Copy `alewar_madara.jpg` to `alawar_madara.jpg` in `assets/images/` as a redundant alias so both spelling variants resolve cleanly without 404s.

### 2. Full Asset Audit
- [ ] Verify all 25 image assets in `assets/images/` load cleanly without missing files or broken references.

---

## 3. Verification & Live Deployment
1. Check JS syntax (`node -c app.js`).
2. Verify image loading in repository.
3. Commit and push to GitHub `main` (`Saddeeq02/saniyyah-delights`).
4. Live site auto-deploys to Cloudflare Pages: `https://saniyyah-delights.binshuaib737.workers.dev`.




