# Plan: Complete Removal of Small Chops from Saniyyah's Delights

## 1. Overview & Goal
Per your instructions, **Small Chops** will be completely removed from the website, menu catalog, filter tabs, SEO meta descriptions, and image assets. Saniyyah's Delights will focus 100% on traditional Northern Nigerian sweets, milk confections, and sweet pastries.

---

## 2. Changes to Execute

### 1. Catalog & Logic (`app.js`)
- [ ] Remove `small_chops` item entry from `treatsCatalog`.

### 2. Layout & Filter Tabs (`index.html`)
- [ ] Remove the **"Small Chops & Savory"** filter tab (`data-category="savory"`).
- [ ] Update section heading to: **"Our Signature Sweets & Confections"**.
- [ ] Update SEO `meta description`, `og:description`, and `twitter:description` to highlight Gullisuwa, Alewar Madara, Alkaki, Iloka, Albishir, Halakar Kobo, and Gireba without mentioning small chops.

### 3. File System Cleanup
- [ ] Remove unused placeholder image `assets/images/small_chops.jpg`.

---

## 3. Verification & Live Deployment
- Test JavaScript syntax (`node -c app.js`).
- Stage, commit, and push to GitHub (`Saddeeq02/saniyyah-delights`).
- Cloudflare Pages will automatically redeploy the updated live site on `https://saniyyah-delights.binshuaib737.workers.dev` in ~10 seconds!
