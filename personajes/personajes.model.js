const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  Id: Number,
  name: String,
  description: String,
  modified: Date,
  resourceURI: String,
  urls: [String],
  thumbnail: String,
  comics: [String],
  stories: [String],
  events: [String],
  series: [String],
  });



module.exports = mongoose.model("Personaje", schema);
