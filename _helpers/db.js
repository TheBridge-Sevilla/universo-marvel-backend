require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

module.exports = {
    Personajes: require('../personajes/personajes.model')
};