
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
    console.log('waiting');
    const resultado = await conteo()
}

//console.log(asyncCall()

// parseInt()
let convertido = parseInt("26")

//console.log(convertido)


//objects

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Define an object
  var you = new Person('juan', 24);

  //console.log(you.name)

