let controlador ={
    detail:(function(req,res){

        let idProduct = req.params.id
        let categorias = [
            {id:0, title:'juegos'},
            {id:1, title:'bebidas'},
            {id:2, title:'comida'},
            {id:3, title:'deportes'},
            {id:4, title:'noticias'},
            
            
            
            
        ]


        let buscar = categorias.find(function(categoria){
            return categoria.title == idProduct
        })

        res.render('productDetail', {buscar:buscar, title:'detalles', })

    })

}

module.exports = controlador