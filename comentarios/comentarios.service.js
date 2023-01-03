//Inicialización BaseDatos
const db = require("../_helpers/db");
const Comentario = db.Comentarios;
const Personaje = db.Personajes;
const ObjectId = require("mongodb").ObjectId;

module.exports = {
    get,
    create,
    favoritos,
    mejorValorado,
};

async function get(req) {
    console.log(req.query);
    let comentario = await Comentario.findOne({
        personaje: ObjectId(req.query.idPersonaje),
        idUsuario: req.query.idUsuario,
    });
    if (comentario) {
        return comentario.comentario;
    } else {
        return 0;
    }
}

async function create(req) {
    let personaje = await Personaje.findOne({ name: req.query.personaje });

    let comentario = await Comentario.findOne({
        idUsuario: req.body.idUsuario,
        personaje: req.body.idPersonaje,
    });

    if (!comentario) {
        comentario = Comentario.create({
            idUsuario: req.body.idUsuario,
            comentario: req.body.comentario,
            personaje: personaje._id,
        });
    } else {
        comentario.comentario = req.body.comentario;
        comentario.save();
    }
    console.log(comentario);
    return comentario;
}