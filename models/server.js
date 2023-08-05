const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

class Server {
    constructor(){
        
        this.app = express();
        this.port = process.env.PORT;

        this.middleawares();
        this.routes();
    }

    middleawares(){
        this.app.use( express.static('public'));
        this.app.use(cors()); // Agrega el middleware de CORS para permitir solicitudes desde otros dominios

        // Configuración del transporte de correo electrónico
        const transporter = nodemailer.createTransport({
            service: "Gmail",  
            auth: {
                user: "netoilluminati258@gmail.com",
                pass: process.env.PASSWORD // Acceder a la contraseña desde las variables de entorno
            },
        });

        // Definir correos electrónicos en copia
        const multiples = ['basn160603@gmail.com', 'leonardo.cantulara@hotmail.com'];

        // Configurar el objeto de correo
        const mail = {
            from: 'netoilluminati258@gmail.com',
            to: 'alexrdz1221@gmail.com',
            cc: multiples.join(', '), // Agrega los correos en copia como una cadena separada por comas
            subject: 'Correo prueba 4',
            text: 'Creo que ya quedo',
            html: "<b>Holaaaa ✔</b>",
        };

        // Enviar el correo cuando se inicie el servidor
        transporter.sendMail(mail, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

    routes(){

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log (`Link del servidor http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;
