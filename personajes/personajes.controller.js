const express = require("express");
var CryptoJS = require("crypto-js"); //Obtener hash de la API de Marvel
const router = express.Router();
const personajesService = require("./personajes.service");

/**
 * @swagger
 * /partidas:
 *   get:
 *     summary: Devuelve una lista de partidas.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  type: object
 *                  properties:
 *                       _id:
 *                         type: string
 *                         description: El ID de la partida.
 *                         example: 635102dd9ef0f77c5801cfb4
 *                       nombre:
 *                         type: string
 *                         description: El nombre del usuario.
 *                         example: Kenny Miller
 *                       categoria:
 *                         type: string
 *                         description: El ID de la categoría a la que hace referencia.
 *                         example: 634ef53d64362d730580cd9c (Deportes)
 *                       puntuacion:
 *                         type: integer
 *                         description: La puntuación alcanzada por el usuario.
 *                         example: 10
 *                       fecha:
 *                         type: date
 *                         description: Fecha en que se jugó la partida.
 *                         example: 2022-10-20T08:33:17.400Z
 *
 */

//Función fetch

//Parametros para la API


//const apikey = process.env.MARVEL_KEY_PUBLIC;
const apikey = "431852960ab20c5c378b14cf2614cddd" //Mias

//const pvtkey = process.env.MARVEL_KEY_PRIVATE;
const pvtkey = "094b8592c9a2caf67229c8e22bd492b01d100204" //Mias

var fecha = new Date().getTime();
const ts = fecha.toString();
var message = ts + pvtkey + apikey;
var a = CryptoJS.MD5(message);
const hash = a.toString();

console.log("ts", ts, "apikey", apikey, "pvtkey", pvtkey, "hash", hash);
//const urlAPI = "http://gateway.marvel.com/v1/public/characters?limit=80&ts="+ts+"&apikey="+apikey+"&hash="+hash
const urlAPI = "http://gateway.marvel.com/v1/public/characters?ts="+ts+"&apikey="+apikey+"&hash="+hash

//const urlAPI = "http://gateway.marvel.com/v1/public/comics?&ts="+ts+"&apikey="+apikey+"&hash="+hash


console.log("urlAPI", urlAPI)
const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));
 fetch(urlAPI) //error 401=is not valid for the passed apikey parameter is sent.
  .then((response) => response)
  .then((json) => console.log("resultado", json));

//Obtener Personajes y devolver
router.get("/", getAll);

module.exports = router;

function getAll(req, res, next) {
  personajesService
    .getAll()
    .then((personajes) => res.json(personajes))
    .catch((err) => next(err));
}
/* const personajes = {}
const errores = {}
getAll(fetch, personajes, errores) */