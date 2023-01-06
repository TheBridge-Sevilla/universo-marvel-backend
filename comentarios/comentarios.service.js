//Inicialización BaseDatos
const db = require("../_helpers/db");
const Comentario = db.Comentarios;
const Personaje = db.Personajes;
const ObjectId = require("mongodb").ObjectId;

module.exports = {
    get,
    create,
};

async function get(req) {
    console.log(req.query);
    let comentarios = await Comentario.find({
        personaje: ObjectId(req.query.idPersonaje)
    });
    return comentarios
}

async function create(req) {
    console.log(req.query)
    let comentario = Comentario.create({
        idUsuario: req.body.idUsuario,
        comentario: req.body.comentario,
        personaje: await Personaje.findOne({ name: req.query.personaje }),
    })
    return comentario
}