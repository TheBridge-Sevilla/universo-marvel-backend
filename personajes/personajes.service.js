//Inicialización BaseDatos

const db = require("../_helpers/db");
const Personajes = db.Personajes;
//const ObjectId = require("mongodb").ObjectId;





module.exports = {
  getAll
};

async function getAll() {
  return await Personajes.find();
}

