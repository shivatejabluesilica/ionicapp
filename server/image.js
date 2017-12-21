var express = require('express');
var app = express.Router();
var multer = require('multer');
var Image = require('./image-module');
var UPLOAD_PATH = "uploads";

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_PATH)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
upload = multer({ storage: storage });

app.post('/upload', upload.single('image'),function(request, response) {
    let newImage = new Image();
    newImage.filename = req.file.filename;
    newImage.save(err => {
        if (err) {
            return res.sendStatus(400);
        }
        else{
            res.status(201).send({ newImage });
        }
    });
});

module.exports = app;