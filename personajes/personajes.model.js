const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const schema = new Schema({
  Id: Number,
  name: String,
  description: { en: String, es: String },
  resourceURI: String,
  urls: [Object],
  thumbnail: Object,
  comics: Object,
  stories: Object,
  events: Object,
  series: Object,
});


schema.plugin(mongoosePaginate);

module.exports = mongoose.model("Personaje", schema);

//https://www.npmjs.com/package/mongoose-paginate-v2
