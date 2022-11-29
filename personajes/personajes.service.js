const db = require("../_helpers/db");


module.exports = {
  getAll
};

async function getAll() {
  return await Partidas.find();
}




