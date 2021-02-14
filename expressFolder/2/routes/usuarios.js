const express = require('express');

const router = express.Router();

const usuariosController = require('../controller/usuariosController');

const { check, validationResult, body} = require('express-validator')



router.get('/', usuariosController.list)

router.get('/login', usuariosController.login)

router.post('/login',[ 
    check('email').isEmail().withMessage('debe ingresar un mail'),
    check('password').isLength({min:8}).withMessage('la contraseña debe tener 8 caracteres')
], usuariosController.processLogin)

router.get('/check', function(req,res){
    if(req.session.usuarioLogueado == undefined){
        res.send('no estas logueado')
    }else{
        res.send('el usuario logueado es ' + req.session.usuarioLogueado.email)
    }
})


module.exports = router;