let numeros = [2,4,9,4,3,5]




let name = 'juan'
let apellido = 'marquez'


let nombreCompleto = `El nombre completo es ${name} ${apellido}`

//console.log(nombreCompleto)


let numeracion = [
    {
        name: 'uno',
        value: 1,
        EsPar: false
    },
    {
        name: 'dos',
        value: 2,
        EsPar: true
    },
    {
        name: 'tres',
        value: 3,
        EsPar: false
    },
    {
        name: 'cuatro',
        value: 4,
        EsPar: true
    },
]


/*

****Map***

*/

let mayor = numeracion.map(mayor => `${mayor.name} es mayor a 0`)

//console.log(mayor)

let dobleNumero = numeros.map(function(doble){
    return doble * 2
})

//console.log(dobleNumero)

let multiplicacion = numeros.map(doble => doble * 2)

//console.log(multiplicacion);


/*

****Find****

*/


let primerPar = numeros.find( primero => primero % 2 == 0)

//console.log(primerPar)

let cinco = numeros.find(esta => esta === 5)

//console.log(cinco)



/*

****Filter****

*/


let numerosFilter = numeros.filter(function(pares){
    return pares % 2 == 0
})

//console.log(numerosFilter)

let par = numeros.filter(function(numero){

    return numero % 2 != 0
})

//console.log(par)


let mayores = numeros.filter(function(mayorA){

    return mayorA > 6
})

//console.log(mayores)



/*

****Reduce****

*/


let sumatoria = numeros.reduce( function (acumulador, numero){

    return acumulador + numero
})

//console.log(sumatoria)





//****ForEach****


/*

let dobleFor = numeros.forEach(function(numerito){
    console.log(numerito * 2)
})

console.log(dobleFor)



let cadaNumero = numeros.forEach( function( numero){

    console.log(numero);
})

console.log(cadaNumero)


let valor = numeracion.forEach(function(cuanto){
    console.log(`El valor de ${cuanto.name} es ${cuanto.value}`)
})

console.log(valor)

*/

  
//****Find****
/*
    let array = [1,2,3]
    let otro = [4,5,6]

    let nuevo = array.pop();
    otro.push(nuevo)

    console.log(array, otro)
*
function trasladar(array, otro){
    
        
    //array = [1,2,3]
    //otro = [4,5,6]

    let nuevo = array.pop();
    otro.push(nuevo)

    console.log(array, otro)
}
*/
//console.log(trasladar([1,2],[3,4]))


let array = [1,2,3,4,5,6,7]


let su = array.reduce(function(acumulador, numero){
    return acumulador * numero
})  

console.log(su)

/*
Escribí la función sumatoriaBajoImporte la cual recibiendo un array con importes nos 
devuelva el resultado final de la suma de los importes de todos los meses que tienen ganancia, 
a excepción de los que superen un importe de $ 1.000

*/

let dud = [150,100,5000,600,400,8000]

let bajos = dud.filter(function(meses){
    return meses < 1000
})

console.log(bajos)

let bam = bajos.reduce(function(acumulador, actual){
    return acumulador + actual
})

console.log(bam)

