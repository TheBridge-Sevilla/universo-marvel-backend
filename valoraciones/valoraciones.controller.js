const express = require("express");
const valoracionesService = require("./valoraciones.service");
const router = express.Router();
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