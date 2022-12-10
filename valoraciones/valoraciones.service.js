//Inicialización BaseDatos
const db = require("../_helpers/db");
const Valoracion = db.Valoraciones;

module.exports = {
  getAll,
};

async function getAll() {
  return await Valoracion.find();
}