let controller = {
    index: (function(req,res){

        let categorias = [
            'juegos',
            'bebidas',
            'comida',
            'deportes',
            'noticias'
        ]

        let idProduct = req.params.id
        let productitos = [
            {id:0, title:'juegos'},
            {id:1, title:'bebidas'},
            {id:2, title:'comida'},
            {id:3, title:'deportes'},
            {id:4, title:'noticias'},
            
            
            
            
        ]


        let buscar = productitos.find(function(categoria){
            return categoria.id == idProduct
        })




        res.render('index', {title: 'Jurasic park', categorias:categorias, buscar:buscar})
    })

}

module.exports = controller