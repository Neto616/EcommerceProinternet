const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.static('public'));
    this.app.use(express.json());
    this.app.use(cors()); // Agrega el middleware de CORS para permitir solicitudes desde otros dominios
  }

  routes() {
    // Configuración del transporte de correo electrónico
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'netoilluminati258@gmail.com',
        pass: process.env.PASSWORD, // Acceder a la contraseña desde las variables de entorno
      },
    });

    this.app.post('/enviarCorreo', (req, res) => {
      // Obtener los datos del formulario del cliente
      const { nombreCompleto, correoElectronico, informacion } = req.body;

      // Configurar el objeto de correo
      const mailOptions = {
        from: 'netoilluminati258@gmail.com',
        to: 'alexrdz1221@gmail.com',
        cc: 'basn160603@gmail.com, leonardo.cantulara@hotmail.com',
        subject: 'Formulario de contacto - EcommerceProInternet',
        text: `Nombre completo: ${nombreCompleto}\nCorreo electrónico: ${correoElectronico}\nInformación: ${informacion}`,
      };

      // Enviar el correo electrónico
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).json({ message: 'Ocurrió un error al enviar el correo.' });
        } else {
          console.log('Email sent: ' + info.response);
          res.json({ message: 'El correo se envió correctamente.' });
        }
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Link del servidor http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
