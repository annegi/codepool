var bodyparser = require('body-parser');
var path = require('path');
var express = require('express');
var learnReactRouter = require('../../routers/learnReactRouter');
var LearnHTMLCSSJSRouter = require('../../routers/learHtmlCssJsRouter');
//Custom middleware

/*
 var logger = function (req, res, next) {
 console.log("Logging...");
 next();
 };

 //USe middleware

 app.use(logger);
 */

//View Engine
class AppBooter{

  static boot(app){
      app.set('views',path.join(__rootDir + '/src/views/ejs') );
      app.set('view engine', 'ejs');


      //BodyParser Middleware
      app.use(bodyparser.json());
      app.use(bodyparser.urlencoded({extended: false}));

      //Set static Path
      app.use(express.static(path.join('public')));

      app.get('/', function (req, res) {
          res.render('home');
      });

      app.get('/learn-react',function(req,res,next){
            learnReactRouter.get(req,res,next);

      });


      app.get('/learn-html-css-js',function(req,res,next){
          LearnHTMLCSSJSRouter.get(req,res,next);

      });


      app.listen(1338, function () {
          console.log("server started on port 1338");
      });

  }

}

module.exports = AppBooter;

