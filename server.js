const express = require('express');
const path = require('path');
// const sendMail = require('./mail');
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Conection to the client folder
app.use(express.static(__dirname + '/client'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

// app.post('/email', (req, res) => {
//   const { name, email, message } = req.body;

//   sendMail(name, email, message, function (err, data) {
//     if (err) {
//       res.status(500).json({ message: 'Internal Error' });
//     } else {
//       res.json({ message: 'Email sent!!' });
//     }
//   });
// });

// Listening on the Port
app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));
