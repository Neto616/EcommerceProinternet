const express = require("express");
const cors = require("cors");
const session = require("express-session");

class Server {
  constructor() {
    this.app = express();

    this.port = process.env.PORT;

    this.sesiones();
    this.middleawares();
    this.routes();
  }

  middleawares() {
    // this.app.use( express.static('public') );
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
    // this.app.use(cors());
    this.app.get("/", (req, res) => {
      req.session.usuario = {
        nombre: "Nestor Ivan",
        rol: "Admin",
      };

      req.session.visitas = req.session.visitas ? ++req.session.visitas : 1;
      res.send(`El usuario: ${req.session.usuario.nombre}\ncon rol: ${req.session.usuario.rol}\nha visitado esta pagina ${req.session.visitas} veces`);
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor funcionando aqui: http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
