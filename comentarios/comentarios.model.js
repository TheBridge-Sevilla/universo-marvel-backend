const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    autor: String,
    personaje: { type: Schema.ObjectId, ref: "Personaje" },
    comentario: String,
    fecha: { type : Date, default: Date.now }
});

module.exports = mongoose.model("Comentario", schema);