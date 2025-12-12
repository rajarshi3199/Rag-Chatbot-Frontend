# Cloudflare Pages Deployment Guide

## Quick Deploy to Cloudflare Pages (FREE & FAST)

### Step 1: Sign Up

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com/sign-up)
2. Create a free account (no credit card required)

### Step 2: Deploy

1. **Login to Cloudflare Dashboard**: [dash.cloudflare.com](https://dash.cloudflare.com)

2. **Go to Pages**:
   - Click "Workers & Pages" in left sidebar
   - Click "Create application"
   - Click "Pages" tab
   - Click "Connect to Git"

3. **Connect GitHub**:
   - Authorize Cloudflare to access your GitHub
   - Select repository: **`Rag-Chatbot-Frontend`**
   - Click "Begin setup"

4. **Build Configuration**:
   ```
   Project name: rag-chatbot (or any name you want)
   Production branch: main
   Framework preset: Vite
   Build command: npm run build
   Build output directory: dist
   ```

5. **Environment Variables**: (Leave empty, none needed)

6. **Click "Save and Deploy"**

7. **Wait 2-3 minutes** for deployment to complete

8. **Get Your Live URL**: 
   - Will be: `https://rag-chatbot.pages.dev`
   - Or custom: `https://your-project-name.pages.dev`

## ✅ Your Chatbot is Live!

Your chatbot will be publicly accessible at the Cloudflare Pages URL.

## Why Cloudflare Pages?

- ✅ **FREE forever** (unlimited bandwidth on free tier)
- ✅ **Fast global CDN**
- ✅ **Automatic HTTPS**
- ✅ **No usage limits** (unlike Netlify)
- ✅ **Auto-deploys** on every Git push

## Testing

After deployment:
1. Visit your Cloudflare Pages URL
2. Type "news" to test the RAG chatbot
3. First request may take 30-60s (backend waking up on Render)
4. All subsequent requests will be fast!

## Troubleshooting

**503 Error on first use**: 
- Backend (Render free tier) is sleeping
- Wait 60 seconds, then retry
- Wake backend manually: Visit `https://rag-chatbot-backend-a53p.onrender.com/api/health`

**Build Fails**:
- Check build logs in Cloudflare dashboard
- Verify all files are committed to Git
- Ensure `package.json` has all dependencies

**API proxy not working**:
- Check `public/_redirects` file exists
- Verify backend URL in `_redirects`
- Test backend: `https://rag-chatbot-backend-a53p.onrender.com/api/health`
