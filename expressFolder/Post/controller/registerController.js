let controlador = {

    register: (function(req,res){
        res.render('register')
    }),
    guardar: (function(req,res){

        let usuario = {
            name: req.body.name,
            email: req.body.email
        }

        res.redirect('/')
    })
}

module.exports = controlador