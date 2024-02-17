const express = require('express');
const socketIO = require('socket.io');

const SERVER_PORT = process.env.PORT || 3000;

// App setup
const app = express();
app.use(express.static('views'));

// Start server
const server = app.listen(SERVER_PORT, () => {
    console.log(`Server started. http://localhost:${SERVER_PORT}/`);
});

// Socket setup
const serverIO = socketIO(server);

serverIO.on('connection', (socket) => {
    console.log('Socket connection made', socket.id);
    // socket.send('Hello from server'); // send to all clients "message" event
    socket.emit('message', 'Hello from server'); // send to only the client that connected
    socket.on('message', (data) => {
        console.log(`Server : ${data}`);
    });

    
    socket.on('chat', (data) => { 
        // serverIO.emit('new_chat_message', data); // send to all clients "new_chat_message" event
        // console.log(JSON.stringify(serverIO.sockets));
        // serverIO.sockets.emit('new_chat_message', data); // send to all clients "new_chat_message" event
        // socket.broadcast.emit('new_chat_message', data); // send to all clients except the client that sent the message
        // socket.emit('new_chat_message', data); // send to only the client that sent the message
        console.log(data); 
    });

    socket.on('join_group', (group_name) => {
        socket.join(group_name);
        console.log(`Joined group ${group_name}`);
    })

    socket.on('group_chat', (data) => {
        serverIO.to(data.group_name).emit('new_group_message', data);
        console.log(data);
    })
 
    socket.on('leave_group', (group_name) => {
        socket.leave(group_name);
        console.log(`Left group ${group_name}`);
    })
});
