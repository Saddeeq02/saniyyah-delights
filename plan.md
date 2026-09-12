# Plan: "Build Your Own Custom Gift Box" Interactive Platter Selector

## 1. Overview & Goal
Build an engaging, interactive "Build Your Own Custom Box" feature for Saniyyah's Delights. Customers can choose box sizes (Mini 3-slot, Deluxe 5-slot, Grand 8-slot), mix and match their favorite treats (Gullisuwa, Alawar Madara, Iloka, Albishir, Gireba, Alkaki, Halakar Kobo), select luxury ribbon packaging, add a personalized message card, and add the customized box directly into their order tray or send it to WhatsApp with full breakdown details.

---

## 2. Architecture & Components

### 1. HTML Markup (`index.html`)
- [ ] **Custom Box Builder Section (`#customBoxSection`)**:
  - Insert interactive builder section directly after the Treat Menu section.
  - **Step 1 — Box Tier Selector**: Interactive cards for Mini Tasting Box (3 slots), Royal Deluxe Box (5 slots - featured), and Grand Celebration Platter (8 slots).
  - **Step 2 — Treat Assortment Counter**: Visual list of all 7 treats with `[- 0 +]` stepper buttons and live slot capacity progress bar.
  - **Step 3 — Packaging & Personalization**:
    - Ribbon Color Picker (Royal Gold 👑, Satin Red 🎀, Pastel Pink 🌸, Emerald Green 🌿).
    - Optional Custom Gift Card Note input box.
  - **Step 4 — Action Buttons**: "+ Add Custom Box to Tray 🛍️" and "Order Box Directly on WhatsApp 💬".

### 2. Logic & State Engine (`app.js`)
- [ ] State tracker for current selected box size, target capacity, current treat counts, ribbon choice, and custom note.
- [ ] Real-time validation (ensuring slots do not exceed capacity, capacity counter visual bar).
- [ ] Integration with `addToCart()` to store custom box configurations in the cart tray with a rich breakdown.
- [ ] WhatsApp message builder update to format custom box specs cleanly for Saniyyah.

### 3. Styling & Aesthetics (`style.css`)
- [ ] Glassmorphic builder card with luxury gold accents, glowing progress bar, responsive stepper controls, and ribbon badge swatches.
- [ ] Mobile responsive layout scaling down to 320px screens.

---

## 3. Verification & Live Deployment
1. Verify JS syntax (`node -c app.js`).
2. Test mix-and-match selection, capacity limits, ribbon selection, cart integration, and WhatsApp message formatting.
3. Commit and push to GitHub `main` (`Saddeeq02/saniyyah-delights`).
4. Live site auto-deploys to Cloudflare Pages: `https://saniyyah-delights.binshuaib737.workers.dev`.



