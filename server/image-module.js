var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ImgSchema = new Schema({
        fileKey: String,
        fileName: String,
        chunkedMode: Boolean,
        mimeType: String,
        params : {fileName: String}
});

module.exports = mongoose.Model('Img',ImgSchema);