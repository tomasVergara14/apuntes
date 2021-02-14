const fs = require('fs');


let controller = {
    list:(function(req,res){

        let productos = [
            'flores',
            'hogar',
            'deportes',
        ];

        res.render('productList', {productos: productos})

    }),
    detail: (function(req,res){

        let idProducto = req.params.id

        let detalle = [
            {
                id: 1,
                title: 'flores',
                products: ['jazmin','rosa','margarita']
            },
            {
                id: 2,
                title: 'hogar',
                products: ['tele','compu','control']
            },
            {
                id: 3,
                title:'deportes',
                products: [ 'botines','futbol','bat']
            }
        ]

        let buscador = detalle.find(function(categoria){
            
            return categoria.title == idProducto

        })

        let buscadorJson = JSON.stringify(buscador)


        res.render('productDetail',{  buscador:buscador})
    }),
    buscar: (function(req,res){
        let busco = req.query.buscar
        res.send('estas buscando  ' + busco)
    })
};

module.exports = controller