var express = require('express');
var app = express();
var AppBooter = require('./src/lib/init/AppBooter');
__rootDir = __dirname;
AppBooter.boot(app);
