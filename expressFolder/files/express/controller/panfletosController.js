let controlador ={
    panfletos:(function(req,res){
        let idPanfle = req.params.id

        let panfletitos = [
            0,
            1,
            2,
            3,
            4,
            5
        ];

        let panfleFilter = panfletitos.filter(function(elegido){
            return idPanfle == elegido.id 
        })
        res.render('panfletos', {panfletitos:panfletitos, panfleFilter:panfleFilter})
    }),
    muestra:(function(req,res){
        res.send('estas borrando')
    }),

    delete: (function(req,res){
        res.send('estas borrando')

    })

};

module.exports = controlador