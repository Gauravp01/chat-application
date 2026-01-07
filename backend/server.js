const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);


app.use(cors());

const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});


const activeUsers = new Map();


io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  
  socket.on('join', (username) => {
    activeUsers.set(socket.id, username);
    
    
    io.emit('user-joined', {
      username: username,
      message: `${username} joined the chat`,
      timestamp: new Date().toISOString()
    });

    console.log(`${username} joined the chat`);
  });

  
  socket.on('send-message', (data) => {
    const username = activeUsers.get(socket.id);
    
    
    io.emit('receive-message', {
      username: username,
      message: data.message,
      timestamp: new Date().toISOString()
    });
  });

  
  socket.on('disconnect', () => {
    const username = activeUsers.get(socket.id);
    
    if (username) {
      
      io.emit('user-left', {
        username: username,
        message: `${username} left the chat`,
        timestamp: new Date().toISOString()
      });

      activeUsers.delete(socket.id);
      console.log(`${username} left the chat`);
    }
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});