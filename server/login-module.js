var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var LoginSchema = new Schema({
    username: {type:String,required:true,unique:true},
    password: {type:String,required:true,unique:true},
    patientid:String,
    created_at:Date,
    profile:{
        name: {type:String,required:true},
        email:{type:String,required:true},
        mobile:{type:String,required:true}
    }
});
 
LoginSchema.pre('save', function (next) {
    var log = this;
    var currentDate = new Date();
    if (!log.created_at) {
        log.created_at = currentDate;
        log.patientid = shortid.generate();
    }
    next();
});
 
var Model = mongoose.model('Login', LoginSchema);

module.exports = Model;