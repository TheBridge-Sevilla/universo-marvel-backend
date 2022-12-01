const db = require("../_helpers/db");
//const Personajes = db.Personajes;
//const ObjectId = require("mongodb").ObjectId;
var CryptoJS = require("crypto-js"); //Obtener hash de la API de Marvel
//const deepl = require("deepl-node");
//var he = require("he");

//const translator = new deepl.Translator(authKey);


//const apikey = process.env.MARVEL_KEY_PUBLIC;
const apikey = "431852960ab20c5c378b14cf2614cddd" //Mias

const pvtkey = process.env.MARVEL_KEY_PRIVATE;
//const pvtkey = "094b8592c9a2caf67229c8e22bd492b01d100204" //Mias

var fecha = new Date().getTime();
const ts = fecha.toString();
var message = ts + pvtkey + apikey;
var a = CryptoJS.MD5(message);
const hash = a.toString();


//console.log("ts", ts, "apikey", apikey, "pvtkey", pvtkey, "hash", hash);

const urlAPI = "http://gateway.marvel.com/v1/public/characters?ts="+ts+"&apikey="+apikey+"&hash="+hash

//const urlAPI = "http://gateway.marvel.com/v1/public/comics?&ts="+ts+"&apikey="+apikey+"&hash="+hash
console.log("urlAPI", urlAPI)

const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));

fetch(urlAPI)
  .then((response) => response.json())
  .then((data) => console.log(data.data.results))



  /* 
    data.trivia_categories.map((categoria) => {
      let categoriasEditadas = he.decode(categoria.name);

      let CategoriaTransformada = {
        nombre: { es: undefined, en: categoriasEditadas },
      };
      const categoriasTraducidas = translator
        .translateText(categoriasEditadas, null, "es")
        .then((res) => {
          let traduccion = res.text;
          CategoriaTransformada.nombre.es = traduccion;
        })
        .then(() => {
          comprobarCategoria(CategoriaTransformada.nombre).then((duplicada) => {
            if (!duplicada) {
              let CategoriaInsertar = new Categoria(CategoriaTransformada);
              CategoriaInsertar.save();
            }
          });
        });
    })
  )
  .catch((err) => {
    console.error(err);
  });

async function comprobarCategoria(tituloCategoria) {
  let categoriaRepetida = await Categoria.find({ nombre: tituloCategoria });
  // Si es true la pregunta está repetida
  return categoriaRepetida.length > 0 ? true : false;
}
 */