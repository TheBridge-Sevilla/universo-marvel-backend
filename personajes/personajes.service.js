//Inicialización BaseDatos
const db = require("../_helpers/db");
const Personajes = db.Personajes

module.exports = {
  getAll
};
/*  const myCustomLabels = {
  totalDocs: "itemCount",
  docs: "itemsList",
  limit: "perPage",
  page: "currentPage",
  nextPage: "next",
  prevPage: "prev",
  totalPages: "pageCount",
  pagingCounter: "slNo",
  meta: "paginator",
}; */
 
const options = {
  page: 1,
  limit: 10,
 // customLabels: myCustomLabels,
};
async function getAll() {
  return await Personajes.find().paginate({}, options).then(function (result) {
    // ...
  });
}
