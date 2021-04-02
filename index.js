const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const slug = require("slug");
const path = require("path");

const users = {
  name: "Matthew",
  age: "28",
};

// view engine ejs
app.set("view engine", "ejs");

// access path public folder
app.use(express.static(path.join(__dirname, "public")));

// middleware make data available in req.body (still figuring out)
app
  .use(bodyParser.urlencoded({ extended: true }))

  .post("/", add)
  .get("/home", form);

function form(req, res) {
  res.render("home.ejs");
}
function add(req, res) {
  const id = slug(req.body.title).toLowerCase();

  data.push({
    title: req.body.title,
    plot: req.body.plot,
    description: req.body.description,
  });
  res.redirect("/");
}


// app listens to port 3000
app.listen(3000);

// This is a test
app.use("/profile", (req, res, next) => {
  res.render("profile.ejs", { layout: false, users, title: "Users" });
});

app.get("/home", function (req, res) {
  res.render("home.ejs");
});

app.get("/profile", function (req, res) {
  res.render("profile.ejs");
});

app.get("/login", function (req, res) {
  res.render("login.ejs");
});

// Function error 404
app.use(function (req, res, next) {
  res.status(404).send("Sorry! This page doesn't exist");
});
