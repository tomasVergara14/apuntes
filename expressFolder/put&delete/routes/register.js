const express = require('express');

const router = express.Router();

const registerController = require('../controller/registerController')

router.get('/', registerController.register)

router.post('/', registerController.create)

router.get('/list', registerController.list)

router.delete('/delete/:idUsuario', registerController.delete)

router.get('/edit/:idUsuario', registerController.edit)

router.put('/edit/:idUsuario/', registerController.put)

module.exports = router;