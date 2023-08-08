const express = require('express');
const cors = require('cors');
const path=require('path')
const hbs = require('hbs');

class Server {
    constructor(){
        
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath='';
        this.app.set('view engine', 'hbs');

        this.middleawares();

        this.routes();
    }

    middleawares(){
        this.app.use( express.static(path.join(__dirname,'../public')))
        this.app.use(express.json());
        this.app.use(cors());

        

        this.app.set('view-engine', 'hbs');
    }

    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuarios'))
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log (`Link del servidor http://localhost:${this.port}`)
        })
    }

}

module.exports = Server;