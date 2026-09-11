# Plan: Custom AI Hero Image Generation & Redundancy Removal

## 1. Problem Statement
The current hero visual card displays individual treat photos of **Gullisuwa** and **Alawar Madara** overlaying each other. Since Gullisuwa and Alawar Madara already have their own dedicated showcase cards in the menu grid, repeating them in the top Hero banner creates visual redundancy.

---

## 2. Solution Strategy

### 1. Custom Luxury AI Image Generation (`generate_image`)
Generate a brand-new, ultra-premium, bespoke food photography asset using the AI image generation engine:
- **Concept**: A luxurious **Royal Assorted Northern Nigerian Confectionery Platter & Tasting Box**.
- **Description**: An opulent ribbon-tied gift box and marble platter displaying a rich variety of handcrafted Hausa sweets, golden glazed confections, and artisanal treats in warm ambient lighting, elegant emerald & gold aesthetic, 4K luxury food photography.
- **Output File**: `assets/images/hero_treats.jpg`.

### 2. HTML & Markup Updates (`index.html`)
- Update Hero visual `<img src="assets/images/hero_treats.jpg">` with the new generated luxury assorted platter.
- Update Hero floating badges to general brand highlights:
  - Top-Right Badge: **"100% Pure Milk & Honey 🥛"** (*"Handcrafted Daily"*).
  - Bottom-Left Badge: **"Royal Gift Boxes 🎁"** (*"Weddings & Special Events"*).

### 3. Catalog Updates (`app.js`)
- Update the **Royal Assorted Delight Box** (`assorted_platter`) card image to use `assets/images/hero_treats.jpg`.

### 4. Git & Live Deployment
- Commit the new generated hero asset and updated files.
- Push to GitHub (`Saddeeq02/saniyyah-delights`) for instant Cloudflare Pages redeployment!
