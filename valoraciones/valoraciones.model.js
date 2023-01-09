const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  idUsuario: String,
  personaje: { type: Schema.ObjectId, ref: "Personaje" },
  valoracion: Number,
});



module.exports = mongoose.model("Valoracion", schema);