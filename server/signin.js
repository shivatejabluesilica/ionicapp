var express = require('express');
var app = express.Router();
var Sign = require('./signin-module');

app.post('/signin', function(request,response) {

    var credentials = new Sign(request.body);
    Sign.find({'username':credentials.username},function(err,resource){
        if(err){
            response.send(err).status(404);
        }
        else{
            response.send(resource).status(200);
        }
    })
    
})

module.exports = app;