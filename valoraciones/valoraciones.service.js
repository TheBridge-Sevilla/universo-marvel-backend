//Inicialización BaseDatos
const db = require("../_helpers/db");
const Valoracion = db.Valoraciones;
const Personaje = db.Personajes;

module.exports = {
  get,
  create,
};

async function get(req) {
  let valoracion = await Valoracion.findOne({
    idPersonaje: req.query.idPersonaje,
    idUsuario: req.query.idUsuario,
  });
  console.log(valoracion)
  if (valoracion) {
    return valoracion.valoracion;
  } else {
    return 0;
  }
}

async function create(req) {
  let personaje = await Personaje.findOne({ name: req.query.personaje });

  let valoracion = await Valoracion.findOne({
    idUsuario: req.body.idUsuario,
    personaje: req.body.idPersonaje,
  });
  
  if (!valoracion) {
    valoracion = Valoracion.create({
      idUsuario: req.body.idUsuario,
      valoracion: req.body.valoracion,
      personaje: personaje._id,
    });
  } else {
    valoracion.valoracion = req.body.valoracion;
    valoracion.save();
  }
  console.log(valoracion)
  return valoracion;
}
