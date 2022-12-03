//Inicialización BaseDatos
const db = require("../_helpers/db");
const Personajes = db.Personajes

module.exports = {
  getAll,
};

async function getAll() {
  return await Personajes.find();
}

