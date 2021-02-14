const express = require('express');

const router = express.Router();

const productoController = require('../controllers/productoControlador')

router.get('/:idProducto?', productoController.detalle)

router.get('/:idProducto/comentarios/:idComentario?', productoController.comentarios)

module.exports = router;