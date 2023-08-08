const express = require("express");
const cors = require("cors");
const session = require("express-session");
const hbs = require('hbs');
const path = require('path');


class Server {
  constructor() {
    this.app = express();
    this.app.set('view engine', 'hbs');
    this.port = process.env.PORT;
    this.usuariosPath= '';

    this.sesiones();
    this.middleawares();
    this.routes();
  }

  middleawares() {
     this.app.use( express.static(path.join(__dirname , '../public')) );
     this.app.use(express.json());
     this.app.use(cors());
  }

  sesiones() {
    this.app.use(
      session({
        secret: "keyboard cat", //Clave
        resave: true, //Forma de almacenamiento
        saveUninitialized: true,
        cookie: { maxAge: 60000 },
      })
    );
  }

  routes() {

    this.app.use(this.usuariosPath, require('../routes/rt_rutas'));
  }

  listen() {
    this.app.listen(this.port, () => {  
      console.log(`Servidor funcionando aqui: http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
