const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

// Use dotenv to hide API Key
require('dotenv').config();

// MailGun authentication
const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN
    }
}

// configure transporter
const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, message, cb) => {
    // configure mail options
    const mailOptions = {
        from: 'kaitlyn.salemi@gmail.com',
        to: 'kaitlyn.salemi@gmail.com',
        "h:Reply-To": `${ name } <${ email }>`,
        subject: 'Sent From Your Website',
        text: message
    }

    transporter.sendMail(mailOptions, function(err, data) {
        if(err) {
            cb(err, null)
        } else {
            cb(null, data)
        }

    })
}

module.exports = sendMail;

