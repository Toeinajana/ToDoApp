const express = require("express")
var cors = require('cors')
const app = express();
const port = 3000


var mongoose = require("mongoose");

// mongoose connection
mongoose.connect("mongodb://localhost/todoapp", { useNewUrlParser: true });

app.use(cors())


// app.set('views', __dirname + '/views');
// app.set("view engine", "ejs");



//////// express route ////////
app.get("/",function(req, res){

    res.send("hello tj")


});

//catch all the routes

app.get("*", function(req, res){

res.send("<h1>Invalid</h1>")


});

///server listener on port

app.listen(3000, function() {

console.log("server started on port 3000");


});

