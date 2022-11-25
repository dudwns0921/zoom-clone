const http = require('http');
const { emit } = require('process');
const { v4: uuidv4 } = require('uuid');
const httpServer = http.createServer()
const PORT = 3000
const io = require('socket.io')(httpServer, {
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`)
    socket.join(socket.id)
    socket.on('ping', ()=>{
        socket.broadcast.emit('pong')
    })
    socket.on('send-message', (data)=>{
        const echo = {
            id: uuidv4(),
            message: `echo : ${data.message}`
        }
        socket.to(data.socketId).emit('respond-message', echo)
    })
});
httpServer.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});