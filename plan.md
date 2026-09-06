# Plan: GitHub Repository Setup & Cloudflare Pages Continuous Deployment

## 1. Overview & Strategy
Using **GitHub + Cloudflare Pages** for **`saniyyahdelight.com.ng`**:
- **Target GitHub Repository**: `https://github.com/Saddeeq02/saniyyah-delights.git`
- **100% Free Forever**: GitHub repository and Cloudflare Pages are both completely free.
- **Continuous Deployment (CI/CD)**: Every commit and push triggers automated deployment in under 15 seconds.
- **Custom Domain**: Instant 1-click binding to **`saniyyahdelight.com.ng`** via Cloudflare.

---

## 2. Execution Steps

### Step 1: Initialize Git Repository & Stage Assets (In Progress)
- [x] Create `.gitignore` to exclude `saniyyah_deploy.zip` and temp logs.
- [ ] Initialize git repo: `git init`.
- [ ] Stage all production files (`index.html`, `style.css`, `app.js`, `_headers`, `assets/images/`, `plan.md`, `.gitignore`).
- [ ] Create initial commit: `feat: initial release of Saniyyah's Delights luxury web app`.
- [ ] Rename default branch to `main`: `git branch -M main`.

### Step 2: Push to GitHub Remote
- [ ] Add remote origin:
  ```bash
  git remote add origin https://github.com/Saddeeq02/saniyyah-delights.git
  ```
- [ ] Push code to main:
  ```bash
  git push -u origin main
  ```

### Step 3: Connect GitHub to Cloudflare Pages (100% Free)
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) &rarr; **Compute (Workers & Pages)** &rarr; **Create application** &rarr; **Pages** &rarr; **Connect to Git**.
2. Authorize GitHub and select **`Saddeeq02/saniyyah-delights`**.
3. Build Settings:
   - **Framework preset**: `None`
   - **Build command**: *(leave blank)*
   - **Build output directory**: `/` (or leave blank)
4. Click **Save and Deploy**.
5. Once deployed, click **Custom domains** &rarr; **Set up a custom domain** &rarr; enter **`saniyyahdelight.com.ng`**.
6. Cloudflare automatically routes the domain and enables free SSL HTTPS.
