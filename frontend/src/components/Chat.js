import React, { useRef, useEffect } from 'react';

function Chat({ username, message, setMessage, messages, onSendMessage }) {
  const messagesEndRef = useRef(null);

 
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="container">
      <div className="chat-container">
        <div className="chat-header">
          <h2>💬 Chat Room</h2>
          <span className="username-badge">👤 {username}</span>
        </div>

        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index}>
              {msg.type === 'notification' ? (
                <div className="notification">
                  {msg.message}
                </div>
              ) : (
                <div className={`message ${msg.username === username ? 'own-message' : ''}`}>
                  <div className="message-header">
                    <span className="message-username">{msg.username}</span>
                    <span className="message-time">{formatTime(msg.timestamp)}</span>
                  </div>
                  <div className="message-text">{msg.message}</div>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="message-input-container">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="message-input"
          />
          <button 
            type="submit" 
            className="btn-send"
            disabled={!message.trim()}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;