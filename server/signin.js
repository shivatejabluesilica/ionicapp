var express = require('express');
var app = express.Router();
var Sign = require('./signin-module');
var Login = require('./login-module');

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
});

var Online = require('./online_module');

app.post('/signin/:id', function (req, res) {
    var lectionId = req.params.id;
    var item = new Online(req.body);
    Login.findByIdAndUpdate({_id: lectionId}, {$push:{onlineconsult: item}},{safe: true, upsert: true},
        function(err, resource) {
            if (err) {
                console.log(err);
                res.send(err).status(400);
            }
            else {
                res.json(resource).status(201);
            }
        }
    )
});

var Appoint = require('./appoint-module');

app.post('/sign/:id', function (req, res) {
    var id = req.params.id;
    var item = new Appoint(req.body);

    Login.findByIdAndUpdate({_id: id}, {$push: {appointments: item}}, {safe: true, upsert: true},
    function(err, resource) {
        if (err) {
            console.log(err);
        }else {
            res.json(resource).status(200);
        }
    })
})

var Profile = require('./profile-module');

app.post('/profile/:id', function(req, res) {
    var id = req.params.id;
    var pro  = new Profile(req.body);

    Login.findByIdAndUpdate({_id: id},{'profile':pro} , {upsert:true}, function(err,resource) {
        if (err) {
            res.send({"error":err, "msg":"Invalid Credentials."}).status(501);
        } else {
            res.json({"resource":resource,"msg":"Your Account is created Successfully"}).status(201);
        }
    })
})

var FB = require('./fb-module');

app.post('/feed/:id', function(req,res) {
    var id = req.params.id;
    var fb = new FB(req.body);

    Login.findByIdAndUpdate({_id:id}, {$push:{feedbacks: fb}}, {upsert: true, safe:true},
        function(err, resource) {
        if (err) {
            console.log(err);
        }else {
            res.json(resource).status(200);
        }
    })

})


module.exports = app;
