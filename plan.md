# Plan: Real Photos & 20s Multi-Slide Integration for Gireba

## 1. Overview & Goal
Integrate the 4 uploaded authentic photos of **Traditional Gireba Cookies** into Saniyyah's Delights. Each image will be color-graded for warm buttery tones, cleanly cropped to center the confections and remove extraneous phone interface elements, and configured into the interactive 20-second auto-sliding carousel with glowing golden widget styling.

---

## 2. Real Photo Processing & Gallery Composition
From the 4 user-uploaded photos:

1. **Slide 1: Scalloped Porcelain Plate (`assets/images/gireba.jpg`)**
   - **Source**: `media_1789051627672.jpg`
   - **Subject**: Plump, golden Hausa shortbread cookies topped with toasted sesame seeds arranged on a scalloped serving dish with floral decor.
   - **Enhancement**: Warm golden saturation, crisp texture enhancement for toasted sesame crowns.

2. **Slide 2: Gourmet Tea Spread (`assets/images/gireba_plate.jpg`)**
   - **Source**: `media_1789051627627.jpg`
   - **Subject**: Full presentation spread featuring the scalloped platter flanked by twin serving dishes on white marble.
   - **Crop**: Clean crop centered on the confectionery spread.

3. **Slide 3: Melt-in-the-Mouth Crumb Showcase (`assets/images/gireba_crumb.jpg`)**
   - **Source**: `media_1789051627309.jpg`
   - **Subject**: Gloved hands gently breaking open a freshly baked, warm Gireba cookie, revealing the tender crumbly interior above a fresh baking tray.
   - **Crop**: Cropped to isolate the breaking action and baking tray.

4. **Slide 4: Pantry Glass Jar Storage (`assets/images/gireba_jar.jpg`)**
   - **Source**: `media_1789051627472.jpg`
   - **Subject**: Tall glass pantry canister packed with sesame-topped Gireba cookies on a wooden board with bamboo lid.
   - **Crop**: Vertically centered on the glass jar.

---

## 3. Implementation Steps
1. **Asset Generation (`assets/images/`)**:
   - Enhance, balance, and save the 4 finalized images: `gireba.jpg`, `gireba_plate.jpg`, `gireba_crumb.jpg`, and `gireba_jar.jpg`.
2. **Catalog Update (`app.js`)**:
   - Update `gireba` entry in `treatsCatalog`:
     - Add `gallery: ['assets/images/gireba.jpg', 'assets/images/gireba_plate.jpg', 'assets/images/gireba_crumb.jpg', 'assets/images/gireba_jar.jpg']`.
     - Refine description: Highlight cardamom-vanilla spiced aroma, melt-in-mouth crumb, and toasted sesame crowns.
     - Update badge and tags: `Artisanal Bake 🍪`, `Melt-in-Mouth 🍪`.
3. **Verification**:
   - Validate JS syntax with `node -c app.js`.
   - Verify HTTP 200 responses on local server.
   - Clean up temporary test scratch files.
4. **Git Commit & Push**:
   - Commit changes and push to GitHub (`Saddeeq02/saniyyah-delights`), which will automatically trigger Cloudflare Pages to update the live site!
