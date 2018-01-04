var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var AppointSchema = new Schema({
    date: String,
    time: String,
    doc: String,
    dep: String, 
});

module.exports = mongoose.model('Appoint', AppointSchema);