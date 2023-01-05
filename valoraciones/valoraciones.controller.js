const express = require("express");
const valoracionesService = require("./valoraciones.service");
const router = express.Router();
/**
 * @swagger
 * /valoraciones/destacado:
 *   get:
 *     summary: Devuelve una lista con los 5 personajes más valorados.
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
 *                       valoracion:
 *                         type: integer
 *                         description: Valoración media obtenida  por los usuarios.
 *                         example: 5
 *                       personaje:
 *                         type: string
 *                         description: Nombre del personaje.
 *                         example: "Wolverine"
 *                       imagen:
 *                         type: string
 *                         description: url con la imagen del personaje.
 *                         example: "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf.jpg"
 *
 */



router.get("/", get);
router.post("/", create);
router.get("/destacado", mejorValorado);
router.post("/favoritos", favoritos);

module.exports = router;

function get(req, res, next) {
  valoracionesService
    .get(req)
    .then((valoraciones) => res.json(valoraciones))
    .catch((err) => next(err));
}


 function create(req, res, next) {
  valoracionesService
  .create(req)
  .then((valoraciones) => res.json(valoraciones))
  .catch((err) => next(err));
}
 
function favoritos(req, res, next) {
  valoracionesService
  .favoritos(req)
  .then((valoraciones) => res.json(valoraciones))
  .catch((err) => next(err));
}

function mejorValorado(req, res, next) {
  valoracionesService
  .mejorValorado(req)
  .then((valoraciones) => res.json(valoraciones))
  .catch((err) => next(err));
}