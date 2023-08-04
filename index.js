require ('dotenv').config();

const Server = require('./models/server');
const server = new Server();

const express = require("express");
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const app = express();

const transporter = nodemailer.createTransport({
    service: "Gmail",  
    auth: {
        user: "netoilluminati258@gmail.com", pass: "gnavdkfqtkaovggq"
    },
});

const multiples = [

    'alexrdz1221@gmail.com',
    'basn160603@gmail.com',
    'leonardo.cantulara@hotmail.com'

]

multiples.toString();

const mail = {
    form: 'netoilluminati258@gmail.com',
    to: multiples,
    bcc: 'armandi.cantu@gmail.com',
    subject: 'Correo prueba 4',
    text: 'Creo que ya quedo',
    html: "<b>Holaaaa ✔</b>",
    pass: 'gnavdkfqtkaovggq'
};

transporter.sendMail(mail, function(error, info){
    if (error) {
   console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
  
    }
  });

server.listen();

console.log("Si jala el link perres")