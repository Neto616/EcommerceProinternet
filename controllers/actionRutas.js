const nodemailer = require('nodemailer')
const { response, request } = require('express');

const home = ( req = request, res = response) =>{
    req.session.usuario = {
        nombre: "Nestor Ivan",
        rol: "Admin",
       };

    res.render('index');
}

const opinion = ( req = request, res = response) =>{
    res.render('enviarOpinion');
}

const initSesion = ( req = request, res = response) =>{
    res.render('iniciarSesion');
}

const crearSesion = ( req = request, res = response) =>{
    res.render('crearSesion')
}

const cerrar = ( req = request, res = response) =>{
    res.send('Se cerro la sesion')
}

const sesion = ( req = request, res = response) =>{
    res.json(req.session)
}

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'netoilluminati258@gmail.com',
      pass: process.env.PASSWORD, // Acceder a la contraseña desde las variables de entorno
    },
  });

  const enviarCorreo = (req = request, res = resp) => {
    // Obtener los datos del formulario del cliente
    const { nombreCompleto, correoElectronico, informacion } = req.body;

    // Configurar el objeto de correo
    const mailOptions = {
      from: 'netoilluminati258@gmail.com',
      to: 'alexrdz1221@gmail.com',
      cc: 'basn160603@gmail.com, leonardo.cantulara@hotmail.com',
      bcc: 'armandi.cantu@gmail.com',
      subject: 'Formulario de contacto - EcommerceProInternet',
      text: `Nombre completo: ${nombreCompleto}\nCorreo electrónico: ${correoElectronico}\nInformación: ${informacion}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Ocurrió un error al enviar el correo.' });
        } else {
          console.log('Email sent: ' + info.response);
          return res.json({ message: 'El correo se envió correctamente.' });
        
        }
      });
}


module.exports = {
    home,
    opinion,
    initSesion,
    crearSesion,
    cerrar,
    sesion,
    enviarCorreo,
}

/**    
         // Enviar el correo electrónico
         transporter.sendMail(mailOptions, (error, info) => {
           if (error) {
             console.log(error);
             return res.status(500).json({ message: 'Ocurrió un error al enviar el correo.' });
           } else {
             console.log('Email sent: ' + info.response);
             return res.json({ message: 'El correo se envió correctamente.' });
           
           }
         });
       });
 */