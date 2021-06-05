const express = require('express');
const app = express();
const http = require('http');
const socketIo = require('socket.io');
// const path = require('path');

const PORT = 3000 || process.env.PORT

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: ['http://localhost:3001']
  }
});

// app.use(express.static(path.join(__dirname, '/client/public')))
// console.log(path.join('/client/public'))

io.on('connection', socket => {
  console.log(`new connection ${socket.id}`)
  socket.emit('connection', 'front and back wired up')
  socket.emit('message', 'Working...');
})


server.listen(PORT, () => console.log(`server spinning on port ${PORT}`));
