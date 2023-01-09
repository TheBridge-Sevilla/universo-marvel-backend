const express = require("express");
const comentariosService = require("./comentarios.service");
const router = express.Router();

router.get("/", get);
router.post("/", create);

module.exports = router;

function get(req, res, next) {
    comentariosService
        .get(req)
        .then((comentarios) => res.json(comentarios))
        .catch((err) => next(err));
}

function create(req, res, next) {
    comentariosService
        .create(req)
        .then((comentarios) => res.json(comentarios))
        .catch((err) => next(err));
}