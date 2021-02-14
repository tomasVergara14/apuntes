const express = require('express');
const app = require('../app');
const router = express.Router()
const registerController = require('../controller/registerController')



router.get('/', registerController.register)

router.post('/usuario', registerController.guardar)



module.exports = router;