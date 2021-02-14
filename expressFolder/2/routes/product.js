const express = require('express');

const router = express.Router();

const productController = require('../controller/productController')


router.get('/', productController.list)



module.exports = router;