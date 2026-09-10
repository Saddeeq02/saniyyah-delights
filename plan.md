# Plan: Albishir (Milk Flakes) & Halakar Kobo (Peanut Brittle) Integration

## 1. Overview & New Treats Identified
The 4 uploaded photos introduce two famous authentic Hausa sweets:
1. **Albishir (Delicate Milk Flakes & Crispy Sheets)**: Traditional paper-thin sweet milk crisps.
2. **Halakar Kobo (Groundnut Candy Brittle)**: Roasted peanut candy brittle cooked in caramelized honey sugar.

---

## 2. Photo Processing & Enhancements

### Albishir Photos
- **`assets/images/albishir.jpg`** (Primary):
  - **Source**: `media_1789053833230.jpg`
  - **Crop**: Clean crop of paper-thin milk flakes being poured into a black gourmet bowl (removing Instagram overlays).
- **`assets/images/albishir_bucket.jpg`** (Slide 2):
  - **Source**: `media_1789053833140.jpg`
  - **Crop**: 1-liter clear bucket containers packed with white Albishir milk sheets.

### Halakar Kobo Photos
- **`assets/images/halakar_kobo.jpg`** (Primary):
  - **Source**: `media_1789053833274.jpg`
  - **Crop**: White serving tray stacked with golden crunchy Halakar Kobo squares and a small ceramic side bowl (removing heart icon).
- **`assets/images/halakar_kobo_close.jpg`** (Slide 2):
  - **Source**: `media_1789053833352.jpg`
  - **Crop**: Close-up of triangular and square peanut brittle pieces on a red serving tray (removing top header text).

---

## 3. Catalog & Code Updates (`app.js`)
1. **Add `albishir` Card**:
   - Title: `Royal Albishir (Delicate Milk Flakes)` | Category: `milk-sweets`
   - Badge: `Hausa Specialty 🥛` | Gallery: 2 photos + 20s auto-slide timer.
2. **Add `halakar_kobo` Card**:
   - Title: `Crunchy Halakar Kobo (Groundnut Brittle)` | Category: `milk-sweets`
   - Badge: `Nutty Crunch 🥜` | Gallery: 2 photos + 20s auto-slide timer.

---

## 4. Verification & Live Deployment
- Check JS syntax with `node -c app.js`.
- Commit changes and push to GitHub (`Saddeeq02/saniyyah-delights`).
- Cloudflare Pages automatically updates the live website at `https://saniyyah-delights.binshuaib737.workers.dev`!
