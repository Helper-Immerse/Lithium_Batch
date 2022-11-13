const mongoose = require("mongoose");

const NewAuthorSchema = new mongoose.Schema ({
    author_id: String,
    author_name: String,
    age:Number,
    address:String,
    Rating: Number
    }, {timestamps: true});

module.exports = mongoose.model('NewAuthor', NewAuthorSchema);