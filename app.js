var express = require('express');

var app = express();

var port = 5000;

// req = request 
// res = response
app.get('/', function(req,res){
    res.send('Hello World');
});
app.get('/books', function(req,res){
    res.send('Hello Books');
});
app.listen(port, function(err){
    console.log('running server on port ' + port);
});