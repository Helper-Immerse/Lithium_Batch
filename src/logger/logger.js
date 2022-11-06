let lodash = require("lodash")

let objectPair = function() {
    let ObjectP = lodash._.fromPairs(["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]
    )
    return ObjectP;
}

let UniqueArray = function() {
    let FirstArray = [2,3,5,7];
    let SecondArray = [2,4,5,9];
    let ThirdArray = [1,4,5,8]
    let FourthArray = [12,14,15,18];
    let FifthArray = [13,14,16,19];
    let UniqueArr = lodash._.union(FirstArray,SecondArray,ThirdArray,FourthArray,FifthArray);
    return UniqueArr; 
}

let myArrayss = function() {
let store = lodash._.chunk(['January', 'February', 'March', 'April','May','June','July','August','September','October','November','December'], 4);
console.log(store);
return store;
}

let OddNumber = function() {
    let store = lodash._.tail(['3', '5', '7', '9','11','13','15','17','19','21']);
    console.log(store);
    return store;
    }

let WelcomeMessage = function() {
    console.log("I am Abhishek and a part of FunctionUp Lithium cohort.")
}
let NewDate = new Date();
let NewMonth = new Date(NewDate.getMonth);

let BatchInfo = function() {
    let BatchInfos = {
        BatchName: "Lithium",
        WD: "W3D3",
        Topic: "NodeJsModule"
    }
    console.log(BatchInfos);
    return BatchInfos;
}

let frmater = function() {
    let String = "     FunctionUp"
    let TrimString = String.trim();
    console.log("TrimString is ", TrimString);
    let LowerCase = TrimString.toLowerCase();
    console.log("LowerCase is ", LowerCase);
    let UpperCase = TrimString.toUpperCase();
    console.log("UpperCase is ", UpperCase);
}

module.exports.PresentDate = NewDate;
module.exports.welcome = WelcomeMessage;
module.exports.Month = NewMonth;
module.exports.BatchInfo = BatchInfo;
module.exports.Formate = frmater;
module.exports.myArrayss = myArrayss;
module.exports.OddNumber = OddNumber;
module.exports.UniqueArray = UniqueArray;
module.exports.objectPair = objectPair;