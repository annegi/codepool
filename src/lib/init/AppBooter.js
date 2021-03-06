var bodyparser = require('body-parser');
var path = require('path');
var express = require('express');
var routeRegistrar = require('.././RoutesRegistrar');
var session = require('express-session');
var request = require('request');



class AppBooter{

  static boot(app){
      app.set('views',path.join(__rootDir + '/src/views/ejs') );
      app.set('view engine', 'ejs');


      //BodyParser Middleware
      app.use(bodyparser.json());
      app.use(bodyparser.urlencoded({extended: false}));

      //Session Middleware
      app.use(session({
          secret: 'mysecretkey',
          resave: false,
          saveUninitialized: true,
          cookie: {maxAge: 30 * 60 * 1000}
      }));

      //Set static Path
      app.use(express.static(path.join('public')));

      //app.use(function(req,res,next){
      //    throw new Error();
      //});

      //app.use(function(err,req,res,next){
      //      next(err);
      //    //if(err)
      //    //{
      //    //    res.send('An error occured while processing the request')
      //    //    res.end();
      //    //}
      //
      //});




      //Register routes
      routeRegistrar.register(app);





      //Start up the server
      app.listen(1338, function () {
          console.log("server started on port 1338");
      });

  }

}

module.exports = AppBooter;

