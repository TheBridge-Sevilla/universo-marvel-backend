const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  Id: Number,
  name: String,
  description: {en: String, es: String},
  resourceURI: String,
  urls: [Object],
  thumbnail: Object,
  comics: Object,
  stories: Object,
  events: Object,
  series: Object,
  });



module.exports = mongoose.model("Personaje", schema);
