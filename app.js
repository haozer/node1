const express = require("express");

// express app
const app = express();

// listen for requests
const server = app.listen(3000);

// Home
app.get("/", (req, res) => {
  res.send("Home");
});

// About
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// Test
app.get("/test", (req, res) => {
  res.sendFile("./views/test.html", { root: __dirname });
});

// Redirects
app.get("/about-us", (req, res) => {
  res.redirect(302, "/about");
});
