const fs = require('fs');

let controller ={
    register:function(req, res){
        res.render('register')
    },
    create: function(req,res){
        
        let usuario = {
            name: req.body.name,
            email: req.body.email
        }

        let usuarioJson = JSON.stringify(usuario);

        fs.writeFileSync('usuarios.json', usuarioJson)

        res.redirect('/')
    },
    list:function(req,res){
        
        let idUsuario = req.params.idUsuario

        let lista = [
            'tomas',
            'mario',
            'maria',
            'lucia',
            'flor',
            'fran'
        ]
        res.render('usuarios', {lista:lista})

    },
    edit: function(req,res){

        let idUsuario = req.params.idUsuario

        let lista = [
            'tomas',
            'mario',
            'maria',
            'lucia',
            'flor',
            'fran'
        ]

        let usuarioEditable = lista [idUsuario]

        res.render('registerList', {usuarioEditable:usuarioEditable})
    },
    put: function(req,res){

        let idUsuario = req.params.idUsuario

        let lista = [
            'tomas',
            'mario',
            'maria',
            'lucia',
            'flor',
            'fran'
        ]

        let usuarioEditable = lista [idUsuario]

        res.send('modificado')

        //res.render('registerList', {usuarioEditable:usuarioEditable})
    },
    delete:function(req,res){
        res.send('borrado')
    }


};

module.exports = controller;