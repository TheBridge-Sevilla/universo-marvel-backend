//Inicialización BaseDatos
const db = require("../_helpers/db");
const Personajes = db.Personajes;

module.exports = {
  getAll,
};

async function getAll(req) {
  const limit = parseInt(req.query.limit, 10) || 10;
  const page = parseInt(req.query.page, 10) || 10
  console.log(req)
  const paginacionPersonajes = await Personajes.paginate({}, { limit, page })
  return paginacionPersonajes
}
