import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from './components/Header';
import MessageList from './components/MessageList';
import ChatInput from './components/ChatInput';
import './styles/App.scss';

const API_BASE_URL = '/api';

function App() {
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  // Initialize session on component mount
  useEffect(() => {
    createNewSession();
  }, []);

  // Scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const createNewSession = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/session/create`);
      setSessionId(response.data.sessionId);
      setMessages([]);
      setError(null);
      console.log('New session created:', response.data.sessionId);
    } catch (err) {
      console.error('Error creating session:', err);
      setError('Failed to create session');
    }
  };

  const sendMessage = async (messageText) => {
    if (!sessionId || !messageText.trim()) return;

    // Add user message to UI
    const userMessage = {
      role: 'user',
      content: messageText,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/chat/send`, {
        message: messageText,
        sessionId,
      });

      const assistantMessage = {
        role: 'assistant',
        content: response.data.answer,
        context: response.data.context,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Error sending message:', err);
      const errorMessage = {
        role: 'assistant',
        content: `Sorry, I encountered an error: ${err.response?.data?.error || err.message}`,
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setError(err.response?.data?.error || 'Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  const clearSession = async () => {
    if (!sessionId) {
      // No session to clear; just create a new one
      createNewSession();
      return;
    }

    if (!window.confirm('Are you sure you want to clear this session? This cannot be undone.')) {
      return;
    }

    try {
      const response = await axios.delete(`${API_BASE_URL}/session/${sessionId}`);
      // Treat non-2xx responses as non-fatal: create a new session anyway
      if (response.status >= 200 && response.status < 300) {
        createNewSession();
      } else {
        console.warn('Unexpected response clearing session:', response.status, response.data);
        createNewSession();
      }
    } catch (err) {
      console.error('Error clearing session:', err.response?.data || err.message || err);
      // Even if clearing failed, proceed to create a fresh session so the UI recovers
      setError('Failed to clear session (server error) — starting a fresh session');
      createNewSession();
    }
  };

  return (
    <div className="app">
      <Header sessionId={sessionId} onClearSession={clearSession} />
      <main className="chat-container">
        <MessageList messages={messages} />
        <div ref={messagesEndRef} />
      </main>
      <footer className="chat-footer">
        {error && <div className="error-message">⚠️ {error}</div>}
        <ChatInput onSend={sendMessage} isLoading={isLoading} />
      </footer>
    </div>
  );
}

export default App;
