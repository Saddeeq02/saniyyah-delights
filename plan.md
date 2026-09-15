# Plan: Connecting Truehost Nigeria Custom Domain (`saniyyahdelight.com.ng`) 🌐

## 1. Overview & Goal
Link your domain purchased on **Truehost Nigeria** to your live Cloudflare Pages website (`https://saniyyah-delights.binshuaib737.workers.dev`). This ensures customers visiting `saniyyahdelight.com.ng` or `www.saniyyahdelight.com.ng` land directly on your luxury treat store with full automatic HTTPS security (SSL).

---

## 2. Setup Options & Action Steps

### Option A: Cloudflare Nameservers (RECOMMENDED — Free SSL, Fastest Speed & Security)

#### Step 1: Add Domain to Cloudflare
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Click **Add a Site** -> Enter `saniyyahdelight.com.ng`.
3. Choose the **Free Plan** ($0/mo) and click **Continue**.
4. Cloudflare will generate **2 Custom Nameservers** for you (e.g. `ada.ns.cloudflare.com` & `leo.ns.cloudflare.com`).

#### Step 2: Update Nameservers in Truehost Nigeria
1. Log in to your [Truehost Nigeria Client Area](https://truehost.com.ng/cloud/clientarea.php).
2. Go to **Domains** -> **My Domains** -> Click on `saniyyahdelight.com.ng`.
3. In the left sidebar, click **Nameservers**.
4. Select **Use custom nameservers (enter below)**.
5. Replace default nameservers with the 2 Cloudflare Nameservers from Step 1.
6. Click **Change Nameservers**.

#### Step 3: Link Custom Domain in Cloudflare Pages
1. In Cloudflare Dashboard, go to **Workers & Pages** -> Click **saniyyah-delights**.
2. Go to the **Custom domains** tab -> Click **Set up a custom domain**.
3. Type `saniyyahdelight.com.ng` and click **Continue** -> **Activate domain**.
4. Repeat for `www.saniyyahdelight.com.ng`.

---

### Option B: Truehost DNS Management (CNAME Method)

If you prefer keeping Truehost default nameservers:
1. In Truehost Client Area -> **Domains** -> **DNS Management** / **cPanel Zone Editor**.
2. Add a **CNAME** record for `www`:
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Target**: `saniyyah-delights.binshuaib737.workers.dev`
3. Add an **ALIAS / ANAME** record for `@` (root domain):
   - **Type**: `ALIAS` or `ANAME`
   - **Name**: `@` (or leave blank)
   - **Target**: `saniyyah-delights.binshuaib737.workers.dev`
4. In Cloudflare Pages (`saniyyah-delights`), add `saniyyahdelight.com.ng` and `www.saniyyahdelight.com.ng` under **Custom domains**.

---

## 3. Verification
- Test domain resolution: `https://saniyyahdelight.com.ng`
- Verify SSL certificate status in browser address bar (Green padlock 🔒).
