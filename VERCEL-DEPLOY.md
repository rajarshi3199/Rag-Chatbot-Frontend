# Vercel Deployment Guide (EASIEST METHOD)

## One-Click Deploy to Vercel

### Step 1: Click the Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rajarshi3199/Rag-Chatbot-Frontend)

### Step 2: Manual Deploy (Alternative)

1. **Sign in to Vercel**: https://vercel.com/login
   - Use your GitHub account

2. **Import Project**:
   - Go to: https://vercel.com/new
   - Select "Import Git Repository"
   - Choose: **`Rag-Chatbot-Frontend`**
   - Click "Import"

3. **Configure** (auto-detected from vercel.json):
   ```
   Framework: Vite
   Build Command: npm run build
   Output Directory: dist
   ```

4. **Deploy**: Click "Deploy"

5. **Wait 2 minutes** for build & deployment

6. **Get Your Live URL**: 
   - Will be: `https://your-project.vercel.app`
   - Custom domain available in settings

## ✅ Your Chatbot is Live!

After deployment, you'll get a URL like:
- `https://rag-chatbot-frontend.vercel.app`

## Features

- ✅ **Automatic HTTPS**
- ✅ **Global CDN**
- ✅ **Auto-deploys** on Git push
- ✅ **API proxy** to Render backend (no CORS issues)
- ✅ **FREE tier** with generous limits

## Testing

1. Visit your Vercel URL
2. Type "news" to test the chatbot
3. First request may take 30-60s (backend waking up)
4. Enjoy your live RAG chatbot!

## Troubleshooting

**503 Error**: Backend sleeping (Render free tier)
- Wait 60 seconds and retry
- Or wake it: Visit `https://rag-chatbot-backend-a53p.onrender.com/api/health`

**Build Fails**: 
- Check deployment logs in Vercel dashboard
- Ensure all dependencies in package.json
- Verify vercel.json exists

**API Not Working**:
- Check vercel.json has correct backend URL
- Test backend: `https://rag-chatbot-backend-a53p.onrender.com/api/health`
