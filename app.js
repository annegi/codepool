var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

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
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//BodyParser Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

//Set static Path

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index',{
        title: 'Customers'});
});
app.listen(3000, function () {
    console.log("server started on port 3000");
});