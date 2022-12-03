const express = require("express");
const personajesService = require("./personajes.service");
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



//Obtener Personajes y devolver
router.get("/", getAll);

const myCustomLabels = {
  totalDocs: 'itemCount',
  docs: 'itemsList',
  limit: 'perPage',
  page: 'currentPage',
  nextPage: 'next',
  prevPage: 'prev',
  totalPages: 'pageCount',
  pagingCounter: 'slNo',
  meta: 'paginator',
};

const options = {
  page: 1,
  limit: 10,
  customLabels: myCustomLabels,
  collation: {
    locale: 'es',
  },
};
module.exports = router

function getAll(req, res, next) {
  personajesService
    .getAll()
    .then((personajes) => res.json(personajes))
    .catch((err) => next(err));
}
/* const personajes = {}
const errores = {}
getAll(fetch, personajes, errores) */