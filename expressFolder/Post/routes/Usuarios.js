const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/', userController.list)

router.get('/detail/:id', userController.detail)

router.delete('/delete/:id', userController.delete)

router.get('/detail/:id/edit', userController.edit)

router.put('/detail/:id/edit', userController.put)

module.exports = router