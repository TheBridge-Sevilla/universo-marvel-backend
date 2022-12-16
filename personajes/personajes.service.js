//Inicialización BaseDatos
const db = require("../_helpers/db");
const Personajes = db.Personajes;

module.exports = {
  getAll,
};

async function getAll(req) {
  const limit = parseInt(req.query.limit, 10) || 10;
  const page = parseInt(req.query.page, 10) || 10;
  const filter = req.query.filter != "undefined" ? req.query.filter : "";
  const paginacionPersonajes = await Personajes.paginate(
    { name: { $regex: filter, $options: "i" } },
    { limit, page }
  );
  return paginacionPersonajes;
}
