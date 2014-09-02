var express = require('express');
var serveStatic = require('serve-static');
var app = express();
app.set('view engine', 'jade');
app.use('/css', express.static(__dirname + '/css'));
app.get('/hello.txt', function(req, res){
   res.send('Hello World');
});
app.get('/forum', function(req,res){
    console.log('Getting /forum')
    res.render('forums');
});
app.get('/contact', function(req, res) {
    res.render('contacts');
})
app.get('/', function(req,res){
    res.render('index');
});
app.listen(process.env.PORT, function(){
    console.log('Listening on port %d', process.env.PORT);
});