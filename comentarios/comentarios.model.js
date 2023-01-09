const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    autor: String,
    personaje: { type: Schema.ObjectId, ref: "Personaje" },
    comentario: String
});

module.exports = mongoose.model("Comentario", schema);