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
        personaje: ObjectId(req.body.personaje)
    });
    return comentarios
}

async function create(req) {
    console.log(req.body)
    
    let comentario = Comentario.create(req.body)
    return comentario
}