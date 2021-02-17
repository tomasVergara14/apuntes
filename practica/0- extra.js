
// CONTEO SET TIME OUT

let conteo = function(){
    setTimeout(function(){
        console.log('3');
        setTimeout(function(){
            console.log('2');
            setTimeout(function(){
                console.log(1);
            }, 1000)
        }, 2000)
    }, 3000)
}

//console.log(conteo())


async function asyncCall (){
    console.log('wainting');
    const resultado = await conteo()
}

console.log(asyncCall())