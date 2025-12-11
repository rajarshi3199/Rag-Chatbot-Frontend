# RAG Chatbot - Frontend

This is the React-based frontend for the RAG (Retrieval-Augmented Generation) News Chatbot. It provides the user interface where users can chat with the assistant, view retrieved sources, and manage chat sessions.

## ✨ Features

- Chat interface with user and assistant messages
- Session ID display and copy functionality
- Reset session button to clear chat history
- Shows retrieved sources (RAG references)
- SCSS-based styling
- Connects to backend using REST API
- Real-time message display
- Responsive design for desktop and mobile

## 🛠 Tech Stack

- **React** (Vite)
- **SCSS**
- **Axios**
- **JavaScript (ES6)**

## 📁 Folder Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Top navigation bar with session info
│   │   ├── MessageList.jsx # Chat messages display
│   │   └── ChatInput.jsx   # Input form and send button
│   ├── styles/
│   │   └── App.scss        # All styling
│   ├── App.jsx             # Main app component
│   └── main.jsx            # React entry point
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── jsconfig.json           # JavaScript config
├── package.json            # Dependencies
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Backend running on port 5000

### Installation

```bash
cd frontend
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📖 Component Overview

### Header.jsx
Top navigation bar displaying:
- App logo and title
- Current session ID with copy button
- Reset button to start new session

**Props:** None (uses global state)

### MessageList.jsx
Displays chat conversation:
- User messages (right-aligned, blue)
- Assistant messages (left-aligned, gray)
- Retrieved sources (when RAG mode active)
- Loading state with spinner

**Props:** `messages`, `loading`

### ChatInput.jsx
Input form for user messages:
- Text input field
- Send button
- Handles Enter key submission
- Disables during processing

**Props:** `onSendMessage`, `disabled`

### App.jsx
Main application component:
- Manages chat state (messages, session ID)
- Handles API communication
- Manages loading and error states
- Session persistence

**State:**
- `messages`: Array of chat messages
- `sessionId`: Current session identifier
- `loading`: Loading indicator
- `error`: Error messages

## 🔌 API Integration

### REST API Endpoints

**Create Session**
```javascript
POST /api/session/create
// Returns { sessionId: "uuid" }
```

**Send Message**
```javascript
POST /api/chat/send
Body: { message: "user query", sessionId: "uuid" }
// Returns { answer: "response", context: [...], sessionId: "uuid" }
```

**Delete Session**
```javascript
DELETE /api/session/:sessionId
// Returns { message: "Session deleted" }
```

## 🎨 Styling

The app uses SCSS for styling with these key features:

- **Modern UI** with Google Fonts (Inter)
- **Responsive design** for mobile, tablet, desktop
- **Gradient background** with radial accents
- **Elevated card** for chat input
- **Color scheme**:
  - Primary: `#667eea` (purple)
  - User messages: `#3182ce` (blue)
  - Assistant messages: `#e2e8f0` (light gray)
  - Background: `#f7fafc` (off-white)

### Customizing Colors

Edit `src/styles/App.scss`:
```scss
$primary: #667eea;
$primary-dark: #5568d3;
$user-msg-bg: #3182ce;
$assistant-msg-bg: #e2e8f0;
```

## 🚨 Troubleshooting

**Blank page or "Cannot connect to server"**
- Ensure backend is running on `http://localhost:5000`
- Check browser console for API errors
- Verify backend is accessible: `curl http://localhost:5000`

**Messages not sending**
- Check Network tab in browser DevTools
- Verify API endpoint is correct in `App.jsx`
- Check backend logs for errors

**Styling looks broken**
- Ensure `npm install` completed successfully
- Clear browser cache: `Ctrl+Shift+Delete`
- Rebuild: `npm run build`

**Build fails**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version: `node --version` (must be 18+)

## 📦 Dependencies

- **react** (^18.x): UI framework
- **react-dom** (^18.x): DOM rendering
- **axios** (^1.x): HTTP client
- **vite** (^4.x): Build tool and dev server

## 🔒 Environment Variables

No environment variables required for frontend. The backend URL is hardcoded to `http://localhost:5000` in `App.jsx`.

To change the backend URL, edit `App.jsx`:
```javascript
const API_BASE_URL = 'http://your-backend-url:5000';
```

## 📝 License

MIT License - see ../LICENSE for details

## 🤝 Contributing

See main README for contribution guidelines.

---

Built with React and Vite for fast development
