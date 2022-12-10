const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  idUsuario: Number,
  idPersonaje: { type: Schema.ObjectId, ref: "Personajes" },
  valoracion: String,
  });



module.exports = mongoose.model("Valoracion", schema);