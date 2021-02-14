const fs = require('fs');

let controlador={
    list:(function(req,res){
        
        let id = req.params.name

        let listado = fs.readFileSync('archivos.json', {encoding:'utf-8'})

        let usuarios = JSON.parse(listado);



        res.render('list',{title:'listado', usuarios:usuarios, id: id})

    }),
    delete:(function(req,res){

        

        let archivoJson = fs.readFileSync('archivos.json', {encoding:'utf-8'})

        let archivoObject = JSON.parse(archivoJson);
        
        let id = req.params.id 

        let filter = archivoObject.filter(function(usuario){
            return usuario.id != id
        })

        let filterJson = JSON.stringify(filter)

        fs.writeFileSync('archivos.json', filterJson)

    })

}

module.exports = controlador;