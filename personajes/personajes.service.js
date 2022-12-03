//Inicialización BaseDatos
const db = require("../_helpers/db");
const Personajes = db.Personajes;

module.exports = {
  getAll,
};
const myCustomLabels = {
  totalDocs: "itemCount",
  docs: "itemsList",
  limit: "perPage",
  page: "Página",
  nextPage: "Siguiente",
  prevPage: "Anterior",
  totalPages: "pageCount",
  pagingCounter: limit * page,
  meta: "paginator",
};

async function getAll(req) {
  const options = {
    page: 1,
    offset: req.query.offset,
    limit: req.query.limit,
    customLabels: myCustomLabels,
  };

  return await Personajes.find()
    .paginate({}, { limit: options })
    .then(function (result) {
      return result;
    });
}
