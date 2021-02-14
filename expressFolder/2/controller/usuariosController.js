const { validationResult } = require("express-validator");

const fs = require('fs');

const bcrypt = require('bcrypt')

let controlador ={
    list:(function(req,res){
        res.render('usuarios')
    }),

    login: (function(req,res){

        res.render('login')
    }),
    processLogin: function(req,res){

        

        

        let errors = validationResult(req);

        if(errors.isEmpty()){

            let archivo = fs.readFileSync('usuarios.json', {encoding:'utf-8'});

            let usuarios;
            if(archivo == ""){
                usuarios = []
            }else{
                usuarios = JSON.parse(archivo)
            }

            for (let i = 0; i < usuarios.length ; i ++){
                if(usuarios[i].email == req.body.email){
                    if(bcrypt.compareSync(req.body.password, usuarios[i].password)){

                        var usuarioLogueandose = usuarios[i];
                        break;
                    }
                }
            }

            if(usuarioLogueandose == undefined){
                res.render('login', {errors: [
                    {msg: 'credenciales invalidas'}
                ] })
            }

            req.session.usuarioLogueado = usuarioLogueandose

            res.send('ingresaste wacho')

        }else {
            return res.render('login', {errors:errors.errors})
        }
        res.render('login')
    }

};



module.exports = controlador;