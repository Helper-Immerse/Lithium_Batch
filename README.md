 → Create a Folder ⇒ MyNew 
→ Convert this folder into local repository by command git init
We have already introduce from git hub that How to creare a repository,push code, clone repository etc.
→ I want to clone a repository by command git clone Url

→ Now we shall check files by ls
→ Now we shall enter into file called Lithium ⇒ cd lithium
→ I can check remote branches ⇒ git branch -r
   Question → Create a Folder called assignment inside assignment create 2 folders ‘Source’ and ‘Destination’ inside source create a text file using a command [not manual] add content in this text file, Copy the content of source folder in destination using cp command 
⇒ End Result both the folders source and destination should have the same file
Answer ⇒ 1. mkdir assignment
                  2. Cd assignment (inside)
                  3. Mkdir Source Destination
                  4. Cd source (inside)
                  5. Cat abhi.txt
                  6. Cat >> abhi.txt and then put text and then press              cltr + D (2 times)
..cd ( come outside )  
  cp source/abhi.txt destination/
rm abhi.txt
Mv for move files

⇒ After checking branch by git branch -r now we need to switch a branch => git checkout branchName

→ There are 2 folders node-modules (Do not take this)
→ Src ⇒ take this
→ Inside src there are 2 folders introduction & routes and one file index.js
⇒ index.js → in the first line there are one module called express we shall install express then use that 
→ npm i express (for install)
→ const express = require(‘express’);

⇒  Express package ⇒
Allows to set up middlewares to respond to HTTP Requests.
Defines a routing table which is used to perform different actions based on HTTP Method and URL.
Allows to dynamically render HTML Pages based on passing arguments to templates.
⇒ Body Parser ⇒ Allow to requests that comes from body
⇒ We shall create a route file for running our api’s
Then we shall link this from index.js → 
Const route = require(‘./route/route.js’)

Run our global api using express → const app = express();

Start Work by creating a folder inside src that name is introduction then inside intro create a file intro.js

I shall create a variable and one function
Let batchName = Lithium
Let PrintName = function() {
console.log(“My Batch Name is”,batchName);
}

Then I shall do public these names →
Module.exports.name = batchName
Module.exports.printName = printName

Then I shall link intro.js from route.js by →
Const abc = require(“../introduction/intro”)

Now I shall create an api →
Route.get (‘/test-me’, function(req,res){
console.log(“my Batch Name is”, abc.name)
abc.printName()
res.send(“My First api”)
})

Here test-me is the path and sending request then getting response from here 
I am taking abc.name because abc is file where name exist

Run my server by → first node index.js then take url localhost:3000/test-me

⇒ Now I want to print index Number then I shall create an api

