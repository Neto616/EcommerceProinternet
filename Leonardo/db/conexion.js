const sql = require('mssql')

const sqlConfig = {
  user: process.env.USUARIO,
  password: process.env.CON,
  database: process.env.DATABASE,
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

const conexion=async (instruccion='') => {
 try {
  // make sure that any items are correctly URL encoded in the connection string
  await sql.connect(sqlConfig);
  instrucciones(instruccion);
 } catch (err) {
  // ... error checks
 }
}

const instrucciones=async(instruccion='')=>{
  try{
    const result=await sql.query `${instruccion}`;
    //const result=await sql.query `Select * FROM Usuario`;
    console.dir(result);
  }catch(err){

  }
}




const insertar=(nombre,correo)=>{
  const query = `INSERT INTO Usuario (nombre,correo) VALUES (@nombre,@correo)`;
  sql.connect(sqlConfig)
    .then((pool) => {
      //console.log(id,nombre,correo)
      return pool.request()
        .input('nombre', sql.NVarChar, nombre)
        .input('correo', sql.NVarChar, correo)
        .query(query);
    })
    .then((result) => {
      console.log('Nuevo usuario insertado correctamente.');
      
    })
    .catch((err) => {
      console.error('Error al insertar el usuario:', err);
     
    });
// ... Otras rutas y configuraciones ...
 
}
const buscar=(nombre,correo)=>{
  const query = `Select * From Usuario where nombre=@nombre and correo=@correo`;
  sql.connect(sqlConfig)
    .then((pool) => {
      return pool.request()
        .input('nombre', sql.NVarChar, nombre)
        .input('correo', sql.NVarChar, correo)
        .query(query);
    })
    .then((result) => {
      console.log('usuario encontrado',result);
      
    })
    .catch((err) => {
      console.error('Error al buscar el usuario:', err);
     
    });
// ... Otras rutas y configuraciones ...
 
}

const borrar=(nombre,correo)=>{
  const query = `Delete Usuario where nombre=@nombre and correo=@correo`;
  sql.connect(sqlConfig)
    .then((pool) => {
      return pool.request()
        .input('nombre', sql.NVarChar, nombre)
        .input('correo', sql.NVarChar, correo)
        .query(query);
    })
    .then((result) => {
      console.log('usuario borrado correctamente',result);
      
    })
    .catch((err) => {
      console.error('No se encuenra el usuario:', err);
     
    });
// ... Otras rutas y configuraciones ...
 
}

const actualizar=(nombre,correo,nuevoNombre,nuevoCorreo)=>{
  const query = `update Usuario set nombre=@nuevoNombre, correo=@nuevoCorreo where nombre=@nombre and correo=@correo`;
  sql.connect(sqlConfig)
    .then((pool) => {
      return pool.request()
        .input('nombre', sql.NVarChar, nombre)
        .input('correo', sql.NVarChar, correo)
        .input('nuevoNombre',sql.NVarChar,nuevoNombre)
        .input('nuevoCorreo',sql.NVarChar,nuevoCorreo)
        .query(query);
    })
    .then((result) => {
      console.log('usuario borrado correctamente',result);
      
    })
    .catch((err) => {
      console.error('No se encuenra el usuario:', err);
     
    });
// ... Otras rutas y configuraciones ...
 
}


module.exports={
    conexion,
    instrucciones,
    insertar,
    buscar,
    borrar,
    actualizar
}
