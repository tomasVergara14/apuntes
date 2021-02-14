let elementos = [
    {
        id: 1,
        title: 'nombre'
    },
    
    {
        id: 2,
        title: 'apellido'
    },
    
    {
        id: 3,
        title: 'apodo'
    }
]



let buscador = elementos.find(function(elemento){
    return elemento.id == 3
})

//console.log(buscador)


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

let buscando = detalle.find(function(categoria){
    if( categoria.title == undefined){
        console.log ('este producto no se encuentra')
    }else{
        return categoria.title == 'hogar'
    }
})

console.log(buscando)