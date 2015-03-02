var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    arrayIndex: Number,
    text: String,
});

module.exports = mongoose.model('list', schema);