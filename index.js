const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const multer  = require("multer");
const path = require("path");
const port = 3000;

/*
========================
Middleware
========================
*/

app.set("view engine", "ejs");

// Read data from body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({dest:__dirname+"/uploads/"}).any());

// Access public folder
app.use("/public", express.static(path.join(__dirname, "/public")));
app.use(express.static("public"));


/*
========================
Database connections
========================
*/

// Use dontenv npm package 
require("dotenv").config();
// Access environment variables 
const dotenv = require("dotenv");


// Process URI variables for database connection
const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;


const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/*
========================
Routes
========================
*/

app.get("/", function (req, res){
  res.redirect("register");
});

app.get("/register", function (req, res){
  res.render("register");
});


app.get("/login", function (req, res){
  res.render("login");
});



/*
========================
Connect to database
========================
*/

async function main() {
  try {
      // Connect to the MongoDB cluster
      await client.connect();
      db = await client.db(dbName);
      console.log("connected to mongo"); 
      // catch error
  } catch (e) {
      console.error(e);
  } 
}

main();

/*
========================
User registration
========================
*/

app.post("/register", async (req, res) => {
  let x = 10; 
  try {
    const newUser = {
    name: req.body.name, 
    bio: req.body.bio, 
    email: req.body.email, 
    password: req.body.password,
   _id: x.toString(), 
    };
    await db.collection("users").insertOne(newUser);
    console.log(newUser);
  } catch (error) {
    console.error(error);
  } finally {
    res.redirect("login");
   
  }
});

app.post("/login", async (req, res) => {
  try {
    getData = await db.collection("users").findOne({_id: "10"});
  } catch (error) {
    console.error(error);
  } finally {
    res.redirect("profile");
  }
});

/*
========================
User profile 
========================
*/

 app.get("/profile", async (req, res) => {
  const userData = {
  name: req.body.name,
  bio: req.body.bio,
  }; 
  try {
    getData = await db.collection("users").findOne({_id: "10"});
  } catch (error) {
    console.error(error);
  } finally {
    res.render("profile", {userData: getData,});
  }
});

app.post("/profile", async (req, res) => {
  try {
    getData = await db.collection("users").findOne({_id: "10"});
  } catch (error) {
    console.error(error);
  } finally {
    res.redirect("updateProfile");
  }
});



/*
========================
Update profile
========================
*/


app.get("/updateProfile", async (req, res) => {
  const userData = {
  name: req.body.name,
  bio: req.body.bio,
  }; 
  try {
    getData = await db.collection("users").findOne({_id: "10"});
  } catch (error) {
    console.error(error);
  } finally {
    res.render("updateProfile", {userData: getData,});
  }
});


app.post("/updateProfile", async (req, res) => {
  try {
    const filter = {
      _id: "10",
    };
    const updateDoc = {
      $set: {
        name: req.body.name,
        bio: req.body.bio,
      },
    };
    console.log(updateDoc);
    await db.collection("users").updateOne(filter, updateDoc);
  } catch (error) {
    console.error(error);
  } finally {
    res.redirect("profile");
  }
});


// Function error 404
app.use(function error (req, res, next) {
res.status(404).send("Sorry! This page doesn't exist");
});


app.listen(process.env.PORT || port, () => {
  console.log(`listening at http://localhost:${port}`);
});