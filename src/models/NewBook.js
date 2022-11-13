const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const NewBookSchema = new mongoose.Schema({
    name: String,
    author_id: {
        type: ObjectId,
        ref: "NewAuthor"
    },
    Publisher_id: {
        type: ObjectId,
        ref: "NewPublishers"
    }, 
    price: Number,
    ratings: Number
},{timestamps: true});

module.exports = mongoose.model("NewBooks", NewBookSchema);