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
    let comentarios = await Comentario.find({
        personaje: ObjectId(req.body.personaje)
    });
    return comentarios
}

async function create(req) {
    let comentario = Comentario.create(req.body)
    return comentario
}