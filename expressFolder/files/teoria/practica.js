const path = require('path');

const bcrypt = require('bcrypt');

const fs = require('fs')

//stringify(personas)

let ruta = path.join('/:C','usuarios','escritorios', 'archivo.txt')


let archivo = path.dirname(ruta);


let listado = [
    {
        id: 0,
        nombre: 'Tomi'
    },
    {
        id: 1,
        nombre: 'marc'
    },
    {
        id: 2,
        nombre: 'yoli'
    },
]

let listadoJson = JSON.stringify(listado)

fs.writeFileSync('archivo.json', listadoJson)

//console.log(archivo)

//console.log(fs);


//ejercicios playground

const hash1 = bcrypt.hashSync('123456', 10);

const hash2 = bcrypt.hashSync('123456', 10)

if(  hash1 == hash2 ){

    return 'los hash son iguales' 
}

// //const bcrypt = require('bcrypt');
// const password = '123456';
// const passwordEncriptada = bcrypt.hashSync(password, 10);

// if ( bcrypt.compareSync(password, passwordEncriptada) == true){
//     console.log('El password es correcto')
// }


//console.log(hash1);


let password = 'contraseña123'

let resultado = bcrypt.hashSync( password , 10)

let validacion = bcrypt.compareSync(password, resultado);

console.log('La validacion es ' + validacion)
