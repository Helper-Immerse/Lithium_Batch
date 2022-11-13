const NewAuthorModel = require("../models/NewAuthor");
const NewPublisherModel = require("../models/NewPublisher");
const NewBookModel = require("../models/NewBook");
const NewAuthor = require("../models/NewAuthor");

// const updateBookData = async function(req,res) {
//     let PreviousBooks = await NewBookModel.find();
//     if()
// }

const createNewBook = async function(req,res) {
    let NewBooks = req.body;
    if(!NewBooks.author_id && !NewBooks.Publisher_id) {
        res.send("author id or Publisher id error");
    } else {
    let CreatedNewBook = await NewBookModel.create(NewBooks);
    res.send({data: CreatedNewBook});
}
}

const getNewBooksData = async function(req,res) {
    let MyNewBooks = await NewBookModel.find();
    res.send({data: MyNewBooks});
}

const getNewBooksWithAuthPublis = async function(req,res) {
    let SpecificNewBook = await NewBookModel.find().populate("author_id").populate("Publisher_id")
      res.send({data: SpecificNewBook});
}

const updateNewBooksData = async function(req,res) {
    let updateNewBooksData = await NewBookModel.findOneAndUpdate(
        { Rating: NewAuthor.Rating > 3.5 },
        {$set: {price: 10}}
    )
    res.send({msg: updateNewBooksData})
}

module.exports.createNewBook = createNewBook;
module.exports.getNewBooksData = getNewBooksData;
module.exports.getNewBooksWithAuthPublis = getNewBooksWithAuthPublis;
module.exports.updateNewBooksData = updateNewBooksData;