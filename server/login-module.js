var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LoginSchema = new Schema({
    name: String,
    email:String,
    mobile:String,
    username: String,
    password: String,
    repassword: String,
    created_at:Date
});

var Model = mongoose.model('Login', LoginSchema);

module.exports = Model;