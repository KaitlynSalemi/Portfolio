const express = require("express");
const path = require('path');
const app = express();
const PORT = 8080

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/client'));

//Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/index.html'));
})

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`))