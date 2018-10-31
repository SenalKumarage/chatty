
let app = require('express')();
let http = require('http').Server(app);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
    console.log('Listening on *:3000');
});
