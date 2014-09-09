/// <reference path="typings/express/express.d.ts" />
import express = require("express");
var app = express();
//Use the Jade template engine for rendering jade views
app.set('view engine', 'jade');
app.set('views', __dirname + '/content');

//Allow serving static content out of the css folder
app.use('/css', express.static(__dirname + '/content'));

//The following are a series of routes to the pages on the site
//
app.get('/chat', function(req, res) {
    res.render('chat');
});
app.get('/forum', function(req,res){
    res.render('forums');
});
app.get('/contact', function(req, res) {
    res.render('contacts');
});
app.get('/index', function(req, res){
    res.render('index');
});
app.get('/', function(req,res){
    res.render('index');
});
app.listen(process.env.PORT, function(){
    console.log('Listening on port %d', process.env.PORT);
});