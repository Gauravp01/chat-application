import React from 'react';

function Join({ username, setUsername, onJoin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onJoin(username);
    }
  };

  return (
    <div className="container">
      <div className="join-container">
        <h1>💬 Real-Time Chat</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
            maxLength={20}
          />
          <button 
            type="submit" 
            className="btn-primary"
            disabled={!username.trim()}
          >
            Join Chat
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;