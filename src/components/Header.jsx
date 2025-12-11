import React from 'react';

function Header({ sessionId, onClearSession }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h1><span className="logo">📰</span> RAG Chatbot</h1>
          <p>Retrieval-Augmented Generation News Assistant</p>
        </div>
        <div className="header-actions">
          <div className="session-info">
            <span>Session ID:</span>
            <code>{sessionId || '—'}</code>
            <button
              className="copy-button"
              onClick={() => {
                if (!sessionId) return;
                navigator.clipboard.writeText(sessionId);
                alert('Session ID copied!');
              }}
              title="Copy session ID"
              disabled={!sessionId}
            >
              📋
            </button>
          </div>
          <button className="reset-button" onClick={onClearSession} title="Clear session">
            🔄 Reset
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
