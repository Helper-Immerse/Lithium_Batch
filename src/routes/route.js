const express = require('express');
const lodash = require("lodash");
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const Abc = require('../logger/logger')
//importing external package
const underscore = require('underscore');
const bodyParser = require('body-parser');

// My Assignment is here 
router.get('/Welcome', function(req,res){
    console.log("Hello",Abc.welcome());
    res.send("Abhishek Sharma")
})

// second question
router.get('/presentDate', function(req,res){
    console.log(Abc.PresentDate);
    res.send("Abhishek Sharma");
})

//third Question
router.get('/presentMonth', function(req,res){
    console.log(Abc.Month);
    res.send("Abhishek Sharma");
})

// Fourth Question
router.get('/BatchInfo', function(req,res){
    console.log(Abc.BatchInfo());
    res.send("Abhishek Sharma");
})

// Fifth Question
router.get('/Formater', function(req,res){
    console.log(Abc.Formate());
    res.send("Abhishek Sharma");
})

// Sixth Question
router.get('/Monthly', function(req,res){
    console.log(Abc.myArrayss())
    res.send("Abhishek");
})

// seventh Question
router.get('/OddNumber', function(req,res){
    console.log(Abc.OddNumber());
    res.send("Hurray");
})

router.get('/Unique', function(req,res){
    console.log(Abc.UniqueArray());
    res.send("Hurray");
})

router.get('/ObjectP', function(req,res){
    console.log(Abc.objectPair());
    res.send("Hurray");
})

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

