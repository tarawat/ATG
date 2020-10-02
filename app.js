//jshint esversion:6
const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyparser.urlencoded({extended : true}));
app.use(express.static("public"));
app.set("view engine" , "ejs");


app.get("/" , function(req , res){
  res.render("home");
});

app.get("/login" , function(req , res){
  res.render("login");
});

app.get("/signup" , function(req , res){
  res.render("signup");
});

app.listen(process.env.PORT || 3000 , function(){
  console.log("Server is running on port 3000");
});
