//Inicialización BaseDatos
const db = require("../_helpers/db");
const Personajes = db.Personajes;
const Valoraciones = db.Valoraciones;
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  getAll,
};

async function getAll(req) {
  const limit = parseInt(req.query.limit, 28) || 28;
  const page = parseInt(req.query.page, 10) || 10;
  const filter = req.query.filter != "undefined" ? req.query.filter : "";
  const paginacionPersonajes = await Personajes.paginate(
    { name: { $regex: filter, $options: "i" } },
    { limit, page }
  );

  let valoraciones = [];
  for (let personaje of paginacionPersonajes.docs) {
    valoracionesPersonaje = await Valoraciones.find({
      personaje: ObjectId(personaje._id),
    });

    valoracionMedia =
      valoracionesPersonaje.reduce(
        (accumulator, currentValue) => accumulator + currentValue.valoracion,
        0
      ) / valoracionesPersonaje.length;

    valoraciones.push(valoracionMedia);
  }

  return {personajes:paginacionPersonajes, valoraciones: valoraciones};
}
