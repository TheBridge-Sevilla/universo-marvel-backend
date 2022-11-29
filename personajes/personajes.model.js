const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  idUsuario: String, //id del usuario Firebase
  nombre: String, //nombre del jugador
  puntuacion: Number,
  fecha: Date,
});

module.exports = mongoose.model("Personaje", schema);
