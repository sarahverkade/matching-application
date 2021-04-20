const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;
const app = express();
const path = require("path");
// const slug = require("slug");


// ========================
// Middlewares
// ========================
app.set("view engine", "ejs");
// Read data from body
app.use(bodyParser.urlencoded({ extended: true }));
// Access public folder
app.use(express.static(path.join(__dirname, "public")));


// ========================
// Database connections
// ========================
// Use dontenv npm package 
require("dotenv").config();
// Access environment variables
const dotenv = require("dotenv");

// Process URI
const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;


const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function main() {
  try {
      // Connect to the MongoDB cluster
      await client.connect();
      app.listen(3000);
      console.log("connected to mongo");
      const db = client.db(dbName);
      // Make the appropriate DB calls
      await listDatabases(client);
      await createUser(
        client,
        {
          name: "matthew",
          age: "28",
          Preference: ""
        }
      );
      // catch error
  } catch (e) {
      console.error(e);
  } //finally {
      // Close the connection to the MongoDB cluster
    // await client.close();
 // }
}

main().catch(console.error);

async function createUser(client, newUser){
  const result = await client.db("preference").collection("user").insertOne(newUser);
  console.log(` - ${newUser.preference}`);
}


async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


// ========================
// Routes
// ========================

app.get("/preference", function (req, res) {
  res.render("preferen.ejs");
});

app.get("/profile", function (req, res) {
  res.render("profile.ejs", { newUser: newUser.name });
});

app.get("/matches", function (req, res) {
  res.render("home.ejs");
});

// Function error 404
app.use(function (req, res, next) {
  res.status(404).send("Sorry! This page doesn't exist");
});





