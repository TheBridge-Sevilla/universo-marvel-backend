const db = require("../_helpers/db");
const Personajes = db.Personajes;
//const ObjectId = require("mongodb").ObjectId;
var CryptoJS = require("crypto-js"); //Obtener hash de la API de Marvel
const deepl = require("deepl-node");
//var he = require("he");

const translator = new deepl.Translator(process.env.DEEPL_AUTHKEY);
const apikey = process.env.MARVEL_KEY_PUBLIC;
const pvtkey = process.env.MARVEL_KEY_PRIVATE;

let limit = 80;
let offset = 0;

for (i = 0; i < 20; i++) {

var fecha = new Date().getTime();
const ts = fecha.toString();
var message = ts + pvtkey + apikey;
var a = CryptoJS.MD5(message);
const hash = a.toString();

  const urlAPI =
    `http://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}&ts=` +
    ts +
    "&apikey=" +
    apikey +
    "&hash=" +
    hash;

  const fetch = (url) =>
    import("node-fetch").then(({ default: fetch }) => fetch(url));

  fetch(urlAPI)
    .then((response) => response.json())
    .then((datosPersonajes) => {
      datosPersonajes.data.results.map((info) => {
         comprobarPersonaje(info.id).then((duplicada) => {
          if (!duplicada) { 
            let listaPersonajes = {
              Id: info.id,
              name: info.name,
              description: { en: info.description, es: undefined },
              resourceURI: info.resourceURI,
              urls: info.urls,
              thumbnail: info.thumbnail,
              comics: info.comics,
              stories: info.stories,
              events: info.events,
              series: info.series,
            };

            if (listaPersonajes.description.en.length !== 0) {
              translator
                .translateText(listaPersonajes.description.en, null, "es")
                .then((result) => {
                  let traduccion = result.text;
                  listaPersonajes.description.es = traduccion;
                  let AñadirPersonajes = new Personajes(listaPersonajes);
                  AñadirPersonajes.save();
                })
                .catch((error) => {
                  console.error(error);
                });
            } else {
              listaPersonajes.description.es = "Sin descripción";
              let AñadirPersonajes = new Personajes(listaPersonajes);
              AñadirPersonajes.save();
            }
         }
        });
      });
    });
  offset = limit + offset;
}

 async function comprobarPersonaje(idAPI) {
  let comprobarEnMongo = await Personajes.find({ Id: idAPI });
  // Si es true la pregunta está repetida
  return comprobarEnMongo.length > 0 ? true : false;
} 
