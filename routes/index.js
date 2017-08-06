
module.exports = function(app){

  // Importa modulos nativos
  var rp = require('request-promise');
  var request = require('request');

  // Custom Modules
  var db = require('./../libs/connectdb.js')()

  global.registros_novos = []

  // MODEL
  // app.get('/recupera_perguntas', function(req, res){

  //   var formIndex = req.query.formIndex;
  
  //   var Perguntas = db.model('Perguntas')

  //   Perguntas.find({Form:formIndex}, function(err, docs){
  //     if(err){
  //       throw err
  //     }
  //     res.send(docs);
  //   })

  // })

  app.get('/facebook_auth', function(req, res){

    res.render('facebook_auth')

  })  

  app.get('/get_beer/:beerName', function(req, res){

    var beerName = req.params.beerName

    var m_Brejas = require('../crowler/brejas.js')

    m_Brejas.getBeersByName(beerName).then(function(result){

      res.send(result)

    })

  })

  app.get('/get_beer_static/stella', function(req, res){

    var renanzinho = {
      nome: 'Stella',
      preco: '6,50'
    }

    res.send(renanzinho)

  })

}
