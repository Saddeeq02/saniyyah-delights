# Plan: Cart Drawer Viewport Fit & Scrollability Fix Across All Devices

## 1. Overview & Goal
Fix the Cart Drawer (`#cartDrawer`) viewport height and scrolling architecture so all form fields, surprise gift fields, and the "Complete Order on WhatsApp" button are 100% visible and comfortably scrollable on every screen resolution and height (desktop laptops, small screens, mobile phones) without requiring zooming out. Also restrict the sticky mobile cart bar strictly to mobile viewports (`max-width: 580px`).

---

## 2. Changes to Execute

### 1. Cart Drawer Flex & Scroll Architecture (`style.css`)
- [ ] **Panel Flex Container**: Set `.cart-drawer-panel` to `display: flex; flex-direction: column; max-height: 100vh; height: 100vh; overflow: hidden;`.
- [ ] **Fixed Header & Sticky Footer**:
  - Keep `.cart-panel-header` fixed at top (`flex-shrink: 0`).
  - Make `.cart-drawer-body` or panel inner scrollable (`overflow-y: auto; flex: 1; min-height: 0; padding-bottom: 2rem; -webkit-overflow-scrolling: touch;`).
  - Ensure `.cart-panel-footer` forms and buttons fit compactly with comfortable padding.
  - Add generous bottom padding (`padding-bottom: 3rem`) to `.cart-panel-footer` so the checkout button is never cut off or obscured.

### 2. Desktop/Mobile Sticky Cart Bar Visibility (`style.css` & `app.js`)
- [ ] Set `.mobile-sticky-cart-bar` to `display: none !important` by default on screens wider than 580px (`@media (min-width: 581px)`).
- [ ] On mobile screens (`@media (max-width: 580px)`), hide `.mobile-sticky-cart-bar` when cart drawer is open (`#cartDrawer.open`) to avoid overlapping the drawer.

### 3. Form Spacing & Input Optimization (`style.css`)
- [ ] Optimize field margins (`margin-bottom: 0.5rem`), label font sizes, and input height in `.cart-panel-footer` and `#giftRecipientFields`.
- [ ] Make `#checkoutWhatsAppBtn` prominent with glowing gold styling and full visibility.

---

## 3. Verification & Live Deployment
1. Verify JS syntax (`node -c app.js`).
2. Test cart drawer scrolling at various screen heights (768px laptop, 900px desktop, 667px mobile).
3. Commit and push to GitHub `main` (`Saddeeq02/saniyyah-delights`).
4. Live site auto-deploys to Cloudflare Pages: `https://saniyyah-delights.binshuaib737.workers.dev`.






