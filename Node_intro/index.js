console.log('index.js executing');
var express = require('express');
var app = express();

app.get('/',function(req,res){
        res.send('Hello, World!');
        });
app.post('/',function(req,res){
        res.send('thanks');
        });

var port = 3000;
app.listen(port,function(){
    console.log('Listening on port ' + port)
});



