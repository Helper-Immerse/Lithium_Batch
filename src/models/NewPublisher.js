const mongoose = require("mongoose");

const NewPublisherSchema = new mongoose.Schema({
    Publisher_id: String,
    Publisher_name: String,
    age:Number,
    address:String
},{timestamps: true});

module.exports = mongoose.model("NewPublishers", NewPublisherSchema);