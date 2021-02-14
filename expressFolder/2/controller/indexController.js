let controlador={

    index: (function(req,res){
        res.render('index',{ title: 'La BOCA' })
    })

};

module.exports = controlador