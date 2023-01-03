router.get("/", get);
router.post("/", create);
router.post("/comentario", comentarios);

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

function masComentado(req, res, next) {
    comentariosService
        .masComentado(req)
        .then((comentarios) => res.json(comentarios))
        .catch((err) => next(err));
}