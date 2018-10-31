
let app = require('express')();
let http = require('http').Server(app);

app.get('/', (req, res) => {
    res.send('<h1>Hello Senal</h2>');
});

http.listen(3000, () => {
    console.log('Listening on *:3000');
});
