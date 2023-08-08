//const sql = require("mssql");
const { insertar,buscar, borrar,actualizar} = require("../db/conexion");

const usuarios = {
  select: (nombre,correo) => {
    try {
      buscar(nombre, correo);
    } catch (err) {
      console.log(err);
    }
  },

  insertar: (nombre, correo) => {
    try {
      insertar(nombre, correo);
    } catch (err) {
      console.log(err);
    }
  },
  update: (nombre,correo,nuevoNombre,nuevoCorreo) => {
    try {
      actualizar(nombre, correo,nuevoNombre,nuevoCorreo);
    } catch (err) {
      console.log(err);
    }
  },
  delete: (nombre,correo) => {
    try {
      borrar(nombre, correo);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = { usuarios };
