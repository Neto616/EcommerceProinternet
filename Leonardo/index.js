require('dotenv').config();

const Server = require('./models/server');
const server = new Server();

<<<<<<< HEAD:Leonardo/index.js

server.listen();





=======
// const express = require("express");
// const nodemailer = require('nodemailer');
// const hbs = require('nodemailer-express-handlebars');
// const app = express();

// const transporter = nodemailer.createTransport({
//     service: "Gmail",  
//     auth: {
//         user: "netoilluminati258@gmail.com",
//         pass: process.env.PASSWORD // Acceder a la contraseña desde las variables de entorno
//     },
// });

// const multiples = [
//     'basn160603@gmail.com',
//     'leonardo.cantulara@hotmail.com'
// ];

// const mail = {
//     from: 'netoilluminati258@gmail.com',
//     to: 'alexrdz1221@gmail.com',
//     cc: multiples.join(', '), // Agrega los correos en copia como una cadena separada por comas
//     subject: 'Correo prueba 4',
//     text: 'Creo que ya quedo',
//     html: "<b>Holaaaa ✔</b>",
// };

// transporter.sendMail(mail, function(error, info){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

server.listen();

console.log("Si jala el link perres");
>>>>>>> d4e3aa8c13075c30ae1089ceda2e195cb73325a5:index.js
