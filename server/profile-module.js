var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var ProfileSchema = new Schema({
    name: String,
    fathername: String,
    mothername: String,
    email: String,
    mobile: String,
    bloodgroup: String,
    dob: String,
    address: String
})

module.exports = mongoose.model('Profile', ProfileSchema);
