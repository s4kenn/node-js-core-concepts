const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express()

const PORT = 3000
const server = http.createServer(app)

// initate socket.io and then  attach that initiate with http server
const io = socketIo(server)

app.use(express.static('public'))

// connection is established when client connects to server -> connection event is fired

const users = new Set()

io.on("connection", (socket) => {
    console.log(`A user is now connected`);

    // handle users when they will join the chat
    socket.on('join', (userName) => {
        users.add(userName)
        socket.userName = userName

        // when a new user joins we need to broadcast the message that a new user has joined 
        io.emit('userJoined', userName)

        // Send the updated user list to all clients
        io.emit('userList', Array.from(users))


    })


    // handle incoming chat messages

    socket.on('chatMessage', (message) => {
        // broadcast the message to all connected clients
        io.emit('chatMessage', message)
    })

    // handle user disconnection
    socket.on('disconnect', () => {
        console.log(`An user is disconnected`);
        users.forEach(user => {
            if (user == socket.userName) {
                users.delete(user)
                io.emit('userLeft', user);
                io.emit('userList', Array.from(users))
            }
        })
    })



})


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})