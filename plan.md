# Plan: Frictionless Non-Blocking Shopping Cart & Quick Multi-Select UX

## 1. Overview & Goal
Eliminate cart drawer interruptions when adding items so customers can seamlessly continue browsing and adding multiple treats without having the side drawer pop up on every single click.

---

## 2. Changes to Execute

### 1. Scripting & Cart Logic (`app.js`)
- [ ] **Remove Auto-Open Drawer Call**: Remove `openCart()` from the core `addToCart()` function.
- [ ] **Toast Notification System**: Create a floating toast notification (e.g. `✨ Added Gullisuwa to Tray!`) that pops up near the bottom of the screen for 2 seconds and auto-dismisses.
- [ ] **Cart Badge Animation**: Add a pulse/bounce animation on `#cartCountBadge` and `#cartDrawerBtn` whenever an item is added.
- [ ] **In-Card Quantity Counter / Feedback**:
  - Show temporary button feedback (`✓ Added (1)`, `✓ Added (2)`) on the card button when clicked.
  - Or show inline quantity stepper `[- 1 +]` directly on treat cards once added to tray.
- [ ] **Floating Mobile Cart Bar**: For mobile phone users, display a sticky bottom bar (`View Order Tray (X items) 🛍️`) when cart has items, allowing instant checkout anytime without scrolling back up.

### 2. Styling (`style.css`)
- [ ] Add `.toast-notification` floating banner styles with glassmorphism, golden accent glow, smooth slide-in/out transitions, and quick "View Tray" action link.
- [ ] Add `.cart-badge-bounce` keyframe animation for badge feedback.
- [ ] Add `.sticky-cart-bar` for mobile viewports.

---

## 3. Verification & Live Deployment
1. Verify JS syntax (`node -c app.js`).
2. Verify adding multiple products without drawer interruption.
3. Commit and push to GitHub `main` (`Saddeeq02/saniyyah-delights`).
4. Live site auto-updates on Cloudflare Pages: `https://saniyyah-delights.binshuaib737.workers.dev`.


