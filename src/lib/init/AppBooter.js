var bodyparser = require('body-parser');
var path = require('path');
var express = require('express');
var learnReactRouter = require('../../routers/learnReactRouter');
var LearnHTMLCSSJSRouter = require('../../routers/learHtmlCssJsRouter');
var mysql = require('mysql');
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

      app.post('/users/add', function (req, res) {
          var newuser = {
              user_name: req.body.user_name,
              user_number: req.body.user_number,
              user_email: req.body.user_email
          };
          console.log(newuser);
          var connection = mysql.createConnection({
              host     : '172.31.28.57',
              user     : 'root',
              password : 'root',
              database : 'codepool'
          });

          connection.connect(function(err) {
              if (err) {
                  console.error('error connecting: ' + err.stack);
                  return;
              }

              console.log('connected as id ' + connection.threadId);
              connection.query('SELECT * FROM user_info',function(err,rows){
                  if(err) throw err;

                  console.log('Data received from Db:\n');
                  console.log(rows);
              });
              connection.query('REPLACE INTO user_info SET ?', newuser, function (err,res) {
                  if(err) throw err;

                  console.log('Last insert ID:', res.insertId);
              })
          });
      });


      app.listen(1338, function () {
          console.log("server started on port 1338");
      });

  }

}

module.exports = AppBooter;

