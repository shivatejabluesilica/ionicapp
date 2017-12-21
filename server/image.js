var express = require('express');
var app = express.Router();
import { UPLOAD_PATH, upload } from './index';
var Image = require('./image-module');

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