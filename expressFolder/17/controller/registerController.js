const fs = require('fs');
const bcrypt = require('bcrypt');

let controlador = {
    register:(function(req,res){
        res.render('register', {title:'registro'})
    }),
    guardar: (function(req,res){

        let usuario = {
            name: req.body.name,
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)

        }

        //primero leer

        let archivos = fs.readFileSync('archivos.json', {encoding:'utf-8'})

        let usuarios;
        if(archivos == ""){
            usuarios = []
        }else{
            usuarios = JSON.parse(archivos)
        }

        usuarios.push(usuario);

        let usuariosJson = JSON.stringify(usuarios);

        fs.writeFileSync('archivos.json', usuariosJson)

        res.redirect('/list')

        


    })

};

module.exports = controlador;