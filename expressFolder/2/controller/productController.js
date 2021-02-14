let controlador = {
    list: (function(req,res){

        let listado = [
            'hogar',
            'jardin',
            'cocina',
            'tocador'
        ]

        res.render('listProduct', {listado:listado})
    })
};



module.exports = controlador;