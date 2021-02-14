let controlador = {
    register:(function(req,res){
        res.render('register',{title:'registro'})
    }),
    create:(function(req,res){
        let usuario = {
            name: req.body.name,
            email: req.body.email
        }
        res.render('usuarios', {usuario:usuario, title:'tu perfil'})
    })
};

module.exports = controlador