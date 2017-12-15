var express = require('express');
var app = express.Router();
var Log = require('./login-module');

app.post('/login', function(request, response) {
    var credentials = new Log(request.body);
    
    credentials.save(function(err, resource) {
        if (err) {
            response.send({"error":err, "msg":"Invalid Credentials."}).status(501);
        } else {
            response.json({"resource":resource,"msg":"Your Account is created Successfully"}).status(201);
        }
    });
});

module.exports = app;