const express = require('express');
const router = express.Router()
const productController = require('../controller/productController')


router.get('/', productController.list)

router.get('/detail/product/:id',productController.detail)

router.get('/buscar/', productController.buscar)




module.exports = router