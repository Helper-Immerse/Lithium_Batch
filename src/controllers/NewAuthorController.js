const NewAuthorModel = require("../models/NewAuthor");

const CreateNewAuthor = async function(req,res) {
    let NewAuthor = req.body;
    let CreatedNewAuthor = await NewAuthorModel.create(NewAuthor);
    res.send({data: CreatedNewAuthor});
};

const getNewAuthorsData = async function(req,res) {
    let NewAuthors = await NewAuthorModel.find()
    res.send({data: NewAuthors});
}

module.exports.getNewAuthorsData = getNewAuthorsData
module.exports.CreateNewAuthor = CreateNewAuthor