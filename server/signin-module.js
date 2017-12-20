var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SigninSchema = new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true}
},{collection:'logins'});

module.exports = mongoose.model('Signin', SigninSchema);

