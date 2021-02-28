
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const users = {
    name: "sarah",
    age: "25",
  };

// view engine ejs
app.set('view engine', 'ejs')

// access path public folder
app.use(express.static('public'));

// middleware make data available in req.body (still figuring out)
app.use(bodyParser.urlencoded({extended: true}))

// app listens to port 3000
app.listen(3000);

// This is a test 
app.use("/home", (req, res, next) => {
    res.render("home.ejs", { layout: false, users: users, title: "Users" }); 
  });


app.get('/home', function (req, res) {
    res.render('home.ejs');
  });

app.get('/profile', function (req, res) {
    res.render('profile.ejs');
  });

  app.get('/login', function (req, res) {
    res.render('login.ejs');
  });

// Function error 404
app.use(function (req, res, next){
    res.status(404).send("Sorry! This page doesn't exist")
});

