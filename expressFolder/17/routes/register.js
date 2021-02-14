const express = require('express');
const router = express.Router();
const registerController = require('../controller/registerController');


router.get('/', registerController.register)

router.post('/', registerController.guardar)


module.exports = router;