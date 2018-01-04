var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var OnlineSchema = new Schema({
    date: String,
    time: String,
    currentpatient: String,
    title: String,
    detail: String
});

module.exports = mongoose.model('Online', OnlineSchema);