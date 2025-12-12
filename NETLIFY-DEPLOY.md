# Netlify Deployment Guide for RAG Chatbot Frontend

## Quick Deploy to Netlify

### Option 1: Deploy from GitHub (Recommended)

1. **Sign up/Login**: Go to [netlify.com](https://www.netlify.com/)

2. **Import Project**:
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your repositories
   - Select: `Rag-Chatbot-Frontend`

3. **Build Settings** (auto-detected from netlify.toml):
   ```
   Base directory: (leave empty)
   Build command: npm run build
   Publish directory: dist
   ```

4. **Deploy**: Click "Deploy site"

5. **Get Your URL**: 
   - Netlify assigns a random URL like: `https://random-name-12345.netlify.app`
   - You can customize it in: Site settings → Domain management → Options → Edit site name

### Option 2: Drag & Drop Deploy

1. Build locally:
   ```bash
   cd frontend
   npm install
   npm run build
   ```

2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag the `dist` folder onto the page

4. Get your live URL instantly!

## Configuration

The `netlify.toml` file handles:
- ✅ API proxy to backend (no CORS issues)
- ✅ SPA routing (all routes go to index.html)
- ✅ Build settings

## Backend Connection

Make sure your backend is deployed on Render first:
```
Backend URL: https://rag-chatbot-backend-a53p.onrender.com
```

The frontend automatically proxies `/api/*` requests to this backend.

## Testing

After deployment:
1. Visit your Netlify URL
2. Click "Reset" to create a new session
3. Type "news" to test the chatbot
4. First request may take 60s if backend is sleeping (Render free tier)

## Troubleshooting

**502/503 Errors**: 
- Backend is sleeping (Render free tier)
- Wait 60 seconds and retry
- Wake backend by visiting: `https://rag-chatbot-backend-a53p.onrender.com/api/health`

**Build Fails**:
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify `netlify.toml` is in root directory

**API Not Working**:
- Verify backend URL in `netlify.toml`
- Check browser console for errors
- Test backend directly: `https://your-backend.onrender.com/api/health`
