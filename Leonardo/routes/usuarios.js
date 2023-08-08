const {Router}  = require('express')
const { usuarios } = require('../controllers/usuarios');

const router=new Router();



router.get('/',(req,res)=>{
    res.render('crearUsuario');

    
    // const {nombre, correo } = req.body;

    // usuar(nombre,correo)
})
router.post('/crear-usuario', (req, res) => {
    // Obtener los datos del formulario del cliente
   
    const nuevoUsuario={
        nombre:req.body.nombre,
        correo:req.body.correo
    };
    // console.log(nuevoUsuario.nombre);
    // console.log(nuevoUsuario.correo);
    usuarios.insertar(nuevoUsuario.nombre,nuevoUsuario.correo);

   

})

router.get('/buscar',(req,res)=>{
    res.render('buscarUsuario');

    
    
})
router.post('/busqueda-usuario', (req, res) => {
    
   
    const nuevoUsuario={
        nombre:req.body.nombre,
        correo:req.body.correo
    };
    
    usuarios.select(nuevoUsuario.nombre,nuevoUsuario.correo);

    

})
router.get('/eliminar-cuenta',(req,res)=>{
    res.render('borrarUsuario');

    
    
})
router.post('/cuenta-eliminada', (req, res) => {
    
   
    const nuevoUsuario={
        nombre:req.body.nombre,
        correo:req.body.correo
    };
    
    usuarios.delete(nuevoUsuario.nombre,nuevoUsuario.correo);

    

})

router.get('/modificar-cuenta',(req,res)=>{
    res.render('modificarUsuario');

    
    
})


router.post('/cuenta-modficiada', (req, res) => {
    
   
    const nuevoUsuario={
        nombre:req.body.nombre,
        correo:req.body.correo,
        nuevoCorreo:req.body.nuevoCorreo,
        nuevoNombre:req.body.nuevoNombre
    };
    
    usuarios.update(nuevoUsuario.nombre,nuevoUsuario.correo,nuevoUsuario.nuevoNombre,nuevoUsuario.nuevoCorreo);

    

})

    

module.exports=router;





