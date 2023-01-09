const express = require("express");
const personajesService = require("./personajes.service");
const router = express.Router();

/**
 * @swagger
 * /personajes/:
 *   get:
 *     tags:
 *     - personajes
 *     summary: Devuelve una lista con los personajes del universo Marvel.
 *     description: Retrieve a list of users from JSON Placeholder. Can be used to populate a list of fake users when prototyping or testing an API.
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
 *                       Id:
 *                         type: string
 *                         description: ID personaje.
 *                         example: 635102dd9ef0f77c5801cfb4
 *                       name:
 *                         type: string
 *                         description: Nombre del personaje.
 *                         example: Spiderman
 *                       description:
 *                         type: object
 *                         description: Descripción del personaje.
 *                         example: Spiderman adquire los poderes al ser picado por una araña
 *                       resourceURI:
 *                         type: string
 *                         description: La puntuación alcanzada por el usuario.
 *                         example: 10
 *                       urls:
 *                         type: object
 *                         description: Fecha en que se jugó la partida.
 *                         example: 2022-10-20T08:33:17.400Z
 *                       thumbnail:
 *                         type: object
 *                         description: Imagenes del personaje.
 *                         example: 2022-10-20T08:33:17.400Z
 *                       comics:
 *                         type: object
 *                         description: Fecha en que se jugó la partida.
 *                         example: 2022-10-20T08:33:17.400Z
 *                       stories:
 *                         type: object
 *                         description: Fecha en que se jugó la partida.
 *                         example: 2022-10-20T08:33:17.400Z
 *                       events:
 *                         type: object
 *                         description: Fecha en que se jugó la partida.
 *                         example: 2022-10-20T08:33:17.400Z
 *                       series:
 *                         type: object
 *                         description: Fecha en que se jugó la partida.
 *                         example: 2022-10-20T08:33:17.400Z
 */
router.get("/", getAll);

module.exports = router

function getAll(req, res, next) {
  personajesService
    .getAll(req)
    .then((personajes) => res.json(personajes))
    .catch((err) => next(err));
}
