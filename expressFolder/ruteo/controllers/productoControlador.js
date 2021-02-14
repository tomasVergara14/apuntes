let controlador = {
    'detalle': function(req, res){

        if( req.params.idProducto == undefined){
            res.render("productos")
        }else{
            res.send("bienvenidos al producto " + req.params.idProducto)
    
        }
    
    
        
    },

    'comentarios':function (req, res){
        if( req.params.idComentario == undefined){
            res.render( "Bienvenido al producto " + req.params.idProducto)
        } else{
            res.send(" estas en el comentario " + req.params.idComentario + " del producto " + req.params.idProducto)
        }
    } 

};

module.exports = controlador;