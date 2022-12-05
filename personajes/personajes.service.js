//Inicialización BaseDatos
const db = require("../_helpers/db");
const Personajes = db.Personajes;

module.exports = {
  getAll,
};

async function getAll(req) {
  const { offset,limit } = req.query
  return await Personajes.paginate({}, { offset: offset, limit: limit }).then(function (result) { return result });
}
