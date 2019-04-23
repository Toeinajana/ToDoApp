const express = require('express')
var cors = require('cors')
const app = express();
const port = 3000

var mongoose = require("mongoose");

// mongoose connection
mongoose.connect("mongodb://localhost/todoapp");

app.use(cors())

//////// express route ////////
app.get("/",function(reg, res){

    res.send("<h1>Hello tj</h1>");


});

///server listener on port

app.listen(3000, function() {

console.log("server started on port 3000");


});

// app.listen(port,() => console.log('successfully connected'))