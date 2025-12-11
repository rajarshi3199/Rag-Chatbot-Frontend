import React, { useState, useRef, useEffect } from 'react';

function ChatInput({ onSend, isLoading }) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit(e);
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 200) + 'px';
    }
  }, [message]);

  return (
    <form onSubmit={handleSubmit} className="chat-input-form">
      <div className="input-container">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me about news... (Ctrl+Enter to send)"
          className="input-field"
          disabled={isLoading}
          rows={1}
        />
        <button
          type="submit"
          className={`send-button ${isLoading ? 'loading' : ''}`}
          disabled={isLoading || !message.trim()}
        >
          {isLoading ? '⏳' : '➤'}
        </button>
      </div>
      <div className="input-hint">Ctrl+Enter to send</div>
    </form>
  );
}

export default ChatInput;
