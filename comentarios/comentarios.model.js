const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    comentario: String,
    autor: String,
    personaje: { type: Schema.ObjectId, ref: "Personaje" },
});

module.exports = mongoose.model("Comentario", schema);