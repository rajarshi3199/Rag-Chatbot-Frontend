import React from 'react';

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <div className="empty-state">
          <h2>Welcome to RAG Chatbot</h2>
          <p>Ask me anything about the latest news and trends!</p>
        </div>
      ) : (
        messages.map((msg, idx) => (
          <div key={idx} className={`message message-${msg.role}`}>
            <div className="message-header">
              <span className="message-role">
                {msg.role === 'user' ? '👤 You' : '🤖 Assistant'}
              </span>
              {msg.timestamp && (
                <span className="message-time">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              )}
            </div>
            <div className="message-content">{msg.content}</div>
            {msg.context && msg.context.length > 0 && (
              <div className="message-context">
                <details>
                  <summary>📚 Sources ({msg.context.length})</summary>
                  <div className="sources">
                    {msg.context.map((ctx, i) => (
                      <div key={i} className="source">
                        <div className="source-header">
                          <strong>Source {ctx.index}</strong>
                          <span className="source-score">
                            Relevance: {(ctx.score * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="source-name">{ctx.source}</div>
                        <p className="source-text">{ctx.summary.substring(0, 150)}...</p>
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default MessageList;
