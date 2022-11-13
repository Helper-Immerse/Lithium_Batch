const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const moment = require("moment");
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        let Present = moment();
        let IpA = req.ip
        let Path = req.host
        console.log(Present,IpA,Path);
        next();
  }
  );

  app.use (
    function (req,res,next) {
        console.log("This is the api that I create Now");

        next()
    }
  )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
