# Vercel Deployment Guide

## Quick Deploy to Vercel

### Prerequisites
- GitHub account with your frontend repository
- Vercel account (free tier works)
- Backend deployed on Render (or other service)

---

## Step 1: Update Configuration

The `vercel.json` file is already configured. Just update the backend URL:

Edit `vercel.json` and replace:
```json
"destination": "https://your-backend-url.onrender.com/api/:path*"
```

With your actual backend URL:
```json
"destination": "https://your-actual-backend.onrender.com/api/:path*"
```

---

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Vite framework
5. Click **"Deploy"**

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd frontend
vercel
```

---

## Step 3: Environment Variables (Optional)

If you need environment variables:

1. Go to Project Settings → Environment Variables
2. Add variables like:
   ```
   VITE_API_URL=https://your-backend.onrender.com
   ```

---

## Build Configuration

Already set in `package.json`:
```json
{
  "scripts": {
    "build": "vite build",
    "vercel-build": "vite build"
  }
}
```

And in `vercel.json`:
```json
{
  "buildCommand": "npm install && npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## Common Issues & Solutions

### Issue: "Permission denied" on vite
**Solution:** Already fixed! The `vercel-build` script handles this.

### Issue: 404 on routes
**Solution:** Already fixed! The `vercel.json` includes rewrites for SPA routing.

### Issue: API calls fail
**Solution:** Update the backend URL in `vercel.json` rewrites.

---

## After Deployment

### Update Backend CORS

Add your Vercel URL to backend's `.env`:
```env
CORS_ORIGIN=https://your-app.vercel.app
```

Then redeploy backend on Render.

### Test Your Deployment

```bash
# Visit your Vercel URL
https://your-app.vercel.app

# Test API connection
https://your-app.vercel.app/api/health
# Should proxy to: https://your-backend.onrender.com/api/health
```

---

## Production Checklist

- [ ] Backend deployed on Render with `DISABLE_REDIS=true`
- [ ] Frontend `vercel.json` updated with backend URL
- [ ] Code pushed to GitHub
- [ ] Vercel project created and deployed
- [ ] Backend CORS updated with Vercel URL
- [ ] Test all features (chat, session, reset)

---

## Automatic Deployments

Vercel automatically redeploys when you push to:
- **main** branch → Production
- **other branches** → Preview deployments

---

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update backend CORS to include custom domain

---

**Your frontend will be live at:** `https://your-project.vercel.app` 🚀
