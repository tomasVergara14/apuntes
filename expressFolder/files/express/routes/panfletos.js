const express = require('express');
const router = express.Router();
const panfletosController = require('../controller/panfletosController')


router.get('/', panfletosController.panfletos)

router.get('//delete/:id', panfletosController.muestra)

router.delete('/delete/:id', panfletosController.delete)

module.exports=router;