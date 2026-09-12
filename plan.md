# Plan: 💌 "Send as a Surprise Gift" Recipient Checkout Feature

## 1. Overview & Goal
Add a dedicated "Send as a Surprise Gift" feature inside the Order Tray / Cart Drawer. When buyers (especially diaspora customers in UK, US, Abuja, Lagos) want to send treats as a surprise gift to family, friends, or loved ones in Kano, checking the gift toggle expands recipient-specific fields: Recipient Name, Delivery Address & Phone, Custom Card Greeting Note, and Anonymous/Sender option. The resulting order formatted for WhatsApp clearly highlights all recipient delivery details for Saniyyah.

---

## 2. Changes to Execute

### 1. HTML Markup (`index.html`)
- [ ] Add `#giftToggleWrap` inside the Cart Drawer (`#cartDrawer`) panel footer:
  - Checkbox: `[ ] 🎁 Send as a Surprise Gift to someone else?`
  - Collapsible container `#giftRecipientFields`:
    - `#giftRecipientName` (Recipient's Full Name & Relationship)
    - `#giftRecipientAddress` (Recipient's Kano Address & Phone Number)
    - `#giftCardMessage` (Custom Card Greeting Note)
    - `#giftSenderOption` (Include My Name vs Send Anonymously 🤫)

### 2. Logic & Scripting (`app.js`)
- [ ] Add toggle listener to smoothly expand/collapse `#giftRecipientFields`.
- [ ] Update `buildOrderMessage()` in `app.js` to detect gift orders and format a high-priority `🎁 SURPRISE GIFT ORDER` breakdown for WhatsApp.
- [ ] Save gift preferences state in cart / localStorage.

### 3. Styling & Micro-Animations (`style.css`)
- [ ] Add luxury glassmorphic card styling for `#giftRecipientFields` with gold accent borders, smooth height expansion transitions, and clear input placeholders.
- [ ] Ensure mobile responsive fit for 320px screens.

---

## 3. Verification & Live Deployment
1. Verify JS syntax (`node -c app.js`).
2. Test gift toggle expand/collapse, form validation, and WhatsApp order message formatting.
3. Commit and push to GitHub `main` (`Saddeeq02/saniyyah-delights`).
4. Live site auto-deploys to Cloudflare Pages: `https://saniyyah-delights.binshuaib737.workers.dev`.





