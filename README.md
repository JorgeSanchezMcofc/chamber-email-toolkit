# McAllen Chamber Email Toolkit

FY 25-26 program email blurb generator with professional services directory and grants section.

## Deploy in 10 minutes

### 1. Push to GitHub

```bash
# In this folder:
git init
git add .
git commit -m "Initial commit"

# Create a new repo at github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/chamber-email-toolkit.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Select your `chamber-email-toolkit` repo
4. Leave all settings as defaults — Vercel auto-detects Vite
5. Click **Deploy**

Your app will be live at `https://chamber-email-toolkit.vercel.app` (or similar) in ~60 seconds.

### 3. Future updates

Every time you push a new commit to GitHub, Vercel redeploys automatically.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Notes

- The Anthropic API key is handled by the Claude artifact environment. For the standalone deployed version, you will need to add a backend proxy or use a Vercel Edge Function to keep the API key secure. See `/src/App.jsx` for the fetch call.
- Directory and grants data saves to browser localStorage — each user's browser stores their own edits.
- To update the attachments folder link, change `ATTACHMENTS_URL` in `AttachmentsTab` inside `/src/App.jsx`.
