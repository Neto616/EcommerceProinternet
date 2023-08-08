//Variables de entorno 



//Paquetes

var session = require('express-session');

//Variables o constantes


//codigo
const sesion = () =>{
    
    app.use(session({
        
        secret: 'keyboard cat',
        name: "Tilin",
        resave: false,
        saveUninitialized: false

    }))
    
}




module.exports = sesion;
