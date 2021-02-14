let controlador ={
    index: (function(req, res, next) {
        res.render('index', { title: 'lo de la abuela' });
      })

}

module.exports = controlador