let controlador = {
    list: (function(req,res){

        let list = [
            'juan',
            'topo',
            'nacho',
            'noel'
        ]

        res.render('users', {list:list})
    }),
    detail: (function(req,res){

        let detalle = req.params.id

        let list = [
            'juan',
            'topo',
            'nacho',
            'noel'
        ]
        
        let buscar = list.find(function(usuario){
            return usuario == detalle
        })

        res.render('userDetail', {buscar:buscar, list:list })
    }),
    delete: (function(req,res){
        res.send('borrando')
    }),
    edit: (function(req,res){
        let idUsuario = req.params.id
        res.send('editando')
    }),
    put:(function(req,res){
        
        
        let detalle = req.params.id

        let list = [
            'juan',
            'topo',
            'nacho',
            'noel'
        ]
        
        let buscar = list.find(function(usuario){
            return usuario == detalle
        })

        res.render('userEdit', {buscar:buscar, list:list })
    
        

    })

}

module.exports = controlador