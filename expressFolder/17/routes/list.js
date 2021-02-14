const express = require('express');
const router = express.Router();
const listController = require('../controller/listController');


router.get('/', listController.list)

router.delete('/list/delete/:id', listController.delete)





module.exports = router;