var learnReactRouter = require('../routers/learnReactRouter');
var LearnHTMLCSSJSRouter = require('../routers/learHtmlCssJsRouter');
var LoginRouter = require('../routers/LoginRouter');
var mysql = require('mysql');


class RoutesRegistar{
    static register(app){
        //registering routes
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


        app.get('/login',function(req,res,next){
            LoginRouter.get(req,res,next);

        });

        app.post('/login',function(req,res,next){
            LoginRouter.post(req,res,next);

        });

        app.get('/loginSuccess', function (req, res) {
            res.render('loginSuccessful',{username:req.session.name});
        });

    }

}

module.exports = RoutesRegistar;