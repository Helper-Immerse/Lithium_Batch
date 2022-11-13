const NewPublisherModel = require("../models/NewPublisher");

const CreateNewPublisher = async function(req,res) {
    let NewPublisher = req.body;
    let CreatedNewpublisher = await NewPublisherModel.create(NewPublisher);
    res.send({data: CreatedNewpublisher});
};

const getPublishersData = async function(req,res) {
    let NewPublishers = await NewPublisherModel.find();
    res.send({data: NewPublishers});
}

module.exports.CreateNewPublisher = CreateNewPublisher;
module.exports.getPublishersData = getPublishersData