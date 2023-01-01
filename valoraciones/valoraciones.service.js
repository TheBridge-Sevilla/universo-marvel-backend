//Inicialización BaseDatos
const db = require("../_helpers/db");
const Valoracion = db.Valoraciones;
const Personaje = db.Personajes;
const ObjectId = require("mongodb").ObjectId;


module.exports = {
  get,
  create,
  favoritos,
  mejorValorado,
};

async function get(req) {
  console.log(req.query)
  let valoracion = await Valoracion.findOne({
    personaje: ObjectId(req.query.idPersonaje),
    idUsuario: req.query.idUsuario,
  });
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

async function mejorValorado() {
  const valoraciones = await Valoracion.find().populate('valoracion').sort({valoracion: -1}).limit(5);
  return valoraciones
}
async function favoritos(req) {
  const miPersonaje = await Valoracion.find({idUsuario: req.body.idUsuario}).populate('valoracion').sort({valoracion: -1}).limit(5);
  return miPersonaje
}