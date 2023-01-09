const express = require("express");
const personajesService = require("./personajes.service");
const router = express.Router();

/**
 * @swagger
 * /personajes?page={page}&limit={limit}&filter={filter}:
 *   get:
 *     tags:
 *     - personajes
 *     summary: Devuelve una lista de partidas.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     parameters:
 *       - name: page
 *         in: path
 *         description: ID of pet to return
 *         required: true
 *         type: integer
 *         format: int64
 *       - name: limit
 *         in: path
 *         description: ID of pet to return
 *         required: true
 *         type: integer
 *         format: int64
 *       - name: filter
 *         in: path
 *         description: ID of pet to return
 *         required: false
 *         type: string
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
 *                     personajes:
 *                       type: object
 *                       properties:
 *                         docs:
 *                           type: array
 *                           description: lista con datos de los personaje.
 *                         totalDocs:
 *                           type: integer
 *                           description: Nombre del personaje.Número de documentos
 *                           example: 12
 *                         limit:
 *                           type: integer
 *                           description: Número máximo de datos.
 *                           example: 10
 *                         totalPages:
 *                           type: integer
 *                           description: Número de páginas totales.
 *                           example: 21
 *                         page:
 *                           type: object
 *                           description: Página actual.
 *                           example: 5
 *                         pagingCounter:
 *                           type: object
 *                           description: Número de páginas totales.
 *                           example: 21
 *                         hasPrevPage:
 *                           type: boolean
 *                           description: devuelve true si hay página anterior.
 *                           example: true
 *                         hasNextPage:
 *                           type: boolean
 *                           description: devuelve false si cargada más páginas.
 *                           example: null 
 *                         prevPage:
 *                            type: integer
 *                            description: Número de paginas anteriores.
 *                            example: 4 
 *                         nextPage:
 *                           type: integer
 *                           description: Devuelve Null, porque no ha cargado la página anterior.
 *                           example: null 
 *                     valoraciones:
 *                        type: array
 *                        description: Lista de puntuaciones optenidas por el personaje.
 */

router.get("/", getAll);

module.exports = router

function getAll(req, res, next) {
  personajesService
    .getAll(req)
    .then((personajes) => res.json(personajes))
    .catch((err) => next(err));
}
