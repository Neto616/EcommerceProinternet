const { Router } = require ( 'express' );
const { home, cerrar, crearSesion, sesion, initSesion, opinion, enviarCorreo } = require('../controllers/actionRutas');

const router = Router();

router.get('/', home);

router.get('/enviar-opinion', opinion);

router.get('/iniciar-sesion', initSesion);

router.get('/sesion', sesion);

router.get('/crear-sesion', crearSesion);

router.get('/cerrar-sesion', cerrar);

router.post('/enviar-correo', enviarCorreo)

// router.get('/enviar')

module.exports = router;