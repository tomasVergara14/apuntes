let conteo = function(){
    setTimeout(()=>{
        console.log(3)
        setTimeout(()=>{
            console.log(2)
            setTimeout(()=>{
                console.log(1)
            },1000)
        },2500)
    }, 3000)
}


let asyncTest = async function(){
    let pruebita = await conteo()

    console.log('esperando al tiempo')
}

//console.log(asyncTest())


let consol = setInterval(() => {
    let j = 1; 

    console.log(' vuelta n° ' + j);
    
    j++

}, 200);



console.log(consol)

