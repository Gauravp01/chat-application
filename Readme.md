# Real-Time Chat Application

A real-time chat application built with React, Node.js, Express, and Socket.IO that enables multiple users to communicate instantly.

## Features

- Real-time bidirectional messaging
- User join/leave notifications
- Auto-scroll to latest messages
- Responsive UI with message timestamps
- Input validation
- No database required (in-memory storage)

## Tech Stack

**Frontend:** React, Socket.IO Client, CSS3  
**Backend:** Node.js, Express, Socket.IO, CORS

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

Verify installation:
```bash
node --version
npm --version
```

## Installation & Setup

### 1. Clone/Download the Project
```bash
git clone <repository-url>
cd chat-application
```

### 2. Backend Setup
```bash
cd backend
npm install
```

### 3. Frontend Setup
Open a new terminal:
```bash
cd frontend
npm install
```

## Running the Application

### Start Backend (Terminal 1)
```bash
cd backend
npm start
```
Server runs on `http://localhost:5000`

### Start Frontend (Terminal 2)
```bash
cd frontend
npm start
```
App opens automatically at `http://localhost:3000`

## How to Use

1. Open `http://localhost:3000` in your browser
2. Enter a username and click "Join Chat"
3. Start sending messages

**To test real-time features:**
- Open multiple browser tabs
- Join with different usernames
- Send messages and see them appear instantly in all tabs

## Project Structure

```
chat-application/
├── backend/
│   ├── server.js          # Server logic with Socket.IO
│   └── package.json       # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Join.js   # Join page component
│   │   │   └── Chat.js   # Chat interface component
│   │   ├── App.js        # Main container with state management
│   │   └── App.css       # Styles
│   └── package.json      # Frontend dependencies
└── README.md
```

## Socket.IO Events

**Client → Server:**
- `join` - User joins chat
- `send-message` - User sends message
- `disconnect` - User leaves

**Server → Client:**
- `receive-message` - New message broadcast
- `user-joined` - User join notification
- `user-left` - User leave notification

**Connection issues:**
- Ensure both servers are running
- Check backend is on port 5000
- Verify socket URL in `frontend/src/App.js` is `http://localhost:5000`

## Architecture

- **Client-Server** architecture with WebSocket communication
- **React Hooks** for state management (useState, useEffect, useRef)
- **Component-based** design with separation of concerns
- **In-memory storage** using JavaScript Map for active users
