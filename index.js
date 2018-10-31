
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

    console.log('User connected');

    socket.on('chat message', function (msg) {

        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {

        console.log('User disconnected');
    });
});

http.listen(3000, () => {
    console.log('Listening on *:3000');
});
