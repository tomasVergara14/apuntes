var express = require('express');
var router = express.Router();
const indexController = require('../controller/indexController')

/* GET home page. */
router.get('/', indexController.index);

router.get('/pruebasession', function(req,res){

    if(req.session.numeroVisitas == undefined){
        req.session.numeroVisitas == 0
    }

    req.session.numeroVisitas++

    res.send('session tiene el numero: ' + req.session.numeroVisitas)
})

router.get('/mostrarsession', function(req,res){
    res.send('session tiene el numero: ' + req.session.numeroVisitas)
})


module.exports = router;
