var express = require('express');
var app = express();
var db = require('./models');
var User = db.User;
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;//if you want to store username and password that you have instead of using tokens from somewhere else like facebook
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'jade');//Tell Express which Template engine we are using by NPM module name
app.set('views', 'views');//tell express where our template files live
app.use(express.static('public'));//tells express where the public files are located

//since html5 only knows about post and get
// we use middleware (method-override) which allows us to put and delete   
var methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.get('/', function (req, res) {
  res.send('Hiiii');
});



var server = app.listen(8080, function () {
  console.log("server listening on ", server.address().port);
});