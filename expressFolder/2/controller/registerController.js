const fs = require('fs');

const bcrypt = require('bcrypt')

let controlador = {

    register:(function(req,res){
        res.render('register')
    }),

    create: (function (req,res){

        let usuario = {
            name:req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        }

        let archivo = fs.readFileSync('usuarios.json', {encoding:'utf-8'});

        let usuarios;
        if(archivo == ""){
            usuarios = []
        }else{
            usuarios = JSON.parse(archivo)
        }

        usuarios.push(usuario);


        let usuariosJson = JSON.stringify(usuarios);

        fs.writeFileSync('usuarios.json', usuariosJson);

        res.redirect('/usuarios/')


    })

};


module.exports = controlador;