var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var FBSchema = new Schema({
    date: String,
    time: String,
    feedback: String
});

module.exports = mongoose.model('FB', FBSchema);