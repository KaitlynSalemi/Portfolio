const express = require("express");
const path = require('path');
const app = express();
const PORT = 8080

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + '/client'));

//Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/index.html'));
})

app.post('/email', (req, res) => {
    console.log('Form Data: ', req.body);
    res.json('message data received!')
})

// Listening on the Port
app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`))